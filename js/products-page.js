/* ==========================================================================
   Gamosa — Products page
   Search + category filter + sorting over the PRODUCTS array in products.js.
   The active filter is reflected in the URL (?category=…&q=…) so category
   links from the home page land pre-filtered and results stay shareable.
   ========================================================================== */
(function () {
  "use strict";

  var grid = document.getElementById("products-grid");
  if (!grid) return;

  var chipsWrap = document.getElementById("category-chips");
  var sortSelect = document.getElementById("sort-select");
  var searchInput = document.getElementById("search-input");
  var clearBtn = document.getElementById("search-clear");
  var countEl = document.getElementById("results-count");
  var emptyEl = document.getElementById("empty-state");
  var resetBtn = document.getElementById("reset-filters");

  var state = {
    category: "all",
    query: "",
    sort: "default"
  };

  /* ------------------------------------------------ URL state ------------ */
  function readURL() {
    var params = new URLSearchParams(window.location.search);
    var cat = params.get("category");
    if (cat && (cat === "all" || getCategory(cat))) state.category = cat;
    var q = params.get("q");
    if (q) state.query = q;
    var sort = params.get("sort");
    if (sort) state.sort = sort;
  }

  function writeURL() {
    var params = new URLSearchParams();
    if (state.category !== "all") params.set("category", state.category);
    if (state.query) params.set("q", state.query);
    if (state.sort !== "default") params.set("sort", state.sort);
    var qs = params.toString();
    var url = window.location.pathname + (qs ? "?" + qs : "");
    window.history.replaceState(null, "", url);
  }

  /* ------------------------------------------------ Filter chips --------- */
  function renderChips() {
    var html =
      '<button type="button" class="chip" data-cat="all">All Products</button>';
    html += CATEGORIES.map(function (c) {
      return (
        '<button type="button" class="chip" data-cat="' + c.id + '">' +
        c.name +
        "</button>"
      );
    }).join("");
    chipsWrap.innerHTML = html;

    chipsWrap.addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      state.category = btn.getAttribute("data-cat");
      update();
    });
  }

  function syncChips() {
    chipsWrap.querySelectorAll(".chip").forEach(function (btn) {
      var active = btn.getAttribute("data-cat") === state.category;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  /* ------------------------------------------------ Filtering ------------ */
  function matchesQuery(product, q) {
    if (!q) return true;
    var haystack = [
      product.name,
      productBlurb(product),
      categoryName(product.category),
      (product.details || []).join(" ")
    ]
      .join(" ")
      .toLowerCase();
    // Every whitespace-separated term must appear somewhere.
    return q
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean)
      .every(function (term) {
        return haystack.indexOf(term) !== -1;
      });
  }

  function currentList() {
    var list = PRODUCTS.filter(function (p) {
      return (
        (state.category === "all" || p.category === state.category) &&
        matchesQuery(p, state.query)
      );
    });

    if (state.sort === "price-asc") {
      list.sort(function (a, b) {
        return a.priceValue - b.priceValue;
      });
    } else if (state.sort === "price-desc") {
      list.sort(function (a, b) {
        return b.priceValue - a.priceValue;
      });
    } else if (state.sort === "name-asc") {
      list.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    }
    return list;
  }

  /* ------------------------------------------------ Render -------------- */
  var renderTimer = null;

  function render(list) {
    grid.classList.add("is-filtering");
    window.clearTimeout(renderTimer);
    renderTimer = window.setTimeout(function () {
      grid.innerHTML = list.map(window.GamosaCard).join("");
      grid.classList.remove("is-filtering");
      window.GamosaWhatsApp(grid);
    }, 160);
  }

  function update() {
    var list = currentList();

    syncChips();
    if (sortSelect) sortSelect.value = state.sort;
    if (searchInput && searchInput.value !== state.query) {
      searchInput.value = state.query;
    }
    if (clearBtn) clearBtn.classList.toggle("is-visible", !!state.query);

    var label =
      list.length +
      (list.length === 1 ? " product" : " products") +
      (state.category === "all" ? "" : " in " + categoryName(state.category)) +
      (state.query ? ' matching "' + state.query + '"' : "");
    if (countEl) countEl.textContent = label;

    var noResults = list.length === 0;
    if (emptyEl) emptyEl.hidden = !noResults;
    grid.hidden = noResults;

    render(list);
    writeURL();
  }

  /* ------------------------------------------------ Events -------------- */
  function debounce(fn, wait) {
    var t;
    return function () {
      var args = arguments;
      window.clearTimeout(t);
      t = window.setTimeout(function () {
        fn.apply(null, args);
      }, wait);
    };
  }

  if (searchInput) {
    searchInput.addEventListener(
      "input",
      debounce(function () {
        state.query = searchInput.value.trim();
        update();
      }, 200)
    );
    // Enter should not reload the page — the list is already live.
    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") e.preventDefault();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      state.query = "";
      if (searchInput) searchInput.value = "";
      update();
      if (searchInput) searchInput.focus();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      state.sort = sortSelect.value;
      update();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      state.category = "all";
      state.query = "";
      state.sort = "default";
      if (searchInput) searchInput.value = "";
      update();
    });
  }

  /* ------------------------------------------------ Init ---------------- */
  readURL();
  renderChips();
  update();
})();
