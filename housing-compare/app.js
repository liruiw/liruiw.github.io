const SORT_OPTIONS = [
  { key: "default", label: "默认顺序" },
  { key: "walk_score", label: "步行性" },
  { key: "school_score", label: "学校" },
  { key: "growth_pct", label: "10 年涨幅" },
  { key: "four_m_buying_power", label: "4M 购买力" },
  { key: "end_value", label: "典型房价" },
];

const PRESET_DOWN_PAYMENTS = [60, 70, 80];


function formatMoney(value) {
  return `$${new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value)}`;
}


function formatMoneyCompact(value) {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  }
  return formatMoney(value);
}


function formatPct(value) {
  return `${value.toFixed(2)}%`;
}


function formatPlainNumber(value) {
  return new Intl.NumberFormat("zh-CN", {
    maximumFractionDigits: 0,
  }).format(value);
}


function calculateMortgage(inputs) {
  const price = Number(inputs.list_price);
  const downPaymentPct = Number(inputs.down_payment_pct);
  const years = Number(inputs.loan_years);
  const annualRate = Number(inputs.interest_rate_pct);
  const propertyTaxMonthly = Number(inputs.property_tax_monthly);
  const insuranceMonthly = Number(inputs.insurance_monthly);
  const hoaMonthly = Number(inputs.hoa_monthly);
  const stockGainPct = Number(inputs.stock_gain_pct);
  const taxRatePct = Number(inputs.capital_gains_tax_rate_pct);
  const closingCosts = Number(inputs.closing_costs);
  const furnitureBudget = Number(inputs.furniture_budget);

  const downPaymentAmount = price * downPaymentPct / 100;
  const loanAmount = price - downPaymentAmount;
  const monthlyRate = annualRate / 100 / 12;
  const paymentCount = years * 12;
  const principalInterestMonthly = loanAmount * monthlyRate * (1 + monthlyRate) ** paymentCount / ((1 + monthlyRate) ** paymentCount - 1);
  const firstMonthInterest = loanAmount * monthlyRate;
  const firstMonthPrincipal = principalInterestMonthly - firstMonthInterest;
  const fullMonthlyPayment = principalInterestMonthly + propertyTaxMonthly + insuranceMonthly + hoaMonthly;
  const carryCostMonthly = firstMonthInterest + propertyTaxMonthly + insuranceMonthly + hoaMonthly;

  const targetCash = downPaymentAmount + closingCosts + furnitureBudget;
  const gainShareOfSale = stockGainPct / (100 + stockGainPct);
  const capitalGainsSaleNeeded = targetCash / (1 - gainShareOfSale * taxRatePct / 100);
  const conservativeSaleNeeded = targetCash / (1 - taxRatePct / 100);

  return {
    downPaymentAmount,
    loanAmount,
    principalInterestMonthly,
    firstMonthInterest,
    firstMonthPrincipal,
    fullMonthlyPayment,
    carryCostMonthly,
    targetCash,
    capitalGainsSaleNeeded,
    conservativeSaleNeeded,
  };
}


function sortAreas(areas, sortKey) {
  const areaList = [...areas];
  if (sortKey === "default") {
    return areaList;
  }
  return areaList.sort((left, right) => Number(right[sortKey]) - Number(left[sortKey]));
}


function renderHeroPanel(data) {
  const panel = document.querySelector("#hero-panel");
  const summary = data.summary;
  const caseMetrics = data.case_metrics;
  panel.innerHTML = `
    <div class="hero-stat">
      <span>这 6 个城市的 <strong>10 年累计平均涨幅</strong></span>
      <strong>${formatPct(summary.mean_total_growth_pct)}</strong>
      <span>年化平均涨幅约 <strong>${formatPct(summary.mean_annualized_growth_pct)}</strong></span>
    </div>
    <div class="hero-stat">
      <span>学校表现最硬的是 <strong>${summary.strongest_school_area_zh}</strong></span>
      <strong>${summary.strongest_school_label}</strong>
      <span>加州教育厅州平均基准：ELA ${summary.state_school_ela} / 数学 ${summary.state_school_math}</span>
    </div>
    <div class="hero-stat">
      <span>1036 Oakland Ave 当前完整月供</span>
      <strong>${formatMoney(caseMetrics.full_monthly_payment)}</strong>
      <span>只看首月利息 + 税 + 保险，大约 <strong>${formatMoney(caseMetrics.carry_cost_monthly)}</strong></span>
    </div>
  `;

  document.querySelector("#data-verified").textContent = `房价截至 ${data.areas[0].end_date}，房源复核 ${data.research_verified_on}`;
}


