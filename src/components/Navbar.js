import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(null);
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
      {/* ${isHome ? "home-page" : ""}` */}
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
      <div className="nav-items me-5">
        <Link
          to="/"
          title="Home"
          className={isHome ? "active" : ""}
          onClick={() => {
            setIsScrolled(null);
            window.scrollTo(0, 0);
          }}
        >
          Home
        </Link>
        <Link
          to="/products"
          title="Products"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className={isProducts ? "active" : ""}
        >
          Products
        </Link>
        <Link
          to="/services"
          title="Services"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className={isServices ? "active" : ""}
        >
          Services
        </Link>
        <Link
          to="/about"
          title="About us"
          className={isAbout ? "active" : ""}
          onClick={() => {
            setIsScrolled(true);
            window.scrollTo(0, 0);
          }}
        >
          About us
        </Link>
        <Link
          to="/contact"
          title="Contact Us"
          className={isContact ? "active" : ""}
          onClick={() => {
            setIsScrolled(true);
            window.scrollTo(0, 0);
          }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
