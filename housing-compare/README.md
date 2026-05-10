# 湾区 4M 购房对比台

纯静态中文页面，放在 `liruiw.github.io/housing-compare/` 下，适合直接托管到 GitHub Pages。

## 这页现在有什么

- 6 个城市对比：`Burlingame`、`San Mateo`、`Redwood City`、`Menlo Park`、`Palo Alto`、`San Carlos`
- 维度：步行性、官方学校表现、房屋质量代理、典型房价、10 年累计涨幅、年化涨幅
- 5 个当前可点开的 Redfin 房源样本
- 默认案例：`1036 Oakland Ave, Menlo Park`
- 内置月供计算器 + 卖股覆盖首付计算器

## 数据分层

项目故意拆成两层，方便长期维护：

- `data/curated_research.json`
  - 人工维护
  - 放城市优势、阅读说明、Redfin 房源链接、研究结论
- `tools/generate_site_data.py`
  - 自动生成
  - 抓 Zillow、California Department of Education、ACS，再和人工研究合并
- `data/site_data.json`
  - 最终给前端消费的静态 JSON

这样你以后只改房源和文案时，不需要碰前端渲染代码。

## 目录

- `index.html`
- `styles.css`
- `app.js`
- `data/curated_research.json`
- `data/site_data.json`
- `tools/generate_site_data.py`

## 刷新数据

先确保 `bay_area_housing_heatmap` 目录里的 Zillow 数据已经是最新，然后运行：

```bash
cd /home/liruiw/Projects/liruiw.github.io/housing-compare
conda run --no-capture-output -n hb python tools/generate_site_data.py
```

这个脚本会重写：

```text
/home/liruiw/Projects/liruiw.github.io/housing-compare/data/site_data.json
```

## 本地预览

```bash
cd /home/liruiw/Projects/liruiw.github.io
conda run --no-capture-output -n hb python -m http.server 8123
```

然后打开：

```text
http://localhost:8123/housing-compare/
```

## 当前口径

- 房价增长：Zillow city-level ZHVI，当前站点使用 `2016-03-31` 到最新列
- 学校：California Department of Education `2024-25 Academic Indicator`
- 步行性：Walk Score 城市页
- 房屋质量：`4M 购买力 + 独栋占比 + 房龄 + 房间数`
- 当前房源：Redfin 活跃/coming soon 样本，带核验日期
- 卖股计算器默认同时展示：
  - 严格资本利得口径
  - 保守全额计税近似
