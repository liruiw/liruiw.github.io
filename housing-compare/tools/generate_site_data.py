from __future__ import annotations

from datetime import date
from io import StringIO
import json
from pathlib import Path
import urllib.request

import pandas as pd


ROOT = Path(__file__).resolve().parents[1]
PROJECTS_ROOT = Path(__file__).resolve().parents[3]
HOUSING_ROOT = PROJECTS_ROOT / "bay_area_housing_heatmap"
CITY_CSV = HOUSING_ROOT / "data" / "City_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv"
CURATED_JSON = ROOT / "data" / "curated_research.json"
OUTPUT_JSON = ROOT / "data" / "site_data.json"

TARGET_ORDER = [
    "Burlingame",
    "San Mateo",
    "Redwood City",
    "Menlo Park",
    "Palo Alto",
    "San Carlos",
]

ACS_PLACE_NAMES = {
    "Burlingame": "Burlingame city, California",
    "San Mateo": "San Mateo city, California",
    "Redwood City": "Redwood City city, California",
    "Menlo Park": "Menlo Park city, California",
    "Palo Alto": "Palo Alto city, California",
    "San Carlos": "San Carlos city, California",
}

CDE_DISTRICTS = {
    "Burlingame": "Burlingame Elementary",
    "San Mateo": "San Mateo-Foster City",
    "Redwood City": "Redwood City Elementary",
    "Menlo Park": "Menlo Park City Elementary",
    "Palo Alto": "Palo Alto Unified",
    "San Carlos": "San Carlos Elementary",
}

CDE_URLS = {
    "ela": "https://www3.cde.ca.gov/researchfiles/cadashboard/eladownload2025.txt",
    "math": "https://www3.cde.ca.gov/researchfiles/cadashboard/mathdownload2025.txt",
}

ACS_URL = (
    "https://api.census.gov/data/2023/acs/acs5"
    "?get=NAME,B25035_001E,B25024_001E,B25024_002E,B25018_001E"
    "&for=place:*&in=state:06"
)

CASE_DEFAULTS = {
    "address": "1036 Oakland Ave, Menlo Park, CA",
    "list_price": 3_895_000,
    "down_payment_pct": 80,
    "loan_years": 30,
    "interest_rate_pct": 6.63,
    "property_tax_monthly": 4_057,
    "insurance_monthly": 584,
    "hoa_monthly": 0,
    "stock_gain_pct": 100,
    "capital_gains_tax_rate_pct": 37.1,
    "closing_costs": 120_000,
    "furniture_budget": 200_000,
}


def read_curated() -> dict[str, object]:
    return json.loads(CURATED_JSON.read_text())


def compute_quality_band(multiplier: float) -> str:
    if multiplier >= 2.0:
        return "宽裕"
    if multiplier >= 1.5:
        return "舒适"
    if multiplier >= 1.2:
        return "平衡"
    return "紧绷"


def format_signed(value: float) -> str:
    if value > 0:
        return f"+{value:.1f}"
    return f"{value:.1f}"


def compute_school_label(ela_status: float, math_status: float) -> str:
    lower = min(ela_status, math_status)
    if lower >= 75:
        return "官方学区顶级"
    if lower >= 50:
        return "官方学区很强"
    if lower >= 20:
        return "官方学区中上"
    if lower >= -10:
        return "官方学区中位"
    if lower >= -40:
        return "官方学区分化"
    return "官方学区偏弱"


def fetch_cde_subject(url: str) -> pd.DataFrame:
    text = urllib.request.urlopen(url).read().decode("utf-8")
    return pd.read_csv(StringIO(text), sep="\t", low_memory=False)


