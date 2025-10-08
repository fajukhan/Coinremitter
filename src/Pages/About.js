import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import aboutusimg from "../Image/aboutusimg.png";

const About = () => {
  return (
    <>
      {/* NAVBAR */}
      <NavBar />

      {/* SECTION 1 */}
      <section id="support" className="container-fluid section-1 text-center py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <h1 className="fw-bold" style={{ color: "#000" }}>
              About Us
            </h1>
            <p className="text-light mt-3">
              Coinremitter is a fully functional gateway for cryptocurrencies. We always wanted Coinremitter to be easy for users. The kind of service we are providing is reliable, trustworthy, and seamless.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="about-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column - Image */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
              <div className="about-image text-center">
                <img
                  src={aboutusimg}
                  alt="About Coinremitter"
                  className="img-fluid rounded shadow-lg"
                  style={{ border: "3px solid #00CEC9", borderRadius: "16px" }}
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="about-content">
                <h2
                  className="mb-4 fw-bold"
                  style={{ color: "#000", fontSize: "2rem" }}
                >
                  About Coinremitter
                </h2>

                <p className="lead text-secondary">
                  The kind of service we are providing is reliable, trustworthy, and seamless.
                </p>

                <p className="text-muted">
                  We have already made a family of 38,000+ users and built up a strong connection with them. Our services such as digital wallet and digital invoice including other functionalities perform seamlessly.
                </p>

                <p className="text-muted">
                  We focus more on our user's needs and accomplish them as soon as possible. We always aim to make services simple for those merchants and vendors who are new to the crypto world and want to build strong communication and wallet transactions with their buyers or sellers.
                </p>

                <p className="text-muted">
                  To connect with individual websites is also our major step for those who are using Coinremitter plugins like PHP, Laravel, and WordPress from their websites with the help of our REST API through documentation.
                </p>

                <div className="mt-4">
                  <a href="/blogs">
                  <button 
                    href="#blog"
                    className="btn btn-lg crypto-btn  fw-bold px-4 py-2"
                    style={{
                      backgroundColor: "#00CEC9",
                      color: "#fff",
                      borderRadius: "12px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#00b5b2")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#00CEC9")
                    }
                  >
                    READ OUR BLOG
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default About;
