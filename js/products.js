/* ==========================================================================
   Gamosa — Product data (single source of truth)
   --------------------------------------------------------------------------
   Every product below is transcribed from the "GAMOSA COLLECTION 2026"
   catalogue. Nothing here is invented: names, prices and descriptions are
   copied from the catalogue pages. Where the catalogue gives no per-product
   description, `description` is left empty and the UI falls back to the
   category intro line printed on that catalogue page.

   To change the WhatsApp number, edit WHATSAPP_NUMBER below — it is used by
   every "Order on WhatsApp" button on the site.
   ========================================================================== */

/** WhatsApp business number in international format, digits only. */
const WHATSAPP_NUMBER = "918486294198";

/** Brand / contact details, as printed in the catalogue. */
const SITE = {
  brand: "Gamosa",
  tagline: "Gifting & Branding Solution",
  website: "www.gamosa.co",
  email: "info@gamosa.co",
  phone: "+918486294198",
  phoneDigits: "918486294198",
  gstin: "18BWWPB3649F1Z6",
  catalogue: "Gamosa Collection 2026",
  founder: "Ujjal Moni Bordoloi",
  address: {
    street: "Rangmahal, North Guwahati",
    city: "Guwahati",
    district: "Kamrup",
    state: "Assam",
    pin: "781030",
    country: "India"
  },
  priceNote:
    "Prices marked with * are the indicative rates listed in the Gamosa 2026 catalogue. Final pricing depends on your design, size and quantity — confirm on WhatsApp."
};

/** Categories, in catalogue order. `intro` is the line printed on the page. */
const CATEGORIES = [
  {
    id: "keychain",
    name: "Keychains",
    intro:
      "Discover our Keychain catalogue offering in variety of range for your need and custom premium design"
  },
  {
    id: "thermosteel",
    name: "Thermosteel & Tumblers",
    intro:
      "Discover our Thermosteel bottle catalogue offering in variety of range for your need and custom premium design with engraving and printing for a premium look"
  },
  {
    id: "corporate",
    name: "Corporate Gifts",
    intro:
      "Discover our diary catalogue offering in variety of range for your need and custom premium design with engraving and printing for a premium look"
  },
  {
    id: "trophy",
    name: "Trophies",
    intro:
      "Explore our premium Trophy collection catalogue offering variety of custom design"
  },
  {
    id: "indoor-signage",
    name: "Indoor Signages",
    intro: "Get your Best Customized Signages for Your indoor Needs."
  },
  {
    id: "outdoor-signage",
    name: "Outdoor Signages",
    intro:
      "Discover our LED branding signages catalogue for your outlet, store, showroom etc. Contact us for your custom design."
  },
  {
    id: "led-mirror",
    name: "LED Mirrors",
    intro:
      "Designed to Reflect Your Style. Premium LED mirrors, customized to your exact requirements. Choose your size, shape, lighting, design, logo, text, or branding to create a mirror that perfectly fits your space."
  },
  {
    id: "other",
    name: "Other Collection",
    intro:
      "Explore our other collection like neon sign, gamosa and corporate products"
  },
  {
    id: "services",
    name: "Services",
    intro: "Explore our other services we provide"
  }
];

/**
 * Products.
 * price      — exactly as printed in the catalogue (including the * marker)
 * priceValue — numeric rupee value, used only for sorting
 * unit       — "" | "per sqft" | "per piece"
 */
const PRODUCTS = [
  /* ---------------------------------------------------------- Keychains -- */
  {
    id: "metal-keychain",
    name: "Metal Keychain",
    category: "keychain",
    price: "₹48*",
    priceValue: 48,
    unit: "",
    description:
      "Metal keychain with your custom engraving names or branding for premium look",
    details: [
      "Material: Metal",
      "Customisation: Custom engraving — names or branding",
      "Finish: Premium engraved look"
    ],
    images: ["assets/images/products/metal-keychain.jpeg"],
    featured: true
  },
  {
    id: "printed-keychain",
    name: "Printed Keychain",
    category: "keychain",
    price: "₹29*",
    priceValue: 29,
    unit: "",
    description: "Printed keychain with your custom printing for a premium look",
    details: [
      "Customisation: Custom printing",
      "Full-colour artwork supported",
      "Finish: Premium printed look"
    ],
    images: ["assets/images/products/printed-keychain.jpeg"],
    featured: false
  },
  {
    id: "metal-keychain-border-ring",
    name: "Metal Keychain with Border Ring",
    category: "keychain",
    price: "₹48*",
    priceValue: 48,
    unit: "",
    description:
      "Metal keychain with metal border ring custom engraving with your logo",
    details: [
      "Material: Metal with metal border ring",
      "Customisation: Custom engraving with your logo"
    ],
    images: ["assets/images/products/metal-keychain-border-ring.jpeg"],
    featured: false
  },
  {
    id: "acrylic-keychain",
    name: "Acrylic Keychain",
    category: "keychain",
    price: "₹45*",
    priceValue: 45,
    unit: "",
    description:
      "Acrylic keychain with custom engraving with your logo and your design",
    details: [
      "Material: Acrylic",
      "Customisation: Custom engraving with your logo and your design"
    ],
    images: ["assets/images/products/acrylic-keychain.jpeg"],
    featured: false
  },
  {
    id: "acrylic-keychain-3d",
    name: "3D Acrylic Keychain",
    category: "keychain",
    price: "₹62*",
    priceValue: 62,
    unit: "",
    description:
      "Customize your keychain with your logo or branding with 3D Acrylic letter",
    details: [
      "Material: Acrylic with 3D acrylic letters",
      "Customisation: Your logo or branding"
    ],
    images: ["assets/images/products/acrylic-keychain-3d.jpeg"],
    featured: false
  },
  {
    id: "acrylic-engraving-keychain",
    name: "Acrylic Engraving Keychain",
    category: "keychain",
    price: "₹38*",
    priceValue: 38,
    unit: "",
    description: "Acrylic with engraving Names or Logo",
    details: ["Material: Acrylic", "Customisation: Engraved names or logo"],
    images: ["assets/images/products/acrylic-engraving-keychain.jpeg"],
    featured: false
  },

  /* --------------------------------------------- Thermosteel & Tumblers -- */
  {
    id: "thermosteel-bottle",
    name: "Thermosteel Bottle",
    category: "thermosteel",
    price: "₹340*",
    priceValue: 340,
    unit: "",
    description:
      "Thermosteel bottle with UV printing on it for a premium look",
    details: [
      "Material: Thermosteel",
      "Customisation: UV printing",
      "Finish: Premium look"
    ],
    images: ["assets/images/products/thermosteel-bottle.jpeg"],
    featured: true
  },
  {
    id: "aluminium-bottle",
    name: "Aluminium Bottle",
    category: "thermosteel",
    price: "₹220*",
    priceValue: 220,
    unit: "",
    description: "Aluminium Bottle with UV DTF printing on it",
    details: ["Material: Aluminium", "Customisation: UV DTF printing"],
    images: ["assets/images/products/aluminium-bottle.jpeg"],
    featured: false
  },
  {
    id: "temperature-bottle",
    name: "Temperature Bottle",
    category: "thermosteel",
    price: "₹260*",
    priceValue: 260,
    unit: "",
    description:
      "White color tumbler with custom engraving and temperature display to top, simply touch the screen",
    details: [
      "Colour: White",
      "Temperature display on the top — touch the screen",
      "Customisation: Custom engraving"
    ],
    images: ["assets/images/products/temperature-bottle.jpeg"],
    featured: false
  },
  {
    id: "metal-tumbler",
    name: "Metal Tumbler",
    category: "thermosteel",
    price: "₹190*",
    priceValue: 190,
    unit: "",
    description:
      "Explore our Thermosteel bottle catalogue offering in variety of range for your need and custom premium design with engraving and printing for a premium look",
    details: [
      "Material: Metal",
      "Customisation: Engraving and printing",
      "Available in a range of designs"
    ],
    images: ["assets/images/products/metal-tumbler.jpeg"],
    featured: false
  },
  {
    id: "textured-bottle",
    name: "Textured Bottle",
    category: "thermosteel",
    price: "₹440*",
    priceValue: 440,
    unit: "",
    description: "Textured bottle for a premium gift option",
    details: ["Finish: Textured", "Positioned as a premium gift option"],
    images: ["assets/images/products/textured-bottle.jpeg"],
    featured: false
  },
  {
    id: "insulated-tumbler",
    name: "Insulated Tumbler",
    category: "thermosteel",
    price: "₹240*",
    priceValue: 240,
    unit: "",
    description:
      "Create your logo, name or design with engraving or UV DTF printing for premium gifting",
    details: [
      "Customisation: Engraving or UV DTF printing",
      "Add your logo, name or design"
    ],
    images: ["assets/images/products/insulated-tumbler.jpeg"],
    featured: false
  },

  /* ---------------------------------------------------- Corporate Gifts -- */
  {
    id: "combo-diary-pen-keychain-cardholder",
    name: "Combo of Diary, Pen, Keychain & Card Holder",
    category: "corporate",
    price: "₹550*",
    priceValue: 550,
    unit: "",
    description: "",
    details: [
      "Combo set: diary, pen, keychain and card holder",
      "Customisation: Engraving and printing"
    ],
    images: ["assets/images/products/combo-diary-pen-keychain-cardholder.jpeg"],
    featured: true
  },
  {
    id: "combo-pen-metal-keychain",
    name: "Combo of Pen & Metal Keychain",
    category: "corporate",
    price: "₹180*",
    priceValue: 180,
    unit: "",
    description: "",
    details: [
      "Combo set: pen and metal keychain",
      "Customisation: Engraving and printing"
    ],
    images: ["assets/images/products/combo-pen-metal-keychain.jpeg"],
    featured: false
  },
  {
    id: "combo-tumbler-diary-pen-keychain",
    name: "Combo of Tumbler, Diary, Pen & Keychain",
    category: "corporate",
    price: "₹750*",
    priceValue: 750,
    unit: "",
    description: "",
    details: [
      "Combo set: tumbler, diary, pen and keychain",
      "Customisation: Engraving and printing"
    ],
    images: ["assets/images/products/combo-tumbler-diary-pen-keychain.jpeg"],
    featured: false
  },
  {
    id: "wallet-custom-name-logo",
    name: "Wallet with Custom Name or Logo",
    category: "corporate",
    price: "₹115*",
    priceValue: 115,
    unit: "",
    description: "",
    details: ["Customisation: Custom name or logo"],
    images: ["assets/images/products/wallet-custom-name-logo.jpeg"],
    featured: false
  },
  {
    id: "metal-pen-engraving",
    name: "Metal Pen with Custom Engraving",
    category: "corporate",
    price: "₹95*",
    priceValue: 95,
    unit: "",
    description: "",
    details: ["Material: Metal", "Customisation: Custom engraving"],
    images: ["assets/images/products/metal-pen-engraving.jpeg"],
    featured: false
  },
  {
    id: "combo-diary-pen-tumbler",
    name: "Combo of Diary, Pen & Tumbler",
    category: "corporate",
    price: "₹700*",
    priceValue: 700,
    unit: "",
    description: "",
    details: [
      "Combo set: diary, pen and tumbler",
      "Customisation: Engraving and printing"
    ],
    images: ["assets/images/products/combo-diary-pen-tumbler.jpeg"],
    featured: false
  },

  /* ----------------------------------------------------------- Trophies -- */
  {
    id: "acrylic-wooden-base-trophy",
    name: "Acrylic with Wooden Base Trophy",
    category: "trophy",
    price: "₹140*",
    priceValue: 140,
    unit: "",
    description: "",
    details: ["Material: Acrylic with wooden base", "Custom design"],
    images: ["assets/images/products/acrylic-wooden-base-trophy.jpeg"],
    featured: false
  },
  {
    id: "acrylic-trophy-golden",
    name: "Acrylic Trophy with Golden Design",
    category: "trophy",
    price: "₹120*",
    priceValue: 120,
    unit: "",
    description: "",
    details: ["Material: Acrylic", "Finish: Golden design", "Custom design"],
    images: ["assets/images/products/acrylic-trophy-golden.jpeg"],
    featured: false
  },
  {
    id: "acrylic-engraving-trophy",
    name: "Acrylic with Engraving Trophy",
    category: "trophy",
    price: "₹90*",
    priceValue: 90,
    unit: "",
    description: "",
    details: ["Material: Acrylic", "Customisation: Engraving"],
    images: ["assets/images/products/acrylic-engraving-trophy.jpeg"],
    featured: false
  },
  {
    id: "mdf-trophy-laser-cutting",
    name: "MDF Trophy with Laser Cutting",
    category: "trophy",
    price: "₹140*",
    priceValue: 140,
    unit: "",
    description: "",
    details: ["Material: MDF", "Process: Laser cutting", "Custom design"],
    images: ["assets/images/products/mdf-trophy-laser-cutting.jpeg"],
    featured: false
  },
  {
    id: "acrylic-uvdtf-engraving-trophy",
    name: "Acrylic with UV DTF Printing and Engraving",
    category: "trophy",
    price: "₹240*",
    priceValue: 240,
    unit: "",
    description: "",
    details: [
      "Material: Acrylic",
      "Customisation: UV DTF printing and engraving"
    ],
    images: ["assets/images/products/acrylic-uvdtf-engraving-trophy.jpeg"],
    featured: true
  },
  {
    id: "acrylic-engraving-wooden-base-trophy",
    name: "Acrylic with Engraving & Wooden Base",
    category: "trophy",
    price: "₹240*",
    priceValue: 240,
    unit: "",
    description: "",
    details: ["Material: Acrylic with wooden base", "Customisation: Engraving"],
    images: ["assets/images/products/acrylic-engraving-wooden-base-trophy.jpeg"],
    featured: false
  },

  /* ---------------------------------------------------- Indoor Signages -- */
  {
    id: "3d-nameplate",
    name: "3D Nameplate",
    category: "indoor-signage",
    price: "₹160*",
    priceValue: 160,
    unit: "",
    description: "",
    details: ["Style: 3D nameplate", "Customised for indoor needs"],
    images: ["assets/images/products/3d-nameplate.jpeg"],
    featured: false
  },
  {
    id: "acrylic-base-laser-cutting",
    name: "Acrylic Base with Laser Cutting",
    category: "indoor-signage",
    price: "₹450*",
    priceValue: 450,
    unit: "",
    description: "",
    details: ["Material: Acrylic base", "Process: Laser cutting"],
    images: ["assets/images/products/acrylic-base-laser-cutting.jpeg"],
    featured: false
  },
  {
    id: "acrylic-with-led",
    name: "Acrylic with LED",
    category: "indoor-signage",
    price: "₹800*",
    priceValue: 800,
    unit: "",
    description: "",
    details: ["Material: Acrylic", "Lighting: LED", "Customised for indoors"],
    images: ["assets/images/products/acrylic-with-led.jpeg"],
    featured: false
  },
  {
    id: "mdf-signages-laser-cutting",
    name: "MDF Signages with Laser Cutting",
    category: "indoor-signage",
    price: "₹150*",
    priceValue: 150,
    unit: "",
    description: "",
    details: ["Material: MDF", "Process: Laser cutting"],
    images: ["assets/images/products/mdf-signages-laser-cutting.jpeg"],
    featured: false
  },
  {
    id: "3d-channel-letter-led",
    name: "3D Channel Letter with LED",
    category: "indoor-signage",
    price: "₹990*",
    priceValue: 990,
    unit: "",
    description: "",
    details: ["Style: 3D channel letters", "Lighting: LED"],
    images: ["assets/images/products/3d-channel-letter-led.jpeg"],
    featured: true
  },
  {
    id: "3d-wall-frame",
    name: "3D Wall Frame",
    category: "indoor-signage",
    price: "₹640*",
    priceValue: 640,
    unit: "",
    description: "",
    details: ["Style: 3D wall frame", "Customised for indoor spaces"],
    images: ["assets/images/products/3d-wall-frame.jpeg"],
    featured: false
  },

  /* --------------------------------------------------- Outdoor Signages -- */
  {
    id: "wayfinding-signboard",
    name: "Wayfinding Signboard",
    category: "outdoor-signage",
    price: "₹900/sqft*",
    priceValue: 900,
    unit: "per sqft",
    description: "",
    details: ["Priced per square foot", "Custom design on request"],
    images: ["assets/images/products/wayfinding-signboard.jpeg"],
    featured: false
  },
  {
    id: "restaurants-signboard",
    name: "Restaurants Signboard",
    category: "outdoor-signage",
    price: "₹870/sqft*",
    priceValue: 870,
    unit: "per sqft",
    description: "",
    details: ["Priced per square foot", "For outlets, stores and showrooms"],
    images: ["assets/images/products/restaurants-signboard.jpeg"],
    featured: false
  },
  {
    id: "direction-signboard",
    name: "Direction Signboard",
    category: "outdoor-signage",
    price: "₹660/sqft*",
    priceValue: 660,
    unit: "per sqft",
    description: "",
    details: ["Priced per square foot", "Custom design on request"],
    images: ["assets/images/products/direction-signboard.jpeg"],
    featured: false
  },
  {
    id: "lollipop-signboard",
    name: "Lollipop Signboard",
    category: "outdoor-signage",
    price: "₹990/sqft*",
    priceValue: 990,
    unit: "per sqft",
    description: "",
    details: ["Priced per square foot", "Custom design on request"],
    images: ["assets/images/products/lollipop-signboard.jpeg"],
    featured: false
  },
  {
    id: "led-channel-letters",
    name: "LED Channel Letters",
    category: "outdoor-signage",
    price: "₹250/sqft*",
    priceValue: 250,
    unit: "per sqft",
    description: "",
    details: ["Lighting: LED", "Priced per square foot"],
    images: ["assets/images/products/led-channel-letters.jpeg"],
    featured: true
  },
  {
    id: "metal-signages",
    name: "Metal Signages",
    category: "outdoor-signage",
    price: "₹650/sqft*",
    priceValue: 650,
    unit: "per sqft",
    description: "",
    details: ["Material: Metal", "Priced per square foot"],
    images: ["assets/images/products/metal-signages.jpeg"],
    featured: false
  },

  /* -------------------------------------------------------- LED Mirrors -- */
  {
    id: "standard-led-mirror",
    name: "Standard Size LED Mirror",
    category: "led-mirror",
    price: "₹2299*",
    priceValue: 2299,
    unit: "",
    description: "",
    details: ["Size: 18 inch by 24 inch", "Custom-made premium finish"],
    variants: ["Size", "Shape", "Lighting", "Design, logo or text branding"],
    images: ["assets/images/products/standard-led-mirror.jpeg"],
    featured: true
  },
  {
    id: "wine-glass-mirror",
    name: "Wine Glass Mirror",
    category: "led-mirror",
    price: "₹2599*",
    priceValue: 2599,
    unit: "",
    description: "",
    details: ["Size: 18 inch by 24 inch", "Wine glass silhouette design"],
    variants: ["Size", "Shape", "Lighting", "Design, logo or text branding"],
    images: ["assets/images/products/wine-glass-mirror.jpeg"],
    featured: false
  },
  {
    id: "water-drop-mirror",
    name: "Water Drop Mirror Design",
    category: "led-mirror",
    price: "₹2699*",
    priceValue: 2699,
    unit: "",
    description: "",
    details: ["Size: 18 inch by 24 inch", "Water drop design"],
    variants: ["Size", "Shape", "Lighting", "Design, logo or text branding"],
    images: ["assets/images/products/water-drop-mirror.jpeg"],
    featured: false
  },
  {
    id: "guitar-design-mirror",
    name: "Guitar Design Mirror",
    category: "led-mirror",
    price: "₹3699*",
    priceValue: 3699,
    unit: "",
    description: "",
    details: ["Size: 18 inch by 24 inch", "Guitar silhouette design"],
    variants: ["Size", "Shape", "Lighting", "Design, logo or text branding"],
    images: ["assets/images/products/guitar-design-mirror.jpeg"],
    featured: false
  },
  {
    id: "3d-led-mirror",
    name: "3D LED Mirror",
    category: "led-mirror",
    price: "₹4999*",
    priceValue: 4999,
    unit: "",
    description: "",
    details: ["3D infinity LED effect", "Custom-made premium finish"],
    variants: ["Size", "Shape", "Lighting", "Design, logo or text branding"],
    images: ["assets/images/products/3d-led-mirror.jpeg"],
    featured: false
  },
  {
    id: "droplet-mirror",
    name: "Droplet Mirror Design",
    category: "led-mirror",
    price: "₹2499*",
    priceValue: 2499,
    unit: "",
    description: "",
    details: ["Droplet silhouette design", "Custom-made premium finish"],
    variants: ["Size", "Shape", "Lighting", "Design, logo or text branding"],
    images: ["assets/images/products/droplet-mirror.jpeg"],
    featured: false
  },

  /* --------------------------------------------------- Other Collection -- */
  {
    id: "acrylic-mandir",
    name: "Customized Acrylic Mandir",
    category: "other",
    price: "₹400/sqft*",
    priceValue: 400,
    unit: "per sqft",
    description: "",
    details: ["Material: Acrylic", "Customised design", "Priced per square foot"],
    images: ["assets/images/products/acrylic-mandir.jpeg"],
    featured: false
  },
  {
    id: "desk-organizer",
    name: "Desk Organizer",
    category: "other",
    price: "₹200*",
    priceValue: 200,
    unit: "",
    description: "",
    details: ["Corporate desk accessory", "Space for your logo"],
    images: ["assets/images/products/desk-organizer.jpeg"],
    featured: false
  },
  {
    id: "wings-neon-light",
    name: "Wings Design Neon Light",
    category: "other",
    price: "₹400/sqft*",
    priceValue: 400,
    unit: "per sqft",
    description: "",
    details: ["Neon sign", "Custom design", "Priced per square foot"],
    images: ["assets/images/products/wings-neon-light.jpeg"],
    featured: false
  },
  {
    id: "silk-gamosa",
    name: "Pure Silk, Muga Silk, Zari Gamosa",
    category: "other",
    price: "₹1900*",
    priceValue: 1900,
    unit: "",
    description: "",
    details: ["Pure silk, muga silk and zari gamosa", "Traditional Assamese gamosa"],
    images: ["assets/images/products/silk-gamosa.jpg"],
    featured: true
  },
  {
    id: "tshirt-printing",
    name: "T-shirt Printing",
    category: "other",
    price: "₹99*",
    priceValue: 99,
    unit: "",
    description: "",
    details: ["Logo and branding printing", "Corporate merchandise"],
    images: ["assets/images/products/tshirt-printing.jpeg"],
    featured: false
  },
  {
    id: "flex-printing",
    name: "Flex Printing",
    category: "other",
    price: "₹9/sqft*",
    priceValue: 9,
    unit: "per sqft",
    description: "",
    details: ["Large-format flex printing", "Priced per square foot"],
    images: ["assets/images/products/flex-printing.jpeg"],
    featured: false
  },
  {
    id: "wall-decor-laser-cutting",
    name: "Wall Decor with Laser Cutting",
    category: "other",
    price: "₹199*",
    priceValue: 199,
    unit: "",
    description: "",
    details: ["Process: Laser cutting", "Decorative wall piece"],
    images: ["assets/images/products/wall-decor-laser-cutting.jpeg"],
    featured: false
  },
  {
    id: "coaster-printing-engraving",
    name: "Coaster for Custom Printing & Engraving",
    category: "other",
    price: "₹49/pic*",
    priceValue: 49,
    unit: "per piece",
    description: "",
    details: ["Customisation: Custom printing and engraving", "Priced per piece"],
    images: ["assets/images/products/coaster-printing-engraving.jpeg"],
    featured: false
  },
  {
    id: "fridge-magnet-clip",
    name: "Fridge Magnet with Clip On Magnet",
    category: "other",
    price: "₹89*",
    priceValue: 89,
    unit: "",
    description: "",
    details: ["Clip-on magnet", "Holds photos and notes"],
    images: ["assets/images/products/fridge-magnet-clip.jpeg"],
    featured: false
  },
  {
    id: "desk-light-uvdtf",
    name: "Desk Light with UV DTF Printing",
    category: "other",
    price: "₹250*",
    priceValue: 250,
    unit: "",
    description: "",
    details: ["Customisation: UV DTF printing", "Lit desk display"],
    images: ["assets/images/products/desk-light-uvdtf.jpeg"],
    featured: false
  },
  {
    id: "wall-hanging-decor",
    name: "Wall Hanging Decor",
    category: "other",
    price: "₹99*",
    priceValue: 99,
    unit: "",
    description: "",
    details: ["Decorative hanging panels", "Custom text and colours"],
    images: ["assets/images/products/wall-hanging-decor.jpeg"],
    featured: false
  },
  {
    id: "acrylic-cake-topper",
    name: "Acrylic Cake Topper",
    category: "other",
    price: "₹39*",
    priceValue: 39,
    unit: "",
    description: "",
    details: ["Material: Acrylic", "Custom names, initials or dates"],
    images: ["assets/images/products/acrylic-cake-topper.jpeg"],
    featured: false
  },

  /* ----------------------------------------------------------- Services -- */
  {
    id: "hotel-utensils-engraving",
    name: "Hotel Utensils Engraving",
    category: "services",
    price: "₹6*",
    priceValue: 6,
    unit: "",
    description: "",
    details: ["Engraving service for hotel utensils"],
    images: ["assets/images/products/hotel-utensils-engraving.jpeg"],
    featured: false
  },
  {
    id: "acrylic-table-top",
    name: "Acrylic Table Top",
    category: "services",
    price: "₹99/pic*",
    priceValue: 99,
    unit: "per piece",
    description: "",
    details: ["Material: Acrylic", "Table numbers and table-top signage", "Priced per piece"],
    images: ["assets/images/products/acrylic-table-top.jpeg"],
    featured: false
  },
  {
    id: "glass-engraving-branding",
    name: "Glass Engraving for Branding",
    category: "services",
    price: "₹8/pic*",
    priceValue: 8,
    unit: "per piece",
    description: "",
    details: ["Engraving service on glassware", "Priced per piece"],
    images: ["assets/images/products/glass-engraving-branding.jpeg"],
    featured: false
  },
  {
    id: "acrylic-mobile-holder",
    name: "Acrylic Mobile Holder",
    category: "services",
    price: "₹65*",
    priceValue: 65,
    unit: "",
    description: "",
    details: ["Material: Acrylic", "Personalised with a name"],
    images: ["assets/images/products/acrylic-mobile-holder.jpeg"],
    featured: false
  },
  {
    id: "granite-engraving",
    name: "Granite Engraving",
    category: "services",
    price: "₹199*",
    priceValue: 199,
    unit: "",
    description: "",
    details: ["Engraving service on granite", "Memorial and commemorative plaques"],
    images: ["assets/images/products/granite-engraving.jpeg"],
    featured: false
  },
  {
    id: "laser-cutting-services",
    name: "Laser Cutting Services",
    category: "services",
    price: "₹9*",
    priceValue: 9,
    unit: "",
    description: "",
    details: ["Laser cutting on sheet materials", "Job-work for your own designs"],
    images: ["assets/images/products/laser-cutting-services.jpeg"],
    featured: false
  }
];

/* ==========================================================================
   Helpers shared by every page
   ========================================================================== */

/** Look up a category record by id. */
function getCategory(id) {
  return CATEGORIES.find(function (c) {
    return c.id === id;
  });
}

/** Human-readable category name for a product. */
function categoryName(id) {
  var c = getCategory(id);
  return c ? c.name : "";
}

/** Look up a product by id. */
function getProduct(id) {
  return PRODUCTS.find(function (p) {
    return p.id === id;
  });
}

/**
 * The blurb shown on cards. Falls back to the catalogue's category intro when
 * the catalogue gives no per-product description — never invented text.
 */
function productBlurb(product) {
  if (product.description) return product.description;
  var c = getCategory(product.category);
  return c ? c.intro : "";
}

/** Build a wa.me link with a properly encoded pre-filled message. */
function whatsappLink(productName) {
  var message = productName
    ? "Hello, I am interested in ordering " +
      productName +
      ".\nPlease provide availability and order details."
    : "Hello Gamosa, I would like to know more about your gifting and branding products.";
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}
