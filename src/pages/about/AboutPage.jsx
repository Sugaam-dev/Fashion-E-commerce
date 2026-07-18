import { motion } from "motion/react";
import { Leaf, Handshake, Sparkles, Award, Users, Star, ThumbsUp } from "lucide-react";

export default function AboutPage() {
  const pillars = [
    {
      icon: <Leaf className="text-rust stroke-[1.5] w-8 h-8 mx-auto mb-4" />,
      title: "Sustainably Sourced",
      description: "We use 100% natural, biodegradable fibers. Our fabrics are handspun and dyed using eco-friendly compounds to reduce our ecological footprint."
    },
    {
      icon: <Handshake className="text-rust stroke-[1.5] w-8 h-8 mx-auto mb-4" />,
      title: "Direct Fair Trade",
      description: "By cutting out middlemen, we ensure our weaver communities receive fair wages and stable livelihoods, keeping centuries-old craft traditions alive."
    },
    {
      icon: <Sparkles className="text-rust stroke-[1.5] w-8 h-8 mx-auto mb-4" />,
      title: "Bespoke Customization",
      description: "Every woman deserves clothes that fit her perfectly. Our made-to-measure tailoring service customizes garments to fit your unique shape."
    }
  ];

  const stats = [
    {
      icon: <Award className="text-rust stroke-[1.8] w-5 h-5 mx-auto mb-2" />,
      value: "40+",
      label: "Weaver Communities"
    },
    {
      icon: <Users className="text-rust stroke-[1.8] w-5 h-5 mx-auto mb-2" />,
      value: "12K+",
      label: "Happy Clients"
    },
    {
      icon: <ThumbsUp className="text-rust stroke-[1.8] w-5 h-5 mx-auto mb-2" />,
      value: "100%",
      label: "Handcrafted"
    },
    {
      icon: <Star className="text-rust stroke-[1.8] w-5 h-5 mx-auto mb-2" />,
      value: "4.8★",
      label: "Customer Rating"
    }
  ];

  return (
    <div className="bg-cream min-h-screen py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1280px] min-[2000px]:max-w-[2100px] mx-auto px-6 md:px-10">
        
        {/* Header Title with Framer Motion */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
        >
          <span className="text-[11px] tracking-[0.25em] uppercase text-rust font-semibold block mb-3">
            Our Story & Legacy
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight text-charcoal">
            Artisanship over Fast Trends
          </h1>
          <div className="w-16 h-0.5 bg-rust mx-auto mt-6" />
        </motion.div>

        {/* Section 1: Split Screen Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-20 md:mb-32">
          {/* Animated Image Wrapper */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] bg-cream-2 overflow-hidden rounded-sm shadow-md group relative"
          >
            <img
              src="https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=800&q=80"
              alt="Handloom Weaving Craft"
              className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/15 to-transparent" />
          </motion.div>

          {/* Animated Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal leading-snug">
              Every thread carries the whisper of an artisan weaver.
            </h2>
            <p className="text-[15px] leading-relaxed text-charcoal/70">
              Shrikamalini was founded with a single mission: to create contemporary ethnic designs 
              for women while preserving traditional Indian weaving techniques. We partner directly 
              with small-batch weavers across the country, selecting pure slub silks, raw cottons, 
              and organic linens.
            </p>
            <p className="text-[15px] leading-relaxed text-charcoal/70">
              No two dye lots are ever exactly alike, and that variation is what makes your garment 
              truly unique. Crafted slowly, finished by hand, and designed to breathe in the summer 
              heat. We create garments meant to be treasured across seasons, not discarded after weeks.
            </p>
          </motion.div>
        </div>

        {/* Section 2: Core Values Grid (The Pillars) */}
        <div className="border-t border-b border-line py-16 md:py-24 mb-20 md:mb-32">
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-semibold text-center text-charcoal mb-16"
          >
            The Pillars of Shrikamalini
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="border border-line rounded-sm p-8 bg-white/40 backdrop-blur-xs text-center shadow-xs hover:border-rust hover:bg-white hover:shadow-md transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {pillar.icon}
                  <h4 className="font-serif text-lg font-bold mb-4 text-charcoal">{pillar.title}</h4>
                  <p className="text-[13.5px] leading-relaxed text-charcoal/60">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: Weaver Stats Dash */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 p-8 border border-line bg-white/40 backdrop-blur-xs rounded-sm divide-y md:divide-y-0 md:divide-x divide-line text-center shadow-xs"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="pt-6 md:pt-0 md:px-4 first:pt-0">
              {stat.icon}
              <b className="font-serif text-4xl md:text-5xl block text-rust font-bold mb-2 tracking-tight">
                {stat.value}
              </b>
              <span className="text-[10px] md:text-[11px] tracking-widest uppercase text-charcoal/50 font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Section 4: Founders Signature / Philosophy Quote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center max-w-xl mx-auto mt-24 md:mt-32 pt-8 border-t border-line/40"
        >
          <p className="font-serif italic text-lg md:text-xl text-charcoal/80 leading-relaxed mb-4">
            "We believe that real luxury lies in the details — the touch of raw handspun silk, 
            the slight asymmetry of hand-carved woodblock prints, and the warmth of keeping 
            artisanship alive."
          </p>
          <span className="block text-[11px] uppercase tracking-widest text-rust font-bold">
            — The Shrikamalini Family
          </span>
        </motion.div>

      </div>
    </div>
  );
}
