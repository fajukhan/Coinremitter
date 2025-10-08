import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Container, Row, Col } from "react-bootstrap";
import { FaExchangeAlt, FaLock, FaUsers } from "react-icons/fa";
import { MdStorage } from "react-icons/md";
import { FaUserPlus, FaWallet, FaCogs } from "react-icons/fa";
import { 
  FaHeadset, 
  FaCoins, 
  FaShieldAlt,
  FaEnvelope,
  FaTicketAlt,
  FaComments
} from 'react-icons/fa';
import secondimage from '../Image/secondimage.png';

const IcoPayment = () => {
  const whyImg = require("C:/Users/pc/Desktop/Coin/coinmiter/src/Image/why-coinremitter-ico-payments.png");

  const features = [
    { icon: <FaExchangeAlt />, text: "Highly scalable for high-volume transactions" },
    { icon: <MdStorage />, text: "Network design concepts for high uptime" },
    { icon: <FaLock />, text: "Encryption to protect sensitive information" },
    { icon: <FaUsers />, text: "Dedicated team for ICO payment integration support" },
  ];

  const steps = [
    { number: "1.", text: "Sign up for a CoinRemitter account", icon: <FaUserPlus /> },
    { number: "2.", text: "Create a compatible crypto wallet", icon: <FaWallet /> },
    { number: "3.", text: "Integrate necessary crypto APIs to your ICO", icon: <FaCogs /> },
  ];

  return (
    <>
      {/* NAVBAR */}
      <NavBar />

      {/* SECTION 1 */}
      <section className="container-fluid section-1">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-8 text-center">
            <h1>ICO Payment Processor by CoinRemitter</h1>
            <p>Enable crypto payments in your ICO. Accept crypto payments from investors in ICO launches.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-5 section-why">
        <Container>
          <Row className="align-items-center">
            {/* Left Column */}
            <Col lg={6} md={12} className="mb-4 mb-lg-0">
              <h1 className="fw-bold mb-4 heading-big">
                Why Choose CoinRemitter For <br /> Accepting ICO Payments?
              </h1>
              <hr className="underline mb-4" style={{ borderColor: '#00CEC9' }} />

              <div className="features-list">
                {features.map((f, idx) => (
                  <div className="d-flex align-items-start mb-3 feature-item" key={idx}>
                    <div className="icon-wrap me-3 position-relative">
                      <svg className="hex-svg" viewBox="0 0 100 100">
                        <polygon
                          points="50,5 90,25 90,75 50,95 10,75 10,25"
                          fill="none"
                          stroke="#00CEC9"
                          strokeWidth="3"
                        />
                      </svg>
                      <div className="icon-inner text-center" style={{ color: '#00CEC9' }}>
                        {f.icon}
                      </div>
                    </div>
                    <p className="mb-0 feature-text">{f.text}</p>
                  </div>
                ))}
              </div>
            </Col>

            {/* Right Column */}
            <Col lg={6} md={12} className="text-center">
              <img src={whyImg} alt="Why Choose CoinRemitter" className="img-fluid why-image" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECTION 3 */}
      <section className="py-5 bg-light section-steps">
        <Container>
          <h2 className="text-center fw-bold mb-5 display-6">
            Get Started With CoinRemitter’s{" "}
            <span className="border-bottom" style={{ borderColor: '#00CEC9' }}>
              ICO Payment Processor
            </span>
          </h2>
          <Row className="justify-content-center g-4">
            {steps.map((step, idx) => (
              <Col key={idx} lg={4} md={6} sm={10} className="d-flex justify-content-center">
                <div className="hex-card text-center position-relative">
                  <svg className="hex-shape" viewBox="0 0 331 382">
                    <path
                      d="M1.28 95.55L165.78 0.58L330.28 95.55V285.5L165.78 380.47L1.28 285.5V95.55Z"
                      stroke="#00CEC9"
                      fill="none"
                    />
                  </svg>
                  <div className="hex-content">
                    <h3 className="step-number" style={{ color: '#00CEC9' }}>{step.number}</h3>
                    <h4 className="step-text">{step.text}</h4>
                    <div className="step-icon" style={{ color: '#00CEC9' }}>{step.icon}</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* SECTION 4 */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 text-center">
              <img 
                src={secondimage}
                alt="Witness Successful ICO Launch"
                className="img-fluid rounded"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4 fw-bold">Witness A Successful ICO Launch With CoinRemitter</h2>
              <div className="feature-card p-4 rounded shadow border-0">
                {[FaHeadset, FaUsers, FaCoins, FaShieldAlt].map((Icon, i) => {
                  const titles = [
                    "24x7 Technical Support in API Integration During ICO Launch Period",
                    "A Dedicated Team of Experts For Technical Support Integration",
                    "Multi-Currency Support to Attract Large Audience Processing Fee",
                    "Robust Security Measures to Protect Your Funds"
                  ];
                  const subs = [
                    "Round-the-clock assistance for seamless integration",
                    "Specialized professionals focused on your success",
                    "Accept payments in multiple cryptocurrencies",
                    "Advanced security protocols for your peace of mind"
                  ];
                  return (
                    <div className="d-flex align-items-start mb-4" key={i}>
                      <div className="icon-wrapper me-3 flex-shrink-0" style={{ color: '#00CEC9' }}>
                        <Icon size={28} />
                      </div>
                      <div>
                        <h5 className="mb-2 fw-semibold">{titles[i]}</h5>
                        <p className="mb-0 text-muted small">{subs[i]}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - Contact */}
      <section className="py-0 white">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="mb-3 fw-bold">When Will Your ICO Take Place? Reach Out To Us</h2>
              <p className="lead text-dark">
                Our priority is to ensure the success of your ICO. Let's discuss how we can make a smooth payment flow on your website.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            {[
              { icon: <FaEnvelope size={48} />, title: "Email Support", link: "/signup", text: "Send Email" },
              { icon: <FaTicketAlt size={48} />, title: "Support Ticket", link: "/signinpage", text: "Create Ticket" },
              { icon: <FaComments size={48} />, title: "Quick Chat", link: "/support", text: "Start Chat" },
            ].map((item, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="card h-100 border-0 shadow text-center p-4 contact-card">
                  <div className="card-body d-flex flex-column">
                    <div className="icon-wrapper mb-3 mx-auto" style={{ color: '#00CEC9' }}>
                      {item.icon}
                    </div>
                    <h5 className="card-title fw-semibold mb-3">{item.title}</h5>
                    <a href={item.link} className="btn mt-auto" style={{ background: '#00CEC9', color: '#fff', borderRadius: '8px' }}>
                      {item.text}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default IcoPayment;
