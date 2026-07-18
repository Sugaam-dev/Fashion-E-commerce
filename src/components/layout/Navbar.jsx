import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../../context/CartContext.jsx";

export default function Navbar() {
  const { cart, wishlist, setDrawerOpen, setWishlistOpen, showToast } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const count = cart.reduce((s, i) => s + i.qty, 0);

  let Flashsale = false ;

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Product", path: "/product" },
    { label: "Contact", path: "/contact" },
    //{ label: "Login", path: "/login", isLogin: true }
  ];

  function handleLoginClick(e) {
    e.preventDefault();
    showToast("Register/Login modal triggered! (Client Mockup)");
    setMobileOpen(false);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/product?search=${encodeURIComponent(searchVal.trim())}`);
      setSearchVal("");
      setSearchOpen(false);
      setMobileOpen(false);
    }
  };

  return (
    <>
    {Flashsale &&
      <div className="bg-charcoal text-cream/95 text-[11.5px] tracking-[0.15em] uppercase text-center py-2.5 px-2 font-medium">
        ✨ Festive Edit Live — Customize Any Outfit — Free Shipping over ₹1,499 ✨
      </div>
}

      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-line">
        <nav className="max-w-[1280px] min-[2000px]:max-w-[2100px] mx-auto flex items-center justify-between px-6 md:px-10 py-1.5">
          <Link 
            to="/" 
            className="flex items-center hover:opacity-90"
          >
            <img
              src="/shrikamaliniLogo.png"
              alt="Shrikamalini Logo"
              className="h-22 w-auto"
            />
          </Link>
          <div className="hidden lg:flex gap-8 text-[13px] tracking-[0.08em] uppercase font-medium">
            {navItems.map((item) => (
              item.isLogin ? (
                <a
                  key={item.label}
                  href="#login"
                  onClick={handleLoginClick}
                  className="relative py-1 text-rust hover:text-rust-deep after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px hover:after:w-full after:transition-all after:bg-rust-deep"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`relative py-1 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px hover:after:w-full after:transition-all ${
                    location.pathname === item.path
                      ? "text-rust after:w-full after:bg-rust"
                      : "hover:text-rust after:w-0 after:bg-rust"
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center gap-5.5 text-charcoal">
            {searchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center gap-1.5 border border-line bg-white px-2 py-1 rounded-sm animate-fadeIn">
                <input
                  type="text"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  placeholder="Search products..."
                  className="w-28 sm:w-40 text-xs outline-none bg-transparent"
                  autoFocus
                />
                <button type="submit" className="hover:text-rust cursor-pointer">
                  <Search size={14} className="stroke-[2]" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchVal("");
                  }}
                  className="hover:text-rust cursor-pointer"
                >
                  <X size={14} className="stroke-[2]" />
                </button>
              </form>
            ) : (
              <button
                title="Search"
                className="hover:text-rust transition-colors cursor-pointer"
                onClick={() => setSearchOpen(true)}
              >
                <Search size={18} className="stroke-[1.85]" />
              </button>
            )}

            <button
              title="Wishlist"
              className="relative hover:text-rust transition-colors cursor-pointer flex items-center"
              onClick={() => setWishlistOpen(true)}
            >
              <Heart size={18} className="stroke-[1.85]" />
              {wishlist.size > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-rust text-white text-[9.5px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.size}
                </span>
              )}
            </button>

            <button
              title="Bag"
              onClick={() => setDrawerOpen(true)}
              className="relative hover:text-rust transition-colors cursor-pointer flex items-center"
            >
              <ShoppingBag size={18} className="stroke-[1.85]" />
              <span className="absolute -top-1.5 -right-2 bg-rust text-white text-[9.5px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {count}
              </span>
            </button>
            <button
              className="lg:hidden cursor-pointer flex items-center"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={20} className="stroke-[1.85]" /> : <Menu size={20} className="stroke-[1.85]" />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="lg:hidden flex flex-col px-6 pb-5 pt-2 gap-3.5 text-sm uppercase tracking-[0.08em] font-medium border-t border-line bg-cream animate-fadeIn">
            {navItems.map((item) => (
              item.isLogin ? (
                <a 
                  key={item.label} 
                  href="#login"
                  onClick={handleLoginClick} 
                  className="py-1 text-rust font-semibold"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`py-1 ${location.pathname === item.path ? "text-rust font-semibold" : "hover:text-rust"}`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        )}
      </header>
    </>
  );
}
