/* script.js — sayfayı content.js içindeki verilerden oluşturur. Genelde düzenlemeniz gerekmez. */
(function () {
  "use strict";
  const root = document.documentElement;

  /* ---- Tema ---- */
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));
  document.getElementById("themeToggle").addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
  document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("navLinks").classList.toggle("open");
  });

  const C = window.CONTENT;
  const main = document.getElementById("content");
  if (!C) {
    main.innerHTML = "<p>content.js yüklenemedi. Dosyanın index.html ile aynı klasörde olduğundan emin olun.</p>";
    return;
  }

  const esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch];
    });
  };
  const safeUrl = function (u) { return /^(https?:|mailto:|files\/|\.\/|#)/i.test(u) ? u : ""; };
  const site = C.site || {};
  const links = site.links || {};
  const sections = (C.sections || []).filter(function (s) { return s.show !== false; });
  const cv = C.cv && C.cv.show !== false ? C.cv : null;

  /* ---- Simgeler ---- */
  const ICON = {
    pin: "M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z",
    inst: "M12 2 2 7v2h20V7L12 2zM4 11v7H2v2h20v-2h-2v-7h-2v7h-3v-7h-2v7h-2v-7H9v7H6v-7H4z",
    mail: "M2 5h20v14H2V5zm2 2v.5l8 5 8-5V7H4zm16 3-8 5-8-5V17h16v-7z",
    link: "M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1 1.4 1.4 1-1a3 3 0 0 1 4.2 4.2l-3 3a3 3 0 0 1-4.2 0L10 13zm4-2a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1-1.4-1.4-1 1a3 3 0 0 1-4.2-4.2l3-3a3 3 0 0 1 4.2 0L14 11z",
    cap: "M12 3 1 9l11 6 9-4.9V17h2V9L12 3zM5 13.2v4L12 21l7-3.8v-4L12 17l-7-3.8z"
  };
  const icon = function (d) {
    return '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="' + d + '"/></svg>';
  };

  /* ---- Üst başlık ve sekme ---- */
  const title = site.title || site.name || "Akademik Sayfa";
  document.title = title;
  document.getElementById("siteTitle").textContent = title;

  /* ---- Menü ---- */
  const nav = [{ id: "home", title: "Ana Sayfa" }]
    .concat(sections.map(function (s) { return { id: s.id, title: s.title }; }));
  if (cv) nav.push({ id: "cv", title: cv.title || "Özgeçmiş" });
  document.getElementById("navLinks").innerHTML = nav.map(function (n) {
    return '<li><a href="#' + esc(n.id) + '" data-nav="' + esc(n.id) + '">' + esc(n.title) + "</a></li>";
  }).join("");

  /* ---- Yan panel ---- */
  (function () {
    let h = '<div class="avatar">';
    const photo = safeUrl(site.photo || "");
    h += photo
      ? '<img src="' + esc(photo) + '" alt="' + esc(site.name) + '">'
      : '<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#e6dcd9"/><circle cx="50" cy="40" r="19" fill="#b9a8a6"/><ellipse cx="50" cy="100" rx="38" ry="30" fill="#b9a8a6"/></svg>';
    h += "</div>";
    h += '<h3 class="author-name">' + esc(site.name) + "</h3>";
    if (site.role) h += '<p class="author-role">' + esc(site.role) + "</p>";
    if (site.bio) h += '<p class="bio">' + esc(site.bio) + "</p>";
    h += '<ul class="author-links">';
    if (site.location) h += "<li>" + icon(ICON.pin) + esc(site.location) + "</li>";
    if (site.institution) h += "<li>" + icon(ICON.inst) + esc(site.institution) + "</li>";
    const item = function (url, label, ic) {
      const u = safeUrl(url || "");
      if (u) h += '<li><a href="' + esc(u) + '" target="_blank" rel="noopener">' + icon(ic) + esc(label) + "</a></li>";
    };
    if (links.email) h += '<li><a href="mailto:' + esc(links.email) + '">' + icon(ICON.mail) + esc(links.email) + "</a></li>";
    item(links.scholar, "Google Scholar", ICON.cap);
    item(links.orcid, "ORCID", ICON.link);
    item(links.yok, "YÖK Akademik", ICON.link);
    item(links.github, "GitHub", ICON.link);
    item(links.linkedin, "LinkedIn", ICON.link);
    item(links.x, "X", ICON.link);
    h += "</ul>";
    document.getElementById("sidebar").innerHTML = h;
  })();

  /* ---- Yardımcılar ---- */
  const hl = site.highlightName || "";
  const authorsHtml = function (a) {
    let s = esc(a);
    if (hl) s = s.split(esc(hl)).join("<b>" + esc(hl) + "</b>");
    return s;
  };

  const entryHtml = function (i) {
    const t = i.url && safeUrl(i.url)
      ? '<a href="' + esc(i.url) + '" target="_blank" rel="noopener">' + esc(i.title) + "</a>"
      : esc(i.title);
    let h = "<li><h3>" + t + "</h3>";
    if (i.chapter) h += '<p class="meta">Bölüm: ' + esc(i.chapter) + "</p>";
    if (i.authors) h += '<p class="authors">' + authorsHtml(i.authors) + "</p>";
    const meta = [];
    if (i.venue) meta.push(esc(i.venue));
    if (i.editors) meta.push("Editör: " + esc(i.editors));
    if (i.pages) meta.push("s. " + esc(i.pages));
    if (i.isbn) meta.push("ISBN " + esc(i.isbn));
    if (i.date) meta.push(esc(i.date));
    else if (i.year) meta.push(esc(i.year));
    if (meta.length) h += '<p class="meta">' + meta.join(" · ") + "</p>";
    if (i.tags) {
      h += '<p class="tags">' + String(i.tags).split("·").map(function (x) { return x.trim(); })
        .filter(Boolean).map(function (x) { return '<span class="tag">' + esc(x) + "</span>"; }).join("") + "</p>";
    }
    return h + "</li>";
  };

  const listHtml = function (items, byYear) {
    if (!items.length) return '<p class="empty">Kayıt bulunamadı.</p>';
    if (!byYear) return '<ul class="items">' + items.map(entryHtml).join("") + "</ul>";
    const groups = {}, order = [];
    items.forEach(function (i) {
      const y = i.year || "Yıl yok";
      if (!groups[y]) { groups[y] = []; order.push(y); }
      groups[y].push(i);
    });
    order.sort(function (a, b) { return String(b).localeCompare(String(a)); });
    return order.map(function (y) {
      return '<h2 class="year">' + esc(y) + '</h2><ul class="items">' + groups[y].map(entryHtml).join("") + "</ul>";
    }).join("");
  };

  const textOf = function (i) { return Object.keys(i).map(function (k) { return String(i[k]); }).join(" ").toLowerCase(); };

  /* ---- Sayfaları oluştur ---- */
  let html = "";

  // Ana sayfa
  html += '<section id="home" class="page"><h1>' + esc((C.home && C.home.heading) || title) + "</h1>";
  ((C.home && C.home.paragraphs) || []).forEach(function (p) { html += "<p>" + esc(p) + "</p>"; });
  if (C.home && C.home.showCounts) {
    html += '<div class="counts">' + sections.filter(function (s) { return s.type !== "teaching" && (s.items || []).length; })
      .map(function (s) {
        return '<a class="count" href="#' + esc(s.id) + '"><b>' + s.items.length + "</b><span>" + esc(s.title) + "</span></a>";
      }).join("") + "</div>";
  }
  html += "</section>";

  // Liste ve ders bölümleri
  sections.forEach(function (s) {
    html += '<section id="' + esc(s.id) + '" class="page"><h1>' + esc(s.title) + "</h1>";
    if (s.intro) html += '<p class="intro">' + esc(s.intro) + "</p>";
    const items = s.items || [];
    if (s.type === "teaching") {
      html += items.map(function (t) {
        return '<div class="term"><h3>' + esc(t.term) + (t.level ? " · " + esc(t.level) : "") + "</h3><ul>" +
          (t.courses || []).map(function (c) {
            return "<li>" + esc(c[0]) + (c[1] ? ' <span class="hrs">(' + esc(c[1]) + " saat/hafta)</span>" : "") + "</li>";
          }).join("") + "</ul></div>";
      }).join("") || '<p class="empty">Kayıt yok.</p>';
    } else {
      if (items.length > 8) html += '<input class="search" type="search" placeholder="Bu listede ara…" data-search="' + esc(s.id) + '">';
      html += '<div data-results="' + esc(s.id) + '">' + listHtml(items, s.groupByYear) + "</div>";
    }
    html += "</section>";
  });

  // Özgeçmiş
  if (cv) {
    html += '<section id="cv" class="page"><h1>' + esc(cv.title || "Özgeçmiş") + "</h1>";
    if (cv.pdf && safeUrl(cv.pdf)) html += '<a class="btn" href="' + esc(cv.pdf) + '" target="_blank" rel="noopener">Özgeçmiş (PDF)</a>';
    (cv.blocks || []).forEach(function (b) {
      html += "<h2>" + esc(b.heading) + "</h2>";
      (b.items || []).forEach(function (r) {
        html += '<div class="cv-row"><div class="cv-when">' + esc(r.when) + "</div><div>" + esc(r.what) +
          (r.note ? '<span class="cv-note">' + esc(r.note) + "</span>" : "") + "</div></div>";
      });
    });
    html += "</section>";
  }
  main.innerHTML = html;

  /* ---- Arama ---- */
  document.querySelectorAll("[data-search]").forEach(function (inp) {
    const s = sections.filter(function (x) { return x.id === inp.dataset.search; })[0];
    const box = document.querySelector('[data-results="' + inp.dataset.search + '"]');
    inp.addEventListener("input", function () {
      const q = inp.value.trim().toLowerCase();
      const items = q ? s.items.filter(function (i) { return textOf(i).indexOf(q) !== -1; }) : s.items;
      box.innerHTML = listHtml(items, s.groupByYear);
    });
  });

  /* ---- Yönlendirme ---- */
  function route() {
    const id = decodeURIComponent(location.hash.slice(1)) || "home";
    const pages = document.querySelectorAll(".page");
    let target = null;
    pages.forEach(function (p) { if (p.id === id) target = p; });
    if (!target) target = document.getElementById("home");
    pages.forEach(function (p) { p.classList.toggle("show", p === target); });
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      a.classList.toggle("active", a.dataset.nav === target.id);
    });
    document.getElementById("navLinks").classList.remove("open");
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  route();

  /* ---- Alt bilgi ---- */
  document.getElementById("footer").innerHTML =
    "<p>© " + new Date().getFullYear() + " " + esc(site.name || "") + (site.institution ? " · " + esc(site.institution) : "") + "</p>" +
    (site.lastUpdated ? "<p>Son güncelleme: " + esc(site.lastUpdated) + "</p>" : "");
})();
