import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <div className="relative w-15 h-15">
        {/* Animated Ripple Waves */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 animate-wave-1 pointer-events-none" />
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 animate-wave-2 pointer-events-none" />
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 animate-wave-3 pointer-events-none" />

        {/* Floating Button */}
        <a
          href="https://wa.me/9820001138?text=Hello%20Shrikamalini,%20I'm%20visiting%20your%20online%20boutique%20and%20would%20love%20to%20consult%20with%20a%20stylist%20about%20custom%20tailoring%20and%20bespoke%20designs!"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-gradient-to-tr from-[#20ba5a] to-[#25D366] hover:from-[#1da750] hover:to-[#22c35e] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-rotate-6 cursor-pointer z-10 border border-white/20"
          title="Consult on WhatsApp"
        >
          <FaWhatsapp size={32} className="drop-shadow-xs" />
        </a>
      </div>
    </div>
  );
}
