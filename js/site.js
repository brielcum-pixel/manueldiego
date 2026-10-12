/* MANUEL DIEGO site behavior: mobile nav, entrance reveals, scrollspy.
   Restrained motion only. Content stays readable with reduced motion
   or without script. Legacy listing mounts retained for archive pages. */
(function () {
  "use strict";

  function setupMobileNav() {
    var button = document.querySelector("[data-menu-button]");
    var nav = document.querySelector("[data-mobile-nav]");
    if (!button || !nav) return;
    button.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      button.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
      });
    });
    nav.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        nav.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
        button.focus();
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 960 && nav.classList.contains("open")) {
        nav.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
      }
    });
  }

  function motionIsSafe() {
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function setupReveals() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length || !motionIsSafe() || !("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("reveal-on");
    var inView = function (el) {
      var r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.92 && r.bottom > 0;
    };
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { observer.observe(el); });
    items.forEach(function (el) { if (inView(el)) el.classList.add("is-in"); });
  }

  function setupScrollSpy() {
    var links = document.querySelectorAll('.site-header a[href^="#"]');
    var sections = document.querySelectorAll("section[id]");
    if (!links.length || !sections.length || !("IntersectionObserver" in window)) return;
    var byId = {};
    links.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      if (id) (byId[id] = byId[id] || []).push(link);
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) { link.removeAttribute("aria-current"); });
        (byId[entry.target.id] || []).forEach(function (link) {
          link.setAttribute("aria-current", "true");
        });
      });
    }, { rootMargin: "-38% 0px -55% 0px" });
    sections.forEach(function (section) { observer.observe(section); });
  }

  function hydrateImages() {
    var slots = window.IMAGE_SLOTS || {};
    document.querySelectorAll("[data-image-slot]").forEach(function (img) {
      var slot = img.getAttribute("data-image-slot");
      var entry = slots[slot];
      if (!entry) return;
      if (img.getAttribute("src") !== entry.file) img.src = entry.file;
      if (entry.alt) img.alt = entry.alt;
    });
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function renderPuppyCards(mountId, options) {
    var mount = document.getElementById(mountId);
    if (!mount) return;
    var puppies = window.PUPPIES || [];
    var limit = options && options.limit ? options.limit : puppies.length;
    if (!puppies.length) {
      mount.innerHTML = "";
      var empty = document.querySelector("[data-puppy-empty]");
      if (empty) empty.hidden = false;
      return;
    }
    mount.innerHTML = puppies.slice(0, limit).map(function (p) {
      var img = (p.images && p.images[0]) || { file: "assets/images/placeholder.svg", alt: "Photograph to be confirmed" };
      return (
        '<article class="listing-card">' +
          '<img src="' + escapeHtml(img.file) + '" alt="' + escapeHtml(img.alt) + '" loading="lazy">' +
          "<h3>" + escapeHtml(p.name || "[Name to be confirmed]") + "</h3>" +
        "</article>"
      );
    }).join("");
  }

  function renderAccessoryCards(mountId) {
    var mount = document.getElementById(mountId);
    if (!mount) return;
    var items = window.ACCESSORIES || [];
    if (!items.length) {
      mount.innerHTML = "";
      var empty = document.querySelector("[data-accessory-empty]");
      if (empty) empty.hidden = false;
      return;
    }
    mount.innerHTML = items.map(function (a) {
      return "<article><h3>" + escapeHtml(a.name || "[Product name to be confirmed]") + "</h3></article>";
    }).join("");
  }

  function renderOfferings(mountId) {
    var mount = document.getElementById(mountId);
    if (!mount) return;
    mount.innerHTML = "";
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupMobileNav();
    setupReveals();
    setupScrollSpy();
    hydrateImages();
    renderPuppyCards("puppy-cards", { limit: 4 });
    renderPuppyCards("puppy-cards-full", {});
    renderPuppyCards("puppy-cards-home", { limit: 2 });
    renderAccessoryCards("accessory-cards");
    renderOfferings("offering-cards");
    var year = document.querySelector("[data-year]");
    if (year) year.textContent = String(new Date().getFullYear());
  });
})();
