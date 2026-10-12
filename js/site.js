/* Shared site behavior: navigation, image slots, legacy listing mounts.
   Portfolio showcase only. Presentation and navigation code. No animations. */
(function () {
  "use strict";

  function currentPage() {
    var path = window.location.pathname.split("/").pop() || "index.html";
    return path.split("?")[0];
  }

  function markActiveNav() {
    var page = currentPage();
    document.querySelectorAll("[data-nav]").forEach(function (link) {
      var target = link.getAttribute("href");
      if (target === page || (page === "" && target === "index.html")) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

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
          '<div class="pad">' +
            '<span class="status">' + escapeHtml(p.status || "Status to be confirmed") + "</span>" +
            "<h3>" + escapeHtml(p.name || "[Name to be confirmed]") + "</h3>" +
            "<p>" + escapeHtml(p.summary || "Details to be confirmed by the owner.") + "</p>" +
            '<p><a class="text-link" href="puppy.html?id=' + encodeURIComponent(p.id) + '">View profile</a></p>' +
          "</div>" +
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
      var img = (a.images && a.images[0]) || { file: "assets/images/placeholder.svg", alt: "Photograph to be confirmed" };
      return (
        '<article class="listing-card">' +
          '<img src="' + escapeHtml(img.file) + '" alt="' + escapeHtml(img.alt) + '" loading="lazy">' +
          '<div class="pad">' +
            "<h3>" + escapeHtml(a.name || "[Product name to be confirmed]") + "</h3>" +
            "<p>" + escapeHtml(a.description || "Description to be confirmed.") + "</p>" +
            '<p><a class="text-link" href="accessory.html?id=' + encodeURIComponent(a.id) + '">View details</a></p>' +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  function renderOfferings(mountId) {
    var mount = document.getElementById(mountId);
    if (!mount) return;
    var items = window.OFFERINGS || [];
    if (!items.length) {
      mount.innerHTML = "";
      var empty = document.querySelector("[data-offering-empty]");
      if (empty) empty.hidden = false;
      return;
    }
    mount.innerHTML = items.map(function (o) {
      return (
        '<article class="listing-card"><div class="pad">' +
          "<h3>" + escapeHtml(o.title || "[Offering to be confirmed]") + "</h3>" +
          "<p>" + escapeHtml(o.description || "Details to be confirmed.") + "</p>" +
        "</div></article>"
      );
    }).join("");
  }

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function renderPuppyDetail() {
    var mount = document.getElementById("puppy-detail");
    if (!mount) return;
    var id = getParam("id");
    var puppy = (window.PUPPIES || []).find(function (p) { return p.id === id; });
    if (!puppy) {
      mount.innerHTML =
        '<div class="empty-state"><h3>No verified profile found</h3>' +
        "<p>This listing is missing or has not been confirmed yet. Return to the puppy portfolio to see what is currently presented.</p>" +
        '<p><a href="puppies.html">Back to puppies</a></p></div>';
      return;
    }
    var gallery = (puppy.images || []).map(function (im) {
      return '<figure><img src="' + escapeHtml(im.file) + '" alt="' + escapeHtml(im.alt) + '" loading="lazy"></figure>';
    }).join("");
    mount.innerHTML =
      '<div class="split"><div>' +
        '<span class="status">' + escapeHtml(puppy.status || "Status to be confirmed") + "</span>" +
        "<h1>" + escapeHtml(puppy.name) + "</h1>" +
        "<p class=\"lede\">" + escapeHtml(puppy.summary || "") + "</p>" +
        '<p><a href="puppies.html">Back to puppies</a></p>' +
      "</div><div>" +
        '<figure class="photo"><img src="' + escapeHtml((puppy.images && puppy.images[0] || {}).file || "assets/images/placeholder.svg") + '" alt="' + escapeHtml((puppy.images && puppy.images[0] || {}).alt || "Photograph to be confirmed") + '"></figure>' +
        '<div class="gallery">' + gallery + "</div>" +
      "</div></div>";
  }

  function renderAccessoryDetail() {
    var mount = document.getElementById("accessory-detail");
    if (!mount) return;
    var id = getParam("id");
    var item = (window.ACCESSORIES || []).find(function (a) { return a.id === id; });
    if (!item) {
      mount.innerHTML =
        '<div class="empty-state"><h3>No verified product found</h3>' +
        "<p>This product is missing or has not been confirmed yet.</p>" +
        '<p><a href="accessories.html">Back to accessories</a></p></div>';
      return;
    }
    mount.innerHTML =
      '<div class="split"><div>' +
        "<h1>" + escapeHtml(item.name) + "</h1>" +
        "<p class=\"lede\">" + escapeHtml(item.description || "") + "</p>" +
        '<p><a href="accessories.html">Back to accessories</a></p>' +
      "</div><div>" +
        '<figure class="photo"><img src="' + escapeHtml((item.images && item.images[0] || {}).file || "assets/images/placeholder.svg") + '" alt="' + escapeHtml((item.images && item.images[0] || {}).alt || "Photograph to be confirmed") + '"></figure>' +
      "</div></div>";
  }

  document.addEventListener("DOMContentLoaded", function () {
    markActiveNav();
    setupMobileNav();
    hydrateImages();
    renderPuppyCards("puppy-cards", { limit: 4 });
    renderPuppyCards("puppy-cards-full", {});
    renderPuppyCards("puppy-cards-home", { limit: 2 });
    renderAccessoryCards("accessory-cards");
    renderOfferings("offering-cards");
    renderPuppyDetail();
    renderAccessoryDetail();
    var year = document.querySelector("[data-year]");
    if (year) year.textContent = String(new Date().getFullYear());
  });
})();
