/* Renderização do site — data-driven a partir de CONTENT (content.js) */
(function () {
  const REPO = "https://github.com/SEU_USUARIO/algebra-linear-python-pt-br";
  const flat = [];
  CONTENT.forEach(ch => ch.sections.forEach(s => flat.push({ ...s, chap: ch })));

  const $ = sel => document.querySelector(sel);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

  /* ---------- progresso (localStorage) ---------- */
  const KEY = "alfp-progress";
  const loadProg = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  const saveProg = p => localStorage.setItem(KEY, JSON.stringify(p));
  let progress = loadProg();

  /* ---------- sidebar ---------- */
  function buildSidebar() {
    const nav = $("#nav");
    nav.innerHTML = "";
    CONTENT.forEach(ch => {
      const wrap = el("div", "chap");
      wrap.dataset.chap = ch.id;
      const btn = el("button", null,
        `<span class="cnum">${ch.num}</span><span>${ch.titlePt}</span><span class="arrow">▸</span>`);
      btn.onclick = () => wrap.classList.toggle("open");
      const list = el("div", "seclist");
      ch.sections.forEach(s => {
        const a = el("a", null, `<span class="scode">${s.code}</span><span>${s.title}</span>`);
        a.href = "#" + s.id;
        a.dataset.sec = s.id;
        list.appendChild(a);
      });
      wrap.appendChild(btn); wrap.appendChild(list);
      nav.appendChild(wrap);
    });
  }

  /* ---------- home ---------- */
  function renderHome() {
    const done = Object.values(progress).filter(Boolean).length;
    const total = flat.length;
    const pct = Math.round((done / total) * 100);
    const m = $("#main");
    m.innerHTML = "";

    const hero = el("section", "hero", `
      <span class="badge">IFAM · Estudo Interativo</span>
      <h1>Álgebra Linear com <span class="grad">Python</span></h1>
      <p>Curso interativo baseado em <b>“Linear Algebra Done Right”</b> (Sheldon Axler, 4ª ed.).
      Cada seção do livro traz teoria em LaTeX, teoremas e demonstrações executáveis em Python
      com NumPy, SciPy e SymPy.</p>
      <div class="cta">
        <a class="btn primary" href="#01A">▶ Começar pelo Capítulo 1</a>
        <a class="btn ghost" href="${REPO}" target="_blank" rel="noopener">Ver notebooks no GitHub</a>
      </div>`);
    m.appendChild(hero);

    const stats = el("div", "stats");
    stats.innerHTML = `
      <div class="stat"><b>9</b><span>Capítulos</span></div>
      <div class="stat"><b>${total}</b><span>Seções / notebooks</span></div>
      <div class="stat"><b>${total}</b><span>Demonstrações em Python</span></div>
      <div class="stat"><b>${pct}%</b><span>Seu progresso</span></div>`;
    m.appendChild(stats);

    m.appendChild(el("h2", "", "Capítulos"));
    const grid = el("div", "grid");
    CONTENT.forEach(ch => {
      const d = ch.sections.filter(s => progress[s.id]).length;
      const p = Math.round((d / ch.sections.length) * 100);
      const card = el("div", "card", `
        <div class="cn">Capítulo ${ch.num} · p. ${ch.pages}</div>
        <h3>${ch.titlePt}</h3>
        <div class="en">${ch.title}</div>
        <div class="meta">
          <span class="pill">${ch.sections.length} seções</span>
          <span class="pill">${d}/${ch.sections.length} concluídas</span>
        </div>
        <div class="bar"><i style="width:${p}%"></i></div>`);
      card.onclick = () => { location.hash = ch.sections[0].id; };
      grid.appendChild(card);
    });
    m.appendChild(grid);

    // referências
    m.appendChild(el("h2", "", "Referências"));
    const refs = el("div", "refgrid");
    [
      ["Linear Algebra Done Right", "Axler · site oficial", "https://linear.axler.net/"],
      ["3Blue1Brown", "Essence of Linear Algebra", "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVVeG-krI70vL"],
      ["MIT 18.06 — Strang", "Introduction to Linear Algebra", "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"],
      ["NumPy", "Documentação", "https://numpy.org/doc/stable/"],
      ["SymPy", "Documentação", "https://docs.sympy.org/latest/index.html"],
      ["Hefferon — Linear Algebra", "Livro gratuito", "https://hefferon.net/linearalgebra/"],
    ].forEach(([t, s, u]) => {
      const a = el("a", null, `<b>${t}</b><span>${s}</span>`);
      a.href = u; a.target = "_blank"; a.rel = "noopener";
      refs.appendChild(a);
    });
    m.appendChild(refs);

    document.title = "Álgebra Linear com Python · IFAM";
    typeset();
  }

  /* ---------- seção ---------- */
  function renderSection(id) {
    const idx = flat.findIndex(s => s.id === id);
    if (idx < 0) return renderHome();
    const s = flat[idx];
    const prev = flat[idx - 1], next = flat[idx + 1];
    const m = $("#main");
    m.innerHTML = "";

    const art = el("article", "article");
    art.innerHTML = `
      <div class="crumbs"><a href="#">Início</a> › Capítulo ${s.chap.num} — ${s.chap.titlePt} › <b>${s.code}</b></div>
      <h1>${s.code} · ${s.title}</h1>
      <div class="sub">${s.en} — páginas ${s.pages}</div>
      <div class="tags">
        <span class="tag nb">📓 ${s.nb}</span>
        ${s.tags.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
      <h2>Teoria</h2>
      ${s.body}
      <h2>Demonstração em Python</h2>`;
    art.appendChild(codeBlock(s.code + " · " + s.nb, s.py));

    // marcar concluída
    const done = !!progress[s.id];
    const row = el("label", "done-row",
      `<input type="checkbox" ${done ? "checked" : ""}> <span>Marcar seção como concluída</span>`);
    row.querySelector("input").onchange = e => {
      progress[s.id] = e.target.checked; saveProg(progress); updateActive();
    };
    art.appendChild(row);

    const nb = el("div", "navbtns");
    if (prev) { const a = el("a", "prev", `<small>Anterior</small>${prev.code} · ${prev.title}`); a.href = "#" + prev.id; nb.appendChild(a); } else nb.appendChild(el("span"));
    if (next) { const a = el("a", "next", `<small>Próxima</small>${next.code} · ${next.title}`); a.href = "#" + next.id; nb.appendChild(a); }
    art.appendChild(nb);

    m.appendChild(art);
    document.title = `${s.code} ${s.title} · IFAM`;

    // abrir capítulo correspondente no menu
    document.querySelectorAll(".chap").forEach(c => c.classList.toggle("open", c.dataset.chap === s.chap.id));
    m.scrollTo?.(0, 0); window.scrollTo(0, 0);
    highlight(); typeset(); updateActive();
  }

  function codeBlock(title, code) {
    const w = el("div", "codewrap");
    const head = el("div", "chead",
      `<span class="dot" style="background:#ff5f56"></span>
       <span class="dot" style="background:#ffbd2e"></span>
       <span class="dot" style="background:#27c93f"></span>
       <span>${title}</span>
       <button class="copy">copiar</button>`);
    const pre = el("pre");
    const c = el("code", "language-python");
    c.textContent = code;
    pre.appendChild(c); w.appendChild(head); w.appendChild(pre);
    head.querySelector(".copy").onclick = ev => {
      navigator.clipboard.writeText(code);
      ev.target.textContent = "copiado ✓";
      setTimeout(() => ev.target.textContent = "copiar", 1500);
    };
    return w;
  }

  /* ---------- busca ---------- */
  function search(q) {
    q = q.trim().toLowerCase();
    document.querySelectorAll(".seclist a").forEach(a => {
      const s = flat.find(x => x.id === a.dataset.sec);
      const hay = (s.title + s.en + s.code + s.tags.join(" ") + s.chap.titlePt).toLowerCase();
      a.style.display = !q || hay.includes(q) ? "" : "none";
    });
    if (q) document.querySelectorAll(".chap").forEach(c => c.classList.add("open"));
  }

  function updateActive() {
    const id = location.hash.slice(1);
    document.querySelectorAll(".seclist a").forEach(a => {
      a.classList.toggle("active", a.dataset.sec === id);
    });
  }

  /* ---------- libs externas ---------- */
  function highlight() { if (window.hljs) document.querySelectorAll("pre code").forEach(b => hljs.highlightElement(b)); }
  function typeset() { if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise(); }

  /* ---------- roteamento ---------- */
  function route() {
    const id = location.hash.slice(1);
    $("#sidebar").classList.remove("open");
    if (!id) renderHome(); else renderSection(id);
  }

  window.addEventListener("hashchange", route);
  document.addEventListener("DOMContentLoaded", () => {
    buildSidebar();
    $("#q").addEventListener("input", e => search(e.target.value));
    $("#menuBtn").onclick = () => $("#sidebar").classList.toggle("open");
    $("#homeLink").onclick = e => { e.preventDefault(); location.hash = ""; route(); };
    route();
  });
})();
