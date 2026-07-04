import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const slides = [
    {
      image: "https://img.magnific.com/premium-photo/world-saree-day-copy-space-background_548646-56572.jpg?semt=ais_hybrid&w=740&q=80",
      title: "Shrikamalini Silk Sarees",
      subtitle: "Exquisite slub silk and traditional drapes crafted for modern elegance.",
      cta: "Shop Sarees",
      link: "#shop"
    },
    {
      image: "https://t4.ftcdn.net/jpg/01/67/25/37/360_F_167253732_FVaF7PyA5vat3JVPvP4F5AsCoZkYAnZF.jpg",
      title: "Royal Kundan & Temple Gold",
      subtitle: "Timeless handcrafted jewellery sets that celebrate heritage.",
      cta: "Shop Jewellery",
      link: "#shop"
    },
    {
      image: "https://t4.ftcdn.net/jpg/08/74/88/31/360_F_874883136_weXp7jguYciiVvSuJn0UJfcJ4NLTKcVf.jpg",
      title: "Luxury Potlis & Accessories",
      subtitle: "The perfect finishing touch with embroidered potli bags and silk shawls.",
      cta: "Shop Accessories",
      link: "#shop"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[calc(100vh-110px)] overflow-hidden bg-charcoal">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-[center_30%] transition-transform duration-[5000ms] ease-out scale-100"
            style={{ transform: index === current ? "scale(1.02)" : "scale(1.0)" }}
          />
          <div className="absolute inset-0 bg-black/35" />
          
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-20">
            <span className="text-[11px] tracking-[0.25em] uppercase text-mustard font-semibold mb-3 animate-fadeIn">
              New Collection Drop
            </span>
            <h1 className="font-serif font-medium text-4xl md:text-6xl text-white leading-tight mb-4 drop-shadow-sm max-w-3xl">
              {slide.title}
            </h1>
            <p className="text-[14px] md:text-[17px] text-cream/80 max-w-lg mb-8 font-light tracking-wide leading-relaxed">
              {slide.subtitle}
            </p>
            <Link
              to="/product"
              className="px-8 py-3.5 bg-white text-charcoal hover:bg-rust hover:text-white text-[12.5px] tracking-[0.12em] uppercase font-semibold transition-colors duration-300 shadow-md cursor-pointer inline-block"
            >
              {slide.cta}
            </Link>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
              i === current ? "bg-rust scale-110" : "bg-white/50 hover:bg-white"
            }`}
            title={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
