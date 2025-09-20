import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "../Image/logo.svg";

const Signup = () => {
  return (
    <section
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh", // Full screen
        background: "#1a1a1a",
      }}
    >
      <div
        className="card shadow-lg border-0 p-4"
        style={{
          maxWidth: "480px",
          width: "100%",
          borderRadius: "15px",
        }}
      >
        {/* Logo */}
        <div className="text-center mb-2">
          <img src={logo} alt="Logo" style={{ height: "45px" }} />
          <h6 className="text-warning fw-bold mt-2">
            Coinremitter - Crypto Gateway
          </h6>
          <p className="text-muted small mb-1">
            Accept crypto payments easily and faster on your website.
          </p>
        </div>

        {/* Heading */}
        <h4 className="text-center fw-bold text-warning mb-3">SIGN UP</h4>

        {/* First & Last Name */}
        <div className="row g-2 mb-2">
          <div className="col-6">
            <div className="input-group input-group-sm">
              <span className="input-group-text bg-white">
                <FaUser />
              </span>
              <input type="text" className="form-control" placeholder="John" />
            </div>
          </div>
          <div className="col-6">
            <div className="input-group input-group-sm">
              <span className="input-group-text bg-white">
                <FaUser />
              </span>
              <input type="text" className="form-control" placeholder="Ricmod" />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="input-group input-group-sm mb-2">
          <span className="input-group-text bg-white">
            <FaEnvelope />
          </span>
          <input
            type="email"
            className="form-control"
            placeholder="john12@example.com"
          />
        </div>

        {/* Mobile */}
        <div className="input-group input-group-sm mb-2">
          <span className="input-group-text bg-white">
            <FaPhone />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="756xxxx143 (Optional)"
          />
        </div>

        {/* Passwords */}
        <div className="row g-2 mb-2">
          <div className="col-6">
            <div className="input-group input-group-sm">
              <span className="input-group-text bg-white">
                <FaLock />
              </span>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
          </div>
          <div className="col-6">
            <div className="input-group input-group-sm">
              <span className="input-group-text bg-white">
                <FaLock />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm"
              />
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="form-check small mb-1">
          <input type="checkbox" className="form-check-input" id="terms" />
          <label className="form-check-label" htmlFor="terms">
            <span className="text-danger">Terms & Conditions</span> &{" "}
            <span className="text-danger">Privacy Policy</span>
          </label>
        </div>

        <div className="form-check small mb-2">
          <input type="checkbox" className="form-check-input" id="newsletter" />
          <label className="form-check-label" htmlFor="newsletter">
            Subscribe newsletter
          </label>
        </div>

        {/* reCAPTCHA */}
        <div className="p-2 border rounded bg-light text-center small mb-2">
          <input type="checkbox" className="form-check-input me-2" /> I'm not a robot
          <div className="text-muted" style={{ fontSize: "11px" }}>
            reCAPTCHA Privacy - Terms
          </div>
        </div>

        {/* Buttons */}
        <div className="d-grid mb-2">
          <button className="btn btn-warning fw-bold btn-sm">SIGN UP</button>
        </div>

        <div className="text-center text-muted small my-1">------ OR ------</div>

        <div className="d-grid mb-2">
          <button className="btn btn-light border d-flex align-items-center justify-content-center gap-2 btn-sm">
            <FcGoogle /> Google
          </button>
        </div>

        {/* Links */}
        <div className="text-center small">
          <p className="mb-0">Already Member ?</p>
          <a href="/" className="text-warning fw-bold">
            Sign In
          </a>{" "}
          |{" "}
          <a href="/" className="text-warning fw-bold">
            Resend Confirmation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Signup;
    