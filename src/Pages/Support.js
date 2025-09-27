import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaUser, FaEnvelope, FaTag, FaCommentDots } from 'react-icons/fa';

import NavBar from './NavBar'
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
    // Proceed with form submission
    alert("Form submitted successfully!");
  };
 
  return (
  <>

  {/* NAVBAR */}
<NavBar />



      {/* <!-- SECTION 1 --> */}
<section id='support' class="container-fluid section-1">
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-6">
      <h1>Keep in touch</h1>
      <p>Feel free to contact us with your questions and we will answer asap.</p>
    </div>
  </div>
</section>





    {/* <!-- SECTION 2   --> */}
<section className="container py-5" id="contact-section">
  <div className="row justify-content-center">
    <div className="col-12 col-md-10 col-lg-8">
      <div className="card shadow-sm p-4 rounded-4">
     

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <FaUser style={{ color: '#FF9900' }} />
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
                <FaEnvelope style={{ color: '#FF9900' }} />
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
                <FaTag style={{ color: '#FF9900' }} />
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
                <FaCommentDots style={{ color: '#FF9900' }} />
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
          className="btn px-5 py-3 fw-bold"
          style={{
            backgroundColor: '#FF9900',
            color: '#fff',
            borderRadius: '12px',
            fontSize: '1.1rem',
          }}
        >
          SEND MESSAGE
        </button>
      </div>
        </form>
      </div>
    </div>
  </div>
</section>
  


  {/* Footer */}
  <Footer />
  
  
  
  
  </>
  )
}

export default Support
