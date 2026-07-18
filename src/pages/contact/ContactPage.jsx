import { useState } from "react";
import { MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { useCart } from "../../context/CartContext.jsx";

export default function ContactPage() {
  const { showToast } = useCart();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e) {
    e.preventDefault();
    showToast("Thank you! Your message was submitted successfully. (Mockup)");
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <div className="bg-cream min-h-screen py-16 md:py-24">
      <div className="max-w-[1280px] min-[2000px]:max-w-[2100px] mx-auto px-6 md:px-10">
        
        {/* Header Title */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-24">
          <span className="text-[11px] tracking-[0.25em] uppercase text-rust font-semibold block mb-3">
            Contact & Consultation
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight text-charcoal">
            Get in Touch
          </h1>
          <div className="w-16 h-0.5 bg-rust mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: Contact Info */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-charcoal">
              Bespoke Made-to-Measure Consultations
            </h2>
            <p className="text-[15px] leading-relaxed text-charcoal/60 mb-8 max-w-md">
              Need custom sizing for a saree blouse or a bespoke jewellery matching service? 
              Connect with our design team. You can chat directly on WhatsApp or drop us an email.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-rust/10 flex items-center justify-center text-rust flex-shrink-0">
                  <MessageCircle size={18} className="stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-charcoal">WhatsApp Direct</h4>
                  <a
                    href="https://wa.me/9820001138?text=Hello%20Shrikamalini,%20I%20would%20like%20to%20schedule%20a%20made-to-measure%20stylist%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-rust font-semibold hover:underline"
                  >
                    +91 98200 01138
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-rust/10 flex items-center justify-center text-rust flex-shrink-0">
                  <Mail size={18} className="stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-charcoal">Email Support</h4>
                  <p className="text-sm text-charcoal/70">support@shrikamalini.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-rust/10 flex items-center justify-center text-rust flex-shrink-0">
                  <MapPin size={18} className="stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-charcoal">Design Studio Office</h4>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    Shrikamalini Studio
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-line pt-8">
              <h3 className="font-serif text-lg font-bold mb-3">Studio Hours</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                Monday to Saturday: 10:00 AM – 7:00 PM IST <br />
                Sunday: Closed (Online support available)
              </p>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="bg-cream-2/40 p-6 md:p-10 border border-line rounded-sm shadow-sm">
            <h3 className="font-serif text-xl font-bold mb-6 text-charcoal">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal/60 mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-line bg-white text-sm outline-none focus:border-rust"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal/60 mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-line bg-white text-sm outline-none focus:border-rust"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal/60 mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Inquiry topic"
                  className="w-full px-4 py-3 border border-line bg-white text-sm outline-none focus:border-rust"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal/60 mb-2 font-medium">Message</label>
                <textarea
                  required
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your tailoring or product query..."
                  className="w-full px-4 py-3 border border-line bg-white text-sm outline-none focus:border-rust resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-rust hover:bg-rust-deep text-white text-[12.5px] tracking-widest uppercase font-semibold shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send size={13} className="stroke-[2.2]" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
