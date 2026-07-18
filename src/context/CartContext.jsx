import { createContext, useContext, useState, useCallback, useEffect } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // Initialize cart from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Initialize wishlist from localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("wishlist");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, msg: "" });

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Sync wishlist to localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(Array.from(wishlist)));
  }, [wishlist]);

  const showToast = useCallback((msg) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: "" }), 2200);
  }, []);

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    showToast("Added to bag");
    setDrawerOpen(true);
  }, [showToast]);

  const changeQty = useCallback((id, delta) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  }, []);

  const removeItem = useCallback((id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const toggleWish = useCallback((id) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        showToast("Added to wishlist ♡");
      }
      return next;
    });
  }, [showToast]);

  const value = {
    cart, addToCart, changeQty, removeItem, clearCart,
    wishlist, toggleWish,
    drawerOpen, setDrawerOpen,
    wishlistOpen, setWishlistOpen,
    toast, showToast,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
