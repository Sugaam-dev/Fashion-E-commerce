export default function CustomSection() {
  const customOptions = [
    { title: "Perfect Fit", desc: "Share your exact body measurements for a custom-tailored dress or kurta.", icon: "📏" },
    { title: "Select Fabric", desc: "Choose from our premium range of organic cotton, slub silk, or linen.", icon: "🧵" },
    { title: "Custom Blouses", desc: "Customized necklines, sleeve details, and back designs for your sarees.", icon: "👗" },
    { title: "Direct Consultation", desc: "Chat with our designers on WhatsApp to finalize design details.", icon: "💬" },
  ];

  return (
    <section id="custom-tailoring" className="py-16 md:py-24 bg-cream border-t border-b border-line">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <span className="block text-xs tracking-[0.2em] uppercase text-rust mb-4 font-semibold">
            Bespoke Fitting & Custom Tailoring
          </span>
          <h2 className="font-serif font-medium text-[32px] md:text-[46px] leading-[1.1] mb-6">
            Customize your outfit. <br />
            However you need to wear.
          </h2>
          <p className="text-[16px] leading-relaxed text-charcoal/70 mb-9 max-w-lg">
            We believe style has no standard size. Get the perfect fit and custom embellishments on 
            any of our sarees, blouses, and Indo-Western outfits. Choose your fabrics, detailing, 
            and experience elegance crafted exclusively for you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7 mb-10">
            {customOptions.map((opt, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-2xl pt-0.5">{opt.icon}</span>
                <div>
                  <h4 className="font-serif text-[16px] font-semibold mb-1 text-charcoal">{opt.title}</h4>
                  <p className="text-[13px] text-charcoal/60 leading-relaxed">{opt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/9861812277"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-rust text-white text-[13px] tracking-[0.1em] uppercase hover:bg-rust-deep transition-colors font-medium shadow-sm"
          >
            <span>💬 Chat on WhatsApp</span>
          </a>
        </div>

        <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group rounded-sm shadow-md">
          <img
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80"
            alt="Tailoring workshop fabric selection"
            className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[10px] tracking-[0.2em] uppercase opacity-75 font-semibold">Special Edition</span>
            <h3 className="font-serif text-xl font-medium mt-1">Design Your Perfect Ensemble</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
