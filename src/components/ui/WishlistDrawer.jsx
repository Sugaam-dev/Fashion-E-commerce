import { useCart } from "../../context/CartContext.jsx";
import { PRODUCTS } from "../../data/products/products.js";

export default function WishlistDrawer() {
  const { wishlist, toggleWish, addToCart, wishlistOpen, setWishlistOpen, setDrawerOpen } = useCart();
  
  // Resolve wishlist items from global PRODUCTS list
  const wishlistItems = PRODUCTS.filter((p) => wishlist.has(p.id));

  function handleAddToBag(item) {
    addToCart(item);
    setWishlistOpen(false);
    setDrawerOpen(true);
  }

  return (
    <>
      {/* Background Overlay */}
      <div
        onClick={() => setWishlistOpen(false)}
        className={`fixed inset-0 bg-charcoal/45 z-[90] transition-opacity duration-300 ${
          wishlistOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer Container */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[420px] max-w-[92vw] bg-cream z-[95] shadow-2xl flex flex-col transition-transform duration-[400ms] ease-out ${
          wishlistOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-7 py-6 border-b border-line">
          <h3 className="font-serif text-2xl font-semibold">Your Favorites</h3>
          <button onClick={() => setWishlistOpen(false)} className="text-2xl leading-none cursor-pointer hover:text-rust">
            ×
          </button>
        </div>

        {/* Scrollable wishlist items */}
        <div className="flex-1 overflow-y-auto px-7 py-5">
          {wishlistItems.length === 0 ? (
            <div className="text-center py-16 text-charcoal/45">
              <div className="text-4xl mb-4">♡</div>
              Your wishlist is empty.
              <br />
              Save items you love here!
            </div>
          ) : (
            wishlistItems.map((item) => (
              <div key={item.id} className="flex gap-3.5 py-[18px] border-b border-line">
                <div className="w-[78px] h-24 flex-shrink-0 bg-cream-2 overflow-hidden rounded-xs shadow-xs">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[14.5px] font-semibold text-charcoal mb-0.5 leading-tight">{item.name}</div>
                    <div className="text-xs text-charcoal/45">{item.cat}</div>
                  </div>
                  <div className="text-[13.5px] font-bold text-charcoal mt-1">
                    ₹{item.price.toLocaleString("en-IN")}
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <button
                      onClick={() => handleAddToBag(item)}
                      className="text-[11.5px] font-bold text-rust hover:text-rust-deep cursor-pointer"
                    >
                      Add To Bag
                    </button>
                    <button
                      onClick={() => toggleWish(item.id)}
                      className="text-[11.5px] text-charcoal/45 hover:text-rust cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </aside>
    </>
  );
}
