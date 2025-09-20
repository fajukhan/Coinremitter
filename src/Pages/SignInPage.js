import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "../Image/logo.svg";

const SignInPage = () => {
  return (
    <section
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", background: "#1a1a1a" }}
    >
      <div
        className="card shadow-lg border-0 p-3"
        style={{
          maxWidth: "380px",
          width: "100%",
          borderRadius: "15px",
        }}
      >
        {/* Logo */}
        <div className="text-center mb-2">
          <img src={logo} alt="Logo" style={{ height: "45px" }} />
          <h6 className="text-warning fw-bold mt-2 mb-1">
            Coinremitter - Crypto Gateway
          </h6>
          <p className="text-muted small mb-2">
            Login to your account and manage transactions securely.
          </p>
        </div>

        {/* Heading */}
        <h5 className="text-center fw-bold text-warning mb-3">SIGN IN</h5>

        {/* Email */}
        <div className="input-group input-group-sm mb-2">
          <span className="input-group-text bg-white">
            <FaEnvelope size={16} color="#f7a400" />
          </span>
          <input
            type="email"
            className="form-control"
            placeholder="john12@example.com"
          />
        </div>

        {/* Password */}
        <div className="input-group input-group-sm mb-2">
          <span className="input-group-text bg-white">
            <FaLock size={16} color="#f7a400" />
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Min. 8 characters"
          />
        </div>

        {/* reCAPTCHA Dummy */}
        <div className="p-2 border rounded bg-light text-center small mb-2">
          <input type="checkbox" className="form-check-input me-2" /> I'm not a robot
          <div className="text-muted" style={{ fontSize: "11px" }}>
            reCAPTCHA Privacy - Terms
          </div>
        </div>

        {/* Sign In Button */}
        <div className="d-grid mb-2">
          <button className="btn btn-warning fw-bold btn-sm">SIGN IN</button>
        </div>

        {/* OR Divider */}
        <div className="text-center text-muted small my-1">------ OR ------</div>

        {/* Google Login */}
        <div className="d-grid mb-2">
          <button className="btn btn-light border d-flex align-items-center justify-content-center gap-2 btn-sm">
            <FcGoogle size={18} /> Google
          </button>
        </div>

        {/* Links */}
        <div className="text-center small">
          <p className="mb-0">Create Account</p>
          <a href="/" className="text-warning fw-bold">
            Sign Up
          </a>{" "}
          |{" "}
          <a href="/" className="text-warning fw-bold">
            Forgot Password?
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
