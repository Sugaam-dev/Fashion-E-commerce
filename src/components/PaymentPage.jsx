import { useState } from "react";
import { useCart } from "../CartContext.jsx";

export default function PaymentPage({ onComplete }) {
  const { cart, clearCart, showToast } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", utr: "", file: null });

  const totalAmount = cart.reduce((s, item) => s + item.price * item.qty, 0);

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.utr.trim()) {
      alert("Please enter a valid Transaction ID / UTR number.");
      return;
    }
    
    // Success flow
    showToast(`Order Placed! Payment UTR: ${form.utr} is sent for verification.`);
    clearCart();
    onComplete(); // Go back home
  }

  if (cart.length === 0) {
    return (
      <div className="bg-cream min-h-screen py-16 md:py-24 text-center">
        <div className="max-w-[1280px] mx-auto px-6">
          <span className="text-4xl block mb-4">👜</span>
          <h2 className="font-serif text-2xl font-bold mb-4">Your bag is empty</h2>
          <p className="text-sm text-charcoal/60 mb-6">Please add items to your cart before proceeding to payment.</p>
          <button
            onClick={onComplete}
            className="px-6 py-3 bg-rust text-white text-[12.5px] tracking-wider uppercase font-semibold hover:bg-rust-deep transition-colors cursor-pointer"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        
        {/* Header Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.25em] uppercase text-rust font-semibold block mb-3">
            Secure Payment Gateway
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-tight text-charcoal">
            Verify Transfer
          </h1>
          <div className="w-16 h-0.5 bg-rust mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
          
          {/* Left Column: QR Code & Bank Details */}
          <div className="space-y-8">
            {/* Cart summary header */}
            <div className="bg-cream-2/40 p-6 border border-line rounded-sm flex justify-between items-center">
              <div>
                <h3 className="font-serif text-lg font-bold text-charcoal">Order Amount to Pay</h3>
                <span className="text-xs text-charcoal/50">Includes all applicable customizations</span>
              </div>
              <span className="text-2xl font-bold text-rust">
                ₹{totalAmount.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Option 1: QR Code */}
              <div className="bg-white p-6 border border-line rounded-sm text-center shadow-xs flex flex-col justify-between items-center">
                <div>
                  <h4 className="font-serif text-base font-bold mb-1 text-charcoal">Option A: Scan UPI QR</h4>
                  <p className="text-[12px] text-charcoal/50 mb-6">Scan using GooglePay, PhonePe, Paytm</p>
                </div>
                
                {/* Mock QR Code graphic */}
                <div className="w-44 h-44 border border-line bg-cream-2/30 p-3 rounded-sm relative flex items-center justify-center mb-6">
                  {/* Outer QR layout */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-4 border-l-4 border-charcoal" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-4 border-r-4 border-charcoal" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-4 border-l-4 border-charcoal" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-4 border-r-4 border-charcoal" />
                  {/* Central QR block */}
                  <div className="w-24 h-24 grid grid-cols-5 gap-1 opacity-80">
                    {[...Array(25)].map((_, i) => (
                      <div
                        key={i}
                        className={`rounded-xs ${
                          (i % 3 === 0 || i % 7 === 0 || i === 0 || i === 4 || i === 20 || i === 24)
                            ? "bg-charcoal"
                            : "bg-transparent"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="absolute text-[10px] tracking-widest bg-rust text-white font-bold px-2 py-0.5 shadow-xs uppercase">
                    PMRG UPI
                  </span>
                </div>

                <div className="w-full">
                  <span className="block text-[11px] uppercase tracking-wider text-charcoal/40 font-medium mb-1.5">UPI ID</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("pmrgsolutions@upi");
                      showToast("UPI ID Copied to Clipboard!");
                    }}
                    className="w-full py-2 bg-cream hover:bg-cream-2 text-[12.5px] border border-line rounded-sm font-semibold tracking-wide transition-colors cursor-pointer"
                  >
                    pmrgsolutions@upi 📋
                  </button>
                </div>
              </div>

              {/* Option 2: Bank Details */}
              <div className="bg-white p-6 border border-line rounded-sm shadow-xs flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold mb-1 text-charcoal">Option B: Bank Transfer</h4>
                  <p className="text-[12px] text-charcoal/50 mb-6">Initiate IMPS, NEFT, or RTGS transfer</p>
                </div>

                <div className="space-y-4 border-t border-line pt-4 mb-4">
                  <div>
                    <span className="block text-[10.5px] uppercase tracking-wider text-charcoal/40 font-medium">Bank Name</span>
                    <strong className="text-[13.5px] text-charcoal">HDFC Bank Limited</strong>
                  </div>
                  <div>
                    <span className="block text-[10.5px] uppercase tracking-wider text-charcoal/40 font-medium">Account Name</span>
                    <strong className="text-[13.5px] text-charcoal font-serif">PMRG Solution Studio</strong>
                  </div>
                  <div>
                    <span className="block text-[10.5px] uppercase tracking-wider text-charcoal/40 font-medium">Account Number</span>
                    <strong className="text-[13.5px] text-charcoal tracking-wider">50200067382109</strong>
                  </div>
                  <div>
                    <span className="block text-[10.5px] uppercase tracking-wider text-charcoal/40 font-medium">IFSC Code</span>
                    <strong className="text-[13.5px] text-charcoal tracking-wide">HDFC0000003</strong>
                  </div>
                  <div>
                    <span className="block text-[10.5px] uppercase tracking-wider text-charcoal/40 font-medium">Branch</span>
                    <p className="text-[12.5px] text-charcoal/70">Connaught Place, New Delhi</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText("A/C: 50200067382109, IFSC: HDFC0000003");
                    showToast("Bank details copied!");
                  }}
                  className="w-full py-2 bg-cream hover:bg-cream-2 text-[12.5px] border border-line rounded-sm font-semibold tracking-wide transition-colors cursor-pointer"
                >
                  Copy Account Info
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Transaction Submission Form */}
          <div className="bg-white p-8 border border-line rounded-sm shadow-sm">
            <h3 className="font-serif text-xl font-bold mb-2 text-charcoal">Payment Verification</h3>
            <p className="text-xs text-charcoal/50 mb-6">
              Enter your transfer details below. We verify deposits within 10-15 minutes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal/60 mb-2 font-medium">Payer Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter sender's name"
                  className="w-full px-4 py-3 border border-line bg-cream text-sm outline-none focus:border-rust"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal/60 mb-2 font-medium">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-3 border border-line bg-cream text-sm outline-none focus:border-rust"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal/60 mb-2 font-medium">Transaction ID / UTR Number</label>
                <input
                  type="text"
                  required
                  value={form.utr}
                  onChange={(e) => setForm({ ...form, utr: e.target.value })}
                  placeholder="12-digit UPI / Bank UTR ID"
                  className="w-full px-4 py-3 border border-line bg-cream text-sm outline-none focus:border-rust tracking-wider"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal/60 mb-2 font-medium">
                  Upload Receipt Screenshot (Optional)
                </label>
                <div className="border border-dashed border-line p-4 rounded-sm text-center bg-cream-2/20">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
                    className="text-xs text-charcoal/50 w-full"
                  />
                  <span className="block text-[10px] text-charcoal/40 mt-1.5">PNG, JPG up to 5MB</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-rust hover:bg-rust-deep text-white text-[12.5px] tracking-widest uppercase font-semibold shadow-md transition-colors cursor-pointer"
              >
                Submit Payment Receipt
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
