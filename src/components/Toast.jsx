import { useCart } from "../CartContext.jsx";

export default function Toast() {
  const { toast } = useCart();

  return (
    <div
      className={`fixed bottom-7 left-1/2 -translate-x-1/2 bg-charcoal text-cream px-6 py-3.5 text-[13px] z-[200] transition-all duration-300 ${
        toast.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      {toast.msg}
    </div>
  );
}
