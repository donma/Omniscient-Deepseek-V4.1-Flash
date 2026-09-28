/* 全職設計視角 - gallery.js */
(function () {
  "use strict";

  var FALLBACK = [
    {
      id: "template-000-a",
      slug: "demo-a",
      name: "示範樣板 A",
      description: "資料來源載入失敗時顯示的示範資料。",
      industry: "示範",
      industryCategory: "專業服務",
      colorTheme: "深色",
      backgroundMode: "dark",
      layoutType: "大圖沉浸式 Hero",
      heroPattern: "demo",
      navigationPattern: "demo",
      contentRhythm: "demo",
      previewImage: "assets/img/previews/template-001.jpg",
      demoUrl: "#",
      zipUrl: "#",
      hasZip: false,
      promptUrl: "#",
      pageCount: 12,
      imageRich: true,
      status: "candidate",
      isFeatured: false,
      isHidden: false,
      generatedBy: "fallback",
      tags: ["示範", "深色底"]
    },
    {
      id: "template-000-b",
      slug: "demo-b",
      name: "示範樣板 B",
      description: "請確認 assets/js/data.js 已正確載入。",
      industry: "示範",
      industryCategory: "創意設計",
      colorTheme: "淺色",
      backgroundMode: "light",
      layoutType: "Magazine 雜誌式首頁",
      heroPattern: "demo",
      navigationPattern: "demo",
      contentRhythm: "demo",
      previewImage: "assets/img/previews/template-013.jpg",
      demoUrl: "#",
      zipUrl: "#",
      hasZip: false,
      promptUrl: "#",
      pageCount: 12,
      imageRich: true,
      status: "candidate",
      isFeatured: false,
      isHidden: false,
      generatedBy: "fallback",
      tags: ["示範", "淺色底"]
    },
    {
      id: "template-000-c",
      slug: "demo-c",
      name: "示範樣板 C",
      description: "示範資料僅供檢視卡片樣式。",
      industry: "示範",
      industryCategory: "科技商務",
      colorTheme: "深色",
      backgroundMode: "dark",
      layoutType: "Bento Grid 現代資訊版",
      heroPattern: "demo",
      navigationPattern: "demo",
      contentRhythm: "demo",
      previewImage: "assets/img/previews/template-006.jpg",
      demoUrl: "#",
      zipUrl: "#",
      hasZip: false,
      promptUrl: "#",
      pageCount: 12,
      imageRich: true,
      status: "candidate",
      isFeatured: false,
      isHidden: false,
      generatedBy: "fallback",
      tags: ["示範", "Bento"]
    }
  ];

  function getTemplateTags(template) {
    if (Array.isArray(template.tags)) {
      return template.tags;
    }
    if (template.tags && typeof template.tags === "object") {
      return Object.values(template.tags).flat().filter(Boolean);
    }
    return [];
  }

  function loadData(cb) {
    if (typeof TEMPLATES_DATA !== "undefined" && Array.isArray(TEMPLATES_DATA) && TEMPLATES_DATA.length) {
      return cb(TEMPLATES_DATA);
    }
    fetch("data/templates.json")
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function (data) { cb(data); })
      .catch(function () { cb(FALLBACK); });
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ================= Gallery page ================= */
  function initGallery(data) {
    var grid = document.getElementById("tplGrid");
    if (!grid) return;

    var state = { industry: "全部", mode: "全部", layout: "全部", keyword: "", view: "grid" };
    var visible = data.filter(function (t) { return !t.isHidden; });

    function cardHTML(t) {
      var tags = getTemplateTags(t);
      var modeBadge = t.backgroundMode === "dark"
        ? '<span class="gv-badge mode-dark">深色底</span>'
        : '<span class="gv-badge mode-light">淺色底</span>';
      var zipBtn = t.hasZip
        ? '<a class="gv-btn" href="' + esc(t.zipUrl) + '" download>下載 ZIP</a>'
        : '<span class="gv-btn disabled" aria-disabled="true" title="ZIP 尚未打包">ZIP 待打包</span>';
      return '' +
        '<article class="gv-card" data-id="' + esc(t.id) + '">' +
          '<figure class="gv-card-fig">' +
            '<img src="' + esc(t.previewImage) + '" alt="' + esc(t.name) + ' 樣板首頁預覽" loading="lazy" onerror="this.style.display=\'none\'">' +
            '<div class="gv-badges">' + modeBadge +
              '<span class="gv-badge gold">12 Pages</span>' +
              '<span class="gv-badge">Prompt</span>' +
              '<span class="gv-badge violet">圖片豐富</span>' +
            '</div>' +
          '</figure>' +
          '<div class="gv-card-body">' +
            '<div class="gv-card-top">' +
              '<div><span class="gv-card-id">' + esc(t.id.toUpperCase()) + '</span>' +
              '<h3 class="gv-card-title">' + esc(t.name) + '</h3></div>' +
              '<span class="gv-card-ind">' + esc(t.industryCategory) + '</span>' +
            '</div>' +
            '<div class="gv-card-meta">' +
              '<span>色系 <b>' + esc(t.colorTheme) + '</b></span>' +
              '<span>版型 <b>' + esc(t.layoutType) + '</b></span>' +
            '</div>' +
            '<div class="gv-card-tags">' +
              tags.slice(0, 4).map(function (g) { return '<span class="gv-tag">' + esc(g) + '</span>'; }).join("") +
            '</div>' +
            '<div class="gv-card-flags">' +
              '<span class="ok">✓ 12 頁完整</span>' +
              '<span class="ok">✓ 專屬 Prompt</span>' +
              (t.hasZip ? '<span class="ok">✓ ZIP 可下載</span>' : '<span class="wait">◌ ZIP 待打包</span>') +
            '</div>' +
            '<div class="gv-card-actions">' +
              '<a class="gv-btn primary" href="' + esc(t.demoUrl) + '">預覽網站</a>' +
              '<a class="gv-btn" href="template-detail.html?id=' + esc(t.id) + '">查看詳情</a>' +
              '<a class="gv-btn" href="' + esc(t.promptUrl) + '">查看 Prompt</a>' +
              zipBtn +
            '</div>' +
          '</div>' +
        '</article>';
    }

    function render() {
      var kw = state.keyword.trim().toLowerCase();
      var list = visible.filter(function (t) {
        if (state.industry !== "全部" && t.industryCategory !== state.industry) return false;
        if (state.mode !== "全部" && t.backgroundMode !== (state.mode === "深色底" ? "dark" : "light")) return false;
        if (state.layout !== "全部" && t.layoutType !== state.layout) return false;
        if (kw) {
          var hay = [t.name, t.description, t.industry, t.industryCategory, t.layoutType]
            .concat(getTemplateTags(t)).join(" ").toLowerCase();
          if (hay.indexOf(kw) === -1) return false;
        }
        return true;
      });

      grid.innerHTML = list.length
        ? list.map(cardHTML).join("")
        : '<div class="gv-empty">沒有符合條件的樣板，請調整篩選或關鍵字。</div>';

      var countEl = document.getElementById("resultCount");
      if (countEl) countEl.textContent = "共 " + list.length + " 套";
    }

    function bindGroup(containerId, key) {
      var box = document.getElementById(containerId);
      if (!box) return;
      box.addEventListener("click", function (e) {
        var btn = e.target.closest(".gv-filter-btn");
        if (!btn) return;
        box.querySelectorAll(".gv-filter-btn").forEach(function (b) { b.classList.remove("on"); });
        btn.classList.add("on");
        state[key] = btn.dataset.value;
        render();
      });
    }
    bindGroup("industryFilters", "industry");
    bindGroup("modeFilters", "mode");
    bindGroup("layoutFilters", "layout");

    var search = document.getElementById("searchInput");
    if (search) {
      search.addEventListener("input", function () {
        state.keyword = this.value;
        render();
      });
    }

    var hotBox = document.getElementById("hotTags");
    if (hotBox) {
      hotBox.addEventListener("click", function (e) {
        var btn = e.target.closest("button");
        if (!btn) return;
        state.keyword = btn.dataset.kw;
        if (search) search.value = btn.dataset.kw;
        render();
        document.getElementById("browse").scrollIntoView({ behavior: "smooth" });
      });
    }

    var toggle = document.getElementById("viewToggle");
    if (toggle) {
      toggle.addEventListener("click", function (e) {
        var btn = e.target.closest("button");
        if (!btn) return;
        toggle.querySelectorAll("button").forEach(function (b) { b.classList.remove("on"); });
        btn.classList.add("on");
        state.view = btn.dataset.view;
        grid.classList.toggle("list", state.view === "list");
        render();
      });
    }

    var reset = document.getElementById("resetFilters");
    if (reset) {
      reset.addEventListener("click", function () {
        state = { industry: "全部", mode: "全部", layout: "全部", keyword: "", view: state.view };
        if (search) search.value = "";
        document.querySelectorAll(".gv-filter-btn").forEach(function (b) {
          b.classList.toggle("on", b.dataset.value === "全部");
        });
        render();
      });
    }

    // count badges in sidebar
    document.querySelectorAll("[data-count-industry]").forEach(function (el) {
      var n = visible.filter(function (t) { return t.industryCategory === el.dataset.countIndustry; }).length;
      if (n === 0) el.style.opacity = ".35";
    });

    render();
  }

  /* ================= Detail page ================= */
  function initDetail(data) {
    var root = document.getElementById("detailRoot");
    if (!root) return;
    var id = new URLSearchParams(location.search).get("id");
    var t = data.filter(function (x) { return x.id === id || x.slug === id; })[0];
    if (!t) {
      root.innerHTML = '<div class="gd-loading">找不到指定的樣板，請從主展示站重新進入。<br><br><a class="gv-btn primary" href="index.html">回到主展示站</a></div>';
      return;
    }
    document.title = t.name + " | 全職設計視角";
    var tags = getTemplateTags(t);
    var pages = [
      ["index.html", "首頁"], ["about.html", "關於我們"], ["services.html", "服務項目"],
      ["service-detail.html", "服務詳情"], ["portfolio.html", "作品案例"], ["reviews.html", "客戶評價"],
      ["faq.html", "常見問題"], ["booking.html", "預約服務"], ["process.html", "服務流程"],
      ["blog.html", "最新消息"], ["blog-detail.html", "文章內頁"], ["contact.html", "聯絡我們"]
    ];
    var zipBtn = t.hasZip
      ? '<a class="gv-btn" href="' + esc(t.zipUrl) + '" download>下載 ZIP</a>'
      : '<span class="gv-btn disabled" aria-disabled="true">ZIP 待打包</span>';

    var folder = t.demoUrl.replace(/index\.html$/, "");

    root.innerHTML = '' +
      '<section class="gd-hero">' +
        '<figure class="gd-fig"><img src="' + esc(t.previewImage) + '" alt="' + esc(t.name) + ' 首頁預覽"></figure>' +
        '<div>' +
          '<span class="gd-kicker">' + esc(t.id.toUpperCase()) + ' · ' + esc(t.layoutType) + '</span>' +
          '<h1>' + esc(t.name) + '</h1>' +
          '<p class="gd-desc">' + esc(t.description) + '</p>' +
          '<div class="gd-meta">' +
            '<div><span>產業分類</span>' + esc(t.industryCategory) + ' / ' + esc(t.industry) + '</div>' +
            '<div><span>色系</span>' + esc(t.colorTheme) + '</div>' +
            '<div><span>背景模式</span>' + (t.backgroundMode === "dark" ? "深色底" : "淺色底") + '</div>' +
            '<div><span>版型類型</span>' + esc(t.layoutType) + '</div>' +
          '</div>' +
          '<div class="gd-actions">' +
            '<a class="gv-btn primary" href="' + esc(t.demoUrl) + '">預覽網站</a>' +
            '<a class="gv-btn" href="' + esc(t.promptUrl) + '">查看 Prompt</a>' + zipBtn +
          '</div>' +
        '</div>' +
      '</section>' +
      '<div class="gd-body">' +
        '<div>' +
          '<div class="gd-panel"><h2>12 頁完整頁面清單</h2><ul class="gd-pages">' +
            pages.map(function (p) {
              return '<li><a href="' + esc(folder + p[0]) + '">' + esc(p[1]) + '<span>' + esc(p[0]) + '</span></a></li>';
            }).join("") +
          '</ul></div>' +
          '<div class="gd-panel"><h2>SEO 結構說明</h2>' +
            '<p class="gd-note">每頁皆含獨立 title、meta description、canonical placeholder、Open Graph 標籤；首頁僅一個 h1，section 皆有語意標題，圖片皆附 alt。實體店家型含 LocalBusiness Schema placeholder，企業型含 Organization Schema，文章頁含 Article Schema。</p>' +
          '</div>' +
          '<div class="gd-panel"><h2>圖片來源注意事項</h2>' +
            '<p class="gd-note">本樣板圖片僅作為設計示意，來源為 Unsplash 等可公開顯示圖庫。正式交付客戶前，請替換為客戶自有圖片或已授權圖片，並更新 assets/img/image-sources.md 紀錄。</p>' +
          '</div>' +
          '<div class="gd-panel"><h2>樣板 Prompt 摘要</h2><pre class="gd-prompt" id="promptBox">載入中…</pre></div>' +
        '</div>' +
        '<aside>' +
          '<div class="gd-panel"><h2>功能標籤</h2><div class="gv-card-tags">' +
            tags.map(function (g) { return '<span class="gv-tag">' + esc(g) + '</span>'; }).join("") +
          '</div></div>' +
          '<div class="gd-panel"><h2>適用產業</h2><p class="gd-note">' + esc(t.industry) + '、' + esc(t.industryCategory) + ' 相關品牌。</p></div>' +
          '<div class="gd-panel"><h2>版型資訊</h2><p class="gd-note">' +
            'Hero Pattern：' + esc(t.heroPattern) + '<br>' +
            'Navigation：' + esc(t.navigationPattern) + '<br>' +
            'Content Rhythm：' + esc(t.contentRhythm) + '<br>' +
            '生成模型：' + esc(t.generatedBy) +
          '</p></div>' +
        '</aside>' +
      '</div>';

    fetch(t.promptUrl)
      .then(function (r) { return r.ok ? r.text() : Promise.reject(); })
      .then(function (txt) {
        var box = document.getElementById("promptBox");
        if (box) box.textContent = txt.slice(0, 6000);
      })
      .catch(function () {
        var box = document.getElementById("promptBox");
        if (box) box.textContent = "無法以 fetch 讀取 prompt.md（file:// 環境限制），請直接開啟檔案：" + t.promptUrl;
      });
  }

  /* ================= Mobile menu ================= */
  function initMenu() {
    var btn = document.getElementById("hamburger");
    var menu = document.getElementById("mobileMenu");
    if (!btn || !menu) return;
    btn.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMenu();
    loadData(function (data) {
      initGallery(data);
      initDetail(data);
    });
  });
})();
