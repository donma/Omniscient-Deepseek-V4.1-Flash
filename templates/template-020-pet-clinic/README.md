# Pet Clinic 樣板 README

## 1. 樣板介紹
柔和有機氣泡膠囊語言動物醫院官網：大圓角果凍卡片、Blob 遮罩照片、漂浮藥丸徽章、對話氣泡客評與 Fear-Free 無痛看診體驗。

## 2. 適合產業
- 動物醫院
- 犬貓專科門診
- 寵物預防保健中心

## 3. 版型說明
- Hero：vet-care-split
- 導覽：emergency-strip-top
- 內容節奏：care-team-visit-flow
- 色系：白綠信任（light 背景）

## 4. 12 頁檔案說明
| 檔案 | 說明 |
|---|---|
| index.html | 首頁 |
| about.html | 品牌故事 |
| services.html | 服務/商品總覽 |
| service-detail.html | 服務/商品詳情 |
| portfolio.html | 作品/案例展示 |
| reviews.html | 評價 |
| faq.html | 常見問題 |
| booking.html | 預約/訂位 |
| process.html | 服務流程 |
| blog.html | 專欄列表 |
| blog-detail.html | 文章內頁 |
| contact.html | 聯絡我們 |

## 5. 如何修改品牌名稱
搜尋品牌名並替換為您的品牌名；同時更新 `title`、`og:title`、頁尾與 Schema 的 `name`。

## 6. 如何替換圖片
- CSS 內 `background-image:url('...')` 與 HTML 內 `<img src="...">` 皆為 Unsplash 示意圖。
- 換圖時保持色系與產業氣質一致。

## 7. 圖片來源注意事項
圖片僅作為設計示意，正式交付前請替換為客戶自有或已授權圖片，並更新 `assets/img/image-sources.md`。

## 8. 如何修改聯絡資訊
搜尋電話、Email、LINE ID 與地址字串替換。

## 9. 如何修改 Google Map
`contact.html` 中可嵌入 Google Maps `<iframe>`，或替換為您的地圖連結。

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
