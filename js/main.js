/* ==========================================================================
   Gamosa — Shared site behaviour
   Loaded on every page, after js/products.js.
   1. Icons
   2. Theme (light / dark + localStorage)
   3. Header & mobile navigation
   4. Scroll reveal (IntersectionObserver)
   5. WhatsApp links
   6. Product card renderer (shared by home + products pages)
   7. Home page rendering
   ========================================================================== */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  /* ------------------------------------------------ 1. Icons ------------- */
  var ICONS = {
    whatsapp:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z"/><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.36c0-4.54 3.69-8.23 8.23-8.23 2.2 0 4.26.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.22-8.24 8.22Z"/></svg>',
    arrow:
      '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    sun:
      '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon:
      '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>',
    search:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    close:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    chevron:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    info:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.5h.01"/></svg>',
    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v2.5a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.7 2 2 0 0 1 4.1 1.5h2.5a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L7.7 9.3a16 16 0 0 0 6 6l1.2-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 7 9 6 9-6"/></svg>',
    globe:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/></svg>',
    pin:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.8"/></svg>',
    clock:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.2 1.9"/></svg>',
    spark:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l2.1 5.6L20 10.7l-5.6 2.1L12 18.4l-2.1-5.6L4 10.7l5.9-2.1L12 3Z"/></svg>',
    laser:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v6M12 22v-4M7 10.5h10l-1.5 5h-7Z"/><path d="M5 5.5 7 7.5M19 5.5 17 7.5"/></svg>',
    palette:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.9 1.8-1.9 0-1.2-1-1.8-1-2.7 0-.8.7-1.4 1.5-1.4H16a5 5 0 0 0 5-5c0-3.9-4-7-9-7Z"/><circle cx="8" cy="10" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16" cy="10" r="1"/></svg>',
    box:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 8.5 12 3.5 3 8.5v7l9 5 9-5Z"/><path d="m3 8.5 9 5 9-5M12 13.5V20.5"/></svg>',
    chat:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8Z"/></svg>'
  };

  /** Icons used for the home-page category tiles, keyed by category id. */
  var CATEGORY_ICONS = {
    keychain: ICONS.box,
    thermosteel: ICONS.box,
    corporate: ICONS.box,
    trophy: ICONS.spark,
    "indoor-signage": ICONS.palette,
    "outdoor-signage": ICONS.palette,
    "led-mirror": ICONS.spark,
    other: ICONS.palette,
    services: ICONS.laser
  };

  window.GamosaIcons = ICONS;

  /* ------------------------------------------------ 2. Theme ------------- */
  var STORAGE_KEY = "gamosa-theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  function storedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function initTheme() {
    var saved = storedTheme();
    var prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(saved || (prefersDark ? "dark" : "light"));

    var toggle = document.querySelector(".theme-toggle");
    if (!toggle) return;

    toggle.innerHTML = ICONS.sun + ICONS.moon;
    toggle.addEventListener("click", function () {
      var next =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";
      document.documentElement.classList.add("theme-transition");
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* storage unavailable (private mode) — theme still applies this visit */
      }
      window.setTimeout(function () {
        document.documentElement.classList.remove("theme-transition");
      }, 450);
    });
  }

  /* ------------------------------------------------ 3. Navigation -------- */
  function initHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initMobileMenu() {
    var burger = document.querySelector(".nav__burger");
    var menu = document.querySelector(".mobile-menu");
    if (!burger || !menu) return;

    var closeBtn = menu.querySelector(".mobile-menu__close");
    var scrim = menu.querySelector(".mobile-menu__scrim");
    var lastFocus = null;

    function open() {
      lastFocus = document.activeElement;
      menu.classList.add("is-open");
      menu.removeAttribute("aria-hidden");
      burger.setAttribute("aria-expanded", "true");
      document.body.classList.add("no-scroll");
      var first = menu.querySelector("a, button");
      if (first) first.focus();
    }

    function close() {
      menu.classList.remove("is-open");
      menu.setAttribute("aria-hidden", "true");
      burger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
      if (lastFocus) lastFocus.focus();
    }

    burger.addEventListener("click", function () {
      if (menu.classList.contains("is-open")) close();
      else open();
    });
    if (closeBtn) closeBtn.addEventListener("click", close);
    if (scrim) scrim.addEventListener("click", close);

    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) close();
    });

    // Keep focus inside the drawer while it is open.
    menu.addEventListener("keydown", function (e) {
      if (e.key !== "Tab" || !menu.classList.contains("is-open")) return;
      var items = menu.querySelectorAll("a[href], button:not([disabled])");
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  /* ------------------------------------------------ 4. Scroll reveal ----- */
  function initReveal(root) {
    var scope = root || document;
    var items = scope.querySelectorAll("[data-reveal], [data-reveal-group]");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }
  window.GamosaReveal = initReveal;

  /* ------------------------------------------------ 5. WhatsApp ---------- */
  /**
   * Wires every [data-wa] element to a wa.me link.
   * data-wa-product — optional product name for the pre-filled message.
   */
  function initWhatsAppLinks(root) {
    var scope = root || document;
    scope.querySelectorAll("[data-wa]").forEach(function (el) {
      var name = el.getAttribute("data-wa-product") || "";
      el.setAttribute("href", whatsappLink(name));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }
  window.GamosaWhatsApp = initWhatsAppLinks;

  /* ------------------------------------------------ 6. Product card ------ */
  /**
   * Returns the markup for one product card. Shared by the home page and the
   * products page so the card only ever exists in one place.
   */
  function productCardHTML(product) {
    var blurb = productBlurb(product);
    var unitLabel = product.unit ? "<small>" + product.unit + "</small>" : "";
    var href = "product.html?id=" + encodeURIComponent(product.id);

    return (
      '<article class="product-card">' +
        '<a class="product-card__media" href="' + href + '" tabindex="-1" aria-hidden="true">' +
          '<img src="' + product.images[0] + '" alt="" loading="lazy" decoding="async" width="600" height="600">' +
          '<span class="product-card__tag">' + categoryName(product.category) + "</span>" +
        "</a>" +
        '<div class="product-card__body">' +
          '<div class="product-card__title">' +
            "<h3><a href=\"" + href + "\">" + product.name + "</a></h3>" +
            '<span class="price">' + product.price + unitLabel + "</span>" +
          "</div>" +
          '<p class="product-card__desc">' + blurb + "</p>" +
          '<div class="product-card__actions">' +
            '<a class="btn btn--ghost btn--sm" href="' + href + '">View Details</a>' +
            '<a class="btn btn--wa btn--sm" data-wa data-wa-product="' + product.name.replace(/"/g, "&quot;") + '">' +
              ICONS.whatsapp + "<span>Order</span>" +
            "</a>" +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }
  window.GamosaCard = productCardHTML;

  /* ------------------------------------------------ 7. Home page --------- */
  function initHome() {
    var featuredGrid = document.getElementById("featured-grid");
    if (featuredGrid) {
      var featured = PRODUCTS.filter(function (p) {
        return p.featured;
      }).slice(0, 8);
      featuredGrid.innerHTML = featured.map(productCardHTML).join("");
    }

    var catGrid = document.getElementById("category-grid");
    if (catGrid) {
      catGrid.innerHTML = CATEGORIES.map(function (cat) {
        var count = PRODUCTS.filter(function (p) {
          return p.category === cat.id;
        }).length;
        return (
          '<a class="cat-card" href="products.html?category=' + cat.id + '">' +
            '<span class="cat-card__icon" aria-hidden="true">' +
              (CATEGORY_ICONS[cat.id] || ICONS.box) +
            "</span>" +
            '<div class="cat-card__text">' +
              "<h3>" + cat.name + "</h3>" +
              '<span class="cat-card__count">' +
                count + (count === 1 ? " product" : " products") +
              "</span>" +
            "</div>" +
          "</a>"
        );
      }).join("");
    }
  }

  /* ------------------------------------------------ 8. Contact form ------ */
  /**
   * The site has no backend. The enquiry form therefore composes a message and
   * hands it to WhatsApp — it never claims to send an email.
   */
  function initContactForm() {
    var form = document.getElementById("enquiry-form");
    if (!form) return;

    // Populate the product picker from the catalogue, grouped by category.
    var select = document.getElementById("f-product");
    if (select) {
      CATEGORIES.forEach(function (cat) {
        var group = document.createElement("optgroup");
        group.label = cat.name;
        PRODUCTS.filter(function (p) {
          return p.category === cat.id;
        }).forEach(function (p) {
          var opt = document.createElement("option");
          opt.value = p.name;
          opt.textContent = p.name + " — " + p.price;
          group.appendChild(opt);
        });
        select.appendChild(group);
      });

      // Pre-select a product if the page was reached as contact.html?product=id
      var wanted = new URLSearchParams(window.location.search).get("product");
      var match = wanted ? getProduct(wanted) : null;
      if (match) select.value = match.name;
    }

    function setError(id, hasError) {
      var field = document.getElementById(id);
      if (field && field.closest(".field")) {
        field.closest(".field").classList.toggle("has-error", hasError);
      }
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.elements.name.value.trim();
      var phone = form.elements.phone.value.trim();
      var product = form.elements.product.value;
      var qty = form.elements.qty.value.trim();
      var message = form.elements.message.value.trim();

      setError("f-name", !name);
      setError("f-message", !message);
      if (!name || !message) {
        (name ? form.elements.message : form.elements.name).focus();
        return;
      }

      var lines = ["Hello Gamosa, I would like to make an enquiry.", ""];
      lines.push("Name: " + name);
      if (phone) lines.push("Phone: " + phone);
      lines.push("Product: " + (product || "General enquiry"));
      if (qty) lines.push("Quantity: " + qty);
      lines.push("", "Message:", message);

      window.open(
        "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n")),
        "_blank",
        "noopener"
      );

      var note = document.getElementById("form-note");
      if (note) {
        note.textContent =
          "WhatsApp should have opened in a new tab with your message ready to send. " +
          "If nothing happened, allow pop-ups or use the Chat with us button below.";
      }
    });

    // Clear the error state as soon as the visitor starts fixing it.
    ["f-name", "f-message"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", function () {
          setError(id, false);
        });
      }
    });
  }

  /* ------------------------------------------------ Boot ----------------- */
  function boot() {
    initTheme();
    initHeader();
    initMobileMenu();
    initHome();
    initContactForm();

    // Fill static icon slots, e.g. <span data-icon="whatsapp"></span>
    document.querySelectorAll("[data-icon]").forEach(function (el) {
      var key = el.getAttribute("data-icon");
      if (ICONS[key]) el.innerHTML = ICONS[key];
    });

    initWhatsAppLinks();
    initReveal();

    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
