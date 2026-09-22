# Gamosa — Static E-commerce Website

A premium, responsive static storefront for **Gamosa — Gifting & Branding
Solution**, built with plain HTML5, CSS3 and vanilla JavaScript. No frameworks,
no build step, no backend. Orders are placed through WhatsApp.

All product names, prices, descriptions and photographs come from the
**Gamosa Collection 2026** catalogue. The founder's name and the business
address were supplied separately. Nothing has been invented — where a detail is
still missing (business hours, social media), the site shows a clearly marked
placeholder instead.

---

## Running it

There is nothing to install or compile. Because the pages read `?id=` and
`?category=` query strings, open them through a web server rather than
double-clicking the files:

```bash
# Python (any OS)
python -m http.server 8000

# or Node
npx serve .
```

Then visit <http://localhost:8000>.

---

## Project structure

```
Gamosa/
├── index.html              Home — hero, categories, featured, vision, why-us, CTA
├── products.html           All 60 products with search, filter and sort
├── product.html            One reusable detail page: product.html?id=<product-id>
├── contact.html            Contact details + WhatsApp enquiry form
│
├── css/
│   ├── style.css           Design tokens, layout, components, light + dark themes
│   ├── responsive.css      Breakpoints: 1600 / 1280 / 1100 / 1024 / 880 / 768 / 560 / 400 / 340
│   └── animations.css      Keyframes, scroll reveal, reduced-motion support
│
├── js/
│   ├── products.js         SINGLE SOURCE OF TRUTH — catalogue data + shared helpers
│   ├── main.js             Theme, navigation, reveal, icons, card renderer, home, contact form
│   ├── products-page.js    Search / category filter / sort on products.html
│   └── product-details.js  Renders product.html from ?id=, plus related products
│
├── assets/
│   ├── images/
│   │   ├── products/       One image per product, named <product-id>.svg
│   │   └── branding/       logo.svg, favicon.svg, og-cover.svg
│   └── icons/              Standalone icon copies + notes (UI icons live in main.js)
│
└── README.md
```

Scripts must load in this order on every page — `products.js` first, then
`main.js`, then any page-specific script:

```html
<script src="js/products.js"></script>
<script src="js/main.js"></script>
<script src="js/products-page.js"></script>   <!-- products.html only -->
```

---

## Changing things

### The WhatsApp number

One place only — the top of `js/products.js`:

```js
const WHATSAPP_NUMBER = "918486294198";   // international format, digits only
```

Every "Order on WhatsApp" button is generated from it. Any `<a>` carrying
`data-wa` is wired automatically; add `data-wa-product="Product Name"` to
pre-fill the product in the message:

```
Hello, I am interested in ordering Metal Keychain.
Please provide availability and order details.
```

The plain `href="https://wa.me/..."` in the HTML is a no-JavaScript fallback.
If you change the number, update those fallback links too (find and replace
`wa.me/918486294198` across the four HTML files).

### Products

Everything lives in the `PRODUCTS` array in `js/products.js`. Add an object and
it appears on the products page, in search, in the filters, in the contact
form's product picker and at `product.html?id=<your-id>` — no HTML changes.

```js
{
  id: "product-id",                      // also the image filename
  name: "Product Name",
  category: "keychain",                  // must match a CATEGORIES id
  price: "₹999*",                        // shown exactly as written
  priceValue: 999,                       // numeric, used for sorting only
  unit: "",                              // "" | "per sqft" | "per piece"
  description: "Short description",      // "" falls back to the category intro
  details: ["Material: …", "Finish: …"], // rendered as Specifications
  variants: ["Size", "Shape"],           // optional
  images: ["assets/images/products/product-id.svg"],
  featured: false                        // true shows it on the home page
}
```

Exactly eight products carry `featured: true`, one per category, and the home
page renders the first eight it finds.

### Categories

The `CATEGORIES` array holds the nine catalogue sections. `intro` is the line
printed on that catalogue page and is reused as the fallback blurb for products
that have no description of their own. Category tiles on the home page link to
`products.html?category=<id>`, which the products page reads on load.

### Contact details

Phone, email, website, GSTIN, founder and address live in the `SITE` object in
`js/products.js` **and** in the page markup (header, footer, contact page).
`businessHours` and `social` are still empty — fill them in `SITE` and replace
the matching placeholder in `contact.html` once confirmed.

The address (Rangmahal, North Guwahati, Guwahati, Kamrup, Assam — 781030) also
appears in a `LocalBusiness` JSON-LD block in the `<head>` of `contact.html`,
which is what search engines read for a business listing. If the address
changes, update it in all three places: `SITE`, the contact page's address card
(including its Google Maps link), and that JSON-LD block.

### Type size

