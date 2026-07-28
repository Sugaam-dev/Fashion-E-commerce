const ITEMS = [
  "HANDPICKED FABRICS",
  "PAN-INDIA SHIPPING",
  "SUSTAINABLY DYED",
  "EASY RETURNS"
];

export default function Marquee() {
  // Duplicate array 4 times for a seamless continuous loop
  const loop = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="bg-charcoal text-cream overflow-hidden py-3.5 border-b border-line whitespace-nowrap select-none">
      <div className="animate-marquee flex items-center">
        {loop.map((t, i) => (
          <span
            key={i}
            className="text-[12px] md:text-[13px] tracking-[0.22em] uppercase font-medium mx-6 text-[#cdbfa6] flex items-center shrink-0"
          >
            {t} <span className="ml-6 text-rust text-[10px]">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