function renderGuide(guideItems) {
  const grid = document.querySelector("#guide-grid");
  grid.innerHTML = guideItems.map((item) => `
    <article class="guide-card">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `).join("");
}


function renderInsights(data) {
  const summary = data.summary;
  const areas = data.areas;
  const walkArea = areas.find((area) => area.name === summary.strongest_walk_area);
  const growthArea = areas.find((area) => area.name === summary.top_growth_area);
  const qualityArea = areas.find((area) => area.name === summary.best_quality_area);
  const schoolArea = areas.find((area) => area.name === summary.strongest_school_area);

  const items = [
    {
      title: "学校最硬",
      value: schoolArea.name_zh,
      body: `${schoolArea.school_detail}。如果你优先级是“学校品牌最不需要解释”，它是比较基准。`,
    },
    {
      title: "涨幅最高",
      value: growthArea.name_zh,
      body: `10 年累计涨幅 ${formatPct(growthArea.growth_pct)}。如果你想要“家庭 house + 涨价韧性”，这里很强。`,
    },
    {
      title: "4M 最能拉开",
      value: qualityArea.name_zh,
      body: `4M 购买力 ${qualityArea.four_m_buying_power.toFixed(2)}x。更容易把预算变成更大的房子本体。`,
    },
    {
      title: "步行最舒服",
      value: walkArea.name_zh,
      body: `城市步行分 ${walkArea.walk_score}。如果你要把餐饮、公园、Caltrain 变成日常，这里最直观。`,
    },
  ];

  document.querySelector("#insight-grid").innerHTML = items.map((item) => `
    <article class="insight-card">
      <h3>${item.title}</h3>
      <strong>${item.value}</strong>
      <p>${item.body}</p>
    </article>
  `).join("");
}


function createSortButtons(onSortChange) {
  const container = document.querySelector("#sorter-buttons");
  container.innerHTML = "";

  SORT_OPTIONS.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "sort-button";
    button.textContent = option.label;
    if (index === 0) {
      button.classList.add("active");
    }
    button.addEventListener("click", () => {
      document.querySelectorAll(".sort-button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      onSortChange(option.key);
    });
    container.appendChild(button);
  });
}


function fillList(container, items) {
  container.innerHTML = "";
  items.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    container.appendChild(item);
  });
}


function renderAreaCards(areas, sortKey) {
  const template = document.querySelector("#area-card-template");
  const container = document.querySelector("#area-card-grid");
  const sortedAreas = sortAreas(areas, sortKey);
  container.innerHTML = "";

  sortedAreas.forEach((area, index) => {
    const node = template.content.cloneNode(true);
    node.querySelector(".card-name").textContent = `${index + 1}. ${area.name}`;
    node.querySelector(".pill").textContent = `${area.quality_band} · ${area.name_zh}`;
    node.querySelector(".card-title").textContent = area.strength_title;
    node.querySelector(".card-summary").textContent = area.strength_summary;
    node.querySelector(".price-value").textContent = formatMoneyCompact(area.end_value);
    node.querySelector(".buying-power").textContent = `${area.four_m_buying_power.toFixed(2)}x`;
    node.querySelector(".walk-chip").textContent = `步行 ${area.walk_score} · ${area.walk_label}`;
    node.querySelector(".school-chip").textContent = `${area.school_label} · ${area.school_detail}`;
    node.querySelector(".growth-value").textContent = formatPct(area.growth_pct);
    node.querySelector(".annualized-value").textContent = formatPct(area.annualized_growth_pct);
    node.querySelector(".detached-value").textContent = formatPct(area.detached_share_pct);
    node.querySelector(".year-value").textContent = `${area.median_year_built} 年`;
    node.querySelector(".rooms-value").textContent = `${area.median_rooms.toFixed(1)} 间`;
    node.querySelector(".best-for").textContent = area.best_for;
    node.querySelector(".school-level-detail").textContent = area.school_level_detail;
    fillList(node.querySelector(".note-list"), area.notes);
    fillList(node.querySelector(".watch-list"), area.watchouts);
    node.querySelector(".caveat-text").textContent = `学校提醒：${area.school_caveat}`;
    container.appendChild(node);
  });
}