The whole site is sized in `rem`, so `html { font-size }` at the top of
`css/style.css` scales all text together. It is set to `110%`; raise or lower
that one value to adjust the overall size. Using a percentage rather than a
fixed pixel value means a visitor who has enlarged text in their own browser
still gets the larger size.

### The founder section

"A Note From the Founder" on the home page shows `assets/images/founder.jpg`
beside a pull quote, signed **Ujjal Moni Bordoloi, Founder**.

⚠️ **The two paragraphs there are draft copy, not his words.** They were written
from the catalogue, but they now carry his signature, so they read as his. An
HTML comment in `index.html` marks the block. Replace them with his actual
message before the site goes live. The pull quote itself is genuine — it is the
catalogue's own closing line, *"Your Vision, Crafted."*

---

## Product images

All 60 photographs are the real ones, lifted straight out of the catalogue PDF
and saved as `assets/images/products/<product-id>.jpeg`. They were extracted
with PyMuPDF: catalogue pages 2–11 each hold a 3×2 grid of six products, and
the grid is read left-to-right, top row then bottom row, which matches the order
of `PRODUCTS` in `js/products.js` exactly.

Two details worth knowing if you ever re-run the extraction:

- Rows must be found by sorting the six images on each page by **vertical
  centre** and splitting into two groups of three. A fixed y-threshold gets
  pages 5, 7 and 11 wrong, because a tall image in the bottom row starts higher
  up the page than a short one in the top row.
- `silk-gamosa.jpg` is the one image with an `/SMask` (transparency). Its raw
  bytes render black where the page should show through, so it was composited
  over white by hand.

The catalogue's own resolution is the limit here: most photos are around
220–290px square, shown at roughly 300px on a product card. They are sharp
enough at normal zoom but slightly soft on a high-DPI screen. **If you have the
original photographs, they are worth dropping in** — save each as
`assets/images/products/<product-id>.jpg` at around 800×800 and update that
product's `images` array. For multiple angles, list several paths and
`product.html` shows a thumbnail gallery automatically.

`assets/images/branding/` holds the four cover-collage photos used by the
home-page hero (`hero-mirror`, `hero-keychain`, `hero-merch`, `hero-signage`, at
a higher 368px). The founder portrait lives at `assets/images/founder.jpg`.

One thing still worth replacing: `og-cover.svg`, used for link previews. Most
social platforms do not render SVG — export a 1200×630 JPG or PNG over it and
the `og:image` tags will pick it up unchanged.

---

## Features

- **Light / dark theme** with the choice stored in `localStorage` under
  `gamosa-theme`, defaulting to the system preference. An inline script in each
  `<head>` applies it before first paint so there is no flash.
- **Search** across product names, descriptions, categories and specifications;
  every typed word must match.
- **Category filter and sort** (catalogue order, price, name) reflected in the
  URL, so a filtered view can be linked or bookmarked.
- **WhatsApp ordering** from the hero, every product card, the detail page, the
  contact page, the footer and a floating button.
- **Contact form** that composes a message and opens WhatsApp. It does not send
  email and does not claim to — there is no backend.
- **Accessibility**: semantic landmarks, one `<h1>` per page, skip link, visible
  focus rings, keyboard-operable menu with focus trapping and Escape to close,
  `aria-live` result counts, alt text on every image.
- **Reduced motion**: all animation collapses under
  `@media (prefers-reduced-motion: reduce)`.
- **Performance**: no libraries, lazy-loaded images, `width`/`height` on images
  to avoid layout shift, CSS-driven animation. Only Google Fonts is external,
  and the pages fall back to Georgia / system sans if it is unavailable.

---

## Verified

- All 60 catalogue products present across 9 categories, matching the PDF.
- Unique product ids; every `images[0]` path resolves to a real file on disk.
- Image-to-product mapping spot-checked against the catalogue pages, including
  all three pages whose row ordering was initially wrong.
- All four pages: local links and assets resolve, required script hooks exist,
  every `<img>` has alt text, script order correct, every WhatsApp link has a
  no-JS fallback.
- All four JavaScript files pass `node --check`.

Not yet verified in a real browser — the machine this was built on has no
browser automation available, so visual layout across the breakpoints and the
absence of runtime console errors should be spot-checked once by opening the
site locally.

---

## Future backend

The data layer is deliberately isolated. To move to a database, replace the
`PRODUCTS` and `CATEGORIES` constants in `js/products.js` with a `fetch()` of
the same shapes and re-run the render functions — `productCardHTML()` in
`main.js`, plus the entry points in `products-page.js` and `product-details.js`.
No other file assumes where the data came from.

Adding a cart or payment gateway would mean introducing state that the current
WhatsApp-only flow does not have; the product card and detail templates are the
places where "Add to cart" would sit beside "Order on WhatsApp".
