import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "../pages/home/HomePage.jsx";
import AboutPage from "../pages/about/AboutPage.jsx";
import Shop from "../pages/listing/Shop.jsx";
import ContactPage from "../pages/contact/ContactPage.jsx";
import PaymentPage from "../pages/checkout/PaymentPage.jsx";
import ProductDetailsPage from "../pages/product/ProductDetailsPage.jsx";

export default function AppRoutes({ filter, setFilter, handleCategorySelect }) {
  const navigate = useNavigate();
  return (
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
  );
}