function renderMatrix(areas) {
  const body = document.querySelector("#matrix-body");
  const maxGrowth = Math.max(...areas.map((area) => area.growth_pct));
  const maxWalk = Math.max(...areas.map((area) => area.walk_score));
  const maxBuyingPower = Math.max(...areas.map((area) => area.four_m_buying_power));
  const maxSchoolScore = Math.max(...areas.map((area) => area.school_score));

  body.innerHTML = areas.map((area) => `
    <tr>
      <td>
        <span class="matrix-name">${area.name_zh}</span>
        <span class="matrix-sub">${area.name}</span>
      </td>
      <td>
        <strong>${area.walk_score}</strong>
        <span class="matrix-sub">${area.walk_label}</span>
        <div class="value-bar"><span style="width:${area.walk_score / maxWalk * 100}%"></span></div>
      </td>
      <td>
        <strong>${area.school_label}</strong>
        <span class="matrix-sub">${area.school_detail}</span>
        <span class="matrix-sub">${area.school_level_detail}</span>
        <div class="value-bar"><span style="width:${area.school_score / maxSchoolScore * 100}%"></span></div>
      </td>
      <td>
        <strong>${formatMoneyCompact(area.end_value)}</strong>
        <span class="matrix-sub">当地典型价位</span>
      </td>
      <td>
        <strong>${formatPct(area.growth_pct)}</strong>
        <div class="value-bar"><span style="width:${area.growth_pct / maxGrowth * 100}%"></span></div>
      </td>
      <td>
        <strong>${formatPct(area.annualized_growth_pct)}</strong>
        <span class="matrix-sub">${area.start_date} → ${area.end_date}</span>
      </td>
      <td>
        <strong>${area.four_m_buying_power.toFixed(2)}x</strong>
        <span class="matrix-sub">${area.quality_band}</span>
        <div class="value-bar"><span style="width:${area.four_m_buying_power / maxBuyingPower * 100}%"></span></div>
      </td>
      <td>
        <strong>独栋 ${formatPct(area.detached_share_pct)}</strong>
        <span class="matrix-sub">房龄中位数 ${area.median_year_built} 年 · 房间 ${area.median_rooms.toFixed(1)} 间</span>
      </td>
    </tr>
  `).join("");
}


function renderListingPicks(data) {
  const container = document.querySelector("#listing-grid");
  container.innerHTML = data.listing_picks.map((pick) => `
    <article class="listing-card">
      <div class="card-topline">
        <p class="card-name">${pick.area_name_zh}</p>
        <span class="pill">${pick.status}</span>
      </div>
      <h3>${pick.tagline}</h3>
      <a class="listing-link" href="${pick.url}" target="_blank" rel="noreferrer">${pick.title}</a>
      <div class="metric-duo listing-metrics">
        <div>
          <span>挂牌价</span>
          <strong>${formatMoneyCompact(pick.list_price)}</strong>
        </div>
        <div>
          <span>户型</span>
          <strong>${pick.beds} 房 · ${pick.baths} 卫</strong>
        </div>
      </div>
      <div class="growth-panel">
        <div class="growth-item">
          <span>面积</span>
          <strong>${formatPlainNumber(pick.sqft)} sqft</strong>
        </div>
        <div class="growth-item">
          <span>相对当地典型房价</span>
          <strong>${pick.vs_typical_multiple.toFixed(2)}x</strong>
        </div>
      </div>
      <p class="listing-copy"><strong>为什么入选：</strong>${pick.why_it_fits}</p>
      <p class="listing-copy"><strong>要注意：</strong>${pick.tradeoff}</p>
      <p class="listing-meta">核验日期 ${pick.verified_on} · 约 ${formatMoney(pick.price_per_sqft)}/sqft</p>
    </article>
  `).join("");

  fillList(document.querySelector("#listing-note-list"), data.listing_review_notes);
}


function populateCalculator(data) {
  const defaults = data.case_defaults;
  document.querySelector("#address").value = defaults.address;
  document.querySelector("#list-price").value = defaults.list_price;
  document.querySelector("#down-payment-pct").value = defaults.down_payment_pct;
  document.querySelector("#loan-years").value = defaults.loan_years;
  document.querySelector("#interest-rate-pct").value = defaults.interest_rate_pct;
  document.querySelector("#property-tax-monthly").value = defaults.property_tax_monthly;
  document.querySelector("#insurance-monthly").value = defaults.insurance_monthly;
  document.querySelector("#hoa-monthly").value = defaults.hoa_monthly;
  document.querySelector("#stock-gain-pct").value = defaults.stock_gain_pct;
  document.querySelector("#capital-gains-tax-rate-pct").value = defaults.capital_gains_tax_rate_pct;
  document.querySelector("#closing-costs").value = defaults.closing_costs;
  document.querySelector("#furniture-budget").value = defaults.furniture_budget;
}


