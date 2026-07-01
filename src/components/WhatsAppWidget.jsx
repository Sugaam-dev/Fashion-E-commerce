import { useState, useEffect } from "react";

export default function WhatsAppWidget() {
  const [showPing, setShowPing] = useState(false);

  useEffect(() => {
    // Show a pulsing notification indicator after 3 seconds
    const timer = setTimeout(() => {
      setShowPing(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3">
      {/* Tooltip Label */}
      <div className="hidden md:block bg-cream border border-line px-3.5 py-1.5 rounded-sm shadow-md text-xs font-semibold text-charcoal tracking-wide animate-fadeIn">
        Need Custom Sizing? Chat on WhatsApp
      </div>

      <div className="relative w-14 h-14">
        {/* Animated Ripple Waves */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 animate-wave-1 pointer-events-none" />
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 animate-wave-2 pointer-events-none" />
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 animate-wave-3 pointer-events-none" />

        {/* Floating Button */}
        <a
          href="https://wa.me/919861812277?text=Hello%20PMRG%20Solution,%20I%20would%20like%20to%20consult%20about%20customizing%20a%20saree/accessory."
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg flex items-center justify-center text-3xl transition-transform duration-300 hover:scale-110 cursor-pointer z-10"
          title="Consult on WhatsApp"
          onClick={() => setShowPing(false)}
        >
          {/* SVG WhatsApp icon */}
          <svg
            className="w-7.5 h-7.5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.755.002-2.61-1.01-5.063-2.85-6.907C16.628 2.1 14.17 1.087 11.56 1.087c-5.444 0-9.87 4.374-9.873 9.76-.001 1.764.475 3.483 1.379 4.969L2.096 21.94l6.21-1.62c-.792-.48-1.583-.96-1.583-.966zM17.47 14.86c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.52-.16-.74.16-.22.32-.86 1.04-1.05 1.25-.2.21-.4.22-.72.06-1.04-.52-1.74-.88-2.44-1.5-1.12-.98-1.5-2.04-1.68-2.4-.18-.32-.02-.5.14-.66.14-.14.32-.36.48-.54.16-.18.22-.3.32-.5.1-.2.05-.38-.02-.54-.07-.16-.74-1.78-1.01-2.44-.27-.65-.54-.56-.74-.57-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.32.34-1.22 1.19-1.22 2.91s1.25 3.38 1.42 3.61c.18.23 2.46 3.76 5.96 5.27.83.36 1.48.57 1.99.73.84.27 1.6.23 2.2.14.67-.1 1.89-.77 2.16-1.52.27-.75.27-1.4.19-1.52-.08-.12-.3-.21-.62-.37z" />
          </svg>

        </a>
      </div>
    </div>
  );
}
