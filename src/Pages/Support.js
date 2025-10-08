import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaUser, FaEnvelope, FaTag, FaCommentDots } from "react-icons/fa";

import NavBar from "./NavBar";
import Footer from "./Footer";

const Support = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please verify you're not a robot.");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <>
      {/* NAVBAR */}
      <NavBar />

      {/* SECTION 1 */}
      <section id="support" className="container-fluid section-1 text-center py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <h1 className="fw-bold" style={{ color: "#000" }}>
              Keep in touch
            </h1>
            <p className="text-light">
              Feel free to contact us with your questions and we will answer asap.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="container py-5" id="contact-section">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card shadow-sm p-4 rounded-4 border-0">
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Name</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                      <FaUser style={{ color: "#00CEC9" }} />
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0"
                      placeholder="Ex. John Ricmod"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                      <FaEnvelope style={{ color: "#00CEC9" }} />
                    </span>
                    <input
                      type="email"
                      className="form-control border-start-0"
                      placeholder="Ex. john12@example.com"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Subject</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                      <FaTag style={{ color: "#00CEC9" }} />
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Message</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                      <FaCommentDots style={{ color: "#00CEC9" }} />
                    </span>
                    <textarea
                      className="form-control border-start-0"
                      rows="4"
                      placeholder="Let us know"
                    ></textarea>
                  </div>
                </div>

                {/* Google reCAPTCHA */}
                <div className="text-center my-4">
                  <ReCAPTCHA
                    sitekey="6LeOFdErAAAAAPyuKkldXs6In4uFOGbKTix4_otz"
                    onChange={handleCaptchaChange}
                  />
                </div>

                {/* Submit Button */}
                <div className="text-start">
                  <button
                    type="submit"
                    className="btn btn-lg crypto-btn px-5 py-3 fw-bold"
                    style={{
                      backgroundColor: "#00CEC9",
                      color: "#fff",
                      borderRadius: "12px",
                      fontSize: "1.1rem",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#00b5b2")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#00CEC9")
                    }
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Support;
