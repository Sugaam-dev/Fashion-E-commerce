import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext.jsx";
import { PRODUCTS } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = PRODUCTS.find((p) => p.id === parseInt(id));

  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "");
  const [selectedSize, setSelectedSize] = useState("M");
  const [customFit, setCustomFit] = useState(false);
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="bg-cream min-h-screen py-16 text-center text-charcoal/50">
        Product not found.
      </div>
    );
  }

  // Filter related products
  const relatedProducts = PRODUCTS.filter((p) => p.cat === product.cat && p.id !== product.id).slice(0, 4);

  function handleAddToBag() {
    const productWithOpts = {
      ...product,
      name: `${product.name} (${selectedSize}${customFit ? " · Custom Fit" : ""})`,
      price: customFit ? product.price + 499 : product.price,
    };
    
    for (let i = 0; i < qty; i++) {
      addToCart(productWithOpts);
    }
  }

  return (
    <div className="bg-cream min-h-screen">
      {/* Back button link */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[13px] tracking-widest uppercase font-semibold text-charcoal/60 hover:text-rust transition-colors cursor-pointer"
        >
          ← Back to Collections
        </button>
      </div>

      {/* Main Details Panel */}
      <main className="max-w-[1280px] mx-auto px-6 md:px-10 pb-16 md:pb-24 grid md:grid-cols-2 gap-10 md:gap-16">
        {/* Left Column: Product Image */}
        <div className="aspect-[3/4] bg-cream-2 rounded-sm overflow-hidden shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Info & Details */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="block text-[11px] text-rust uppercase tracking-[0.2em] font-semibold mb-2">
              {product.cat} · {product.season} Edit
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-semibold mb-4 leading-tight text-charcoal">
              {product.name}
            </h1>

            {/* Price section */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-2xl md:text-3xl font-bold text-charcoal">
                ₹{(customFit ? product.price + 499 : product.price).toLocaleString("en-IN")}
              </span>
              {product.mrp && (
                <span className="text-base text-charcoal/30 line-through">
                  ₹{product.mrp.toLocaleString("en-IN")}
                </span>
              )}
              {product.mrp && (
                <span className="text-xs font-semibold text-rust bg-rust/10 px-2 py-0.5 rounded-sm">
                  Save {Math.round(((product.mrp - product.price) / product.mrp) * 100)}%
                </span>
              )}
            </div>

            {/* Colors */}
            <div className="mb-6 pb-6 border-b border-line">
              <span className="block text-xs uppercase tracking-widest text-charcoal/50 mb-3 font-semibold">
                Select Color Option
              </span>
              <div className="flex gap-3">
                {product.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(c)}
                    className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer ${
                      selectedColor === c ? "border-rust scale-110 shadow-md" : "border-black/5"
                    }`}
                    style={{ background: c }}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6 pb-6 border-b border-line">
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-xs uppercase tracking-widest text-charcoal/50 font-semibold">
                  Select Size Option
                </span>
                <button
                  onClick={() => alert("Size guide opened (Mock).")}
                  className="text-[11px] text-rust underline hover:text-rust-deep cursor-pointer font-medium"
                >
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {["XS", "S", "M", "L", "XL", "XXL"].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`w-12 h-10 border text-xs tracking-widest font-semibold flex items-center justify-center transition-all cursor-pointer ${
                      selectedSize === sz
                        ? "bg-charcoal text-cream border-charcoal shadow-sm"
                        : "border-line text-charcoal/60 hover:border-charcoal bg-white"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom fit widget (O4Orange customization style) */}
            <div className="mb-8 bg-cream-2 p-4 rounded-sm border border-line">
              <label className="flex items-start gap-4 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={customFit}
                  onChange={(e) => setCustomFit(e.target.checked)}
                  className="w-5 h-5 mt-0.5 accent-rust cursor-pointer"
                />
                <div>
                  <span className="font-serif text-[15px] font-semibold text-charcoal block mb-0.5">
                    Request Custom Tailoring (+₹499)
                  </span>
                  <p className="text-[12.5px] leading-relaxed text-charcoal/60">
                    Get custom blouses (necklines, sleeve fits) or customized lengths on sarees/accessories. 
                    Our design team will reach out directly on WhatsApp to collect your measurements.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Add to cart block */}
          <div className="flex gap-4 items-center pt-2">
            <div className="flex items-center border border-line bg-white h-12">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-10 h-full text-lg font-medium cursor-pointer hover:bg-cream-2/30 transition-colors"
              >
                −
              </button>
              <span className="w-10 text-center text-sm font-semibold">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-10 h-full text-lg font-medium cursor-pointer hover:bg-cream-2/30 transition-colors"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToBag}
              className="flex-1 h-12 bg-rust hover:bg-rust-deep text-white text-[12.5px] tracking-[0.18em] uppercase font-bold transition-all duration-300 shadow-md cursor-pointer"
            >
              Add To Bag
            </button>
          </div>
        </div>
      </main>

      {/* Description / Story blocks */}
      <section className="bg-cream-2/40 border-t border-b border-line py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-serif text-[18px] font-semibold mb-3">Artisan Craftsmanship</h4>
            <p className="text-[13.5px] leading-relaxed text-charcoal/60">
              Each piece is meticulously crafted by handloom weavers using premium slubs and silk blends, ensuring 
              unmatched comfort and durability.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-[18px] font-semibold mb-3">Custom Fit & Stylist Assistance</h4>
            <p className="text-[13.5px] leading-relaxed text-charcoal/60">
              Our bespoke tailoring services ensure your outfit matches your unique proportions perfectly. 
              Contact us on WhatsApp for complimentary custom sizing advice.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-[18px] font-semibold mb-3">Product Care Details</h4>
            <p className="text-[13.5px] leading-relaxed text-charcoal/60">
              Dry clean only. Iron inside out on moderate steam settings. Store in a cool, dry place wrapped 
              in muslin fabric.
            </p>
          </div>
        </div>
      </section>

      {/* Related items */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-6 md:px-10">
          <h3 className="font-serif text-2xl font-semibold mb-10 text-center">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
