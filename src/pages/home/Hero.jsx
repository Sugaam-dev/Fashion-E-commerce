import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export default function Hero() {
  const slides = [
    {
      image: "https://img.magnific.com/premium-photo/world-saree-day-copy-space-background_548646-56572.jpg?semt=ais_hybrid&w=740&q=80",
      title: "Shrikamalini Silk Sarees",
      subtitle: "Exquisite slub silk and traditional drapes crafted for modern elegance.",
      cta: "Shop Sarees",
      link: "/product?category=Sarees"
    },
    {
      image: "https://t4.ftcdn.net/jpg/01/67/25/37/360_F_167253732_FVaF7PyA5vat3JVPvP4F5AsCoZkYAnZF.jpg",
      title: "Royal Kundan & Temple Gold",
      subtitle: "Timeless handcrafted jewellery sets that celebrate heritage.",
      cta: "Shop Jewellery",
      link: "/product?category=Accessories"
    },
    {
      image: "https://t4.ftcdn.net/jpg/08/74/88/31/360_F_874883136_weXp7jguYciiVvSuJn0UJfcJ4NLTKcVf.jpg",
      title: "Luxury Potlis & Accessories",
      subtitle: "The perfect finishing touch with embroidered potli bags and silk shawls.",
      cta: "Shop Accessories",
      link: "/product?category=Accessories"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward (slide left), -1 = backward (slide right)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [current, slides.length]);

  const selectSlide = (index) => {
    if (index === current) return;
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  // Variants for horizontal sliding animations
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative h-[calc(100vh-110px)] w-full overflow-hidden bg-charcoal">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 180, damping: 24 },
            opacity: { duration: 0.4 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Main image with very slow breathing zoom effect */}
          <motion.img
            src={slides[current].image}
            alt={slides[current].title}
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.03 }}
            transition={{ duration: 5500, ease: "easeOut" }}
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-black/35" />
          
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-20">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-[11px] tracking-[0.25em] uppercase text-mustard font-semibold mb-3"
            >
              New Collection Drop
            </motion.span>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-serif font-medium text-4xl md:text-6xl text-white leading-tight mb-4 drop-shadow-sm max-w-3xl"
            >
              {slides[current].title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="text-[14px] md:text-[17px] text-cream/80 max-w-lg mb-8 font-light tracking-wide leading-relaxed"
            >
              {slides[current].subtitle}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link
                to={slides[current].link}
                className="px-8 py-3.5 bg-white text-charcoal hover:bg-rust hover:text-white text-[12.5px] tracking-[0.12em] uppercase font-semibold transition-colors duration-300 shadow-md cursor-pointer inline-block"
              >
                {slides[current].cta}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => selectSlide(i)}
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