def fetch_school_metrics() -> tuple[dict[str, dict[str, float]], dict[str, float]]:
    ela_df = fetch_cde_subject(CDE_URLS["ela"])
    math_df = fetch_cde_subject(CDE_URLS["math"])
    ela_districts = ela_df[(ela_df["rtype"] == "D") & (ela_df["studentgroup"] == "ALL")].copy()
    math_districts = math_df[(math_df["rtype"] == "D") & (math_df["studentgroup"] == "ALL")].copy()

    ela_state = float(
        ela_df.loc[
            (ela_df["districtname"] == "State of California") & (ela_df["studentgroup"] == "ALL"),
            "currstatus",
        ].iloc[0]
    )
    math_state = float(
        math_df.loc[
            (math_df["districtname"] == "State of California") & (math_df["studentgroup"] == "ALL"),
            "currstatus",
        ].iloc[0]
    )

    school_metrics: dict[str, dict[str, float]] = {}
    for area in TARGET_ORDER:
        district = CDE_DISTRICTS[area]
        ela_row = ela_districts.loc[ela_districts["districtname"] == district].iloc[0]
        math_row = math_districts.loc[math_districts["districtname"] == district].iloc[0]
        school_metrics[area] = {
            "ela_status": round(float(ela_row["currstatus"]), 1),
            "math_status": round(float(math_row["currstatus"]), 1),
            "ela_level": int(ela_row["statuslevel"]),
            "math_level": int(math_row["statuslevel"]),
            "tested_count": int(ela_row["currdenom"]),
        }

    return school_metrics, {"ela": round(ela_state, 1), "math": round(math_state, 1)}


def fetch_acs_metrics() -> dict[str, dict[str, float]]:
    df = pd.read_json(ACS_URL)
    df.columns = df.iloc[0]
    df = df.iloc[1:].copy()
    df = df.set_index("NAME")

    acs_metrics: dict[str, dict[str, float]] = {}
    for area in TARGET_ORDER:
        row = df.loc[ACS_PLACE_NAMES[area]]
        total_units = float(row["B25024_001E"])
        detached_units = float(row["B25024_002E"])
        acs_metrics[area] = {
            "median_year_built": int(row["B25035_001E"]),
            "detached_share_pct": round(detached_units / total_units * 100.0, 1),
            "median_rooms": round(float(row["B25018_001E"]), 1),
        }
    return acs_metrics


def load_housing_rows() -> tuple[pd.DataFrame, str, str]:
    city_df = pd.read_csv(CITY_CSV)
    end_col = city_df.columns[-1]
    start_col = "2016-03-31"
    filtered = city_df[
        (city_df["State"] == "CA") & (city_df["RegionName"].isin(TARGET_ORDER))
    ][["RegionName", "CountyName", start_col, end_col]].copy()
    filtered["growth_pct"] = (filtered[end_col] / filtered[start_col] - 1.0) * 100.0
    filtered["annualized_growth_pct"] = (
        (filtered[end_col] / filtered[start_col]) ** (1.0 / 10.0) - 1.0
    ) * 100.0
    filtered["four_m_buying_power"] = 4_000_000.0 / filtered[end_col]
    return filtered.set_index("RegionName"), start_col, end_col


def compute_case_metrics(case: dict[str, float | int | str]) -> dict[str, float]:
    price = float(case["list_price"])
    down_payment_pct = float(case["down_payment_pct"])
    years = int(case["loan_years"])
    annual_rate = float(case["interest_rate_pct"])
    tax_monthly = float(case["property_tax_monthly"])
    insurance_monthly = float(case["insurance_monthly"])
    hoa_monthly = float(case["hoa_monthly"])
    stock_gain_pct = float(case["stock_gain_pct"])
    capital_gains_tax_rate_pct = float(case["capital_gains_tax_rate_pct"])
    closing_costs = float(case["closing_costs"])
    furniture_budget = float(case["furniture_budget"])

    down_payment_amount = price * down_payment_pct / 100.0
    loan_amount = price - down_payment_amount
    monthly_rate = annual_rate / 100.0 / 12.0
    payment_count = years * 12
    principal_interest = (
        loan_amount
        * monthly_rate
        * (1.0 + monthly_rate) ** payment_count
        / ((1.0 + monthly_rate) ** payment_count - 1.0)
    )
    first_month_interest = loan_amount * monthly_rate
    first_month_principal = principal_interest - first_month_interest
    full_monthly_payment = principal_interest + tax_monthly + insurance_monthly + hoa_monthly
    carry_cost = first_month_interest + tax_monthly + insurance_monthly + hoa_monthly

    gross_up_target = down_payment_amount + closing_costs + furniture_budget
    gain_share_of_sale = stock_gain_pct / (100.0 + stock_gain_pct)
    capital_gains_sale_needed = gross_up_target / (
        1.0 - gain_share_of_sale * capital_gains_tax_rate_pct / 100.0
    )
    conservative_full_tax_sale_needed = gross_up_target / (
        1.0 - capital_gains_tax_rate_pct / 100.0
    )

    return {
        "down_payment_amount": down_payment_amount,
        "loan_amount": loan_amount,
        "principal_interest_monthly": principal_interest,
        "first_month_interest": first_month_interest,
        "first_month_principal": first_month_principal,
        "full_monthly_payment": full_monthly_payment,
        "carry_cost_monthly": carry_cost,
        "capital_gains_sale_needed": capital_gains_sale_needed,
        "conservative_full_tax_sale_needed": conservative_full_tax_sale_needed,
        "target_cash_with_closing_and_furniture": gross_up_target,
        "gain_share_of_sale": gain_share_of_sale,
    }


