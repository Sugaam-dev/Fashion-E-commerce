import { useNavigate } from "react-router-dom";

const CATEGORIES = [
  {
    name: "Sarees",
    // Use first saree image as representative
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dress Material",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Readymade",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Categories() {
  const navigate = useNavigate();

  function handleCategoryClick(catName) {
    navigate(`/product?category=${encodeURIComponent(catName)}`);
  }

  return (
    <section className="py-16 md:py-24 bg-cream-2/40">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-12">
        <div>
          <span className="block text-xs tracking-[0.2em] uppercase text-rust-deep mb-2 font-medium">
            Shop by category
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            Find your silhouette
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              onClick={() => handleCategoryClick(cat.name)}
              className="relative aspect-[3/4] overflow-hidden cursor-pointer group isolate rounded-sm shadow-sm"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/55 to-transparent text-white">
                <div className="font-serif text-[15px] font-semibold">{cat.name}</div>
                <span className="block text-[9px] tracking-[0.12em] uppercase opacity-85 font-sans font-light mt-0.5">
                  Explore Collection →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
