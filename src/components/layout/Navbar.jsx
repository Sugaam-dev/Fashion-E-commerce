import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "../../context/CartContext.jsx";
import { COLLECTION_CATEGORIES } from "../../data/products/products.js";

export default function Navbar() {
  const { cart, wishlist, setDrawerOpen, setWishlistOpen, showToast } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState(null);
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const count = cart.reduce((s, i) => s + i.qty, 0);

  let Flashsale = false ;

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Collections", path: "#", isMega: true },
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
              ) : item.isMega ? (
                <div 
                  key={item.label} 
                  className="py-1"
                  onMouseEnter={() => setDesktopOpen(true)}
                  onMouseLeave={() => setDesktopOpen(false)}
                >
                  <span
                    className={`relative py-1 cursor-pointer transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px hover:after:w-full after:transition-all ${
                      location.pathname.startsWith("/product") && location.search.includes("category")
                        ? "text-rust after:w-full after:bg-rust"
                        : "hover:text-rust after:w-0 after:bg-rust"
                    }`}
                  >
                    {item.label}
                  </span>
                  
                  {/* Mega Menu Dropdown */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ease-out z-50 ${
                    desktopOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                  }`}>
                    <div className="bg-cream/98 backdrop-blur-md border border-line/80 shadow-[0_20px_50px_rgba(0,0,0,0.08)] py-8 px-8 rounded-sm w-[1000px] max-w-[95vw]">
                      <div className="grid grid-cols-4 gap-8">
                        {COLLECTION_CATEGORIES.map((category) => (
                          <div key={category.name} className="flex flex-col gap-3.5 group/col">
                            {/* Category image card on top */}
                            <Link
                              to={`/product?category=${encodeURIComponent(category.name)}`}
                              onClick={() => setDesktopOpen(false)}
                              className="overflow-hidden rounded-sm h-32 w-full border border-line/45 block relative"
                            >
                              <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover transform group-hover/col:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-charcoal/5 group-hover/col:bg-transparent transition-colors duration-300" />
                            </Link>

                            <Link
                              to={`/product?category=${encodeURIComponent(category.name)}`}
                              onClick={() => setDesktopOpen(false)}
                              className="text-[12px] font-bold tracking-[0.12em] uppercase text-charcoal group-hover/col:text-rust transition-colors pb-2 border-b border-line/60"
                            >
                              {category.name}
                            </Link>
                            <div className="flex flex-col gap-2.5">
                              {category.subcats.map((sub) => (
                                <Link
                                  key={sub}
                                  to={`/product?category=${encodeURIComponent(
                                    category.name
                                  )}&subcat=${encodeURIComponent(sub)}`}
                                  onClick={() => setDesktopOpen(false)}
                                  className="text-[13px] text-charcoal/70 hover:text-rust hover:translate-x-1 transition-all duration-200 block normal-case font-normal animate-fadeIn"
                                >
                                  {sub}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`relative py-1 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px hover:after:w-full after:transition-all ${
                    location.pathname === item.path && !location.search.includes("category")
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
              onClick={() => {
                setMobileOpen((v) => !v);
                setMobileCollectionsOpen(false);
                setMobileActiveCategory(null);
              }}
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
              ) : item.isMega ? (
                <div key={item.label} className="flex flex-col">
                  <button 
                    onClick={() => {
                      setMobileCollectionsOpen(!mobileCollectionsOpen);
                      setMobileActiveCategory(null);
                    }}
                    className="flex items-center justify-between py-1 w-full text-left uppercase tracking-[0.08em] font-medium text-charcoal hover:text-rust cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} className={`transform transition-transform duration-200 ${mobileCollectionsOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileCollectionsOpen ? "max-h-[1000px] opacity-100 my-2" : "max-h-0 opacity-0"}`}>
                    <div className="pl-4 border-l border-line/60 flex flex-col gap-4 py-2">
                      {COLLECTION_CATEGORIES.map((category) => {
                        const isCatOpen = mobileActiveCategory === category.name;
                        return (
                          <div key={category.name} className="flex flex-col border-b border-line/10 pb-2 last:border-b-0 last:pb-0">
                            <button
                              onClick={() => setMobileActiveCategory(isCatOpen ? null : category.name)}
                              className="flex items-center justify-between w-full text-left py-1 text-xs font-bold tracking-wider uppercase text-rust hover:text-rust-deep cursor-pointer"
                            >
                              <span>{category.name}</span>
                              <ChevronDown size={14} className={`transform transition-transform duration-200 ${isCatOpen ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isCatOpen ? "max-h-[500px] opacity-100 mt-2 mb-1" : "max-h-0 opacity-0"}`}>
                              <div className="flex flex-col gap-2 pl-3 border-l border-line/60">
                                <Link
                                  to={`/product?category=${encodeURIComponent(category.name)}`}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setMobileCollectionsOpen(false);
                                    setMobileActiveCategory(null);
                                  }}
                                  className="text-xs text-charcoal font-semibold hover:text-rust block normal-case"
                                >
                                  View All {category.name}
                                </Link>
                                {category.subcats.map((sub) => (
                                  <Link
                                    key={sub}
                                    to={`/product?category=${encodeURIComponent(category.name)}&subcat=${encodeURIComponent(sub)}`}
                                    onClick={() => {
                                      setMobileOpen(false);
                                      setMobileCollectionsOpen(false);
                                      setMobileActiveCategory(null);
                                    }}
                                    className="text-xs text-charcoal/80 hover:text-rust block normal-case font-normal py-0.5"
                                  >
                                    {sub}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
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