def build_area_rows(
    curated: dict[str, object],
    housing_rows: pd.DataFrame,
    start_date: str,
    end_date: str,
    school_metrics: dict[str, dict[str, float]],
    acs_metrics: dict[str, dict[str, float]],
) -> list[dict[str, object]]:
    curated_areas = curated["areas"]
    area_rows: list[dict[str, object]] = []

    for area in TARGET_ORDER:
        housing_row = housing_rows.loc[area]
        manual = curated_areas[area]
        school = school_metrics[area]
        acs = acs_metrics[area]
        school_score = round((school["ela_status"] + school["math_status"]) / 2.0, 1)

        area_rows.append(
            {
                "name": area,
                "name_zh": manual["name_zh"],
                "county": housing_row["CountyName"],
                "start_date": start_date,
                "end_date": end_date,
                "start_value": round(float(housing_row[start_date]), 2),
                "end_value": round(float(housing_row[end_date]), 2),
                "growth_pct": round(float(housing_row["growth_pct"]), 2),
                "annualized_growth_pct": round(float(housing_row["annualized_growth_pct"]), 2),
                "walk_score": int(manual["walk_score"]),
                "walk_label": manual["walk_label"],
                "walk_source_url": manual["walk_source_url"],
                "school_district": CDE_DISTRICTS[area],
                "school_label": compute_school_label(
                    school["ela_status"],
                    school["math_status"],
                ),
                "school_detail": (
                    f"CDE 2025：ELA {format_signed(school['ela_status'])}"
                    f" · 数学 {format_signed(school['math_status'])}"
                ),
                "school_level_detail": (
                    f"ELA {school['ela_level']} 级 · 数学 {school['math_level']} 级"
                ),
                "school_score": school_score,
                "tested_count": school["tested_count"],
                "median_year_built": acs["median_year_built"],
                "detached_share_pct": acs["detached_share_pct"],
                "median_rooms": acs["median_rooms"],
                "four_m_buying_power": round(float(housing_row["four_m_buying_power"]), 2),
                "quality_band": compute_quality_band(float(housing_row["four_m_buying_power"])),
                "strength_title": manual["strength_title"],
                "strength_summary": manual["strength_summary"],
                "best_for": manual["best_for"],
                "watchouts": manual["watchouts"],
                "notes": manual["notes"],
                "school_caveat": manual["school_caveat"],
            }
        )

    return area_rows


def enrich_listing_picks(
    listing_picks: list[dict[str, object]],
    area_rows: list[dict[str, object]],
) -> list[dict[str, object]]:
    area_by_name = {area["name"]: area for area in area_rows}
    enriched: list[dict[str, object]] = []
    for pick in listing_picks:
        area = area_by_name[pick["area"]]
        list_price = float(pick["list_price"])
        sqft = float(pick["sqft"])
        end_value = float(area["end_value"])
        enriched.append(
            {
                **pick,
                "area_name_zh": area["name_zh"],
                "price_per_sqft": round(list_price / sqft, 0),
                "vs_typical_multiple": round(list_price / end_value, 2),
                "area_typical_price": round(end_value, 0),
            }
        )
    return enriched


