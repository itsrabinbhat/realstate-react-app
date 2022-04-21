import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "" },
    { name: "About", link: "about-us" },
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

          <div className="services">
            <p className="dropdown">
              Services <FaCaretDown className="down-icon" />
            </p>
            <div className="dropdown-content">
              <Link to="/buy-home">Buy A Home</Link>
              <Link to="/rent-home">Rent A Home</Link>
            </div>
          </div>
        </div>
        <div className="user-login">
          <Link to="/login">Log in</Link>
          <Link to="/signup" className="signup">
            <button className="btn">Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
