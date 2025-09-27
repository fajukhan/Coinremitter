import React from "react";
import NavBar from "./NavBar";
import PresaleWidgetImage from "../Image/presale-widget.54ab9029.svg";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
const PresaleWidget = () => {
  return (
    <>
      {/* NAVBAR */}
      <NavBar />

      {/* SECTION-1 */}
      <section className="bg-light">
        <div className="container py-5 ">
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-12 col-md-6 text-center text-md-start px-4">
              <h2 className="fw-bold display-6">
                Simplify Crypto Payments For ICO
              </h2>
              <hr
                className="my-3"
                style={{
                  width: "100px",
                  color: " #e48f07",
                  backgroundColor: "#e48f07",
                  height: "5px",
                  borderRadius: "10px",
                }}
              />
              <p className="lead text-muted">
                The Presale Widget lets investors pay in crypto for your ICO or
                token presales. Create and integrate it into your website in
                five easy steps. Our gateway helps launch a successful ICO with
                seamless payment functionality.
              </p>
              <button className="btn crypto-btn btn-lg mt-3">CREATE NOW</button>
            </div>

            {/* Right Column */}
            <div className="col-12 col-md-6 text-center px-4 mt-4 mt-md-0">
              <img
                src={PresaleWidgetImage}
                alt="Presale Widget"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>
      </section>






{/* SECTION-2 */}
<section className="py-5 white text-center">
  <Container>
    {/* Heading Section with Working HR Line */}
    <div className="mb-5">
      <h2 className="display-4 fw-bold text-dark mb-4">
        <span className="position-relative d-inline-block pb-2">
          Why Use
          {/* Working SVG Underline */}
          <svg 
            width="120%" 
            height="6" 
            viewBox="0 0 200 6" 
            className="position-absolute bottom-0 left-0"
            style={{ transform: 'translateX(-10%) translateY(2px)' }}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            <path 
              d="M0,3 Q50,0 100,3 T200,3" 
              fill="none" 
              stroke="url(#underlineGradient)" 
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>{' '}
        CoinRemitter's Presale Widget
      </h2>
      
      {/* Dot Separator - Working */}
      <div className="my-4 d-flex justify-content-center">
        <div className="d-flex gap-2">
          {[1, 2, 3, 4].map((dot) => (
            <div key={dot} className="rounded-circle bg-warning" style={{width: '8px', height: '8px'}}></div>
          ))}
        </div>
      </div>
      
      <p className="text-muted fs-6 fw-light lh-base mx-auto" style={{maxWidth: '600px'}}>
        The world witnesses over 1000 ICOs annually. Our Presale Widget is designed to help these projects launch quickly and maximize their chances of success.
      </p>
    </div>

    {/* Stats Grid */}
    <Row className="mt-5 g-0">
      <Col xs={12} md={6} lg={3}>
        <div className="border border-end-0 border-bottom-0 h-100 p-4 p-lg-5 d-flex flex-column justify-content-center align-items-center gap-3 gap-lg-4 gap-xl-5">
          <h4 className="display-6 fw-light m-0 text-warning">&lt;10</h4>
          <p className="text-muted small fw-medium text-uppercase m-0 lh-sm">Minutes Integration Time</p>
        </div>
      </Col>

      <Col xs={12} md={6} lg={3}>
        <div className="border border-bottom-0 h-100 p-4 p-lg-5 d-flex flex-column justify-content-center align-items-center gap-3 gap-lg-4 gap-xl-5">
          <div className="d-flex flex-column-reverse w-100 align-items-center">
            <p className="text-muted small fw-medium text-uppercase m-0 lh-sm mt-3 mt-lg-4">Easy Steps to Get Started</p>
            <h4 className="display-6 fw-light m-0 text-warning">5</h4>
          </div>
        </div>
      </Col>

      <Col xs={12} md={6} lg={3}>
        <div className="border border-end-0 border-start-0 border-bottom-0 h-100 p-4 p-lg-5 d-flex flex-column justify-content-center align-items-center gap-3 gap-lg-4 gap-xl-5">
          <h4 className="display-6 fw-light m-0 text-warning">Up to 12%</h4>
          <p className="text-muted small fw-medium text-uppercase m-0 lh-sm">Increased Conversions</p>
        </div>
      </Col>

      <Col xs={12} md={6} lg={3}>
        <div className="border border-start-0 border-bottom-0 h-100 p-4 p-lg-5 d-flex flex-column justify-content-center align-items-center gap-3 gap-lg-4 gap-xl-5">
          <div className="d-flex flex-column-reverse w-100 align-items-center">
            <p className="text-muted small fw-medium text-uppercase m-0 lh-sm mt-3 mt-lg-4">Accurate Statistics</p>
            <h4 className="display-6 fw-light m-0 text-warning">100%</h4>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>


SECOTION



{/* FOOTER */}
<Footer />
    
    
    
    
    </>
  );
};

export default PresaleWidget;
