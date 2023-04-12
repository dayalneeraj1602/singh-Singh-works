import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="navbar d-flex shadow-out pop">
      <div className="navbar-brand  d-inline-block fs-1 ls-2">
        <Link
          className="navbar-brand brand ms-5 fw-bold fs-4 d-flex "
          to="/"
          onClick={() => handleLinkClick("home")}
        >
          <div className="logo mx-2">
            <img src="/logosew.png" alt="logo" className="logo " />
          </div>
          <span className="p-1">Singh Engineering Works</span>
        </Link>
      </div>
      <div className="nav-items me-5">
        <Link
          to="/"
          className={`links ${
            activeLink === "home"
              ? "stroke shadow-in px-3 py-2 roundedBorder"
              : "stroke-grey"
          }`}
          title="Home"
          onClick={() => handleLinkClick("home")}
        >
          <i class="fa-solid fa-house-chimney"></i>
        </Link>
        <Link
          to="/services"
          className={`links ${
            activeLink === "truck"
              ? "stroke shadow-in p-2 roundedBorder"
              : "stroke-grey"
          }`}
          title="Services"
          onClick={() => handleLinkClick("truck")}
        >
          <i className="fa-solid fa-truck p-2"></i>
        </Link>
        <Link
          to="/contact"
          className={`links ${
            activeLink === "phone"
              ? "stroke shadow-in p-2 roundedBorder"
              : "stroke-grey"
          }`}
          title="Contact Us"
          onClick={() => handleLinkClick("phone")}
        >
          <i className="fa-solid  p-2 fa-phone-volume"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar