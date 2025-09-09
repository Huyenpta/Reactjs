import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import STATE from "./context/initState";
import { GlobalProvider } from "./context/context";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import TinTuc from "./pages/TinTuc";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";

function App() {
  const [data, setData] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return {
      ...STATE,
      cart: savedCart ? JSON.parse(savedCart) : STATE.cart,
    };
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(data.cart));
  }, [data.cart]);

  return (
    <GlobalProvider value={{ data, setData }}>
      <ScrollToTop />
      <NavBar />
      <div className="App">
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/introduce" element={<Introduce />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/category/:slug" element={<Category />} />
              <Route path="/news" element={<TinTuc/>} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
