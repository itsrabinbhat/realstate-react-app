import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import BuyHome from "./pages/BuyHome";
import RentHome from "./pages/RentHome";
import { Routes, Route } from "react-router-dom";
import PropDetails from "./pages/PropDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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
        <Route path="/rent-home/:propID" element={<PropDetails />} />
        <Route path="/buy-home/:propID" element={<PropDetails />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
