import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import BuyHome from "./pages/BuyHome";
import RentHome from "./pages/RentHome";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/buy-home" element={<BuyHome />} />
        <Route path="/rent-home" element={<RentHome />} />
      </Routes>
      {/* <Home />
      <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;
