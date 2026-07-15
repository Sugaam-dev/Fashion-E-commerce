import { CATEGORIES } from "../../data/products/products.js";

export default function Categories({ onSelect }) {
  return (
    <section className="py-16 md:py-24 bg-cream-2/40">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="mb-10">
          <span className="block text-xs tracking-[0.2em] uppercase text-rust-deep mb-2 font-medium">
            Shop by category
          </span>
          <h2 className="font-serif font-medium text-3xl md:text-5xl">Find your silhouette</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map((c) => (
            <div
              key={c.name}
              onClick={() => onSelect(c.name)}
              className="relative aspect-[3/4] overflow-hidden cursor-pointer group isolate rounded-sm shadow-sm"
            >
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/55 to-transparent text-white">
                <div className="font-serif text-xl font-semibold">{c.name}</div>
                <span className="block text-[10.5px] tracking-[0.12em] uppercase opacity-85 font-sans font-light mt-0.5">
                  {c.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
