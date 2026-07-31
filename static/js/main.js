(function () {
  "use strict";

  // Header scroll state
  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 12) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i * 60, 360) + "ms";
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // Tabs (Others page) with animated sliding indicator
  var tabsWrap = document.querySelector(".tabs");
  if (tabsWrap) {
    var buttons = Array.from(tabsWrap.querySelectorAll("button"));
    var panels = Array.from(document.querySelectorAll(".panel"));
    var indicator = document.createElement("span");
    indicator.className = "tab-indicator";
    tabsWrap.appendChild(indicator);

    function moveIndicator(btn) {
      indicator.style.width = btn.offsetWidth + "px";
      indicator.style.transform = "translateX(" + btn.offsetLeft + "px)";
    }

    function activate(btn) {
      buttons.forEach(function (b) { b.classList.remove("active"); });
      panels.forEach(function (p) { p.classList.remove("active"); });
      btn.classList.add("active");
      var panel = document.getElementById(btn.dataset.tab);
      if (panel) panel.classList.add("active");
      moveIndicator(btn);
    }

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () { activate(btn); });
    });

    var initial = tabsWrap.querySelector("button.active") || buttons[0];
    requestAnimationFrame(function () {
      if (initial) moveIndicator(initial);
    });
    window.addEventListener("resize", function () {
      var current = tabsWrap.querySelector("button.active");
      if (current) moveIndicator(current);
    });
  }

  // Copy email button
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var value = btn.getAttribute("data-copy");
      var original = btn.innerHTML;
      navigator.clipboard.writeText(value).then(function () {
        btn.innerHTML = "Copied!";
        setTimeout(function () { btn.innerHTML = original; }, 1600);
      });
    });
  });

  // Back to top
  var backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
