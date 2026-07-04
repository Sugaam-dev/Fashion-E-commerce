import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { CartProvider } from "./CartContext.jsx";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import Shop from "./components/Shop.jsx";
import ProductDetailsPage from "./components/ProductDetailsPage.jsx";
import PaymentPage from "./components/PaymentPage.jsx";
import Footer from "./components/Footer.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import Toast from "./components/Toast.jsx";
import WhatsAppWidget from "./components/WhatsAppWidget.jsx";

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
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onCategorySelect={handleCategorySelect}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/product"
              element={
                <Shop
                  filter={filter}
                  setFilter={setFilter}
                />
              }
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/payment" element={<PaymentPage onComplete={() => navigate("/")} />} />
            <Route path="/details/:id" element={<ProductDetailsPage />} />
          </Routes>
        </main>

        <Footer />
        <CartDrawer onCheckout={() => navigate("/payment")} />
        <Toast />
        <WhatsAppWidget />
      </div>
    </CartProvider>
  );
}
