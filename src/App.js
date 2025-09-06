import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import Category from "./pages/Category";
import Oolong from "./pages/TraOolong";
import TraDen from "./pages/TraDen";
import TraXanh from "./pages/TraXanh";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/category" element={<Category />} />
          <Route path="/Oolong" element={<Oolong />} />
          <Route path="/TraDen" element={<TraDen />} />
          <Route path="/TraXanh" element={<TraXanh />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
