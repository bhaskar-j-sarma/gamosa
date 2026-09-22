# Icons

All icons used in the interface are defined once as inline SVG strings in the
`ICONS` object at the top of [`js/main.js`](../../js/main.js). They are injected
into any element carrying a `data-icon="<name>"` attribute, which keeps the
pages free of repeated SVG markup and avoids extra network requests.

Available names: `whatsapp`, `arrow`, `search`, `close`, `chevron`, `phone`,
`mail`, `globe`, `pin`, `spark`, `laser`, `palette`, `box`, `chat`.

```html
<span data-icon="whatsapp" aria-hidden="true"></span>
```

`whatsapp.svg` in this folder is a standalone copy of the WhatsApp glyph, kept
for use outside the pages (email signatures, print, favicons and so on).

To add an icon, put the `<svg>` markup into the `ICONS` object and reference it
by its key — no other file needs to change.
