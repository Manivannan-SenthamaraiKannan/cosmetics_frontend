import React from "react";
import {Link} from 'react-router-dom'

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a href="/" className="navbar-brand">
          Cosmetics
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav" style={{ columnGap: "1.5rem" }}>
            <a href="/categories" className="nav-item nav-link">
              Categories
            </a>
            <a href="/brands" className="nav-item nav-link">
              Brands
            </a>
            <a href="/luxe" className="nav-item nav-link">
              Luxe
            </a>
            <a href="/beautyadvice" className="nav-item nav-link" tabIndex={"-1"}>
              Beauty Advice
            </a>
          </div>
          <div
            className="navbar-nav ms-auto"
            style={{
              columnGap: "1.5rem",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <a href="/wishlist" className="nav-item nav-link">
              <i className="bi bi-heart"></i>
            </a>
            <a href="/cart" className="nav-item nav-link">
              <i className="bi bi-bag"></i>
            </a>
            <button type="button" className="btn btn-outline-info btn-sm">
              <Link to="/login" className="nav-item nav-link">
                Login
              </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
