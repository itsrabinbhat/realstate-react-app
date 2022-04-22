import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import { FaCaretDown, FaBars } from "react-icons/fa";
import { FemaleSharp } from "@mui/icons-material";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    if (width > 800) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const navItems = [
    { name: "Home", link: "" },
    { name: "About", link: "about-us" },
    { name: "Contact", link: "contact-us" },
  ];
  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="logo">Realtor</div>
        {showNav && (
          <div className="nav-links-container">
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
        )}

        <button className="mobile-nav" onClick={() => setShowNav(!showNav)}>
          {showNav ? (
            <p className="icon hide">X</p>
          ) : (
            <FaBars className="icon" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
