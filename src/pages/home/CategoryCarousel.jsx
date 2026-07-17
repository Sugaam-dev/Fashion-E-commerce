import { useRef, useEffect, useState } from "react";
import SubcategoryCard from "../../components/cards/SubcategoryCard.jsx";

export default function CategoryCarousel({ cat }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const step = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: dir * step, behavior: "smooth" });
    }
  };

  const hasMore = (canScrollLeft || canScrollRight);

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-charcoal mb-4">{cat.name}</h3>
      <div className="relative">
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 border border-line rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-white hover:shadow-lg transition-all duration-200 -ml-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Cards Container — 4 visible at a time */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {cat.subcatProducts.map((sp) => (
            <SubcategoryCard
              key={sp.subcat}
              catName={cat.name}
              subcatName={sp.subcat}
              image={sp.products[0]?.image || ""}
            />
          ))}
        </div>

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 border border-line rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-white hover:shadow-lg transition-all duration-200 -mr-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
