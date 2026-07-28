import halterNeckImg from "../../assets/images/categories/readymade/halter-neck-short-top/halter_neck_short_top_card_image.jpg";
import kurtiDupattaImg from "../../assets/images/categories/readymade/kurti-with-dupatta/kurti_with_dupatta_card_image.jpg";
import onePieceImg from "../../assets/images/categories/readymade/one-piece/one_piece_card_image.jpg";

export const HALTER_NECK_TOPS = Array.from({ length: 5 }, (_, i) => ({
  id: 300 + i,
  name: `Embroidered Halter Neck Short Top - Style ${i + 1}`,
  cat: "Readymade",
  subcat: "Halter Neck Short Top",
  season: "Summer",
  price: 1499 + i * 150,
  mrp: Math.round((1499 + i * 150) * 1.25 / 100) * 100,
  type: "readymade",
  tag: i === 0 ? "Bestseller" : null,
  image: halterNeckImg,
  images: [halterNeckImg],
  colors: ["#1a4a2e", "#d6a23f"],
  sizes: ["S", "M", "L", "XL", "XXL"],
  isSoldOut: true,
  highlights: { "Material composition": "Cotton Rayon Blend", "Fit": "Regular Fit", "Neck style": "Halter Neck", "Care instructions": "Machine Wash Cold", "Country of Origin": "India" },
  aboutThisItem: ["Trendy ready-to-wear halter neck top with neck detailing."]
}));

export const KURTI_WITH_DUPATTA = Array.from({ length: 5 }, (_, i) => ({
  id: 305 + i,
  name: `Handworked Kurti with Match Dupatta Set - Style ${i + 1}`,
  cat: "Readymade",
  subcat: "Kurti with Dupatta",
  season: "Festive",
  price: 2499 + i * 200,
  mrp: Math.round((2499 + i * 200) * 1.25 / 100) * 100,
  type: "readymade",
  tag: i === 0 ? "New" : null,
  image: kurtiDupattaImg,
  images: [kurtiDupattaImg],
  colors: ["#4a1a6e", "#d6a23f"],
  sizes: ["S", "M", "L", "XL", "XXL"],
  isSoldOut: true,
  highlights: { "Material composition": "Slub Silk Rayon", "Fit": "A-Line Fit", "Neck style": "Round Neck", "Care instructions": "Gentle Wash", "Country of Origin": "India" },
  aboutThisItem: ["Elegant straight kurti paired with lightweight embroidered dupatta."]
}));

export const ONE_PIECE = Array.from({ length: 5 }, (_, i) => ({
  id: 310 + i,
  name: `Ethnic Printed Knee-Length One Piece Dress - Style ${i + 1}`,
  cat: "Readymade",
  subcat: "One Piece",
  season: "Summer",
  price: 1999 + i * 180,
  mrp: Math.round((1999 + i * 180) * 1.25 / 100) * 100,
  type: "readymade",
  tag: i === 0 ? "Sale" : null,
  image: onePieceImg,
  images: [onePieceImg],
  colors: ["#bd5b34", "#d6a23f"],
  sizes: ["S", "M", "L", "XL", "XXL"],
  isSoldOut: true,
  highlights: { "Material composition": "100% Slub Cotton", "Fit": "A-Line Flare", "Care instructions": "Machine Wash", "Country of Origin": "India" },
  aboutThisItem: ["Breathable fusion knee-length dress with traditional motifs."]
}));

export const READYMADE_PRODUCTS = [
  ...HALTER_NECK_TOPS,
  ...KURTI_WITH_DUPATTA,
  ...ONE_PIECE,
];
