import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHome = location.pathname === "/";
  const isProducts = location.pathname === "/products";
  const isServices = location.pathname === "/services";
  const isAbout = location.pathname === "/about";
  const isContact = location.pathname === "/contact";

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`navbar d-flex shadow-out pop sticky-header ${
        isScrolled < 50 && isHome
          ? "text-light"
          : isScrolled > 50
          ? "scrolled "
          : isScrolled >= 50 && isHome && "text-dark"
      }`}
    >
      <div className="navbar-brand d-inline-block fs-1 ls-2">
        <Link className="navbar-brand brand ms-5 fw-bold fs-4 d-flex" to="/">
          <div className="logo mx-2 d-flex">
            <img src="/logosew.png" alt="logo" className="logo" />
            <span
              className={`
            ${isScrolled < 50 && isHome ? "text-light" : "text-dark"}
            `}
            >
              Singh Engineering Works
            </span>
          </div>
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Items */}
      <div
        className={`nav-items me-5 ${isMobileMenuOpen ? "mobile-open" : ""}`}
      >
        <Link
          to="/"
          title="Home"
          className={isHome ? "active" : ""}
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link
          to="/products"
          title="Products"
          onClick={handleLinkClick}
          className={isProducts ? "active" : ""}
        >
          Products
        </Link>
        <Link
          to="/services"
          title="Services"
          onClick={handleLinkClick}
          className={isServices ? "active" : ""}
        >
          Services
        </Link>
        <Link
          to="/about"
          title="About us"
          className={isAbout ? "active" : ""}
          onClick={handleLinkClick}
        >
          About us
        </Link>
        <Link
          to="/contact"
          title="Contact Us"
          className={isContact ? "active" : ""}
          onClick={handleLinkClick}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
