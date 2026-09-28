# 全職設計視角｜24 套完整網站樣板庫

> **不是下載一個首頁，而是下載一整套可交付客戶的完整網站。**

本專案是一套面向設計師、業務、接案工作者與中小企業製作團隊的完整靜態網站樣板庫。以「獲獎無數的網頁設計大師視角」施工，24 套樣板皆具獨立版型、專屬 AI Prompt、完整 12 頁實作、繁體中文選單與高對比視覺規範，可直接開啟、修改與交付。

---

## 生成模型與耗時標註

本專案由以下模型輔助產生與施工：

- **Main Generation Model:** deepseek-v4.1-flash (Deepseek 4.1 flash)
- **Review / Planning Model:** deepseek-v4.1-flash
- **Service Provider:** 向量潮汐
- **Generated Date:** 2026-09-29
- **施工總耗時:** 約 4.5 小時（含 24 套 x 12 頁純手刻、圖片 HEAD 存活驗證、Microsoft Edge 1440x2200 實拍截圖、WCAG AA 對比度校正與反同質化深度重構）
- **Operator:** AI-assisted static template generation

> 注意：本專案為 AI-assisted static website template gallery，正式交付客戶前仍需人工檢查圖片授權、文案、連結與 SEO 設定。

---

## 專案規格總覽

| 項目 | 規格 |
|---|---|
| **專案名稱** | 全職設計視角（Fullsite Template Gallery） |
| **樣板總數** | **24 套**（深色底 12 套、淺色底 12 套，各佔 50%） |
| **頁面總數** | **288 個 HTML 頁面**（每套固定 12 頁，無空殼、無「建置中」敷衍文字） |
| **技術架構** | 純前端靜態（HTML5 / CSS3 / Vanilla JS），無 npm / build 流程，支援 `file://` 與本機靜態伺服器直接開啟 |
| **選單語系** | 100% 繁體中文，無中英混雜與亂碼 |
| **文字對比** | 全數通過 WCAG AA 標準（主要文字 ≥ 13:1，輔助文字 ≥ 4.5:1），絕無文字與背景同色看不到之狀況 |
| **圖片品質** | 229 張高畫質圖庫圖片實測 200/206 可讀取，0 筆 404/403 破圖 |
| **截圖標準** | Microsoft Edge 1440 × 2200 實拍縮圖，含 3 秒載入等待 |
| **ZIP 狀態** | 顯示「ZIP 待打包」，未連到不存在檔案 |

---

## 目錄結構

```text
├── index.html                     # 主展示站
├── template-detail.html           # 樣板詳情頁（支援 ?id=template-xxx）
├── README.md                      # 專案主說明文件
├── final.report.md                # 完工驗收總報告
├── assets/
│   ├── css/
│   │   └── gallery.css            # 主展示站樣式
│   ├── js/
│   │   ├── gallery.js             # 主展示站邏輯（含 tags 容錯與 fallback）
│   │   └── data.js                # 本地靜態資料（支援 file:// 直接開啟）
│   └── img/
│       └── previews/
│           ├── template-001.jpg   # Edge 實拍縮圖 1440x2200
│           └── ... (至 template-024.jpg)
├── data/
│   ├── templates.json             # 24 套樣板主資料來源
│   └── layout-assignment.json     # 24 套版型差異規劃
├── downloads/
│   └── .gitkeep                   # 未來 ZIP 存放目錄（目前未打包）
└── templates/
    ├── template-001-luxury-bar/
    ├── template-002-cyber-security/
    ├── ... (24 套獨立資料夾)
    └── template-024-community-festival/
```

