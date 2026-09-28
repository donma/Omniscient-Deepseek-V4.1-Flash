# Luxury Bar 樣板 README

## 1. 樣板介紹
黑金低光源沉浸式酒吧官網，共 12 頁，適合高端酒吧、餐酒館、爵士會所與包廂型餐飲品牌。

## 2. 適合產業
- 威士忌吧 / 雞尾酒專門店
- 爵士俱樂部、夜晚會所
- 包廂制餐飲空間

## 3. 版型說明
- 全螢幕氛圍 Hero + 浮動訂位條
- 品牌故事 split、菜單三欄卡、空間寬幅條帶、活動卡片、評價語錄、頁尾 CTA
- 內頁沿用深底金字語言，分別採用編輯欄、表格、時間軸、Masonry 與表單版式

## 4. 12 頁檔案說明
| 檔案 | 說明 |
|---|---|
| index.html | 沉浸式首頁（含即時訂位條） |
| about.html | 品牌故事與團隊 |
| services.html | 完整酒單與小食表 |
| service-detail.html | 招牌調飲單品頁 |
| portfolio.html | 空間光影紀實 |
| reviews.html | 評價與媒體報導 |
| faq.html | 常見問題 |
| booking.html | 線上訂位表單 |
| process.html | 訂位與入場流程 |
| blog.html | 夜間誌文章列表 |
| blog-detail.html | 長文內頁（Article Schema） |
| contact.html | 聯絡資訊與包場表單 |

## 5. 如何修改品牌名稱
搜尋 `NOIR 1888` 並替換為您的品牌名；同時更新 `title`、`og:title`、頁尾與 Schema 的 `name`。

## 6. 如何替換圖片
- CSS 內 `background-image:url('...')` 與 HTML 內 `<img src="...">` 皆為 Unsplash 示意圖。
- 換圖時保持寬高比與暗色調，避免亮色破壞氛圍。

## 7. 圖片來源注意事項
圖片僅作為設計示意，正式交付前請替換為客戶自有或已授權圖片，並更新 `assets/img/image-sources.md`。

## 8. 如何修改 LINE / IG / 電話
搜尋 `02-2755-0188`、`@noir1888`、`line.me` 與 `instagram.com` 字串替換。

## 9. 如何修改 Google Map
`contact.html` 中的 `https://maps.google.com` 改為您的 Google Maps 分享連結，或直接嵌入 `<iframe>` 地圖（需保留深色濾鏡樣式）。

## 10. 如何修改 SEO title / description
每頁 `<title>` 與 `<meta name="description">` 皆獨立；建議格式為「服務 + 地名 + 品牌名」。

## 11. 如何修改 CTA
搜尋 `booking.html` 或 `href="booking.html"` 即可統一導向您的預約系統或外部訂位平台。

## 12. ZIP 尚未打包說明
本樣板尚未產生 ZIP，卡片上顯示「ZIP 待打包」。請勿連到不存在檔案；打包完成後再更新 `hasZip` 與按鈕狀態。

## 13. 生成資訊
- Model: deepseek-v4.1-flash
- Date: 2026-09-28
- Operator: AI-assisted static template generation
