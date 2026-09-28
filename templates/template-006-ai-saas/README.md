# AI SaaS 樣板 README

## 1. 樣板介紹
深色科技漸層 AI SaaS 產品官網，共 12 頁，適合 AI 軟體、B2B SaaS 與企業服務平台。

## 2. 適合產業
- AI 軟體 / SaaS 新創
- B2B 產品公司（協作、資料、AI 工具）
- 企業服務平台

## 3. 版型說明
- 左文右 Bento Hero + 膠囊導覽
- 信任指標、功能模組、案例 Bento、頁尾 CTA
- 內頁採用模組格網、表格、時間軸與卡片版式

## 4. 12 頁檔案說明
| 檔案 | 說明 |
|---|---|
| index.html | Bento 首屏 + 信任指標 + 功能模組 + 案例 |
| about.html | 創立故事、產品哲學、團隊 |
| services.html | 六大功能模組與方案價格 |
| service-detail.html | 知識問答功能詳情 |
| portfolio.html | 客戶案例牆（6 案） |
| reviews.html | 客戶評價卡片牆 |
| faq.html | 常見問題 |
| booking.html | 14 天免費試用表單 |
| process.html | 導入四階段與責任分工 |
| blog.html | 產品誌文章列表 |
| blog-detail.html | RAG 三道防線深度文 |
| contact.html | 業務、技術、媒體聯絡表單 |

## 5. 如何修改品牌名稱
搜尋 `NEURA FLOW` 並替換為您的品牌名；同時更新 `title`、`og:title`、頁尾與 Schema 的 `name`。

## 6. 如何替換圖片
- CSS 內 `background-image:url('...')` 與 HTML 內 `<img src="...">` 皆為 Unsplash 示意圖。
- 換圖時保持深色調與科技感，避免明亮生活照。

## 7. 圖片來源注意事項
圖片僅作為設計示意，正式交付前請替換為客戶自有或已授權圖片，並更新 `assets/img/image-sources.md`。

## 8. 如何修改聯絡資訊
搜尋 `02-2655-7788`、`sales@neuraflow.tw`、`support@neuraflow.tw` 替換為您的聯絡方式。

## 9. 如何修改 Google Map
`contact.html` 中可嵌入 Google Maps `<iframe>`，建議保留深色濾鏡樣式。

## 10. 如何修改 SEO title / description
每頁 `<title>` 與 `<meta name="description">` 皆獨立；建議格式為「功能 + 品牌名」。

## 11. 如何修改 CTA
搜尋 `booking.html` 或 `href="booking.html"` 即可統一導向您的試用或預約系統。

## 12. ZIP 尚未打包說明
本樣板尚未產生 ZIP，卡片上顯示「ZIP 待打包」。請勿連到不存在檔案；打包完成後再更新 `hasZip` 與按鈕狀態。

## 13. 生成資訊
- Model: deepseek-v4.1-flash
- Date: 2026-09-28
- Operator: AI-assisted static template generation