def build_payload() -> dict[str, object]:
    curated = read_curated()
    housing_rows, start_date, end_date = load_housing_rows()
    school_metrics, state_school = fetch_school_metrics()
    acs_metrics = fetch_acs_metrics()
    area_rows = build_area_rows(
        curated,
        housing_rows,
        start_date,
        end_date,
        school_metrics,
        acs_metrics,
    )
    listing_picks = enrich_listing_picks(curated["listing_picks"], area_rows)

    growth_series = pd.Series([area["growth_pct"] for area in area_rows])
    annualized_series = pd.Series([area["annualized_growth_pct"] for area in area_rows])
    school_series = pd.Series([area["school_score"] for area in area_rows])

    top_growth_area = max(area_rows, key=lambda area: float(area["growth_pct"]))
    strongest_walk_area = max(area_rows, key=lambda area: int(area["walk_score"]))
    strongest_school_area = max(area_rows, key=lambda area: float(area["school_score"]))
    best_quality_area = max(area_rows, key=lambda area: float(area["four_m_buying_power"]))

    case_metrics = compute_case_metrics(CASE_DEFAULTS)

    return {
        "generated_on": date.today().isoformat(),
        "research_verified_on": curated["research_verified_on"],
        "summary": {
            "mean_total_growth_pct": round(float(growth_series.mean()), 2),
            "mean_annualized_growth_pct": round(float(annualized_series.mean()), 2),
            "mean_school_score": round(float(school_series.mean()), 1),
            "top_growth_area": top_growth_area["name"],
            "top_growth_area_zh": top_growth_area["name_zh"],
            "top_growth_pct": top_growth_area["growth_pct"],
            "strongest_walk_area": strongest_walk_area["name"],
            "strongest_walk_area_zh": strongest_walk_area["name_zh"],
            "strongest_walk_score": strongest_walk_area["walk_score"],
            "strongest_school_area": strongest_school_area["name"],
            "strongest_school_area_zh": strongest_school_area["name_zh"],
            "strongest_school_label": strongest_school_area["school_label"],
            "best_quality_area": best_quality_area["name"],
            "best_quality_area_zh": best_quality_area["name_zh"],
            "state_school_ela": state_school["ela"],
            "state_school_math": state_school["math"],
        },
        "reading_guide": curated["reading_guide"],
        "areas": area_rows,
        "listing_picks": listing_picks,
        "listing_review_notes": curated["listing_review_notes"],
        "trust_points": curated["trust_points"],
        "maintenance_steps": curated["maintenance_steps"],
        "case_defaults": CASE_DEFAULTS,
        "case_metrics": case_metrics,
        "sources": [
            {
                "label": "Zillow Research",
                "url": "https://www.zillow.com/research/data/",
                "note": "城市级典型房价与 10 年增长窗口。",
                "verified_on": "2026-03-31"
            },
            {
                "label": "California Department of Education",
                "url": "https://www.cde.ca.gov/ta/ac/cm/acaddatafiles.asp",
                "note": "2024-25 Academic Indicator 官方学区级 ELA/数学数据文件。",
                "verified_on": "2026-03-24"
            },
            {
                "label": "U.S. Census ACS 2023",
                "url": ACS_URL,
                "note": "房龄、独栋占比、房间数中位数等住房存量特征。",
                "verified_on": "2026-05-09"
            },
            {
                "label": "Walk Score",
                "url": "https://www.walkscore.com/",
                "note": "城市步行分。",
                "verified_on": curated["research_verified_on"]
            },
            {
                "label": "Redfin",
                "url": "https://www.redfin.com/",
                "note": "当前房源链接与挂牌页信息；时间敏感。",
                "verified_on": curated["research_verified_on"]
            }
        ],
        "caveats": [
            "城市口径适合做第一轮筛选，尤其是 Menlo Park、Redwood City 这种边界差异大的地方，最终一定要落到具体街段和 school boundary。",
            "学校这里用的是官方学区级 Academic Indicator，不是第三方口碑分；它更真实，但也更需要解释。",
            "房源推荐是 2026-05-09 的手工复核快照，后续价格、状态和 open house 时间会变化。"
        ],
    }


def main() -> None:
    payload = build_payload()
    OUTPUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_JSON.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")
    print(f"Wrote {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
