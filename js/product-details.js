/* ==========================================================================
   Gamosa — Product detail page
   Reads ?id=<product-id>, renders that product from PRODUCTS, updates the
   document title and metadata, and lists related products from the same
   category. One HTML file serves every product.
   ========================================================================== */
(function () {
  "use strict";

  var root = document.getElementById("product-root");
  if (!root) return;

  var ICONS = window.GamosaIcons;
  var params = new URLSearchParams(window.location.search);
  var product = getProduct(params.get("id") || "");

  /* ------------------------------------------------ Not found ----------- */
  if (!product) {
    document.title = "Product not found — Gamosa";
    root.innerHTML =
      '<div class="empty-state" style="margin-block:3rem">' +
        "<h1>Product not found</h1>" +
        "<p>We couldn't find that product in the Gamosa 2026 catalogue. " +
        "It may have been renamed or the link may be incomplete.</p>" +
        '<div class="btn-row btn-row--center">' +
          '<a class="btn" href="products.html">Browse All Products</a>' +
          '<a class="btn btn--wa" data-wa>' + ICONS.whatsapp + "Ask on WhatsApp</a>" +
        "</div>" +
      "</div>";
    window.GamosaWhatsApp(root);
    return;
  }

  /* ------------------------------------------------ Metadata ------------ */
  var blurb = productBlurb(product);
  var catName = categoryName(product.category);
  var pageTitle = product.name + " — " + product.price + " | Gamosa";
  var metaDesc =
    product.name + " (" + catName + ") — " + product.price + ". " + blurb;

  document.title = pageTitle;

  function setMeta(selector, value) {
    var el = document.querySelector(selector);
    if (el) el.setAttribute("content", value);
  }
  setMeta('meta[name="description"]', metaDesc);
  setMeta('meta[property="og:title"]', product.name + " | Gamosa");
  setMeta('meta[property="og:description"]', metaDesc);
  setMeta('meta[property="og:url"]', window.location.href);
  setMeta('meta[name="twitter:title"]', product.name + " | Gamosa");
  setMeta('meta[name="twitter:description"]', metaDesc);

  var ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) {
    ogImage.setAttribute(
      "content",
      new URL(product.images[0], window.location.href).href
    );
  }

  var canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", window.location.href);

  /* ------------------------------------------------ Markup -------------- */
  function esc(str) {
    return String(str).replace(/"/g, "&quot;");
  }

  var thumbsHTML = "";
  if (product.images.length > 1) {
    thumbsHTML =
      '<div class="gallery__thumbs" role="group" aria-label="Product images">' +
      product.images
        .map(function (src, i) {
          return (
            '<button type="button" class="gallery__thumb' +
            (i === 0 ? " is-active" : "") +
            '" data-index="' + i + '" aria-label="Show image ' + (i + 1) + '">' +
            '<img src="' + src + '" alt="" loading="lazy" decoding="async">' +
            "</button>"
          );
        })
        .join("") +
      "</div>";
  }

  var detailsHTML = "";
  if (product.details && product.details.length) {
    detailsHTML =
      '<div class="spec-block">' +
        "<h2>Specifications</h2>" +
        '<ul class="spec-list">' +
          product.details
            .map(function (d) {
              return "<li>" + d + "</li>";
            })
            .join("") +
        "</ul>" +
      "</div>";
  }

  var variantsHTML = "";
  if (product.variants && product.variants.length) {
    variantsHTML =
      '<div class="spec-block">' +
        "<h2>Customisable Options</h2>" +
        '<ul class="variant-list">' +
          product.variants
            .map(function (v) {
              return "<li>" + v + "</li>";
            })
            .join("") +
        "</ul>" +
      "</div>";
  }

  // Shown only where the catalogue gives no product-specific description, so
  // the line above is the category blurb rather than this item's own.
  var descNote = product.description
    ? ""
    : '<p class="note-line">Exact sizes, finishes and lead time for this piece ' +
      "are confirmed on enquiry — message us on WhatsApp and we'll send the " +
      "full details.</p>";

  root.innerHTML =
    '<nav class="breadcrumb" aria-label="Breadcrumb">' +
      '<a href="index.html">Home</a><span class="sep" aria-hidden="true">/</span>' +
      '<a href="products.html">Products</a><span class="sep" aria-hidden="true">/</span>' +
      '<a href="products.html?category=' + product.category + '">' + catName + "</a>" +
      '<span class="sep" aria-hidden="true">/</span>' +
      '<span aria-current="page">' + product.name + "</span>" +
    "</nav>" +
    '<div class="detail">' +
      '<div class="gallery">' +
        '<div class="gallery__main">' +
          '<img id="gallery-main-img" src="' + product.images[0] + '" alt="' +
            esc(product.name) + ' — ' + esc(catName) + ' by Gamosa" width="900" height="900" decoding="async">' +
        "</div>" +
        thumbsHTML +
      "</div>" +
      '<div class="detail__info">' +
        '<span class="eyebrow">' + catName + "</span>" +
        "<h1>" + product.name + "</h1>" +
        '<p class="detail__price">' + product.price +
          (product.unit ? '<span class="unit">' + product.unit + "</span>" : "") +
        "</p>" +
        '<p class="detail__desc">' + blurb + "</p>" +
        descNote +
        '<div class="detail__actions">' +
          '<a class="btn btn--wa btn--lg" data-wa data-wa-product="' + esc(product.name) + '">' +
            ICONS.whatsapp + "Order on WhatsApp</a>" +
          '<a class="btn btn--ghost btn--lg" href="products.html?category=' + product.category + '">' +
            "More in " + catName + "</a>" +
        "</div>" +
        detailsHTML +
        variantsHTML +
        '<p class="note-line">' + SITE.priceNote + "</p>" +
      "</div>" +
    "</div>";

  /* ------------------------------------------------ Gallery ------------- */
  var mainImg = document.getElementById("gallery-main-img");
  var thumbs = root.querySelectorAll(".gallery__thumb");
  thumbs.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var i = parseInt(btn.getAttribute("data-index"), 10);
      mainImg.src = product.images[i];
      thumbs.forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
    });
  });

  /* ------------------------------------------------ Related ------------- */
  var relatedWrap = document.getElementById("related-grid");
  var relatedSection = document.getElementById("related-section");
  if (relatedWrap) {
    var related = PRODUCTS.filter(function (p) {
      return p.category === product.category && p.id !== product.id;
    }).slice(0, 4);

    // Top up from other categories if this one is small.
    if (related.length < 4) {
      PRODUCTS.forEach(function (p) {
        if (related.length < 4 && p.id !== product.id && p.category !== product.category) {
          related.push(p);
        }
      });
    }

    if (related.length) {
      relatedWrap.innerHTML = related.map(window.GamosaCard).join("");
    } else if (relatedSection) {
      relatedSection.hidden = true;
    }
  }

  /* ------------------------------------------------ Structured data ----- */
  var ld = document.getElementById("product-ld");
  if (ld) {
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: blurb,
      category: catName,
      image: [new URL(product.images[0], window.location.href).href],
      brand: { "@type": "Brand", name: "Gamosa" }
    });
  }

  /* ------------------------------------------------ Wire up ------------- */
  window.GamosaWhatsApp(document);
  window.GamosaReveal(document);
})();