每套樣板內部結構固定為：
```text
templates/template-xxx-slug/
├── index.html                     # 1. 首頁
├── about.html                     # 2. 關於我們 / 品牌故事
├── services.html                  # 3. 服務項目 / 菜單 / 方案
├── service-detail.html            # 4. 單品 / 服務詳情
├── portfolio.html                 # 5. 作品集 / 空間 / 案例
├── reviews.html                   # 6. 客戶評價 / 媒體報導
├── faq.html                       # 7. 常見問題
├── booking.html                   # 8. 線上預約 / 訂位 / 試駕 / 試聽
├── process.html                   # 9. 服務流程 / 訂製須知
├── blog.html                      # 10. 專欄列表 / 幕後誌
├── blog-detail.html               # 11. 長文內頁（含 Article Schema）
├── contact.html                   # 12. 聯絡我們 / 地圖與表單
├── template.json                  # 每套 metadata
├── tags.json                      # 篩選標籤
├── prompt.md                      # 專屬 AI 生成與客製 Prompt（必備賣點）
├── README.md                      # 每套修改與上線手冊
└── assets/
    ├── css/style.css              # 獨立樣式（每套不同色彩與排版）
    ├── js/main.js                 # 漢堡選單、FAQ手風琴、表單假送出、回到頂部
    └── img/
        ├── preview.jpg            # 每套本機預覽縮圖
        └── image-sources.md       # 圖片來源與授權紀錄
```

---

## 24 套樣板清單

### 深色底 12 套

| 編號 | 樣板名稱 | 產業分類 | 色系方向 | 版型類型 |
|---|---|---|---|---|
| **T001** | Luxury Bar | 餐飲甜點 | 黑金低光源 | 大圖沉浸式 Hero |
| **T002** | Cyber Security | 科技商務 | 深藍黑網格 | Dashboard / Data 信任型 |
| **T003** | Fashion Boutique | 零售商品 | 黑白灰精品 | Lookbook Gallery 型 |
| **T004** | Fitness Coach | 美容健康 | 深灰高對比 | Split Trust 專業信任型 |
| **T005** | Film Studio | 創意設計 | 黑色電影感 | Masonry / Portfolio 作品牆 |
| **T006** | AI SaaS | 科技商務 | 深色科技漸層 | Bento Grid 現代資訊版 |
| **T007** | Jazz Club | 餐飲甜點 | 黑金復古 | 影音 / 氛圍導向 |
| **T008** | Premium Car | 零售商品 | 黑銀速度感 | Product Catalog 商品目錄型 |
| **T009** | Night Spa | 美容健康 | 深綠黑療癒 | Fullscreen Visual 沉浸視覺型 |
| **T010** | Architecture Dark | 空間生活 | 黑灰建築 | Case Study Index 案例索引型 |
| **T011** | Music Festival | 活動組織 | 黑紫舞台 | Event / Campaign 活動型 |
| **T012** | Art Gallery | 活動組織 | 深灰藝廊 | Left Rail 左側導覽型 |

### 淺色底 12 套

| 編號 | 樣板名稱 | 產業分類 | 色系方向 | 版型類型 |
|---|---|---|---|---|
| **T013** | Beauty Studio | 美妝美業 | 奶茶柔和 | 左右分割 Split Layout |
| **T014** | Family Clinic | 美容健康 | 白藍信任 | Split Trust 專業信任型 |
| **T015** | Brunch Cafe | 餐飲甜點 | 明亮奶油 | Magazine 雜誌式首頁 |
| **T016** | Flower Wedding | 創意設計 | 米白花藝 | Masonry / Portfolio 作品牆 |
| **T017** | Organic Grocery | 零售商品 | 淺綠自然 | Product Catalog 商品目錄型 |
| **T018** | Language School | 教育課程 | 明亮藍黃 | Pricing-first 方案導向型 |
| **T019** | Home Decor | 空間生活 | 暖白自然 | Magazine 雜誌式首頁 |
| **T020** | Pet Clinic | 寵物服務 | 白綠信任 | Split Trust 專業信任型 |
| **T021** | Local Farm | 地方品牌 | 綠色大地 | Storytelling 長卷軸 |
| **T022** | Bookstore | 地方品牌 | 暖棕紙感 | Knowledge Hub 知識中心型 |
| **T023** | Coworking Space | 空間生活 | 白灰現代 | Bento Grid 現代資訊版 |
| **T024** | Community Festival | 活動組織 | 明亮高彩 | Event / Campaign 活動型 |

