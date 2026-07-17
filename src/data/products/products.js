import paithaniSareeImg from "../../assets/images/categories/sarees/paithani/paithani_saree_card_image.jpg";
import maheshwariSareeImg from "../../assets/images/categories/sarees/maheshwari/maheshwari_saree_card_image.jpg";
import fancySareeImg from "../../assets/images/categories/sarees/fancy/fancy_saree_card_image.jpg";
import kotaDoriaImg from "../../assets/images/categories/sarees/kota-doria/kota_doria_saree_card_image.jpg";

export const PRODUCTS = [
  // Sarees — subcat assigned only where the product name directly identifies the weave/type
  // Paithani Saree — local image: place file at src/assets/images/categories/sarees/paithani/paithani_saree_card_image.jpg
  { id: 40, name: "Paithani Silk Saree - Green & Gold", cat: "Sarees", subcat: "Paithani", season: "Festive", price: 8999, mrp: 10999, type: "saree", bg: "#1a4a2e", accent: "#d6a23f", colors: ["#1a4a2e", "#d6a23f"], tag: "Bestseller", image: paithaniSareeImg },
  // Maheshwari Saree — local image: place file at src/assets/images/categories/sarees/maheshwari/maheshwari_saree_card_image.jpg
  { id: 41, name: "Maheshwari Silk Saree - Purple & Gold", cat: "Sarees", subcat: "Maheshwari", season: "Festive", price: 7499, mrp: 8999, type: "saree", bg: "#4a1a6e", accent: "#d6a23f", colors: ["#4a1a6e", "#d6a23f"], tag: "New", image: maheshwariSareeImg },
  // Fancy Saree — local image: place file at src/assets/images/categories/sarees/fancy/fancy_saree_card_image.jpg
  { id: 42, name: "Fancy Silk Saree - Red & Green", cat: "Sarees", subcat: "Fancy", season: "Festive", price: 6999, mrp: 8499, type: "saree", bg: "#c0392b", accent: "#4a7a1e", colors: ["#c0392b", "#4a7a1e", "#d6a23f"], tag: "New", image: fancySareeImg },
  // Kota Doria Saree — local image: place file at src/assets/images/categories/sarees/kota-doria/kota_doria_saree_card_image.jpg
  { id: 43, name: "Kota Doria Silk Saree - Pink & Gold", cat: "Sarees", subcat: "Kota Doria", season: "Festive", price: 5999, mrp: 7299, type: "saree", bg: "#c0106e", accent: "#d6a23f", colors: ["#e91e8c", "#d6a23f"], tag: "Bestseller", image: kotaDoriaImg },
  { id: 1, name: "Meera Slub Silk Saree", cat: "Sarees", subcat: null, season: "Festive", price: 6225, mrp: 7499, type: "saree", bg: "#f1ddc4", accent: "#d6a23f", colors: ["#d6a23f", "#c98a7d"], tag: "Bestseller", image: "https://wallpapercave.com/wp/wp7665600.jpg" },
  { id: 2, name: "Chakra Organza Saree", cat: "Sarees", subcat: null, season: "Festive", price: 5099, mrp: null, type: "saree", bg: "#f1e0c8", accent: "#d6a23f", colors: ["#d6a23f", "#c98a7d"], tag: "New", image: "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2lsayUyMHNhcmVlfGVufDB8fDB8fHww" },
  { id: 3, name: "Veda Silk Saree (With Custom Blouse)", cat: "Sarees", subcat: null, season: "Festive", price: 7999, mrp: 9499, type: "saree", bg: "#dcdcdc", accent: "#2b2622", colors: ["#2b2622"], tag: "Premium", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq5FqPF2u1Ep5-LTpmL9JSx4aQXmA5-7BdQbdzPI8cDP5L8QKt1vlYL_bh&s=10" },
  { id: 4, name: "Kora Cotton Saree", cat: "Sarees", subcat: null, season: "Summer", price: 3499, mrp: 3999, type: "saree", bg: "#e2dfd2", accent: "#bd5b34", colors: ["#bd5b34", "#8a9a7e"], tag: "Sale", image: "https://images.media.io/ai-effects/ai-saree-photos-4.png" },

  // Jewellery — not part of the 4-collection structure; accessible via sidebar filter
  { id: 5, name: "Aura Kundan Choker Set", cat: "Jewellery", subcat: null, season: "Festive", price: 2499, mrp: 2999, type: "jewellery", bg: "#e6d8ea", accent: "#7a5c8c", colors: ["#d6a23f", "#ffffff"], tag: "New", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80" },
  { id: 6, name: "Mayur Silver Jhumkas", cat: "Jewellery", subcat: null, season: "Autumn", price: 1299, mrp: null, type: "jewellery", bg: "#dfe3d4", accent: "#8a9a7e", colors: ["#e6dfd3"], tag: null, image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80" },
  { id: 7, name: "Devi Temple Necklace", cat: "Jewellery", subcat: null, season: "Festive", price: 4899, mrp: 5499, type: "jewellery", bg: "#f3dbe0", accent: "#c45f7a", colors: ["#d6a23f"], tag: "Bestseller", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80" },
  { id: 8, name: "Rani Pearl Bangle Set", cat: "Jewellery", subcat: null, season: "Summer", price: 1899, mrp: 2299, type: "jewellery", bg: "#e9dcc8", accent: "#c98a7d", colors: ["#ffffff", "#d6a23f"], tag: "Sale", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80" },

  // Women Accessories
  // "Potli bag" is genuinely a type of pouch — subcat: "Pouches" assigned
  { id: 9, name: "Malti Embroidered Potli Bag", cat: "Women Accessories", subcat: "Pouches", season: "Autumn", price: 1599, mrp: 1999, type: "accessory", bg: "#f3e3c9", accent: "#bd5b34", colors: ["#bd5b34", "#d6a23f"], tag: "New", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj4SuEH0tO3V-xEozNBqejmqAEQbKJF0zgSuyo_n6XkltrLIps0nyHRMo&s=10" },
  // Zari clutch — not specifically a "Paithani Clutch"; cannot classify without verification
  { id: 10, name: "Zari Work Handcrafted Clutch", cat: "Women Accessories", subcat: null, season: "Festive", price: 2299, mrp: null, type: "accessory", bg: "#ece1d0", accent: "#5c4f3f", colors: ["#bd5b34", "#e6dfd3"], tag: null, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80" },
  { id: 11, name: "Lotus Silk Shawl", cat: "Women Accessories", subcat: null, season: "Autumn", price: 3199, mrp: 3599, type: "accessory", bg: "#e4d6c0", accent: "#403631", colors: ["#403631", "#8a9a7e"], tag: "Sale", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80" },
  { id: 12, name: "Phulkari Embroidered Dupatta", cat: "Women Accessories", subcat: null, season: "Summer", price: 1899, mrp: null, type: "accessory", bg: "#dedede", accent: "#2b2622", colors: ["#bd5b34", "#7a5c8c", "#d6a23f"], tag: "New", image: "https://www.phulkariforever.com/cdn/shop/files/PhulkariDupattaPureSilk52bavanbagh4orange_jpg.jpg?v=1723711764" },

  // More Sarees
  { id: 13, name: "Varanasi Brocade Saree", cat: "Sarees", subcat: null, season: "Festive", price: 9499, mrp: 10999, type: "saree", bg: "#f3e3c9", accent: "#bd5b34", colors: ["#bd5b34", "#d6a23f"], tag: "New", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80" },
  { id: 14, name: "Chanderi Cotton Saree", cat: "Sarees", subcat: null, season: "Summer", price: 4299, mrp: 4999, type: "saree", bg: "#dfe3d4", accent: "#8a9a7e", colors: ["#8a9a7e", "#f1ddc4"], tag: "Sale", image: "https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&w=600&q=80" },
  // Patola is a double-Ikat weaving technique — subcat: "Ikat" is factually accurate
  { id: 15, name: "Patola Heritage Silk Saree", cat: "Sarees", subcat: "Ikat", season: "Autumn", price: 8599, mrp: 9999, type: "saree", bg: "#e9dcc8", accent: "#c98a7d", colors: ["#c98a7d", "#bd5b34"], tag: "Bestseller", image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=600&q=80" },
  { id: 16, name: "Tussar Floral Saree", cat: "Sarees", subcat: null, season: "Autumn", price: 5499, mrp: 6299, type: "saree", bg: "#f1e0c8", accent: "#d6a23f", colors: ["#d6a23f", "#8a9a7e"], tag: "New", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80" },
  { id: 17, name: "Ikat Dress Material - Pattern A", cat: "Dress Material", subcat: "Ikat", season: "Summer", price: 1999, mrp: 2399, type: "dressmaterial", bg: "#f5e0c8", accent: "#a25555", colors: ["#a25555"], tag: "New", image: "https://via.placeholder.com/300x400?text=Ikat+1" },
  { id: 18, name: "Ikat Dress Material - Pattern B", cat: "Dress Material", subcat: "Ikat", season: "Summer", price: 2099, mrp: 2499, type: "dressmaterial", bg: "#f5e0c8", accent: "#a25555", colors: ["#a25555"], tag: "New", image: "https://via.placeholder.com/300x400?text=Ikat+2" },
  { id: 19, name: "Jamdani Dress Material - Classic", cat: "Dress Material", subcat: "Jamdani", season: "Winter", price: 2199, mrp: 2599, type: "dressmaterial", bg: "#e0d4c8", accent: "#5b8a7e", colors: ["#5b8a7e"], tag: "New", image: "https://via.placeholder.com/300x400?text=Jamdani+1" },
  { id: 20, name: "Jamdani Dress Material - Modern", cat: "Dress Material", subcat: "Jamdani", season: "Winter", price: 2299, mrp: 2699, type: "dressmaterial", bg: "#e0d4c8", accent: "#5b8a7e", colors: ["#5b8a7e"], tag: "New", image: "https://via.placeholder.com/300x400?text=Jamdani+2" },
  { id: 21, name: "Kota Doria Dress Material - Floral", cat: "Dress Material", subcat: "Kota Doria", season: "Spring", price: 1899, mrp: 2299, type: "dressmaterial", bg: "#f0e8d0", accent: "#c98a7d", colors: ["#c98a7d"], tag: "New", image: "https://via.placeholder.com/300x400?text=Kota+Doria+1" },
  { id: 22, name: "Kota Doria Dress Material - Plain", cat: "Dress Material", subcat: "Kota Doria", season: "Spring", price: 1999, mrp: 2399, type: "dressmaterial", bg: "#f0e8d0", accent: "#c98a7d", colors: ["#c98a7d"], tag: "New", image: "https://via.placeholder.com/300x400?text=Kota+Doria+2" },
  { id: 23, name: "Maheshwari Dress Material - Silk", cat: "Dress Material", subcat: "Maheshwari", season: "Autumn", price: 2499, mrp: 2999, type: "dressmaterial", bg: "#e8d8c8", accent: "#bd5b34", colors: ["#bd5b34"], tag: "New", image: "https://via.placeholder.com/300x400?text=Maheshwari+1" },
  { id: 24, name: "Maheshwari Dress Material - Cotton", cat: "Dress Material", subcat: "Maheshwari", season: "Autumn", price: 2599, mrp: 3099, type: "dressmaterial", bg: "#e8d8c8", accent: "#bd5b34", colors: ["#bd5b34"], tag: "New", image: "https://via.placeholder.com/300x400?text=Maheshwari+2" },
  { id: 25, name: "Narayan Peth Dress Material - Classic", cat: "Dress Material", subcat: "Narayan Peth", season: "Winter", price: 2199, mrp: 2599, type: "dressmaterial", bg: "#d8c8b0", accent: "#8a9a7e", colors: ["#8a9a7e"], tag: "New", image: "https://via.placeholder.com/300x400?text=Narayan+Peth+1" },
  { id: 26, name: "Narayan Peth Dress Material - Modern", cat: "Dress Material", subcat: "Narayan Peth", season: "Winter", price: 2299, mrp: 2699, type: "dressmaterial", bg: "#d8c8b0", accent: "#8a9a7e", colors: ["#8a9a7e"], tag: "New", image: "https://via.placeholder.com/300x400?text=Narayan+Peth+2" },
  { id: 27, name: "Halter Neck Short Top - Summer", cat: "Readymade", subcat: "Halter Neck Short Top", season: "Summer", price: 1499, mrp: 1799, type: "readymade", bg: "#f5e0c8", accent: "#a25555", colors: ["#a25555"], tag: "New", image: "https://via.placeholder.com/300x400?text=Halter+Top+1" },
  { id: 28, name: "Halter Neck Short Top - Floral", cat: "Readymade", subcat: "Halter Neck Short Top", season: "Summer", price: 1599, mrp: 1899, type: "readymade", bg: "#f5e0c8", accent: "#a25555", colors: ["#a25555"], tag: "New", image: "https://via.placeholder.com/300x400?text=Halter+Top+2" },
  { id: 29, name: "Kurti with Dupatta - Classic", cat: "Readymade", subcat: "Kurti with Dupatta", season: "Spring", price: 1999, mrp: 2399, type: "readymade", bg: "#e0d4c8", accent: "#5b8a7e", colors: ["#5b8a7e"], tag: "New", image: "https://via.placeholder.com/300x400?text=Kurti+1" },
  { id: 30, name: "Kurti with Dupatta - Modern", cat: "Readymade", subcat: "Kurti with Dupatta", season: "Spring", price: 2099, mrp: 2499, type: "readymade", bg: "#e0d4c8", accent: "#5b8a7e", colors: ["#5b8a7e"], tag: "New", image: "https://via.placeholder.com/300x400?text=Kurti+2" },
  { id: 31, name: "One Piece Knee Length - Elegant", cat: "Readymade", subcat: "One Piece (Knee Length)", season: "Autumn", price: 2599, mrp: 2999, type: "readymade", bg: "#f0e8d0", accent: "#c98a7d", colors: ["#c98a7d"], tag: "New", image: "https://via.placeholder.com/300x400?text=One+Piece+1" },
  { id: 32, name: "One Piece Knee Length - Casual", cat: "Readymade", subcat: "One Piece (Knee Length)", season: "Autumn", price: 2699, mrp: 3099, type: "readymade", bg: "#f0e8d0", accent: "#c98a7d", colors: ["#c98a7d"], tag: "New", image: "https://via.placeholder.com/300x400?text=One+Piece+2" },
  { id: 33, name: "Paithani Clutch - Gold", cat: "Women Accessories", subcat: "Paithani Clutches", season: "Festive", price: 2299, mrp: 2699, type: "accessory", bg: "#e6d8ea", accent: "#7a5c8c", colors: ["#7a5c8c"], tag: "New", image: "https://via.placeholder.com/300x400?text=Paithani+Clutch+1" },
  { id: 34, name: "Paithani Clutch - Silver", cat: "Women Accessories", subcat: "Paithani Clutches", season: "Festive", price: 2399, mrp: 2799, type: "accessory", bg: "#e6d8ea", accent: "#7a5c8c", colors: ["#7a5c8c"], tag: "New", image: "https://via.placeholder.com/300x400?text=Paithani+Clutch+2" },
  { id: 35, name: "Pouch - Leather", cat: "Women Accessories", subcat: "Pouches", season: "Winter", price: 1499, mrp: 1799, type: "accessory", bg: "#f3e3c9", accent: "#bd5b34", colors: ["#bd5b34"], tag: "New", image: "https://via.placeholder.com/300x400?text=Pouch+1" },
  { id: 36, name: "Pouch - Silk", cat: "Women Accessories", subcat: "Pouches", season: "Winter", price: 1599, mrp: 1899, type: "accessory", bg: "#f3e3c9", accent: "#bd5b34", colors: ["#bd5b34"], tag: "New", image: "https://via.placeholder.com/300x400?text=Pouch+2" },
  { id: 37, name: "Sling Bag - Canvas", cat: "Women Accessories", subcat: "Sling Bags", season: "Summer", price: 1799, mrp: 2199, type: "accessory", bg: "#e9dcc8", accent: "#c98a7d", colors: ["#c98a7d"], tag: "New", image: "https://via.placeholder.com/300x400?text=Sling+Bag+1" },
  { id: 38, name: "Sling Bag - Leather", cat: "Women Accessories", subcat: "Sling Bags", season: "Summer", price: 1899, mrp: 2299, type: "accessory", bg: "#e9dcc8", accent: "#c98a7d", colors: ["#c98a7d"], tag: "New", image: "https://via.placeholder.com/300x400?text=Sling+Bag+2" },
];

// Legacy CATEGORIES export — kept for any existing references
export const CATEGORIES = [
  { name: "Sarees", count: "48 Styles", type: "saree", bg: "#7a5c8c", accent: "#e9c9a5", image: "https://5.imimg.com/data5/SELLER/Default/2023/10/355023483/QE/GS/LT/94678823/cotton-silk-sharee-500x500.jpeg" },
  { name: "Jewellery", count: "36 Styles", type: "jewellery", bg: "#bd5b34", accent: "#e9c9a5", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80" },
  { name: "Women Accessories", count: "42 Styles", type: "accessory", bg: "#8a9a7e", accent: "#f6efe4", image: "https://miro.medium.com/v2/resize:fit:600/1*w2ZtNewCRB7uakMLKuME6A.jpeg" },
];

/**
 * COLLECTION_CATEGORIES defines the 4-category navigation structure for the
 * Collection section on the home page. Subcategory chips navigate to
 * /product?category=<name>&subcat=<subcat>
 *
 * To add products to a subcategory, append a PRODUCTS entry with the matching
 * `cat` and `subcat` values — no other code changes required.
 */
export const COLLECTION_CATEGORIES = [
  {
    name: "Sarees",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/355023483/QE/GS/LT/94678823/cotton-silk-sharee-500x500.jpeg",
    subcats: ["Paithani", "Maheshwari", "Fancy", "Kota Doria", "Ikat", "Ilkal"],
  },
  {
    name: "Dress Material",
    image: "https://images.unsplash.com/photo-1558171813-0e3a28c4b59e?auto=format&fit=crop&w=600&q=80",
    subcats: ["Ikat", "Jamdani", "Kota Doria", "Maheshwari", "Narayan Peth"],
  },
  {
    name: "Readymade",
    image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&w=600&q=80",
    subcats: ["Halter Neck Short Top", "Kurti with Dupatta", "One Piece (Knee Length)"],
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    subcats: ["Paithani Clutches", "Pouches", "Sling Bags"],
  },
];
