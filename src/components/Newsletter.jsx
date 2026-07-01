import { useCart } from "../CartContext.jsx";

export default function Newsletter() {
  const { showToast } = useCart();

  function handleSubmit(e) {
    e.preventDefault();
    showToast("Thanks for subscribing!");
    e.target.reset();
  }

  return (
    <section className="bg-charcoal text-cream text-center py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <span className="block text-xs tracking-[0.22em] uppercase text-mustard mb-5">
          Stay in the loop
        </span>
        <h2 className="font-serif font-medium text-[28px] md:text-[44px] max-w-xl mx-auto mb-8 leading-tight">
          Get first access to new drops, festive edits and member-only pricing.
        </h2>
        <form onSubmit={handleSubmit} className="flex max-w-md mx-auto flex-col sm:flex-row gap-3 sm:gap-0">
          <input
            type="email"
            required
            placeholder="Your email address"
            className="flex-1 px-5 py-4 border border-[#50473c] bg-transparent text-cream text-sm placeholder:text-[#a89c84] outline-none"
          />
          <button
            type="submit"
            className="px-7 py-4 bg-rust text-white text-[12.5px] tracking-[0.1em] uppercase whitespace-nowrap hover:bg-mustard transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
