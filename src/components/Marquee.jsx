const ITEMS = ["HANDPICKED FABRICS", "PAN-INDIA SHIPPING", "SUSTAINABLY DYED", "EASY RETURNS"];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="bg-charcoal text-cream overflow-hidden py-3 border-b border-line whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {loop.map((t, i) => (
          <span key={i} className="text-[13px] tracking-[0.18em] uppercase mx-7 text-[#cdbfa6]">
            {t} <span className="mx-1">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
