# Cyber Security 樣板 README

## 1. 樣板介紹
深藍黑科技網格企業資安官網，共 12 頁，適合資安顧問、SOC 服務商與企業級 IT 服務公司。

## 2. 適合產業
- 資訊安全顧問 / MDR 服務商
- 企業級 IT 服務與系統整合商
- 合規輔導與風險管理顧問

## 3. 版型說明
- 左文右 console Hero + 科技網格背景
- 信任指標卡、四大服務卡、案例雙欄、威脅摘要面板、頁尾 CTA
- 內頁採用資料面板、表格、時間軸與卡片版式，維持資料導向節奏

## 4. 12 頁檔案說明
| 檔案 | 說明 |
|---|---|
| index.html | 信任建立首頁（指標 + 案例 + 情資摘要） |
| about.html | 創立背景、使命、認證與團隊 |
| services.html | 四大服務總覽與比較 |
| service-detail.html | MDR 服務範圍、SLA、技術堆疊 |
| portfolio.html | 產業案例列表 |
| reviews.html | 客戶評價卡片牆 |
| faq.html | 常見問題 |
| booking.html | 免費資安評估預約表單 |
| process.html | 評估 → 設計 → 部署 → 營運四步 |
| blog.html | 威脅情資與專欄列表 |
| blog-detail.html | 深度威脅分析長文 |
| contact.html | 辦公室資訊與商務合作表單 |

## 5. 如何修改品牌名稱
搜尋 `AEGIS SEC` 並替換為您的品牌名；同時更新 `title`、`og:title`、頁尾與 Schema 的 `name`。

## 6. 如何替換圖片
- CSS 內 `background-image:url('...')` 與 HTML 內 `<img src="...">` 皆為 Unsplash 示意圖。
- 換圖時保持冷色調與科技感，避免明亮生活照。

## 7. 圖片來源注意事項
圖片僅作為設計示意，正式交付前請替換為客戶自有或已授權圖片，並更新 `assets/img/image-sources.md`。

## 8. 如何修改聯絡資訊
搜尋 `02-2725-8000`、`hello@aegissec.tw`、`incident@aegissec.tw` 替換為您的聯絡方式。

## 9. 如何修改 Google Map
`contact.html` 中可嵌入 Google Maps `<iframe>`，建議保留深色濾鏡樣式以維持整體色調。

## 10. 如何修改 SEO title / description
每頁 `<title>` 與 `<meta name="description">` 皆獨立；建議格式為「服務 + 品牌名」。

## 11. 如何修改 CTA
搜尋 `booking.html` 或 `href="booking.html"` 即可統一導向您的預約系統或外部表單。

## 12. ZIP 尚未打包說明
本樣板尚未產生 ZIP，卡片上顯示「ZIP 待打包」。請勿連到不存在檔案；打包完成後再更新 `hasZip` 與按鈕狀態。

## 13. 生成資訊
- Model: deepseek-v4.1-flash
- Date: 2026-09-28
- Operator: AI-assisted static template generation
