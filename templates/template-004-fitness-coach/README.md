# Fitness Coach 樣板 README

## 1. 樣板介紹
深色高對比健身教練品牌站，共 12 頁，適合私人教練、健身工作室與體能訓練機構。

## 2. 適合產業
- 私人健身教練 / 健身工作室
- 體態雕塑與體能訓練中心
- 運動表現訓練機構

## 3. 版型說明
- 左右 Split Hero（左文右圖）+ 體驗課條
- 數據牆、成果格、方案車道、教練卡、頁尾 CTA
- 內頁採用時間軸、表格與卡片版式

## 4. 12 頁檔案說明
| 檔案 | 說明 |
|---|---|
| index.html | 信任與成果首頁 |
| about.html | 教練理念、資歷、空間 |
| services.html | 四種方案與小班課表 |
| service-detail.html | 12 週方案週期拆解 |
| portfolio.html | 學員成果展示 |
| reviews.html | 學員評價 |
| faq.html | 常見問題 |
| booking.html | 體驗課預約表單 |
| process.html | 訓練四步與每週節奏 |
| blog.html | 訓練誌文章列表 |
| blog-detail.html | 深蹲技術深度文 |
| contact.html | 工作室資訊與洽詢表單 |

## 5. 如何修改品牌名稱
搜尋 `IRONEDGE` 並替換為您的品牌名；同時更新 `title`、`og:title`、頁尾與 Schema 的 `name`。

## 6. 如何替換圖片
- CSS 內 `background-image:url('...')` 與 HTML 內 `<img src="...">` 皆為 Unsplash 示意圖。
- 換圖時保持深色高對比與力量感，避免明亮休閒照。

## 7. 圖片來源注意事項
圖片僅作為設計示意，正式交付前請替換為客戶自有或已授權圖片，並更新 `assets/img/image-sources.md`。

## 8. 如何修改聯絡資訊
搜尋 `02-2778-3600`、`@ironedge` 替換為您的聯絡方式。

## 9. 如何修改 Google Map
`contact.html` 中可嵌入 Google Maps `<iframe>`，建議保留深色濾鏡樣式。

## 10. 如何修改 SEO title / description
每頁 `<title>` 與 `<meta name="description">` 皆獨立；建議格式為「服務 + 地區 + 品牌名」。

## 11. 如何修改 CTA
搜尋 `booking.html` 或 `href="booking.html"` 即可統一導向您的預約系統。

## 12. ZIP 尚未打包說明
本樣板尚未產生 ZIP，卡片上顯示「ZIP 待打包」。請勿連到不存在檔案；打包完成後再更新 `hasZip` 與按鈕狀態。

## 13. 生成資訊
- Model: deepseek-v4.1-flash
- Date: 2026-09-28
- Operator: AI-assisted static template generation
