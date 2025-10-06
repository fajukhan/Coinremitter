import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
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
          <li className="mb-2 footer-link"><a href="/coins" className="text-white text-decoration-none">Supported Currencies</a></li>
          <li className="mb-2 footer-link"><a href="#section-10" className="text-white text-decoration-none">Affiliation Program</a></li>
          <li className="mb-2 footer-link"><a href="#features" className="text-white text-decoration-none">Features</a></li>
          <li className="mb-2 footer-link"><a href="#pricing" className="text-white text-decoration-none">Pricing</a></li>
          <li className="mb-2 footer-link"><a href="#testimonials" className="text-white text-decoration-none">Testimonials</a></li>
          <li className="mb-2 footer-link"><a href="/support" className="text-white text-decoration-none">Support</a></li>
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
          <li className="mb-2 footer-link"><a href="/about" className="text-white text-decoration-none social-icon">About Us</a></li>
          <li className="mb-2 footer-link"><a href="/faq" className="text-white text-decoration-none social-icon">FAQ</a></li>
          <li className="mb-2 footer-link"><a href="/listyourcoin" className="text-white text-decoration-none social-icon">List Your Coin</a></li>
          <li className="mb-2 footer-link"><a href="/blogs" className="text-white text-decoration-none social-icon">Latest Blogs</a></li>
          <li className="mb-2 footer-link"><a href="/topcrypto" className="text-white text-decoration-none social-icon">Top Crypto</a></li>
          <li className="mb-2 footer-link"><a href="/icopayment" className="text-white text-decoration-none social-icon">ICO Payment Processor</a></li>
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
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none">APIs</a></li>
          <li className="mb-2 footer-link"><a href="/invoiceservices" className="text-white text-decoration-none">Invoice Service</a></li>
          <li className="mb-2 footer-link"><a href="/pricingwidget" className="text-white text-decoration-none">Pricing Widget</a></li>
          <li className="mb-2 footer-link"><a href="/presalwidget" className="text-white text-decoration-none">Presale Widget</a></li>
          <li className="mb-2 footer-link"><a href="/paymentbuttonwidget" className="text-white text-decoration-none">Payment Button Widget</a></li>
          <li className="mb-2 footer-link"><a href="/paymentpagewidget" className="text-white text-decoration-none">Payment Page Widget</a></li>
        </ul>
      </div>

      {/* LOGO & CONTACT */}
      <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-5 px-md-3">
        <div className="footer-section-border w-100">
          <h5 className="fw-bold mb-3 position-relative footer-heading text-center text-md-start">
            CONTACT
          </h5>
        </div>
        <div className="mb-3">
          <img src={firstlogo1}  alt="logo" width="240" className="img-fluid logo-img"  />
        </div>
        <p className="mb-3" style={{ color: "#fff", fontSize: "1rem", maxWidth: "260px" }}>
          Coinremitter is a crypto payment gateway that lets merchants accept crypto payments for their businesses.
        </p>
        <div className="d-flex gap-3 mb-2 justify-content-center justify-content-md-start">
          <a href="/" style={{ color: "#00B894", fontSize: "1.5rem" }}><FaInstagram size={30}/></a>
          <a href="/" style={{ color: "#00B894", fontSize: "1.5rem" }}><SiXcode size={30}/></a>
          <a href="/" style={{ color: "#00B894", fontSize: "1.5rem" }}><FaFacebook size={30}/></a>
          <a href="/" style={{ color: "#00B894", fontSize: "1.5rem" }}><FaYoutube size={30}/></a>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="row mt-4 mx-4 pt-3 border-top" style={{ borderColor: "#222" }}>
      <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0" style={{ fontSize: "1rem" }}>
        ©2025 <span style={{ color: "#00B894" }}>Coinremitter</span> All rights reserved.
      </div>
      <div className="col-12 col-md-6 text-center text-md-end" style={{ fontSize: "1rem" }}>
        <a href="/termsofsevices" className="text-white me-3 text-decoration-none footer-link">Terms Of Service</a>
        <a href="/riskwarm" className="text-white me-3 text-decoration-none footer-link">Risk Warning</a>
        <a href="/privarypolicy" className="text-white me-3 text-decoration-none footer-link">Privacy Policy</a>
        <a href="/cookiespolicy" className="text-white text-decoration-none footer-link">Cookie Policy</a>
      </div>
    </div>
  </div>

  {/* Footer CSS */}
  <style jsx>{`
    .footer-input:focus {
      border-color: #00CEC9;
      background: #222;
    }
    .footer-btn:hover {
      background: linear-gradient(90deg, #00B894, #00CEC9);
      transform: scale(1.05);
    }
    .footer-link a:hover {
      color: #00CEC9;
      transition: color 0.3s ease;
    }
    .social-icon:hover {
      color: #fff !important;
      transform: scale(1.2);
      transition: transform 0.3s ease, color 0.3s ease;
    }
    .heading-line {
      background-color: #00B894;
    }
      .footer-heading {
  display: inline-block;
  width: 100%;
  position: relative;
}

.heading-line {
  position: absolute;
  bottom: -8px; /* distance from text */
  left: 0;
  width: 50px; /* default width for large screens */
  height: 4px; /* thicker line */
  background-color: #00CEC9; /* updated color */
  border-radius: 4px; /* rounded corners */
}

/* Responsive Adjustments */
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
  )
}

export default Footer