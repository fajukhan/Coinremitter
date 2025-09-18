import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Image/logo.svg";
import { MdApi } from "react-icons/md";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container-fluid px-4 px-lg-5">
        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="logo" width="240" />
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
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ border: "2px soloid #f59e0b" }}
              >
                {" "}
                PRODUCTS{" "}
              </NavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="productsDropdown"
                style={{ width: "400px" }}
              >
                {" "}
                <div className="d-flex justify-content-between px-2">
                  <li>
                    <NavLink className="dropdown-item navlins-3" to="/product1">
                      APIs
                    </NavLink>
                    <p className="ms-2">
                      Custom backend integration to manage transactions & Users
                    </p>
                  </li>{" "}
                  <p className="px-2">
                    {" "}
                    <MdApi size={20} />
                  </p>{" "}
                </div>{" "}
                <div className="d-flex justify-content-between px-2">
                  {" "}
                  <li>
                    <NavLink className="dropdown-item navlins-3" to="/product1">
                      APIs
                    </NavLink>{" "}
                    <p className="ms-2">
                      Custom backend integration to manage transactions & Users
                    </p>
                  </li>{" "}
                  <p className="px-2">
                    {" "}
                    <MdApi size={20} />
                  </p>{" "}
                </div>{" "}
              </ul>{" "}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/fess">
                FEES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/plugins">
                PLUGINS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/coins">
                COINS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blogs">
                BLOGS
              </NavLink>
            </li>
          </ul>

          {/* Login and Signup buttons */}
          <div className="d-flex align-items-center">
            <NavLink className="nav-link text-dark fw-bold" to="/login">
              LOG IN
            </NavLink>
            <NavLink
              className="btn btn-warning text-white fw-bold ms-2"
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
