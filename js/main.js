/* Merender seluruh halaman dari data/site.js.
   Untuk mengubah isi, edit data/site.js — file ini tidak perlu disentuh. */
(function () {
  "use strict";
  var S = window.SITE, I = window.ICONS || {};
  if (!S) return;
  var P = S.profile;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var $ = function (q, r) { return (r || document).querySelector(q); };
  var $$ = function (q, r) { return Array.prototype.slice.call((r || document).querySelectorAll(q)); };
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (html !== undefined) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function out(href, label, cls) { return '<a' + (cls ? ' class="' + cls + '"' : "") + ' href="' + esc(href) + '" target="_blank" rel="noopener">' + label + "</a>"; }
  function icon(key, color) {
    var i = I[key]; if (!i) return "";
    return '<svg viewBox="0 0 24 24" aria-hidden="true"' + (color ? ' fill="' + (i.hex === "#FFFFFF" || i.hex === "#000000" ? "#0e1a2b" : i.hex) + '"' : "") + '><path d="' + i.path + '"/></svg>';
  }

  /* ---------- loader ---------- */
  var loader = $("#loader");
  (function () {
    if (!loader) return;
    var fill = $("#loader-fill"), count = $("#loader-count");
    var done = function () { loader.classList.add("done"); document.documentElement.classList.add("ready"); };
    if (reduce) { done(); return; }
    var t0 = performance.now(), D = 1300;
    (function tick(t) {
      var p = Math.min(1, (t - t0) / D), e = p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2, n = Math.round(e * 100);
      fill.style.width = n + "%"; count.textContent = ("00" + n).slice(-3);
      if (p < 1) requestAnimationFrame(tick); else setTimeout(done, 180);
    })(t0);
    setTimeout(done, 3500); // safety
  })();

  /* ---------- nav ---------- */
  var nav = $("#nav"), mb = $("#menu-btn");
  mb.addEventListener("click", function () { var o = nav.classList.toggle("open"); mb.setAttribute("aria-expanded", o ? "true" : "false"); mb.textContent = o ? "Tutup" : "Menu"; });
  $$(".nav-links a").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); mb.setAttribute("aria-expanded", "false"); mb.textContent = "Menu"; }); });
  var av = $("#availability");
  if (S.availability) av.lastElementChild.textContent = S.availability; else av.classList.add("hide");

  /* ---------- profile bindings ---------- */
  var parts = P.name.split(" ");
  var binds = { first: parts.slice(0, -1).join(" "), last: parts[parts.length - 1] };
  $$("[data-bind]").forEach(function (n) { var k = n.getAttribute("data-bind"); var v = binds[k] || P[k]; if (v) n.textContent = v; });
  var mailto = "mailto:" + P.email + "?subject=" + encodeURIComponent("Halo " + P.nickname + ", ada proyek");
  var hrefs = { cv: P.cv, sketchfab: P.sketchfab };
  $$("[data-href]").forEach(function (n) { var v = hrefs[n.getAttribute("data-href")]; if (v) n.href = v; else n.hidden = true; });
  $$("[data-src]").forEach(function (n) { var v = P[n.getAttribute("data-src")]; if (v) n.src = v; else n.remove(); });
  $("#year").textContent = new Date().getFullYear();

  var socials = [["LinkedIn", P.linkedin, "linkedin"], ["Sketchfab", P.sketchfab, "sketchfab"], ["GitHub", P.github, "github"]];
  $("#socials").innerHTML = socials.filter(function (s) { return s[1]; }).map(function (s) {
    return '<li><a href="' + esc(s[1]) + '" target="_blank" rel="noopener" aria-label="' + s[0] + '">' + icon(s[2]) + "</a></li>";
  }).join("") + '<li><a href="mailto:' + esc(P.email) + '" aria-label="Email"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4 7.3V17h16V7.3zM5.2 7l6.8 4.2L18.8 7z"/></svg></a></li>';

  /* ---------- stats + quote ---------- */
  $("#stats").innerHTML = (S.stats || []).map(function (s) {
    return '<li class="stat"><span class="stat-value" data-count="' + esc(s.value) + '">' + esc(s.value) + '</span><span class="stat-label">' + esc(s.label) + '</span><span class="stat-note">' + esc(s.note || "") + "</span></li>";
  }).join("");
  if (S.quote) $("#quote").textContent = "“" + S.quote + "”"; else $(".stat-quote").remove();

  /* count-up when stats enter view */
  function countUp(n) {
    var raw = n.getAttribute("data-count"), m = raw.match(/^(\d+)(.*)$/); if (!m || reduce) return;
    var target = +m[1], suf = m[2], t0 = performance.now();
    (function step(t) { var p = Math.min(1, (t - t0) / 1100), e = 1 - Math.pow(1 - p, 3); n.textContent = Math.round(e * target) + suf; if (p < 1) requestAnimationFrame(step); })(t0);
  }

  /* ---------- project cards + filter ---------- */
  function kindGroup(k) { k = (k || "").toLowerCase(); if (k.indexOf("ar") === 0) return "AR"; if (k.indexOf("virtual") >= 0 || k.indexOf("vr") >= 0) return "VR"; return "Simulasi"; }
  function plan() {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250"><rect width="400" height="250" fill="#0f1a2b"/><g fill="#1d2c44">' +
      '<rect x="16" y="16" width="120" height="80" rx="8"/><rect x="152" y="16" width="232" height="80" rx="8"/><rect x="16" y="112" width="90" height="122" rx="8"/>' +
      '<rect x="230" y="112" width="154" height="54" rx="8"/><rect x="230" y="180" width="154" height="54" rx="8"/></g>' +
      '<g fill="#8aa0bf" font-family="sans-serif" font-size="12"><text x="28" y="38">Lobi</text><text x="164" y="38">Ruang rapat</text><text x="28" y="134">Gudang</text><text x="242" y="134">Lab AR</text><text x="242" y="202">Server</text></g>' +
      '<polyline points="76,100 76,104 168,104 168,172 300,172 300,176" fill="none" stroke="#6fb2ff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 14"/>' +
      '<circle cx="76" cy="98" r="7" fill="#fff"/><circle cx="300" cy="180" r="12" fill="#3d6ff0"/><circle cx="300" cy="180" r="4" fill="#fff"/></svg>';
    return "data:image/svg+xml," + encodeURIComponent(svg);
  }
  var cardsEl = $("#cards");
  var cards = S.projects.map(function (p, i) {
    var li = el("li", { "class": "card glass", "data-group": kindGroup(p.kind) });
    li.innerHTML =
      '<div class="card-media"><img src="' + esc(p.image || plan()) + '" alt="' + esc(p.alt || p.name) + '" loading="lazy"><span class="card-num">' + ("0" + (i + 1)).slice(-2) + "</span></div>" +
      '<div class="card-body"><h3 class="card-title">' + esc(p.name) + '</h3><p class="card-desc">' + esc(p.desc) + "</p>" +
      '<div class="tags"><span class="tag">' + esc(p.kind) + "</span>" + (p.tools || []).slice(0, 3).map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>" +
      (p.link ? out(p.link, esc(p.linkLabel || "Lihat") + " &#8599;", "text-link card-link") : "") + "</div>";
    cardsEl.appendChild(li);
    if (fine && !reduce) {
      li.addEventListener("pointermove", function (e) {
        var r = li.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        li.style.transform = "perspective(900px) rotateX(" + (-y * 6) + "deg) rotateY(" + (x * 8) + "deg) translateY(-4px)";
      });
      li.addEventListener("pointerleave", function () { li.style.transform = ""; });
    }
    return li;
  });
  var groups = ["Semua"].concat(["AR", "VR", "Simulasi"].filter(function (g) { return cards.some(function (c) { return c.getAttribute("data-group") === g; }); }));
  var filt = $("#filters");
  groups.forEach(function (g, k) {
    var b = el("button", { type: "button", "aria-pressed": k === 0 ? "true" : "false" }, g === "Semua" ? "Semua" : g);
    b.addEventListener("click", function () {
      $$("button", filt).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      cards.forEach(function (c) { c.hidden = !(g === "Semua" || c.getAttribute("data-group") === g); });
    });
    filt.appendChild(b);
  });
  if (S.demos && S.demos.length) $("#demos").innerHTML = "Video demo lainnya: " + S.demos.map(function (d) { return out(d.link, esc(d.label)); }).join(", ") + ".";

  /* ---------- skills ---------- */
  $("#expertise").innerHTML = (S.expertise || []).map(function (x) {
    return '<div><p class="exp-area">' + esc(x.area) + '</p><div class="exp-items">' + x.items.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div></div>";
  }).join("");
  $("#tech").innerHTML = (S.tech || []).map(function (t) {
    var ic = t.icon && I[t.icon] ? icon(t.icon, true) : '<span class="mono" aria-hidden="true">' + esc(t.name.slice(0, 2).toUpperCase()) + "</span>";
    return "<li>" + ic + "<span>" + esc(t.name) + "</span></li>";
  }).join("");
  var orbit = $("#orbit"), steps = S.process || [];
  steps.forEach(function (s, k) {
    var a = -Math.PI / 2 + k * 2 * Math.PI / steps.length, r = 40;
    var n = el("div", { "class": "orbit-node" }, "<b>" + (k + 1) + "</b>" + esc(s));
    n.style.left = (50 + Math.cos(a) * r) + "%"; n.style.top = (50 + Math.sin(a) * r) + "%";
    orbit.appendChild(n);
  });

  /* ---------- 3D viewer (Sketchfab) ---------- */
  var M = S.models || [];
  if (!M.length) $("#model-3d").remove();
  else (function () {
    var stage = $("#viewer-stage"), poster = $("#viewer-poster"), thumb = $("#viewer-thumb"), list = $("#viewer-list"), label = $("#viewer-play-label");
    var idx = 0, live = false, frame = null, rows;
    function src(m) { return "https://sketchfab.com/models/" + encodeURIComponent(m.uid) + "/embed?autostart=1&ui_theme=dark&ui_infos=0&ui_hint=2&dnt=1"; }
    function play() {
      var m = M[idx];
      if (!frame) { frame = el("iframe", { allow: "autoplay; fullscreen; xr-spatial-tracking", allowfullscreen: "" }); stage.appendChild(frame); }
      frame.title = "Model 3D: " + m.name; frame.src = src(m); poster.hidden = true; live = true;
    }
    function pick(i) {
      idx = i; var m = M[i];
      $("#viewer-name").textContent = m.name; $("#viewer-group").textContent = m.group || "";
      rows.forEach(function (b, k) { b.setAttribute("aria-current", k === i ? "true" : "false"); });
      if (live) play(); else { thumb.src = m.thumb || "img/saron-3d.webp"; thumb.alt = "Pratinjau model 3D " + m.name; label.textContent = "Putar " + m.name; }
    }
    rows = M.map(function (m, i) {
      var li = el("li"), b = el("button", { "class": "mrow", type: "button" });
      b.innerHTML = (m.thumb ? '<img src="' + esc(m.thumb) + '" alt="" loading="lazy" width="52" height="52">' : '<span class="mrow-tile" aria-hidden="true">' + esc(m.name.charAt(0)) + "</span>") +
        '<span><span class="mrow-name">' + esc(m.name) + '</span><span class="mrow-group">' + esc(m.group || "") + "</span></span>";
      b.addEventListener("click", function () { pick(i); });
      li.appendChild(b); list.appendChild(li); return b;
    });
    thumb.addEventListener("error", function () { if (thumb.getAttribute("src") !== "img/saron-3d.webp") thumb.src = "img/saron-3d.webp"; });
    $$("img", list).forEach(function (im) { im.addEventListener("error", function () { im.replaceWith(el("span", { "class": "mrow-tile", "aria-hidden": "true" }, esc((im.parentNode.textContent || "?").trim().charAt(0)))); }); });
    poster.addEventListener("click", play);
    pick(0);
  })();

  /* ---------- gallery ---------- */
  var strip = $("#gallery");
  S.gallery.forEach(function (g) {
    strip.appendChild(el("li", null, '<figure class="glass"><img src="' + esc(g.image) + '" alt="Render 3D: ' + esc(g.title) + '" loading="lazy"><figcaption><span class="cap-t">' + esc(g.title) + '</span><span class="cap-s">' + esc(g.tools) + "</span></figcaption></figure>"));
  });
  var cnt = $("#strip-count");
  function upd() {
    var items = $$("li", strip), first = 0;
    for (var k = 0; k < items.length; k++) if (items[k].offsetLeft - strip.offsetLeft >= strip.scrollLeft - 4) { first = k; break; }
    cnt.textContent = "Render " + (first + 1) + " dari " + items.length;
  }
  strip.addEventListener("scroll", function () { requestAnimationFrame(upd); }, { passive: true }); upd();
  $$("[data-strip]").forEach(function (b) { b.addEventListener("click", function () { strip.scrollBy({ left: +b.getAttribute("data-strip") * strip.clientWidth * .7, behavior: reduce ? "auto" : "smooth" }); }); });

  /* ---------- experience tabs + timeline ---------- */
  var tabs = $("#exp-tabs"), tl = $("#timeline");
  function showGroup(g) {
    $$("button", tabs).forEach(function (b, k) { b.setAttribute("aria-selected", k === g ? "true" : "false"); });
    tl.innerHTML = S.experience[g].items.map(function (it) {
      return '<li class="tl"><div class="tl-top"><span class="tl-role">' + esc(it.role) + '</span><span class="tl-years">' + esc(it.years) + '</span></div><p class="tl-place">' + esc(it.place) + "</p>" + (it.desc ? '<p class="tl-desc">' + esc(it.desc) + "</p>" : "") + "</li>";
    }).join("");
  }
  S.experience.forEach(function (g, k) {
    var b = el("button", { type: "button", role: "tab", "aria-selected": "false", "aria-controls": "timeline" }, esc(g.group));
    b.addEventListener("click", function () { showGroup(k); });
    tabs.appendChild(b);
  });
  showGroup(0);

  /* ---------- about ---------- */
  $("#letter").innerHTML = S.letter.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");
  $("#languages").innerHTML = "<strong>Bahasa:</strong> " + esc(S.languages);

  /* ---------- contact ---------- */
  $("#contact-rows").innerHTML = [
    ["Email", P.email && '<a href="mailto:' + esc(P.email) + '">' + esc(P.email) + "</a>"],
    ["Telepon", P.phone && '<a href="tel:' + esc(P.phone) + '">' + esc(P.phone) + "</a>"],
    ["LinkedIn", P.linkedin && out(P.linkedin, esc(P.name))],
    ["Lokasi", P.location && esc(P.location)]
  ].filter(function (r) { return r[1]; }).map(function (r) { return "<dt>" + r[0] + "</dt><dd>" + r[1] + "</dd>"; }).join("");
  $("#contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var nama = $("#f-nama").value.trim(), msg = $("#f-pesan").value.trim() || "Saya ingin berdiskusi tentang proyek.";
    window.location.href = mailto + "&body=" + encodeURIComponent("Halo " + P.nickname + ",\n\n" + msg + "\n\n" + (nama ? "Salam,\n" + nama : ""));
  });
  $("#foot-links").innerHTML = [["LinkedIn", P.linkedin], ["Sketchfab", P.sketchfab], ["GitHub", P.github]].filter(function (l) { return l[1]; })
    .map(function (l) { return out(l[1], l[0]); }).join("") + (P.cv ? '<a href="' + esc(P.cv) + '" download>CV</a>' : "");

  /* ---------- entrance reveals ---------- */
  var sets = [
    [".hero-copy > *"], [".hero-art"], [".stat"], [".work .sec-head"], [".card"], [".skills .panel"],
    ["#model-3d .sec-head", ".viewer-stage", ".viewer-side"], ["#aset-3d .sec-head", ".strip li:nth-child(-n+4)"],
    [".exp-main", ".about"], [".contact"]
  ];
  var targets = [];
  sets.forEach(function (sel) {
    var k = 0;
    sel.forEach(function (q) { $$(q).forEach(function (n) { n.classList.add("rise"); n.style.setProperty("--d", Math.min(k++, 6) * 80 + "ms"); targets.push(n); }); });
  });
  var counted = false;
  function reveal(n) {
    n.classList.add("in");
    if (!counted && n.classList.contains("stat")) { counted = true; $$("[data-count]").forEach(countUp); }
  }
  if (reduce || !("IntersectionObserver" in window)) { targets.forEach(reveal); return; }
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting || e.boundingClientRect.top < 0) { reveal(e.target); io.unobserve(e.target); } }); }, { rootMargin: "0px 0px -6% 0px" });
  targets.forEach(function (n) { io.observe(n); });
})();
