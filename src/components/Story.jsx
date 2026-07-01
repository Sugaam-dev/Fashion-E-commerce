export default function Story() {
  return (
    <section id="story" className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-2 items-center gap-12 md:gap-20">
        <div className="aspect-[4/5] overflow-hidden bg-cream-2 rounded-sm shadow-md group">
          <img
            src="https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=800&q=80"
            alt="Handcrafted Weaving Story"
            className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-105"
          />
        </div>

        <div>
          <span className="block text-xs tracking-[0.2em] uppercase text-rust mb-4 font-semibold">
            Why PMRG Solution
          </span>
          <h2 className="font-serif font-medium text-[28px] md:text-[42px] leading-tight mb-6">
            Every piece begins with a fabric story, not a fast trend.
          </h2>
          <p className="text-[16px] leading-relaxed text-charcoal/70 max-w-md mb-8">
            We work with small-batch weavers across the country, choosing slubs,
            mulmuls and modal blends that breathe in the heat and soften with
            every wash. No two dye lots are quite the same — and that's the point.
          </p>
          <a
            href="#shop"
            className="inline-block px-8 py-4 text-[13px] tracking-[0.1em] uppercase border border-charcoal hover:bg-charcoal hover:text-cream transition-colors"
          >
            Explore The Collection
          </a>
          <div className="flex gap-10 mt-9">
            <div>
              <b className="font-serif text-[34px] block text-rust-deep">40+</b>
              <span className="text-[11.5px] tracking-wide uppercase text-charcoal/50">Weaver Partners</span>
            </div>
            <div>
              <b className="font-serif text-[34px] block text-rust-deep">12K+</b>
              <span className="text-[11.5px] tracking-wide uppercase text-charcoal/50">Happy Customers</span>
            </div>
            <div>
              <b className="font-serif text-[34px] block text-rust-deep">4.7★</b>
              <span className="text-[11.5px] tracking-wide uppercase text-charcoal/50">Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
