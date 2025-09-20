import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Image/logo.svg";
import { MdApi } from "react-icons/md";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container-fluid px-3 px-lg-5">
        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="logo" width="180" className="img-fluid" />
        </NavLink>

        {/* Toggler for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {/* Dropdown */}
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle fw-bold"
                to="#"
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PRODUCTS
              </NavLink>
              <ul
                className="dropdown-menu p-2"
                aria-labelledby="productsDropdown"
                style={{ minWidth: "300px" }}
              >
                <li className="d-flex justify-content-between align-items-start px-2 py-1">
                  <div>
                    <NavLink className="dropdown-item fw-bold" to="/product1">
                      APIs
                    </NavLink>
                    <p className="small text-muted mb-0 ms-2">
                      Custom backend integration to manage transactions & users
                    </p>
                  </div>
                  <MdApi size={20} className="text-warning ms-2" />
                </li>
                <li className="d-flex justify-content-between align-items-start px-2 py-1">
                  <div>
                    <NavLink className="dropdown-item fw-bold" to="/product2">
                      SDKs
                    </NavLink>
                    <p className="small text-muted mb-0 ms-2">
                      Easy SDKs for multiple platforms and frameworks
                    </p>
                  </div>
                  <MdApi size={20} className="text-warning ms-2" />
                </li>
              </ul>
            </li>

            {/* Other nav items */}
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/fess">
                FEES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/plugins">
                PLUGINS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/coins">
                COINS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/blogs">
                BLOGS
              </NavLink>
            </li>
          </ul>

          {/* Login and Signup buttons */}
          <div className="d-flex align-items-center mt-3 mt-lg-0">
            <NavLink className="nav-link text-dark fw-bold" to="/signinpage">
              LOG IN
            </NavLink>
            <NavLink
              className="btn btn-warning fw-bold text-white ms-2 px-3"
              to="/signup"
            >
              SIGN UP
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
