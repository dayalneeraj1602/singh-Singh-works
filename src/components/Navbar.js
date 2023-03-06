import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pop
    ">

      <Link className="navbar-brand ms-5 fw-bold fs-4 d-flex" to="/">  <div className="logo mx-2">
        <img src="/logosew.png" alt="logo" className='logo ' />
      </div>Singh Engineering Works</Link>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/" >Home </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/allproducts">All Products</Link>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar