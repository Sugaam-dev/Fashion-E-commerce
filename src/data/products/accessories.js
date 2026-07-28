import paithaniClutchesImg from "../../assets/images/categories/accessories/paithani-clutches/paithani_clutches_card_image.jpg";
import pouchesImg from "../../assets/images/categories/accessories/pouches/pouches_card_image.jpg";
import slingBagsImg from "../../assets/images/categories/accessories/sling-bags/sling_bags_card_image.jpg";

const slingFiles = [
  "6dbcd9a4-e7da-4edb-8541-a2cdbb9723c3.jpeg",
  "96bce0ca-9f08-43ec-9abc-79aa94bdf83b.jpeg",
  "ac13904b-a057-4383-8b13-734a1e66135b.jpeg",
  "b876723a-288d-49fb-aa7d-14b382653d85.jpeg",
  "bb1b742d-40b1-47f1-b0b7-dfe105173674.jpeg"
];

export const SLING_BAGS = [
  {
    id: 400,
    name: "Handcrafted Ethnic Embroidered Sling Bag",
    cat: "Women Accessories",
    subcat: "Sling Bags",
    season: "Festive",
    price: 1499,
    mrp: 1899,
    type: "accessory",
    tag: "Bestseller",
    image: `/assets/images/categories/accessories/sling-bags/${slingFiles[0]}`,
    images: [`/assets/images/categories/accessories/sling-bags/${slingFiles[0]}`],
    colors: ["#bd5b34", "#d6a23f"],
    isSoldOut: false,
    highlights: {
      "Material": "Embroidered Silk & Metallic Strap",
      "Dimensions": "8.5\" L x 6.5\" H x 2.0\" W",
      "Closure": "Secure Gold Metal Clasp",
      "Care instructions": "Wipe clean with dry cloth",
      "Country of Origin": "India"
    },
    aboutThisItem: ["Elegant handcrafted ethnic sling bag with metallic chain strap."]
  },
  {
    id: 401,
    name: "Royal Zari Peacock Motifs Sling Purse",
    cat: "Women Accessories",
    subcat: "Sling Bags",
    season: "Wedding",
    price: 1619,
    mrp: null,
    type: "accessory",
    tag: "New",
    image: `/assets/images/categories/accessories/sling-bags/${slingFiles[1]}`,
    images: [`/assets/images/categories/accessories/sling-bags/${slingFiles[1]}`],
    colors: ["#1a4a2e", "#d6a23f"],
    isSoldOut: false,
    highlights: { "Material": "Silk Zari", "Dimensions": "8\" x 6\"", "Country of Origin": "India" },
    aboutThisItem: ["Embellished wedding sling purse with detachable strap."]
  },
  {
    id: 402,
    name: "Heritage Silk Brocade Crossbody Sling Bag",
    cat: "Women Accessories",
    subcat: "Sling Bags",
    season: "Festive",
    price: 1739,
    mrp: 2199,
    type: "accessory",
    tag: "Sale",
    image: `/assets/images/categories/accessories/sling-bags/${slingFiles[2]}`,
    images: [`/assets/images/categories/accessories/sling-bags/${slingFiles[2]}`],
    colors: ["#4a1a6e", "#d6a23f"],
    isSoldOut: false,
    highlights: { "Material": "Brocade Silk", "Dimensions": "9\" x 7\"", "Country of Origin": "India" },
    aboutThisItem: ["Spacious ethnic crossbody sling bag for wedding guest outfits."]
  },
  {
    id: 403,
    name: "Golden Velvet Pearl Tassel Sling Bag",
    cat: "Women Accessories",
    subcat: "Sling Bags",
    season: "Autumn",
    price: 1859,
    mrp: null,
    type: "accessory",
    tag: "Premium",
    image: `/assets/images/categories/accessories/sling-bags/${slingFiles[3]}`,
    images: [`/assets/images/categories/accessories/sling-bags/${slingFiles[3]}`],
    colors: ["#c0392b", "#d6a23f"],
    isSoldOut: false,
    highlights: { "Material": "Velvet & Pearl String", "Dimensions": "8.5\" x 6.5\"", "Country of Origin": "India" },
    aboutThisItem: ["Statement velvet sling bag with handcrafted pearl drop tassels."]
  },
  {
    id: 404,
    name: "Festive Potli Style Chain Sling Bag",
    cat: "Women Accessories",
    subcat: "Sling Bags",
    season: "Winter",
    price: 1979,
    mrp: 2499,
    type: "accessory",
    tag: null,
    image: `/assets/images/categories/accessories/sling-bags/${slingFiles[4]}`,
    images: [`/assets/images/categories/accessories/sling-bags/${slingFiles[4]}`],
    colors: ["#2c3e50", "#bd5b34"],
    isSoldOut: false,
    highlights: { "Material": "Silk Potli", "Dimensions": "8\" x 8\"", "Country of Origin": "India" },
    aboutThisItem: ["Compact Potli inspired sling bag with drawstring & clasp closure."]
  }
];

export const PAITHANI_CLUTCHES = Array.from({ length: 5 }, (_, i) => ({
  id: 405 + i,
  name: `Handmade Paithani Zari Clutch - Style ${i + 1}`,
  cat: "Women Accessories",
  subcat: "Paithani Clutches",
  season: "Festive",
  price: 1999 + i * 150,
  mrp: Math.round((1999 + i * 150) * 1.25 / 100) * 100,
  type: "accessory",
  tag: i === 0 ? "Bestseller" : null,
  image: paithaniClutchesImg,
  images: [paithaniClutchesImg],
  colors: ["#7a5c8c", "#e9c9a5"],
  isSoldOut: true,
  highlights: { "Material": "Paithani Silk & Metallic Thread", "Dimensions": "8.5\" L x 5.0\" H", "Country of Origin": "India" },
  aboutThisItem: ["Traditional Paithani silk clutch with peacock zari pallu border."]
}));

export const POUCHES = Array.from({ length: 5 }, (_, i) => ({
  id: 410 + i,
  name: `Ethnic Embroidered Velvet Pouch - Style ${i + 1}`,
  cat: "Women Accessories",
  subcat: "Pouches",
  season: "Summer",
  price: 999 + i * 80,
  mrp: Math.round((999 + i * 80) * 1.25 / 100) * 100,
  type: "accessory",
  tag: i === 0 ? "Sale" : null,
  image: pouchesImg,
  images: [pouchesImg],
  colors: ["#8a9a7e", "#f6efe4"],
  isSoldOut: true,
  highlights: { "Material": "Embroidered Velvet", "Dimensions": "7.0\" L x 4.5\" H", "Country of Origin": "India" },
  aboutThisItem: ["Versatile multipurpose ethnic pouch for accessories & makeup."]
}));

export const ACCESSORIES_PRODUCTS = [
  ...SLING_BAGS,
  ...PAITHANI_CLUTCHES,
  ...POUCHES,
];
