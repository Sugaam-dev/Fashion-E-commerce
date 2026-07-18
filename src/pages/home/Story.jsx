import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Award, Users, Star, ArrowRight } from "lucide-react";

export default function Story() {
  const stats = [
    {
      icon: <Award className="text-rust stroke-[1.5] w-5 h-5 mb-2" />,
      value: "40+",
      label: "Weaver Partners"
    },
    {
      icon: <Users className="text-rust stroke-[1.5] w-5 h-5 mb-2" />,
      value: "12K+",
      label: "Happy Divas"
    },
    {
      icon: <Star className="text-rust stroke-[1.5] w-5 h-5 mb-2" />,
      value: "4.7★",
      label: "Average Rating"
    }
  ];

  return (
    <section id="story" className="pt-4 md:pt-8 pb-16 md:pb-24 bg-cream">
      <div className="max-w-[1280px] min-[2000px]:max-w-[2100px] mx-auto px-6 md:px-10 grid md:grid-cols-2 items-center gap-12 md:gap-20">
        
        {/* Left Column: Story photo with sliding entry, no decorative border */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full group"
        >
          <div className="aspect-[4/5] overflow-hidden bg-cream-2 rounded-sm shadow-md relative">
            <img
              src="https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=800&q=80"
              alt="Handcrafted Weaving Story"
              className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
          </div>
        </motion.div>

        {/* Right Column: Copywriting & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="space-y-6"
        >
          <span className="inline-block text-[11px] tracking-[0.25em] uppercase text-rust font-semibold">
            Why Shrikamalini
          </span>
          <h2 className="font-serif font-medium text-[28px] md:text-[42px] leading-tight text-charcoal">
            Every piece begins with a fabric story, not a fast trend.
          </h2>
          <p className="text-[15px] leading-relaxed text-charcoal/60">
            We work with small-batch weavers across the country, choosing slubs,
            mulmuls and modal drapes that breathe in the heat and soften with
            every wash. No two dye lots are quite the same — and that's the point of true heritage luxury.
          </p>

          <div className="pt-2">
            <Link
              to="/product"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[12px] tracking-[0.12em] uppercase font-semibold border border-charcoal bg-charcoal text-cream hover:bg-rust hover:border-rust transition-colors cursor-pointer rounded-xs shadow-xs"
            >
              <span>Explore The Collection</span>
              <ArrowRight size={14} className="stroke-[2.2]" />
            </Link>
          </div>

          {/* Decorative stats cards */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-line/60">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="border border-line rounded-sm p-4 bg-white/30 backdrop-blur-xs flex flex-col items-center text-center hover:border-rust hover:bg-white/60 hover:shadow-xs transition-all duration-300"
              >
                {stat.icon}
                <strong className="font-serif text-[22px] md:text-[26px] leading-none text-charcoal block mb-1">
                  {stat.value}
                </strong>
                <span className="text-[9.5px] md:text-[10px] tracking-wider uppercase text-charcoal/45 font-semibold block leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
