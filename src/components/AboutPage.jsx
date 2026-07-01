export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        
        {/* Header Title */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-24">
          <span className="text-[11px] tracking-[0.25em] uppercase text-rust font-semibold block mb-3">
            Our Story & Legacy
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight text-charcoal">
            Artisanship over Fast Trends
          </h1>
          <div className="w-16 h-0.5 bg-rust mx-auto mt-6" />
        </div>

        {/* Section 1: Split Screen Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-20 md:mb-32">
          <div className="aspect-[4/5] bg-cream-2 overflow-hidden rounded-sm shadow-sm group">
            <img
              src="https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=800&q=80"
              alt="Handloom Weaving Craft"
              className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-105"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-6 leading-snug">
              Every thread carries the whisper of an artisan weaver.
            </h2>
            <p className="text-[15px] leading-relaxed text-charcoal/70 mb-6">
              PMRG Solution was founded with a single mission: to create contemporary ethnic designs 
              for women while preserving traditional Indian weaving techniques. We partner directly 
              with small-batch weavers across the country, selecting pure slub silks, raw cottons, 
              and organic linens.
            </p>
            <p className="text-[15px] leading-relaxed text-charcoal/70">
              No two dye lots are ever exactly alike, and that variation is what makes your garment 
              truly unique. Crafted slowly, finished by hand, and designed to breathe in the summer 
              heat.
            </p>
          </div>
        </div>

        {/* Section 2: Core Values Grid */}
        <div className="bg-cream-2/40 border-t border-b border-line py-16 md:py-20 mb-20 md:mb-32">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-center text-charcoal mb-12">
            The Pillars of PMRG Solution
          </h3>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center px-4">
              <span className="text-4xl block mb-4">🌾</span>
              <h4 className="font-serif text-lg font-bold mb-3 text-charcoal">Sustainably Sourced</h4>
              <p className="text-[13.5px] leading-relaxed text-charcoal/60">
                We use 100% natural, biodegradable fibers. Our fabrics are handspun and dyed using 
                eco-friendly compounds to reduce ecological footprint.
              </p>
            </div>
            <div className="text-center px-4">
              <span className="text-4xl block mb-4">🤝</span>
              <h4 className="font-serif text-lg font-bold mb-3 text-charcoal">Direct Fair Trade</h4>
              <p className="text-[13.5px] leading-relaxed text-charcoal/60">
                By cutting out middlemen, we ensure our weaver communities receive fair wages and stable 
                livelihoods, keeping centuries-old craft traditions alive.
              </p>
            </div>
            <div className="text-center px-4">
              <span className="text-4xl block mb-4">✨</span>
              <h4 className="font-serif text-lg font-bold mb-3 text-charcoal">Bespoke Customization</h4>
              <p className="text-[13.5px] leading-relaxed text-charcoal/60">
                Every woman deserves clothes that fit her perfectly. Our made-to-measure tailoring service 
                customizes garments to fit your unique shape.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Weaver Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <b className="font-serif text-5xl block text-rust font-bold mb-2">40+</b>
            <span className="text-[11px] tracking-widest uppercase text-charcoal/50 font-medium">Weaving Communities</span>
          </div>
          <div>
            <b className="font-serif text-5xl block text-rust font-bold mb-2">12K+</b>
            <span className="text-[11px] tracking-widest uppercase text-charcoal/50 font-medium">Happy Clients</span>
          </div>
          <div>
            <b className="font-serif text-5xl block text-rust font-bold mb-2">100%</b>
            <span className="text-[11px] tracking-widest uppercase text-charcoal/50 font-medium">Handcrafted</span>
          </div>
          <div>
            <b className="font-serif text-5xl block text-rust font-bold mb-2">4.8★</b>
            <span className="text-[11px] tracking-widest uppercase text-charcoal/50 font-medium">Customer Rating</span>
          </div>
        </div>

      </div>
    </div>
  );
}