function readCalculatorInputs() {
  return {
    address: document.querySelector("#address").value,
    list_price: document.querySelector("#list-price").value,
    down_payment_pct: document.querySelector("#down-payment-pct").value,
    loan_years: document.querySelector("#loan-years").value,
    interest_rate_pct: document.querySelector("#interest-rate-pct").value,
    property_tax_monthly: document.querySelector("#property-tax-monthly").value,
    insurance_monthly: document.querySelector("#insurance-monthly").value,
    hoa_monthly: document.querySelector("#hoa-monthly").value,
    stock_gain_pct: document.querySelector("#stock-gain-pct").value,
    capital_gains_tax_rate_pct: document.querySelector("#capital-gains-tax-rate-pct").value,
    closing_costs: document.querySelector("#closing-costs").value,
    furniture_budget: document.querySelector("#furniture-budget").value,
  };
}


function renderCalculatorResults() {
  const metrics = calculateMortgage(readCalculatorInputs());
  document.querySelector("#full-monthly-payment").textContent = formatMoney(metrics.fullMonthlyPayment);
  document.querySelector("#principal-interest-monthly").textContent = formatMoney(metrics.principalInterestMonthly);
  document.querySelector("#first-month-interest").textContent = formatMoney(metrics.firstMonthInterest);
  document.querySelector("#first-month-principal").textContent = formatMoney(metrics.firstMonthPrincipal);
  document.querySelector("#carry-cost-monthly").textContent = formatMoney(metrics.carryCostMonthly);
  document.querySelector("#down-payment-amount").textContent = formatMoney(metrics.downPaymentAmount);
  document.querySelector("#loan-amount").textContent = formatMoney(metrics.loanAmount);
  document.querySelector("#target-cash").textContent = formatMoney(metrics.targetCash);
  document.querySelector("#capital-gains-sale-needed").textContent = formatMoney(metrics.capitalGainsSaleNeeded);
  document.querySelector("#conservative-sale-needed").textContent = formatMoney(metrics.conservativeSaleNeeded);
}


function wirePresetButtons() {
  const container = document.querySelector("#preset-buttons");
  container.innerHTML = "";
  PRESET_DOWN_PAYMENTS.forEach((value, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "preset-button";
    if (index === PRESET_DOWN_PAYMENTS.indexOf(80)) {
      button.classList.add("active");
    }
    button.textContent = `${value}% 首付`;
    button.addEventListener("click", () => {
      document.querySelectorAll(".preset-button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      document.querySelector("#down-payment-pct").value = value;
      renderCalculatorResults();
    });
    container.appendChild(button);
  });
}


function wireCalculatorInputs() {
  document.querySelectorAll("#calculator input").forEach((input) => {
    input.addEventListener("input", renderCalculatorResults);
  });
}


function renderNotes(data) {
  fillList(document.querySelector("#trust-list"), data.trust_points);
  fillList(document.querySelector("#maintenance-list"), data.maintenance_steps);
  fillList(document.querySelector("#caveat-list"), data.caveats);

  const sourceList = document.querySelector("#source-list");
  sourceList.innerHTML = "";
  data.sources.forEach((source) => {
    const item = document.createElement("li");
    item.innerHTML = `<a class="source-link" href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>：${source.note}（核验 ${source.verified_on}）`;
    sourceList.appendChild(item);
  });
}


async function loadData() {
  const response = await fetch("./data/site_data.json");
  return response.json();
}


async function init() {
  const data = await loadData();
  renderHeroPanel(data);
  renderGuide(data.reading_guide);
  renderInsights(data);
  createSortButtons((sortKey) => renderAreaCards(data.areas, sortKey));
  renderAreaCards(data.areas, "default");
  renderMatrix(data.areas);
  renderListingPicks(data);
  populateCalculator(data);
  wirePresetButtons();
  wireCalculatorInputs();
  renderCalculatorResults();
  renderNotes(data);
}


init();
