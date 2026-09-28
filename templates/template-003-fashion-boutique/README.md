# Fashion Boutique 樣板 README

## 1. 樣板介紹
黑白灰精品服飾 Lookbook 官網，共 12 頁，適合獨立時裝品牌、精品選品店與高級訂製服工坊。

## 2. 適合產業
- 高級獨立時裝品牌 / 設計師品牌
- 精品服飾選品店
- 高級手工訂製服工坊

## 3. 版型說明
- 全螢幕雜誌封面 Hero + 跨頁 Lookbook
- 系列三欄卡、品牌哲學雙欄、活動卡片、媒體評價、頁尾 CTA
- 內頁採用編輯感留白、表格、時間軸與卡片版式

## 4. 12 頁檔案說明
| 檔案 | 說明 |
|---|---|
| index.html | 雜誌封面式首頁、Lookbook 跨頁 |
| about.html | 品牌哲學、使命、三個堅持、團隊 |
| services.html | 當季系列、經典款、訂製服務 |
| service-detail.html | 單品拆解、材質規格、保養建議 |
| portfolio.html | 完整 Lookbook 圖片集 |
| reviews.html | 媒體報導與客戶回饋 |
| faq.html | 常見問題 |
| booking.html | 預約一對一試穿表單 |
| process.html | 購物與訂製四步驟流程 |
| blog.html | 風格誌文章列表 |
| blog-detail.html | 剪裁長文深度解析 |
| contact.html | 門市地址、營業時間、洽詢表單 |

## 5. 如何修改品牌名稱
搜尋 `MAISON ÉCLAT` 並替換為您的品牌名；同時更新 `title`、`og:title`、頁尾與 Schema 的 `name`。

## 6. 如何替換圖片
- CSS 內 `background-image:url('...')` 與 HTML 內 `<img src="...">` 皆為 Unsplash 示意圖。
- 換圖時保持黑白灰與冷色調，避免高彩度照片。

## 7. 圖片來源注意事項
圖片僅作為設計示意，正式交付前請替換為客戶自有或已授權圖片，並更新 `assets/img/image-sources.md`。

## 8. 如何修改聯絡資訊
搜尋 `02-2720-1188`、`@maison_eclat` 替換為您的聯絡方式。

## 9. 如何修改 Google Map
`contact.html` 中可嵌入 Google Maps `<iframe>`，建議保留深色濾鏡樣式以維持整體色調。

## 10. 如何修改 SEO title / description
每頁 `<title>` 與 `<meta name="description">` 皆獨立；建議格式為「系列 / 商品 + 品牌名」。

## 11. 如何修改 CTA
搜尋 `booking.html` 或 `href="booking.html"` 即可統一導向您的預約系統或外部表單。

## 12. ZIP 尚未打包說明
本樣板尚未產生 ZIP，卡片上顯示「ZIP 待打包」。請勿連到不存在檔案；打包完成後再更新 `hasZip` 與按鈕狀態。

## 13. 生成資訊
- Model: deepseek-v4.1-flash
- Date: 2026-09-28
- Operator: AI-assisted static template generation
