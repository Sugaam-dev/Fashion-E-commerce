export default function Footer() {
  return (
    <footer className="pt-16 md:pt-20 pb-8 border-t border-line">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 md:gap-12 mb-14">
          <div>
            <div className="font-serif text-2xl font-semibold mb-3">
              PMRG Solution<span className="text-rust italic font-bold">.</span>
            </div>
            <p className="text-sm text-charcoal/55 leading-relaxed max-w-xs">
              Contemporary ethnic wear, jewellery and custom women accessories, 
              designed in small batches and finished by hand. This is a frontend demo 
              for portfolio presentation.
            </p>
          </div>

          <FooterCol
            title="Shop"
            links={["New In", "Kurtas", "Dresses", "Co-ords", "Sarees", "Indo-Western"]}
          />
          <FooterCol
            title="Support"
            links={["Track Order", "Returns & Exchanges", "Size Guide", "Contact Us"]}
          />
          <FooterCol
            title="Company"
            links={["Our Story", "Sustainability", "Store Locator", "Careers"]}
          />
        </div>

        <div className="flex justify-between items-center flex-wrap gap-4 text-[12.5px] text-charcoal/40 pt-6 border-t border-line">
          <span>© 2026 PMRG Solution Demo. Reference hybrid design for client preview.</span>
          <div className="flex gap-3">
            {["ig", "fb", "pin"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-8 h-8 border border-line rounded-full flex items-center justify-center text-[13px] hover:bg-charcoal hover:text-cream hover:border-charcoal transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-[12.5px] tracking-[0.1em] uppercase mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-charcoal/65 hover:text-rust transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
