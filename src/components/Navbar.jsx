import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "" },
    { name: "About", link: "about-us" },
    { name: "Services", link: "services" },
    { name: "Contact", link: "contact-us" },
  ];
  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="logo">Realtor</div>
        <div className="nav-links">
          {navItems.map((item, idx) => (
            <Link to={`/${item.link}`} key={idx}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="user-login">
          <Link to="/login">Log in</Link>
          <button className="btn">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
