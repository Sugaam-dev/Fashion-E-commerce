import paithaniSareeImg from "../../assets/images/categories/sarees/paithani/paithani_saree_card_image.jpg";
import maheshwariSareeImg from "../../assets/images/categories/sarees/maheshwari/maheshwari_saree_card_image.jpg";
import fancySareeImg from "../../assets/images/categories/sarees/fancy/fancy_saree_card_image.jpg";
import kotaDoriaImg from "../../assets/images/categories/sarees/kota-doria/kota_doria_saree_card_image.jpg";

const JEWELLERY_PRODUCTS = [
  { id: 5, name: "Aura Kundan Choker Set", cat: "Jewellery", subcat: null, season: "Festive", price: 2499, mrp: 2999, type: "jewellery", bg: "#e6d8ea", accent: "#7a5c8c", colors: ["#d6a23f", "#ffffff"], tag: "New", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80" },
  { id: 6, name: "Mayur Silver Jhumkas", cat: "Jewellery", subcat: null, season: "Autumn", price: 1299, mrp: null, type: "jewellery", bg: "#dfe3d4", accent: "#8a9a7e", colors: ["#e6dfd3"], tag: null, image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80" },
  { id: 7, name: "Devi Temple Necklace", cat: "Jewellery", subcat: null, season: "Festive", price: 4899, mrp: 5499, type: "jewellery", bg: "#f3dbe0", accent: "#c45f7a", colors: ["#d6a23f"], tag: "Bestseller", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80" },
  { id: 8, name: "Rani Pearl Bangle Set", cat: "Jewellery", subcat: null, season: "Summer", price: 1899, mrp: 2299, type: "jewellery", bg: "#e9dcc8", accent: "#c98a7d", colors: ["#ffffff", "#d6a23f"], tag: "Sale", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80" },
];

const colorsPool = [
  ["#1a4a2e", "#d6a23f"],
  ["#4a1a6e", "#d6a23f"],
  ["#c0392b", "#4a7a1e"],
  ["#c0106e", "#d6a23f"],
  ["#bd5b34", "#d6a23f"],
  ["#4a7a1e", "#e9c9a5"],
  ["#2c3e50", "#bd5b34"],
  ["#7d3c98", "#f1c40f"],
];

const seasons = ["Festive", "Summer", "Autumn", "Spring", "Winter"];

const spec = [
  {
    cat: "Sarees",
    type: "saree",
    subcats: [
      { name: "Paithani", count: 10, startPrice: 8500, stepPrice: 300, localImg: paithaniSareeImg },
      { name: "Maheshwari", count: 4, startPrice: 6500, stepPrice: 400, localImg: maheshwariSareeImg },
      { name: "Fancy", count: 6, startPrice: 5000, stepPrice: 250, localImg: fancySareeImg },
      { name: "Ikat", count: 6, startPrice: 7200, stepPrice: 350 },
      { name: "Ilkal", count: 6, startPrice: 4500, stepPrice: 200 },
      { name: "Kota Doriya", count: 6, startPrice: 5500, stepPrice: 150, localImg: kotaDoriaImg },
    ],
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?auto=format&fit=crop&w=600&q=80",
    ]
  },
  {
    cat: "Dress Material",
    type: "dressmaterial",
    subcats: [
      { name: "Ikat", count: 15, startPrice: 1800, stepPrice: 100 },
      { name: "Jamdani", count: 12, startPrice: 2100, stepPrice: 80 },
      { name: "Kota Doriya", count: 25, startPrice: 1600, stepPrice: 70 },
      { name: "Maheshwari", count: 4, startPrice: 2400, stepPrice: 150 },
      { name: "Narayan Peth", count: 5, startPrice: 2000, stepPrice: 120 },
    ],
    images: [
      "https://images.unsplash.com/photo-1558171813-0e3a28c4b59e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=600&q=80",
    ]
  },
  {
    cat: "Readymade",
    type: "readymade",
    subcats: [
      { name: "Halter Neck Short Top", count: 5, startPrice: 1299, stepPrice: 90 },
      { name: "Kurti with Dupatta", count: 5, startPrice: 1899, stepPrice: 110 },
      { name: "One Piece", count: 5, startPrice: 2299, stepPrice: 140 },
    ],
    images: [
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1618932260643-eee4a2f6c9d6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=80",
    ]
  },
  {
    cat: "Women Accessories",
    type: "accessory",
    subcats: [
      { name: "Paithani Clutches", count: 5, startPrice: 1999, stepPrice: 150 },
      { name: "Pouches", count: 5, startPrice: 999, stepPrice: 80 },
      { name: "Sling Bags", count: 5, startPrice: 1499, stepPrice: 120 },
    ],
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc15aae9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590874103328-eacda8821c67?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1588444839799-eaa434d8b9ad?auto=format&fit=crop&w=600&q=80",
    ]
  }
];

const generatedList = [];
let currentId = 100;

spec.forEach((categorySpec) => {
  categorySpec.subcats.forEach((subcatSpec) => {
    for (let i = 0; i < subcatSpec.count; i++) {
      const id = currentId++;
      const price = subcatSpec.startPrice + i * subcatSpec.stepPrice;
      const mrp = i % 2 === 0 ? Math.round(price * 1.25 / 100) * 100 : null;
      const tag = i === 0 ? "Bestseller" : (i === 1 ? "New" : (i === 2 ? "Sale" : (i === 3 ? "Premium" : null)));
      const colors = colorsPool[id % colorsPool.length];
      const bg = colors[0];
      const accent = colors[1];
      
      let image = categorySpec.images[i % categorySpec.images.length];
      if (i === 0 && subcatSpec.localImg) {
        image = subcatSpec.localImg;
      }

      // Override with local public image paths for the requested subcategories
      if (categorySpec.cat === "Sarees" && subcatSpec.name === "Paithani") {
        const pImgs = ["pathani-1.jpeg", "pathani-2.jpeg", "paithani3.jpeg", "paithani-4.jpeg", "Paithani-5.jpeg", "paithani-6.jpeg", "paithani-7.jpeg", "paithani-8.jpeg", "paithani_9.jpg", "paithani-10.jpeg"];
        image = (i === 0 && subcatSpec.localImg) ? subcatSpec.localImg : `/assets/images/categories/sarees/paithani/${pImgs[i] || `paithani_${i + 1}.jpg`}`;
      } else if (categorySpec.cat === "Sarees" && subcatSpec.name === "Maheshwari") {
        const mImgs = ["63face27-54a8-4c47-9ea5-c2588f47f772.jpeg", "6bea9b74-b3b5-4b18-bdd2-54943b740845.jpeg", "e0d24ecf-9ce3-46d9-bb3d-a80eb53168e5.jpeg", "e0f05d66-bc71-4287-8fc7-dfce5b64b436.jpeg"];
        image = (i === 0 && subcatSpec.localImg) ? subcatSpec.localImg : `/assets/images/categories/sarees/maheshwari/${mImgs[i] || `maheshwari_${i + 1}.jpg`}`;
      } else if (categorySpec.cat === "Dress Material" && subcatSpec.name === "Ikat") {
        const iImgs = ["1db53742-71a2-4ea1-afad-85a05201be3a.jpeg", "234e02d1-76cf-4098-8199-a2ab9dd474d4.jpeg", "43b12608-f236-49e7-a1bb-17b21e50f683.jpeg", "51ee7ed8-9b6a-4d57-b857-4b7427319897.jpeg", "56a17130-a096-46d5-8282-32c1a52545f4.jpeg", "5e49b2af-372a-4d4f-bdea-939e20102686.jpeg", "6ef158db-2c52-46ae-af5d-17f51e41c244 (1).jpeg", "700a4c75-9d60-46d8-9957-0f41e3a6777b.jpeg", "861e2c9c-c9c8-4b19-affc-0ec025378bbe.jpeg", "b1e85ef7-da24-4da7-b2d3-9cb78696b89e (1).jpeg", "c09b2550-9c9f-495c-bfa6-8cfb62ef5211.jpeg", "cae51e02-a325-4983-82ab-58d80b264ad2.jpeg", "cb9202bd-bd56-4120-a075-feec60b7084d.jpeg", "e2a171a1-6107-4b01-b90a-e799a636e65d.jpeg", "f8a563af-a5bb-42a9-ad35-0b68cb38aee5.jpeg"];
        image = i === 0 ? categorySpec.images[0] : `/assets/images/categories/dress-material/ikat/${iImgs[i] || `ikat_${i + 1}.jpg`}`;
      } else if (categorySpec.cat === "Dress Material" && subcatSpec.name === "Jamdani") {
        const jImgs = ["14bc6a31-d782-4a6a-9876-5dd450368ce6.jpeg", "331a39a5-68de-4500-b570-c662d2b36ccc.jpeg", "670436c0-3583-4bde-a0c9-b9670e82540b.jpeg", "90c72df3-ea7b-412f-9e77-7cf43a71374b.jpeg", "90f04b8e-8615-43b1-a43d-0172dd0a54cc.jpeg", "98ba0440-bb3c-443b-8d9b-0ad9bb77af2f.jpeg", "aa3df910-bb3c-4b76-9d88-9d3fcce194c5.jpeg", "c5c6aa43-17a6-4ec4-8f22-372b0bbc03c3.jpeg", "deb3dff7-4ee0-4081-805f-683e48e7f23a.jpeg", "e5adccc4-3bd0-4a97-91f9-851900357ee2.jpeg", "f218245d-dd76-4c61-9f29-563279a6679e.jpeg"];
        image = i === 0 ? categorySpec.images[0] : `/assets/images/categories/dress-material/jamdani/${jImgs[i] || `jamdani_${i + 1}.jpg`}`;
      } else if (categorySpec.cat === "Dress Material" && subcatSpec.name === "Kota Doriya") {
        image = `/assets/images/categories/dress-material/kota-doriya/kota_doriya_${i + 1}.jpg`;
      }
      
      let name = `${subcatSpec.name} ${categorySpec.cat === "Sarees" ? "Saree" : (categorySpec.cat === "Dress Material" ? "Suit" : "")} - Style ${i + 1}`;
      if (categorySpec.cat === "Dress Material" && subcatSpec.name === "Ikat") {
        name = "Ikat Dress Material";
      } else if (categorySpec.cat === "Dress Material" && subcatSpec.name === "Jamdani") {
        name = "Jamdani Dress Material";
      }
      
      const item = {
        id,
        name,
        cat: categorySpec.cat,
        subcat: subcatSpec.name,
        season: seasons[id % seasons.length],
        price,
        mrp,
        type: categorySpec.type,
        bg,
        accent,
        colors,
        tag,
        image,
      };
      
      if (categorySpec.cat === "Readymade") {
        item.sizes = ["S", "M", "L", "XL"];
      }
      
      generatedList.push(item);
    }
  });
});

export const PRODUCTS = [...generatedList, ...JEWELLERY_PRODUCTS];

// Legacy CATEGORIES export — kept for any existing references
export const CATEGORIES = [
  { name: "Sarees", count: "38 Styles", type: "saree", bg: "#7a5c8c", accent: "#e9c9a5", image: "https://5.imimg.com/data5/SELLER/Default/2023/10/355023483/QE/GS/LT/94678823/cotton-silk-sharee-500x500.jpeg" },
  { name: "Jewellery", count: "4 Styles", type: "jewellery", bg: "#bd5b34", accent: "#e9c9a5", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80" },
  { name: "Women Accessories", count: "15 Styles", type: "accessory", bg: "#8a9a7e", accent: "#f6efe4", image: "https://miro.medium.com/v2/resize:fit:600/1*w2ZtNewCRB7uakMLKuME6A.jpeg" },
];

export const COLLECTION_CATEGORIES = [
  {
    name: "Sarees",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/355023483/QE/GS/LT/94678823/cotton-silk-sharee-500x500.jpeg",
    subcats: ["Paithani", "Maheshwari", "Fancy", "Kota Doriya", "Ikat", "Ilkal"],
  },
  {
    name: "Dress Material",
    image: "https://images.unsplash.com/photo-1558171813-0e3a28c4b59e?auto=format&fit=crop&w=600&q=80",
    subcats: ["Ikat", "Jamdani", "Kota Doriya", "Maheshwari", "Narayan Peth"],
  },
  {
    name: "Readymade",
    image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&w=600&q=80",
    subcats: ["Halter Neck Short Top", "Kurti with Dupatta", "One Piece"],
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    subcats: ["Paithani Clutches", "Pouches", "Sling Bags"],
  },
];
