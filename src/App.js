import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
