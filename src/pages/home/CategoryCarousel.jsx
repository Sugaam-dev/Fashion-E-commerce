import { useRef, useEffect } from "react";
import SubcategoryCard from "../../components/cards/SubcategoryCard.jsx";

export default function CategoryCarousel({ cat }) {
  const isStatic = cat.name === "Readymade" || cat.name === "Accessories";
  const scrollRef = useRef(null);
  const isHovered = useRef(false);
  const isTouching = useRef(false);
  const scrollSpeed = 35; // Pixels per second (comfortable slow speed)

  const N = cat.subcatProducts.length;

  // Initialize scroll position to the start of the second group (W) for infinite left/right scrolling
  useEffect(() => {
    if (N === 0 || isStatic) return;
    const container = scrollRef.current;
    if (!container) return;

    const initScroll = () => {
      const children = container.children;
      if (children && children.length >= N * 2) {
        const firstChild = children[0];
        const repeatStartChild = children[N];
        if (firstChild && repeatStartChild) {
          const W = repeatStartChild.offsetLeft - firstChild.offsetLeft;
          if (W > 0) {
            container.scrollLeft = W;
            return true;
          }
        }
      }
      return false;
    };

    if (!initScroll()) {
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (initScroll() || attempts > 15) {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [N, isStatic]);

  // RequestAnimationFrame loop for high-performance auto-scrolling (bypassing React re-renders)
  useEffect(() => {
    if (N === 0 || isStatic) return;
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;
    let lastTime = performance.now();

    const animate = (time) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isHovered.current && !isTouching.current) {
        const children = container.children;
        if (children && children.length >= N * 2) {
          const firstChild = children[0];
          const repeatStartChild = children[N];
          if (firstChild && repeatStartChild) {
            const W = repeatStartChild.offsetLeft - firstChild.offsetLeft;
            if (W > 0) {
              let newScrollLeft = container.scrollLeft + scrollSpeed * delta;
              
              // Normalize scrollLeft to keep it inside the middle loop [W, 2W)
              if (newScrollLeft >= W * 2) {
                newScrollLeft -= W;
              } else if (newScrollLeft < W) {
                newScrollLeft += W;
              }
              container.scrollLeft = newScrollLeft;
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [N, isStatic]);

  // Normalize scroll position during manual interaction (touches/wheel) when not active
  const handleScroll = () => {
    if (N === 0 || isStatic) return;
    const container = scrollRef.current;
    if (!container || isTouching.current) return;

    const children = container.children;
    if (children && children.length >= N * 2) {
      const firstChild = children[0];
      const repeatStartChild = children[N];
      if (firstChild && repeatStartChild) {
        const W = repeatStartChild.offsetLeft - firstChild.offsetLeft;
        if (W > 0) {
          if (container.scrollLeft >= W * 2) {
            container.scrollLeft -= W;
          } else if (container.scrollLeft < W) {
            container.scrollLeft += W;
          }
        }
      }
    }
  };

  const handleTouchEnd = () => {
    isTouching.current = false;
    handleScroll();
  };

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-charcoal mb-4">{cat.name}</h3>
      <div className="relative">
        {/* Cards Container — 3x duplicated list for infinite scrolling, static centering for Readymade/Accessories */}
        <div
          ref={scrollRef}
          className={`relative flex gap-4 overflow-x-auto no-scrollbar ${
            isStatic ? "justify-start lg:justify-center" : ""
          }`}
          onMouseEnter={isStatic ? undefined : () => { isHovered.current = true; }}
          onMouseLeave={isStatic ? undefined : () => { isHovered.current = false; }}
          onTouchStart={isStatic ? undefined : () => { isTouching.current = true; }}
          onTouchEnd={isStatic ? undefined : handleTouchEnd}
          onTouchCancel={isStatic ? undefined : handleTouchEnd}
          onScroll={isStatic ? undefined : handleScroll}
        >
          {isStatic ? (
            cat.subcatProducts.map((sp) => (
              <SubcategoryCard
                key={sp.subcat}
                catName={cat.name}
                subcatName={sp.subcat}
                image={sp.products[0]?.image || ""}
                variant="static"
              />
            ))
          ) : (
            Array.from({ length: 3 }).flatMap((_, repeatIdx) =>
              cat.subcatProducts.map((sp) => (
                <SubcategoryCard
                  key={`${sp.subcat}-${repeatIdx}`}
                  catName={cat.name}
                  subcatName={sp.subcat}
                  image={sp.products[0]?.image || ""}
                />
              ))
            )
          )}
        </div>
      </div>
    </div>
  );
}
