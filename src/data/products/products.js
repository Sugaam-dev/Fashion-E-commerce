export const PRODUCTS = [
  // Sarees
  { id: 1, name: "Meera Slub Silk Saree", cat: "Sarees", season: "Festive", price: 6225, mrp: 7499, type: "saree", bg: "#f1ddc4", accent: "#d6a23f", colors: ["#d6a23f", "#c98a7d"], tag: "Bestseller", image: "https://wallpapercave.com/wp/wp7665600.jpg" },
  { id: 2, name: "Chakra Organza Saree", cat: "Sarees", season: "Festive", price: 5099, mrp: null, type: "saree", bg: "#f1e0c8", accent: "#d6a23f", colors: ["#d6a23f", "#c98a7d"], tag: "New", image: "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2lsayUyMHNhcmVlfGVufDB8fDB8fHww" },
  { id: 3, name: "Veda Silk Saree (With Custom Blouse)", cat: "Sarees", season: "Festive", price: 7999, mrp: 9499, type: "saree", bg: "#dcdcdc", accent: "#2b2622", colors: ["#2b2622"], tag: "Premium", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq5FqPF2u1Ep5-LTpmL9JSx4aQXmA5-7BdQbdzPI8cDP5L8QKt1vlYL_bh&s=10" },
  { id: 4, name: "Kora Cotton Saree", cat: "Sarees", season: "Summer", price: 3499, mrp: 3999, type: "saree", bg: "#e2dfd2", accent: "#bd5b34", colors: ["#bd5b34", "#8a9a7e"], tag: "Sale", image: "https://images.media.io/ai-effects/ai-saree-photos-4.png" },
  
  // Jewellery
  { id: 5, name: "Aura Kundan Choker Set", cat: "Jewellery", season: "Festive", price: 2499, mrp: 2999, type: "jewellery", bg: "#e6d8ea", accent: "#7a5c8c", colors: ["#d6a23f", "#ffffff"], tag: "New", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80" },
  { id: 6, name: "Mayur Silver Jhumkas", cat: "Jewellery", season: "Autumn", price: 1299, mrp: null, type: "jewellery", bg: "#dfe3d4", accent: "#8a9a7e", colors: ["#e6dfd3"], tag: null, image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80" },
  { id: 7, name: "Devi Temple Necklace", cat: "Jewellery", season: "Festive", price: 4899, mrp: 5499, type: "jewellery", bg: "#f3dbe0", accent: "#c45f7a", colors: ["#d6a23f"], tag: "Bestseller", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80" },
  { id: 8, name: "Rani Pearl Bangle Set", cat: "Jewellery", season: "Summer", price: 1899, mrp: 2299, type: "jewellery", bg: "#e9dcc8", accent: "#c98a7d", colors: ["#ffffff", "#d6a23f"], tag: "Sale", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80" },

  // Women Accessories
  { id: 9, name: "Malti Embroidered Potli Bag", cat: "Women Accessories", season: "Autumn", price: 1599, mrp: 1999, type: "accessory", bg: "#f3e3c9", accent: "#bd5b34", colors: ["#bd5b34", "#d6a23f"], tag: "New", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj4SuEH0tO3V-xEozNBqejmqAEQbKJF0zgSuyo_n6XkltrLIps0nyHRMo&s=10" },
  { id: 10, name: "Zari Work Handcrafted Clutch", cat: "Women Accessories", season: "Festive", price: 2299, mrp: null, type: "accessory", bg: "#ece1d0", accent: "#5c4f3f", colors: ["#bd5b34", "#e6dfd3"], tag: null, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80" },
  { id: 11, name: "Lotus Silk Shawl", cat: "Women Accessories", season: "Autumn", price: 3199, mrp: 3599, type: "accessory", bg: "#e4d6c0", accent: "#403631", colors: ["#403631", "#8a9a7e"], tag: "Sale", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80" },
  { id: 12, name: "Phulkari Embroidered Dupatta", cat: "Women Accessories", season: "Summer", price: 1899, mrp: null, type: "accessory", bg: "#dedede", accent: "#2b2622", colors: ["#bd5b34", "#7a5c8c", "#d6a23f"], tag: "New", image: "https://www.phulkariforever.com/cdn/shop/files/PhulkariDupattaPureSilk52bavanbagh4orange_jpg.jpg?v=1723711764"},
  
  // More Sarees (Added by user request)
  { id: 13, name: "Varanasi Brocade Saree", cat: "Sarees", season: "Festive", price: 9499, mrp: 10999, type: "saree", bg: "#f3e3c9", accent: "#bd5b34", colors: ["#bd5b34", "#d6a23f"], tag: "New", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80" },
  { id: 14, name: "Chanderi Cotton Saree", cat: "Sarees", season: "Summer", price: 4299, mrp: 4999, type: "saree", bg: "#dfe3d4", accent: "#8a9a7e", colors: ["#8a9a7e", "#f1ddc4"], tag: "Sale", image: "https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&w=600&q=80" },
  { id: 15, name: "Patola Heritage Silk Saree", cat: "Sarees", season: "Autumn", price: 8599, mrp: 9999, type: "saree", bg: "#e9dcc8", accent: "#c98a7d", colors: ["#c98a7d", "#bd5b34"], tag: "Bestseller", image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=600&q=80" },
  { id: 16, name: "Tussar Floral Saree", cat: "Sarees", season: "Autumn", price: 5499, mrp: 6299, type: "saree", bg: "#f1e0c8", accent: "#d6a23f", colors: ["#d6a23f", "#8a9a7e"], tag: "New", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80" },
];

export const CATEGORIES = [
  { name: "Sarees", count: "48 Styles", type: "saree", bg: "#7a5c8c", accent: "#e9c9a5", image: "https://5.imimg.com/data5/SELLER/Default/2023/10/355023483/QE/GS/LT/94678823/cotton-silk-sharee-500x500.jpeg" },
  { name: "Jewellery", count: "36 Styles", type: "jewellery", bg: "#bd5b34", accent: "#e9c9a5", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80" },
  { name: "Women Accessories", count: "42 Styles", type: "accessory", bg: "#8a9a7e", accent: "#f6efe4", image: "https://miro.medium.com/v2/resize:fit:600/1*w2ZtNewCRB7uakMLKuME6A.jpeg" },
];



