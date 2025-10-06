import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import firstlogo1 from "../Image/firstlogo1.svg";
import { MdApi } from "react-icons/md";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    // Only toggle on small screens
    if (window.innerWidth < 992) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Handle window resize to reset dropdown state
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-lg-3">
  <div className="container-fluid px-2 px-sm-3 px-lg-5">
    {/* Logo */}
    <NavLink className="navbar-brand d-flex align-items-center" to="/" onClick={closeDropdown}>
      <img src={firstlogo1} alt="logo" width="240" className="img-fluid logo-img" />
    </NavLink>

    {/* Toggler */}
    <button
      className="navbar-toggler border-0 py-1"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={closeDropdown}
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Navbar Links */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center">
        {/* Dropdown */}
        <li className="nav-item dropdown">
          <NavLink
            className="nav-link dropdown-toggle px-lg-2 px-xl-3 d-flex justify-content-between align-items-center"
            to="#"
            id="productsDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={toggleDropdown}
          >
            PRODUCTS
            <span className="dropdown-arrow ms-2 d-lg-none">
              {isDropdownOpen ? '▲' : '▼'}
            </span>
          </NavLink>

          {/* Dropdown for large screens */}
          <ul
            className="dropdown-menu custom-dropdown p-2 border-0 shadow d-none d-lg-block"
            aria-labelledby="productsDropdown"
            style={{ minWidth: "300px" }}
          >
            <li className="d-flex justify-content-between align-items-start px-2 py-2 dropdown-item-custom">
              <div className="w-100">
                <NavLink className="dropdown-item fw-medium px-0" to="/product1">
                  APIs
                </NavLink>
                <p className="small text-muted mb-0 mt-1">
                  Custom backend integration to manage transactions & users
                </p>
              </div>
              <MdApi size={20} className="text-accent ms-2 flex-shrink-0" />
            </li>

            <li className="d-flex justify-content-between align-items-start px-2 py-2 dropdown-item-custom">
              <div className="w-100">
                <NavLink className="dropdown-item fw-medium px-0" to="/product2">
                  SDKs
                </NavLink>
                <p className="small text-muted mb-0 mt-1">
                  Easy SDKs for multiple platforms and frameworks
                </p>
              </div>
              <MdApi size={20} className="text-accent ms-2 flex-shrink-0" />
            </li>
          </ul>

          {/* Custom Dropdown for small screens */}
          <div className={`dropdown-menu-custom d-lg-none ${isDropdownOpen ? 'd-block' : 'd-none'}`}>
            <div className="dropdown-content p-2">
              <div className="d-flex justify-content-between align-items-start px-2 py-2 dropdown-item-custom">
                <div className="w-100">
                  <NavLink className="dropdown-item fw-medium px-0" to="/product1" onClick={closeDropdown}>
                    APIs
                  </NavLink>
                  <p className="small text-muted mb-0 mt-1">
                    Custom backend integration to manage transactions & users
                  </p>
                </div>
                <MdApi size={20} className="text-accent ms-2 flex-shrink-0" />
              </div>

              <div className="d-flex justify-content-between align-items-start px-2 py-2 dropdown-item-custom">
                <div className="w-100">
                  <NavLink className="dropdown-item fw-medium px-0" to="/product2" onClick={closeDropdown}>
                    SDKs
                  </NavLink>
                  <p className="small text-muted mb-0 mt-1">
                    Easy SDKs for multiple platforms and frameworks
                  </p>
                </div>
                <MdApi size={20} className="text-accent ms-2 flex-shrink-0" />
              </div>
            </div>
          </div>
        </li>

        {/* Other nav items */}
        <li className="nav-item">
          <NavLink className="nav-link px-lg-2 px-xl-3" to="/fess" onClick={closeDropdown}>
            FEES
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link px-lg-2 px-xl-3" to="/plugins" onClick={closeDropdown}>
            PLUGINS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link px-lg-2 px-xl-3" to="/coins" onClick={closeDropdown}>
            COINS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link px-lg-2 px-xl-3" to="/blogs" onClick={closeDropdown}>
            BLOGS
          </NavLink>
        </li>
      </ul>

      {/* Login & Signup */}
      <div className="d-flex align-items-center mt-3 mt-lg-0">
        <NavLink className="nav-link text-dark fw-bold px-lg-2 px-xl-3" to="/signinpage" onClick={closeDropdown}>
          LOG IN
        </NavLink>
        <NavLink className="btn signup-btn fw-bold text-white px-3" to="/signup" onClick={closeDropdown}>
          SIGN UP
        </NavLink>
      </div>
    </div>
  </div>

  {/* Custom CSS */}
 <style jsx>{`
  :root {
    --cr-primary-start: #00B894;
    --cr-primary-end: #00CEC9;
    --cr-text-dark: #0D3A3A;
  }

  .navbar-nav .nav-link {
    color: var(--cr-text-dark) !important;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .navbar-nav .nav-link:hover,
  .navbar-nav .nav-link.active {
    background: linear-gradient(90deg, var(--cr-primary-start), var(--cr-primary-end));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-accent {
    color: var(--cr-primary-end);
  }

  /* Signup Button Gradient */
  .signup-btn {
    background: linear-gradient(135deg, var(--cr-primary-start), var(--cr-primary-end));
    border: none;
    transition: all 0.3s ease;
  }

  .signup-btn:hover {
    background: linear-gradient(135deg, var(--cr-primary-end), var(--cr-primary-start));
    transform: scale(1.05);
  }

  /* Product Dropdown Custom */
  .custom-dropdown .dropdown-item-custom:hover {
    background: linear-gradient(135deg, var(--cr-primary-start), var(--cr-primary-end));
    color: #fff !important;
  }

  /* Small Screens Dropdown */
  .dropdown-menu-custom .dropdown-item-custom:hover {
    background: linear-gradient(135deg, var(--cr-primary-start), var(--cr-primary-end));
    color: #fff !important;
  }

  /* Login Link Hover */
  .navbar .nav-link.text-dark:hover {
    background: linear-gradient(90deg, var(--cr-primary-start), var(--cr-primary-end));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Small Screens Logo */
  @media (max-width: 576px) {
    .logo-img {
      width: 140px !important;
    }
  }
`}</style>
</nav>

  );
};

export default NavBar;