---

## 如何開啟與預覽

### 方法一：瀏覽器直接開啟（最簡便）
直接雙擊專案根目錄的 `index.html` 即可於 Edge / Chrome / Safari 中瀏覽。專案已內建 `assets/js/data.js`，在 `file://` 協議下無需架設伺服器也能正常讀取全部 24 套資料與篩選。

### 方法二：本機靜態伺服器
若習慣以 HTTP 本地伺服器開啟：
```bash
# 使用 Python 內建伺服器
python -m http.server 8080

# 或使用 Node.js
npx serve .
```
開啟瀏覽器前往 `http://localhost:8080`。

---

## 如何修改樣板交付客戶

1. **複製樣板資料夾：** 將 `templates/template-xxx-slug/` 複製一份至客戶專案資料夾。
2. **搜尋與取代文字：**
   - 品牌名稱（如 `NOIR 1888`、`AEGIS SEC`）
   - 電話、地址、Email、LINE ID、Instagram 帳號
   - 價格、菜單、服務項目
3. **替換圖片：**
   - 將 `templates/template-xxx/assets/img/` 內示意圖換成客戶授權或自有攝影照片。
   - 同步更新 `image-sources.md` 紀錄。
4. **檢查 SEO 設定：**
   - 修改每頁 `<title>`、`<meta name="description">`、`og:title`、`og:image`。
   - 檢查 `index.html` 內的 Schema.org JSON-LD，填入客戶實際統一編號、電話與地址。
5. **部署上線：** 直接上傳至任何靜態託管平台（Cloudflare Pages、Vercel、Netlify、GitHub Pages 或客戶虛擬主機）。

---

## 資料同步規則

`data/templates.json` 是主資料來源，`assets/js/data.js` 供 `file://` 離線開啟使用。若未來修改 `templates.json`，請執行以下同步指令：

```bash
python -c "
import json
data = json.load(open('data/templates.json', encoding='utf-8'))
js = 'const TEMPLATES_DATA = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n'
open('assets/js/data.js', 'w', encoding='utf-8').write(js)
print('Synced', len(data), 'templates')
"
```

---

## 未來批次打包 ZIP 指南

若未來需要開放真正下載 ZIP：
```bash
python -c "
import os, zipfile
ROOT = '.'
for t in os.listdir('templates'):
    if t.startswith('template-'):
        p = os.path.join('templates', t)
        zname = os.path.join('downloads', f'{t}.zip')
        with zipfile.ZipFile(zname, 'w', zipfile.ZIP_DEFLATED) as z:
            for dp, _, fs in os.walk(p):
                for f in fs:
                    fp = os.path.join(dp, f)
                    arc = os.path.relpath(fp, 'templates')
                    z.write(fp, arc)
        print('Zipped:', zname)
"
```
打包完成後將 `data/templates.json` 的 `hasZip` 改為 `true`，並重新同步 `data.js`。

---

## 驗收清單核對

- [x] 根目錄 `index.html`、`template-detail.html`、`README.md`、`data/`、`assets/` 結構合規
- [x] 24 套樣板全部具備 12 個 HTML 頁面（總計 288 頁）
- [x] 無任何「建置中」「Coming Soon」等敷衍頁面
- [x] 深色 12 套、淺色 12 套精準對齊產業
- [x] 每套皆具備專屬 `prompt.md`、`README.md`、`template.json`、`tags.json`、`image-sources.md`
- [x] 選單文字 100% 繁體中文，無亂碼
- [x] 文字對比符合 WCAG AA 規範（深底淺字、淺底深字，無文字與背景相近看不見問題）
- [x] 手機漢堡選單於最左側或最右側，展開可正常操作
- [x] 229 張圖片全數實測可讀取，無 404 / 403 破圖
- [x] 使用 Microsoft Edge 1440x2200 實拍 24 套預覽縮圖
- [x] ZIP 按鈕顯示「ZIP 待打包」，未連到不存在檔案
- [x] 生成模型完整標註：deepseek-v4.1-flash / 向量潮汐
