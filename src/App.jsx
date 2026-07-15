import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import CartDrawer from "./components/ui/CartDrawer.jsx";
import Toast from "./components/ui/Toast.jsx";
import WhatsAppWidget from "./components/layout/WhatsAppWidget.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

export default function App() {
  const [filter, setFilter] = useState("All");
  const location = useLocation();
  const navigate = useNavigate();

  // Auto-scroll to top when url route path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  function handleCategorySelect(cat) {
    setFilter(cat);
    navigate("/product");
  }

  return (
    <CartProvider>
      <div id="top" className="flex flex-col min-h-screen bg-cream">
        <Navbar />

        <main className="flex-grow">
          <AppRoutes
            filter={filter}
            setFilter={setFilter}
            handleCategorySelect={handleCategorySelect}
          />
        </main>

        <Footer />
        <CartDrawer onCheckout={() => navigate("/payment")} />
        <Toast />
        <WhatsAppWidget />
      </div>
    </CartProvider>
  );
}
