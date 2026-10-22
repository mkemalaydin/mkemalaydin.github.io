(function () {
  const C = window.CONTENT;
  const $ = id => document.getElementById(id);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const root = document.documentElement;
  const themeToggle = $("themeToggle");
  const themeIcon = themeToggle.querySelector("svg");
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme === "dark" || storedTheme === "light" ? storedTheme
    : (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const themeIcons = {
    dark: "M12 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 16a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zm-8.49-3.51a1 1 0 0 1 1.42 0l1.41 1.41a1 1 0 0 1-1.41 1.42l-1.42-1.42a1 1 0 0 1 0-1.41zM3 11h2a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm14.66 4.49a1 1 0 0 1 1.42 1.41l-1.42 1.42a1 1 0 0 1-1.41-1.42l1.41-1.41zM19 11h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM5.51 4.1a1 1 0 0 1 1.42 0l1.41 1.41a1 1 0 0 1-1.41 1.42L5.51 5.51a1 1 0 0 1 0-1.41zm11.57 0a1 1 0 0 1 0 1.41l-1.41 1.42a1 1 0 0 1-1.42-1.42l1.42-1.41a1 1 0 0 1 1.41 0z",
    light: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
  };
  const setTheme = theme => {
    root.setAttribute("data-theme", theme);
    themeToggle.setAttribute("aria-label", theme === "dark" ? "Açık temaya geç" : "Koyu temaya geç");
    themeToggle.title = theme === "dark" ? "Açık temaya geç" : "Koyu temaya geç";
    themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
    themeIcon.innerHTML = `<path d="${themeIcons[theme]}"/>`;
    localStorage.setItem("theme", theme);
  };
  setTheme(initialTheme);
  themeToggle.onclick = () => setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");

  const menuToggle = $("menuToggle");
  const navLinks = $("navLinks");
  const closeMenu = () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  };
  menuToggle.onclick = () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  };
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  const site = C.site;
  document.title = site.title;
  $("siteTitle").textContent = site.title;
  const sections = C.sections.filter(s => s.show !== false);
  const nav = sections.map(s => [s.id, s.title]);
  if (C.cv && C.cv.show !== false) nav.push(["cv", C.cv.title || "Özgeçmiş"]);
  $("navLinks").innerHTML = nav.map(([id, t]) => `<li><a href="#${esc(id)}">${esc(t)}</a></li>`).join("");

  const ic = {
    pin: "M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z",
    inst: "M12 2 2 7v2h20V7L12 2zM4 11v7H2v2h20v-2h-2v-7h-2v7h-3v-7h-2v7h-2v-7H9v7H6v-7H4z",
    mail: "M2 5h20v14H2V5zm2 2v.5l8 5 8-5V7H4zm16 3-8 5-8-5V17h16v-7z",
    link: "M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1 1.4 1.4 1-1a3 3 0 0 1 4.2 4.2l-3 3a3 3 0 0 1-4.2 0L10 13zm4-2a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1-1.4-1.4-1 1a3 3 0 0 1-4.2-4.2l3-3a3 3 0 0 1 4.2 0L14 11z",
    cap: "M12 3 1 9l11 6 9-4.9V17h2V9L12 3zM5 13.2v4L12 21l7-3.8v-4L12 17l-7-3.8z"
  };
  const svg = p => `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="${p}"/></svg>`;
  const L = site.links || {};
  const rowsL = [];
  if (site.location) rowsL.push(`<li>${svg(ic.pin)} ${esc(site.location)}</li>`);
  if (site.institution) rowsL.push(`<li>${svg(ic.inst)} ${esc(site.institution)}</li>`);
  if (L.email) rowsL.push(`<li><a href="mailto:${esc(L.email)}">${svg(ic.mail)} E-posta</a></li>`);
  [["scholar","Google Scholar",ic.cap],["orcid","ORCID",ic.link],["yok","YÖK Akademik",ic.cap],
   ["github","GitHub",ic.link],["linkedin","LinkedIn",ic.link],["x","X",ic.link]].forEach(([k,n,i]) => {
    if (L[k]) rowsL.push(`<li><a href="${esc(L[k])}" target="_blank" rel="noopener">${svg(i)} ${n}</a></li>`);
  });
  const avatar = site.photo ? `<img src="${esc(site.photo)}" alt="${esc(site.name)}" fetchpriority="high">`
    : `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#e1e4e6"/><circle cx="50" cy="40" r="19" fill="#aab1b6"/><ellipse cx="50" cy="100" rx="38" ry="30" fill="#aab1b6"/></svg>`;
  $("sidebar").innerHTML = `<div class="avatar">${avatar}</div><h3 class="author-name">${esc(site.name)}</h3>
    ${site.role ? `<p class="role">${esc(site.role)}</p>` : ""}<p class="bio">${esc(site.bio)}</p>
    <ul class="author-links">${rowsL.join("")}</ul>`;
  $("footer").innerHTML = `<p>&copy; ${new Date().getFullYear()} ${esc(site.name)}.${site.lastUpdated ? ` CV son güncelleme: ${esc(site.lastUpdated)}.` : ""}</p>`;

  const hl = site.highlightName;
  const authors = a => { let h = esc(a); if (hl) h = h.split(esc(hl)).join(`<strong>${esc(hl)}</strong>`); return h; };
  const itemHTML = i => {
    const t = i.url ? `<a href="${esc(i.url)}" target="_blank" rel="noopener">${esc(i.title)}</a>` : esc(i.title);
    const meta = [i.venue, i.editors ? "Editör: " + i.editors : "", i.pages ? "ss. " + i.pages : "",
                  i.isbn ? "ISBN " + i.isbn : "", i.date, i.year].filter(Boolean).join(" · ");
    const key = [i.title, i.chapter, i.authors, i.venue, i.tags].join(" ").toLowerCase();
    return `<li data-s="${esc(key)}"><h3>${t}</h3>${i.chapter ? `<p class="chapter">${esc(i.chapter)}</p>` : ""}
      ${i.authors ? `<p class="authors">${authors(i.authors)}</p>` : ""}<p class="meta">${esc(meta)}</p>
      ${i.tags ? `<span class="tag">${esc(i.tags)}</span>` : ""}</li>`;
  };
  const listHTML = s => {
    const items = s.items || [];
    if (!items.length) return `<p class="empty">Henüz kayıt yok.</p>`;
    const search = items.length > 8 ? `<input class="search" type="search" placeholder="Bu listede ara…" data-search>` : "";
    let body;
    if (s.groupByYear) {
      const g = {};
      items.forEach(i => { const y = i.year || "Tarihsiz"; (g[y] = g[y] || []).push(i); });
      body = Object.keys(g).sort((a, b) => b - a).map(y =>
        `<div class="grp"><h2>${esc(y)}</h2><ul class="items">${g[y].map(itemHTML).join("")}</ul></div>`).join("");
    } else body = `<ul class="items">${items.map(itemHTML).join("")}</ul>`;
    return search + `<div data-list>${body}</div>`;
  };
  const teachingHTML = s => (s.items || []).map(t =>
    `<div class="term"><h2>${esc(t.term)} · ${esc(t.level || "")}</h2><table>${(t.courses || []).map(c =>
      `<tr><td>${esc(c[0])}</td><td>${c[1] != null ? esc(c[1]) + " saat" : ""}</td></tr>`).join("")}</table></div>`).join("")
    || `<p class="empty">Henüz kayıt yok.</p>`;
  const cvHTML = () => `<h1>${esc(C.cv.title || "Özgeçmiş")}</h1>` +
    (C.cv.pdf ? `<p><a href="${esc(C.cv.pdf)}">CV'yi PDF olarak indir</a></p>` : "") +
    (C.cv.blocks || []).map(b => `<h2>${esc(b.heading)}</h2>` + b.items.map(i =>
      `<div class="cv-item"><div class="when">${esc(i.when)}</div><div>${esc(i.what)}${i.note ? `<span class="note">${esc(i.note)}</span>` : ""}</div></div>`).join("")).join("");
  const homeHTML = () => {
    const h = C.home;
    let out = `<h1>${esc(h.heading)}</h1>` + (h.paragraphs || []).map(p => `<p>${esc(p)}</p>`).join("");
    if (h.showCounts) out += `<div class="counts">${sections.filter(s => s.type === "list" && (s.items || []).length)
      .map(s => `<a href="#${esc(s.id)}"><b>${s.items.length}</b>${esc(s.title)}</a>`).join("")}</div>`;
    return out;
  };
  function route() {
    const id = location.hash.slice(1) || "home";
    const s = sections.find(x => x.id === id);
    let html;
    if (id === "cv" && C.cv && C.cv.show !== false) html = cvHTML();
    else if (s) html = `<h1>${esc(s.title)}</h1>${s.intro ? `<p class="intro">${esc(s.intro)}</p>` : ""}` +
      (s.type === "teaching" ? teachingHTML(s) : listHTML(s));
    else html = homeHTML();
    const content = $("content");
    content.innerHTML = html;
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      content.animate(
        [{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }],
        { duration: 260, easing: "ease-out" }
      );
    }
    const inp = document.querySelector("[data-search]");
    if (inp) inp.oninput = () => {
      const q = inp.value.toLowerCase().trim();
      document.querySelectorAll("[data-list] li").forEach(li => li.style.display = li.dataset.s.includes(q) ? "" : "none");
      document.querySelectorAll(".grp").forEach(g => g.style.display = [...g.querySelectorAll("li")].some(l => l.style.display !== "none") ? "" : "none");
    };
    document.querySelectorAll(".nav-links a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
    closeMenu();
    window.scrollTo(0, 0);
  }
  addEventListener("hashchange", route);
  route();
})();
