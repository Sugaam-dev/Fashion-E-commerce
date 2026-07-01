import { Link } from "react-router-dom";
import { useCart } from "../CartContext.jsx";

export default function ProductCard({ product }) {
  const { toggleWish, wishlist } = useCart();
  const isWished = wishlist.has(product.id);

  const discountText = product.mrp && product.tag === "Sale"
    ? `${Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF`
    : product.tag;

  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-2 mb-4 rounded-sm shadow-sm">
        {product.tag && (
          <span
            className={`absolute top-3 left-3 z-10 text-[9px] tracking-[0.15em] font-semibold uppercase px-2.5 py-1 text-cream rounded-xs ${
              product.tag === "Sale" ? "bg-rust" : "bg-charcoal"
            }`}
          >
            {discountText}
          </span>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWish(product.id);
          }}
          className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[15px] opacity-0 -translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:scale-110 cursor-pointer ${
            isWished ? "text-rust" : "text-charcoal"
          }`}
        >
          {isWished ? "♥" : "♡"}
        </button>

        <Link to={`/details/${product.id}`} className="absolute inset-0 block">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
          />

          <div className="absolute left-2.5 right-2.5 bottom-2.5 z-10 bg-charcoal text-cream text-center py-3 text-[11.5px] tracking-[0.12em] uppercase opacity-0 translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:bg-rust">
            View Details
          </div>
        </Link>
      </div>

      <div>
        <Link to={`/details/${product.id}`} className="hover:text-rust transition-colors block">
          <div className="text-[15px] mb-1 font-semibold text-charcoal">{product.name}</div>
        </Link>
        <div className="text-[11px] text-charcoal/50 uppercase tracking-widest mb-2 font-medium">{product.cat} · {product.season}</div>
        <div className="flex items-center gap-2.5">
          <span className="text-[15px] font-semibold text-rust">₹{product.price.toLocaleString("en-IN")}</span>
          {product.mrp && (
            <span className="text-[12.5px] text-charcoal/40 line-through">
              ₹{product.mrp.toLocaleString("en-IN")}
            </span>
          )}
        </div>
        <div className="flex gap-1.5 mt-2.5">
          {product.colors.map((c, i) => (
            <span
              key={i}
              className="w-3 h-3 rounded-full border border-black/10"
              style={{ background: c }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
