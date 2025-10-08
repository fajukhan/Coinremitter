import React from 'react';
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { SiXcode } from "react-icons/si";
import '../Pages/Footer1.css';
import firstlogo1 from '../Image/firstlogo1.svg';

const Footer = () => {
  return (
    <div>
      {/* SECTION-15: Footer */}
      <footer className="container-fluid pt-5" style={{ background: "#111", color: "#fff" }}>
        {/* Newsletter Section */}
        <div className="row py-5 px-md-5 align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start">
            <h1 className="fw-bold" style={{ fontSize: "2rem", lineHeight: 1.2 }}>
              Stay up to date with <br /> our Newsletter
            </h1>
          </div>
          <div className="col-12 col-md-6">
            <form className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-end gap-3">
              <input
                type="email"
                className="form-control form-control-lg footer-input"
                placeholder="Enter your e-mail"
                style={{
                  background: "#111",
                  color: "#fff",
                  border: "1px solid #00CEC9",
                  borderRadius: "0",
                  width: "100%",
                  maxWidth: "400px",
                  fontSize: "1rem"
                }}
              />
              <button
                type="submit"
                className="btn fw-bold px-4 py-2 crypto-btn"
                style={{
                  background: "linear-gradient(90deg, #00B894, #00CEC9)",
                  color: "#000",
                  borderRadius: "0",
                  fontSize: "1rem",
                  whiteSpace: "nowrap"
                }}
              >
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
        </div>

        <hr className="ms-5 mx-md-5" style={{ borderColor: "#222", margin: 0 }} />

        {/* Footer Content */}
        <div className="container-fluid py-5">
          <div className="row text-center text-md-start footer-animate ps-5">

            {/* NAVIGATION */}
            <div className="col-12 col-md-3 mb-4 mb-md-0 px-5 px-md-3">
              <div className="footer-section-border">
                <h5 className="fw-bold mb-3 position-relative footer-heading">
                  NAVIGATION
                  <span className="heading-line"></span>
                </h5>
              </div>
              <ul className="list-unstyled" style={{ fontSize: "1rem" }}>
                <li className="mb-2 footer-link"><NavLink to="/coins" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>Supported Currencies</NavLink></li>
                <li className="mb-2 footer-link"><NavLink to="/affiliate" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>Affiliation Program</NavLink></li>
                <li className="mb-2 footer-link"><NavLink to="/features" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>Features</NavLink></li>
                <li className="mb-2 footer-link"><NavLink to="/pricing" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>Pricing</NavLink></li>
                <li className="mb-2 footer-link"><NavLink to="/testimonials" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>Testimonials</NavLink></li>
                <li className="mb-2 footer-link"><NavLink to="/support" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>Support</NavLink></li>
              </ul>
            </div>

            {/* ABOUT */}
            <div className="col-12 col-md-3 mb-4 mb-md-0 px-5 px-md-3">
              <div className="footer-section-border">
                <h5 className="fw-bold mb-3 position-relative footer-heading">
                  ABOUT
                  <span className="heading-line"></span>
                </h5>
              </div>
              <ul className="list-unstyled" style={{ fontSize: "1rem" }}>
                <li className="mb-2 footer-link"><NavLink to="/about" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>About Us</NavLink></li>
                <li className="mb-2 footer-link"><NavLink to="/faq" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>FAQ</NavLink></li>
                <li className="mb-2 footer-link"><NavLink to="/listyourcoin" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>List Your Coin</NavLink></li>
                <li className="mb-2 footer-link"><NavLink to="/blogs" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>Latest Blogs</NavLink></li>
                <li className="mb-2 footer-link"><NavLink to="/topcrypto" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>Top Crypto</NavLink></li>
                <li className="mb-2 footer-link"><NavLink to="/icopayment" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>ICO Payment Processor</NavLink></li>
              </ul>
            </div>

            {/* PRODUCTS */}
            <div className="col-12 col-md-3 mb-4 mb-md-0 px-5 px-md-3">
              <div className="footer-section-border">
                <h5 className="fw-bold mb-3 position-relative footer-heading">
                  PRODUCTS
                  <span className="heading-line"></span>
                </h5>
              </div>
              <ul className="list-unstyled" style={{ fontSize: "1rem" }}>
                <li className="mb-2 footer-link"><NavLink to="/api" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>APIs</NavLink></li>
                <li className="mb-2 footer-link"><NavLink to="/invoiceservices" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>Invoice Service</NavLink></li>
                <li className="mb-2 footer-link"><NavLink to="/pricingwidget" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>Pricing Widget</NavLink></li>
                <li className="mb-2 footer-link"><NavLink to="/presalwidget" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>Presale Widget</NavLink></li>
                <li className="mb-2 footer-link"><NavLink to="/paymentbuttonwidget" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>Payment Button Widget</NavLink></li>
                <li className="mb-2 footer-link"><NavLink to="/paymentpagewidget" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>Payment Page Widget</NavLink></li>
              </ul>
            </div>

            {/* CONTACT & LOGO */}
            <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-5 px-md-3">
              <div className="footer-section-border w-100">
                <h5 className="fw-bold mb-3 position-relative footer-heading text-center text-md-start">
                  CONTACT
                </h5>
              </div>
              <div className="mb-3">
                <img src={firstlogo1} alt="logo" width="240" className="img-fluid logo-img" />
              </div>
              <p className="mb-3" style={{ color: "#fff", fontSize: "1rem", maxWidth: "260px" }}>
                Coinremitter is a crypto payment gateway that lets merchants accept crypto payments for their businesses.
              </p>
              <div className="d-flex gap-3 mb-2 justify-content-center justify-content-md-start">
                <a href="/" style={{ color: "#00B894", fontSize: "1.5rem" }}><FaInstagram size={30} /></a>
                <a href="/" style={{ color: "#00B894", fontSize: "1.5rem" }}><SiXcode size={30} /></a>
                <a href="/" style={{ color: "#00B894", fontSize: "1.5rem" }}><FaFacebook size={30} /></a>
                <a href="/" style={{ color: "#00B894", fontSize: "1.5rem" }}><FaYoutube size={30} /></a>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="row mt-4 mx-4 pt-3 border-top" style={{ borderColor: "#222" }}>
            <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0" style={{ fontSize: "1rem" }}>
              ©2025 <span style={{ color: "#00B894" }}>Coinremitter</span> All rights reserved.
            </div>
            <div className="col-12 col-md-6 text-center text-md-end" style={{ fontSize: "1rem" }}>
              <NavLink to="/termsofservices" className={({ isActive }) => `text-decoration-none me-3 ${isActive ? "active-footer-link" : "text-white"}`}>Terms Of Service</NavLink>
              <NavLink to="/riskwarn" className={({ isActive }) => `text-decoration-none me-3 ${isActive ? "active-footer-link" : "text-white"}`}>Risk Warning</NavLink>
              <NavLink to="/privacypolicy" className={({ isActive }) => `text-decoration-none me-3 ${isActive ? "active-footer-link" : "text-white"}`}>Privacy Policy</NavLink>
              <NavLink to="/cookiespolicy" className={({ isActive }) => `text-decoration-none ${isActive ? "active-footer-link" : "text-white"}`}>Cookie Policy</NavLink>
            </div>
          </div>
        </div>

        {/* Footer CSS */}
        <style jsx>{`
          .footer-input:focus {
            border-color: #00CEC9;
            background: #222;
          }
          .footer-link a:hover {
            color: #00CEC9;
            transition: color 0.3s ease;
          }
          .active-footer-link {
            color: #00CEC9 !important;
            font-weight: 600;
            transition: color 0.3s ease;
          }
          .social-icon:hover {
            color: #fff !important;
            transform: scale(1.2);
            transition: transform 0.3s ease, color 0.3s ease;
          }
          .footer-heading {
            display: inline-block;
            width: 100%;
            position: relative;
          }
          .heading-line {
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 50px;
            height: 4px;
            background-color: #00CEC9;
            border-radius: 4px;
          }
          @media (max-width: 767.98px) {
            .heading-line {
              left: 50%;
              transform: translateX(-50%);
              width: 40px;
            }
          }
          @media (min-width: 768px) and (max-width: 991.98px) {
            .heading-line {
              width: 45px;
            }
          }
          @media (min-width: 992px) {
            .heading-line {
              width: 60px;
            }
          }
        `}</style>
      </footer>
    </div>
  );
};

export default Footer;
