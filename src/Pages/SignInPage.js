import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import firstlogo1 from '../Image/firstlogo1.svg';

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
          <img src={firstlogo1} alt="Logo" style={{ height: "45px" }} />
          <h6 className="fw-bold mt-2 mb-1" style={{ color: "#00CEC9" }}>
            Coinremitter - Crypto Gateway
          </h6>
          <p className="text-muted small mb-2">
            Login to your account and manage transactions securely.
          </p>
        </div>

        {/* Heading */}
        <h5 className="text-center fw-bold mb-3" style={{ color: "#00CEC9" }}>
          SIGN IN
        </h5>

        {/* Email */}
        <div className="input-group input-group-sm mb-2">
          <span className="input-group-text bg-white">
            <FaEnvelope size={16} color="#00CEC9" />
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
            <FaLock size={16} color="#00CEC9" />
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
          <button
            className="btn fw-bold btn-sm"
            style={{ background: "#00CEC9", color: "#fff" }}
          >
            SIGN IN
          </button>
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
          <a href="/" style={{ color: "#00CEC9", fontWeight: "bold" }}>
            Sign Up
          </a>{" "}
          |{" "}
          <a href="/" style={{ color: "#00CEC9", fontWeight: "bold" }}>
            Forgot Password?
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
