import { useCart } from "../CartContext.jsx";

export default function CartDrawer({ onCheckout }) {
  const { cart, changeQty, removeItem, drawerOpen, setDrawerOpen, showToast } = useCart();
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const freeShipAt = 1499;

  return (
    <>
      <div
        onClick={() => setDrawerOpen(false)}
        className={`fixed inset-0 bg-charcoal/45 z-[90] transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 bottom-0 w-[420px] max-w-[92vw] bg-cream z-[95] shadow-2xl flex flex-col transition-transform duration-[400ms] ease-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-7 py-6 border-b border-line">
          <h3 className="font-serif text-2xl font-semibold">Your Bag</h3>
          <button onClick={() => setDrawerOpen(false)} className="text-2xl leading-none cursor-pointer hover:text-rust">
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-7 py-5">
          {cart.length === 0 ? (
            <div className="text-center py-16 text-charcoal/45">
              <div className="text-4xl mb-4">👜</div>
              Your bag is feeling light.
              <br />
              Add something you'll love.
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-3.5 py-[18px] border-b border-line">
                <div className="w-[78px] h-24 flex-shrink-0 bg-cream-2 overflow-hidden rounded-xs shadow-xs">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="text-[14.5px] mb-0.5">{item.name}</div>
                  <div className="text-xs text-charcoal/45 mb-auto">{item.cat} · Free Size</div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center border border-line">
                      <button
                        onClick={() => changeQty(item.id, -1)}
                        className="w-[26px] h-[26px] text-sm"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-[13px]">{item.qty}</span>
                      <button
                        onClick={() => changeQty(item.id, 1)}
                        className="w-[26px] h-[26px] text-sm"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm font-medium">
                      ₹{(item.price * item.qty).toLocaleString("en-IN")}
                    </span>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-[11.5px] underline text-charcoal/45 text-left mt-1.5 w-fit"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="px-7 pb-7 pt-5 border-t border-line">
            <div className="flex justify-between text-[15px] mb-4">
              <span>Subtotal</span>
              <b className="font-serif text-[22px]">₹{subtotal.toLocaleString("en-IN")}</b>
            </div>
            <button
              onClick={() => {
                setDrawerOpen(false);
                onCheckout();
              }}
              className="w-full py-4 bg-charcoal text-cream text-[13px] tracking-[0.12em] uppercase hover:bg-rust transition-colors cursor-pointer"
            >
              Checkout
            </button>
            <div className="text-[11.5px] text-center text-charcoal/45 mt-3">
              {subtotal >= freeShipAt
                ? "You've unlocked free shipping ✓"
                : `Add ₹${(freeShipAt - subtotal).toLocaleString("en-IN")} more for free shipping`}
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
