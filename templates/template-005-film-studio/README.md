# Film Studio 樣板 README

## 1. 樣板介紹
黑色電影感影像製作工作室官網，共 12 頁，適合品牌影片、廣告片與紀錄片製作團隊。

## 2. 適合產業
- 影像製作工作室 / 廣告片廠
- 企業品牌影片製作
- 紀錄片與活動影像團隊

## 3. 版型說明
- 全螢幕片頭黑條 Hero + 背景劇照
- 近期作品捲軸、Masonry 作品牆、獲獎條、導演筆記、頁尾 CTA
- 內頁採用片場日誌式編輯節奏，分鏡、剪輯、後製皆有獨立版面

## 4. 12 頁檔案說明
| 檔案 | 說明 |
|---|---|
| index.html | 電影感首頁（片頭黑條 + 作品牆） |
| about.html | 工作室理念、團隊、里程碑 |
| services.html | 六種製作服務與報價區間 |
| service-detail.html | 品牌形象影片服務詳情 |
| portfolio.html | 完整作品牆（9 案） |
| reviews.html | 客戶評價卡片牆 |
| faq.html | 常見問題 |
| booking.html | 專案諮詢預約表單 |
| process.html | 企劃 → 前置 → 拍攝 → 後製 → 交付 |
| blog.html | 幕後誌文章列表 |
| blog-detail.html | 腳本與分鏡深度文 |
| contact.html | 工作室資訊與專案洽詢表單 |

## 5. 如何修改品牌名稱
搜尋 `FRAMELAB` 並替換為您的品牌名；同時更新 `title`、`og:title`、頁尾與 Schema 的 `name`。

## 6. 如何替換圖片
- CSS 內 `background-image:url('...')` 與 HTML 內 `<img src="...">` 皆為 Unsplash 示意圖。
- 換圖時保持深色調與電影感，避免明亮生活照。

## 7. 圖片來源注意事項
圖片僅作為設計示意，正式交付前請替換為客戶自有或已授權圖片，並更新 `assets/img/image-sources.md`。

## 8. 如何修改聯絡資訊
搜尋 `02-2767-9900`、`hello@framelab.tw` 替換為您的聯絡方式。

## 9. 如何修改 Google Map
`contact.html` 中可嵌入 Google Maps `<iframe>`，建議保留深色濾鏡樣式。

## 10. 如何修改 SEO title / description
每頁 `<title>` 與 `<meta name="description">` 皆獨立；建議格式為「服務 + 品牌名」。

## 11. 如何修改 CTA
搜尋 `booking.html` 或 `href="booking.html"` 即可統一導向您的預約系統。

## 12. ZIP 尚未打包說明
本樣板尚未產生 ZIP，卡片上顯示「ZIP 待打包」。請勿連到不存在檔案；打包完成後再更新 `hasZip` 與按鈕狀態。

## 13. 生成資訊
- Model: deepseek-v4.1-flash
- Date: 2026-09-28
- Operator: AI-assisted static template generation
