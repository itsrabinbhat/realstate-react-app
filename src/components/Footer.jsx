import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  const footerNav = [
    { name: "Home", link: "" },
    { name: "About", link: "about-us" },
    { name: "FAQ", link: "faq" },
    { name: "Privacy Policy", link: "privacy-policy" },
  ];
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="links">
          <p className="title">Realtor</p>

          <div className="nav-links">
            {footerNav?.map(({ name, link }, idx) => (
              <Link to={link} key={idx}>
                {name}
              </Link>
            ))}
          </div>
        </div>

        <div className="social-links">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaPinterest />
        </div>

        <p className="copy-right">
          &copy; 2020-{new Date().getFullYear()} All rights reserved!
        </p>
      </div>
    </div>
  );
};

export default Footer;
