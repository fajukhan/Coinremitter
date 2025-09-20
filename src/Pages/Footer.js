import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiXcode } from "react-icons/si";
import '../Pages/Footer1.css';
const Footer = () => {
  return (
    <div>
    {/* SECTION-15: Footer */}
<footer className="container-fluid pt-5" style={{ background: "#111", color: "#fff" }}>
  
  {/* Newsletter Section */}
  <div className="row py-5  px-md-5 align-items-center">
    <div className="col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start">
      <h2 className="fw-bold" style={{ fontSize: "2rem", lineHeight: 1.2 }}>
        Stay up to date with <br /> our Newsletter
      </h2>
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
            border: "1px solid #fff",
            borderRadius: "0",
            width: "100%",
            maxWidth: "400px",
            fontSize: "1rem"
          }}
        />
        <button
          type="submit"
          className="btn fw-bold px-4 py-2 footer-btn"
          style={{
            background: "#FF9900",
            color: "#fff",
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
  <div className="container-fluid  py-5">
    <div className="row text-center text-md-start footer-animate">
      
      {/* NAVIGATION */}
      <div className="col-12 col-md-3 mb-4 mb-md-0 px-5">
        <div className="footer-section-sm-border">
  <h6 className="fw-bold">NAVIGATION</h6>
</div>
        <ul className="list-unstyled" style={{ fontSize: "1rem" }}>
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none">Supported Currencies</a></li>
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none">Affiliation Program</a></li>
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none">Features</a></li>
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none">Pricing</a></li>
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none">Testimonials</a></li>
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none">Support</a></li>
        </ul>
      </div>

      {/* ABOUT */}
      <div className="col-12 col-md-3 mb-4 mb-md-0">
      <div className="footer-section-sm-border">
  <h6 className="fw-bold">PRODUCTS</h6>
</div>

        <ul className="list-unstyled" style={{ fontSize: "1rem" }}>
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none social-icon">About Us</a></li>
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none social-icon">FAQ</a></li>
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none social-icon">List Your Coin</a></li>
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none social-icon">Latest Blogs</a></li>
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none social-icon">Top Crypto</a></li>
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none social-icon">ICO Payment Processor</a></li>
        </ul>
      </div>

      {/* PRODUCTS */}
      <div className="col-12 col-md-3 mb-4 mb-md-0">
       <div className="footer-section-sm-border">
  <h6 className="fw-bold">PRODUCTS</h6>
</div>
        <ul className="list-unstyled" style={{ fontSize: "1rem" }}>
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none">APIs</a></li>
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none">Invoice Service</a></li>
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none">Pricing Widget</a></li>
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none">Presale Widget</a></li>
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none">Payment Button Widget</a></li>
          <li className="mb-2 footer-link"><a href="/" className="text-white text-decoration-none">Payment Page Widget</a></li>
        </ul>
      </div>

      {/* LOGO & DESCRIPTION */}
      <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
        <div className="mb-3">
          <span style={{ fontWeight: 700, fontSize: "2rem", color: "#FF9900" }}>
            <span style={{ fontFamily: "monospace", fontWeight: 900 }}>C</span>
          </span>
          <span style={{ fontWeight: 700, fontSize: "2rem", color: "#fff" }}>oin</span>
          <span style={{ fontWeight: 700, fontSize: "2rem", color: "#FF9900" }}>Remitter</span>
        </div>
        <p className="mb-3" style={{ color: "#fff", fontSize: "1rem", maxWidth: "260px" }}>
          Coinremitter is a crypto payment gateway that lets merchants accept crypto payments for their businesses.
        </p>
        <div className="d-flex gap-3 mb-2 justify-content-center justify-content-md-start">
          <a href="/" style={{ color: "#FF9900", fontSize: "1.5rem" }}><i className="bi bi-instagram"><FaInstagram /></i></a>
          <a href="/" style={{ color: "#FF9900", fontSize: "1.5rem" }}><i className="bi bi-x"><SiXcode /></i></a>
          <a href="/" style={{ color: "#FF9900", fontSize: "1.5rem" }}><i className="bi bi-facebook"><FaFacebook /></i></a>
          <a href="/" style={{ color: "#FF9900", fontSize: "1.5rem" }}><i className="bi bi-youtube"><FaYoutube /></i></a>
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="row mt-4 mx-4 pt-3 border-top" style={{ borderColor: "#222" }}>
      <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0" style={{ fontSize: "1rem" }}>
        ©2025 <span style={{ color: "#FF9900" }}>Coinremitter</span> All rights reserved.
      </div>
      <div className="col-12 col-md-6 text-center text-md-end" style={{ fontSize: "1rem" }}>
        <a href="/" className="text-white me-3 text-decoration-none">Terms Of Service</a>
        <a href="/" className="text-white me-3 text-decoration-none">Risk Warning</a>
        <a href="/" className="text-white me-3 text-decoration-none">Privacy Policy</a>
        <a href="/" className="text-white text-decoration-none">Cookie Policy</a>
      </div>
    </div>
  </div>

  {/* Footer CSS */}
  <style jsx>{`
    .footer-input:focus {
      border-color: #FF9900;
      background: #222;
    }
    .footer-btn:hover {
      background: #e68a00;
      transform: scale(1.05);
    }
    .footer-link a:hover {
      color: #FF9900;
      transition: color 0.3s ease;
    }
    .social-icon:hover {
      color: #fff !important;
      transform: scale(1.2);
      transition: transform 0.3s ease, color 0.3s ease;
    }
  `}</style>


</footer>

    </div>
  )
}

export default Footer
