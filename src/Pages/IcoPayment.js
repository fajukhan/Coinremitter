import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
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
// Import cryptocurrency images
import btc from "../Image/btc.png";
import ltc from "../Image/ltc.png";
import bch from "../Image/bch.png";
import eth from "../Image/eth.png";
import doge from "../Image/doge.png";
import tcn from "../Image/tcn.png";
import dash from "../Image/dash.png";
import usdterc20 from "../Image/usdterc20.png";

import trx from "../Image/trx.png";
import zano from "../Image/zano.png";


const IcoPayment = () => {


    // Use your local image path (or import at top)
const whyImg = require("C:/Users/pc/Desktop/Coin/coinmiter/src/Image/why-coinremitter-ico-payments.png");

const features = [
  {
    icon: <FaExchangeAlt />,
    text: "Highly scalable for high-volume transactions",
  },
  {
    icon: <MdStorage />,
    text: "Network design concepts for high uptime",
  },
  {
    icon: <FaLock />,
    text: "Encryption to protect sensitive information",
  },
  {
    icon: <FaUsers />,
    text: "Dedicated team for ICO payment integration support",
  },
];


const steps = [
  {
    number: "1.",
    text: "Sign up for a CoinRemitter account",
    icon: <FaUserPlus />,
  },
  {
    number: "2.",
    text: "Create a compatible crypto wallet",
    icon: <FaWallet />,
  },
  {
    number: "3.",
    text: "Integrate necessary crypto APIs to your ICO",
    icon: <FaCogs />,
  },
];


 const faqs = [
  {
    question: "What is an ICO and how does it work?",
    answer:
      "An Initial Coin Offering (ICO) is a fundraising method where new crypto projects sell their tokens to early investors. It helps raise capital while building a user base.",
  },
  {
    question: "Why choose Coinremitter for crypto payments?",
    answer:
      "Coinremitter offers secure, low-fee, multi-coin payment processing with easy API integration—ideal for startups and large-scale platforms alike.",
  },
  {
    question: "Can I integrate Coinremitter with my existing website?",
    answer:
      "Yes, Coinremitter provides plugins and APIs for platforms like WordPress, Laravel, and custom-built apps. Integration is fast and developer-friendly.",
  },
  {
    question: "Is Coinremitter scalable for high-volume ICOs?",
    answer:
      "Absolutely. Coinremitter supports large transaction volumes with real-time confirmations, making it suitable for enterprise-level ICO launches.",
  },
  {
    question: "Where can I get technical support for integration?",
    answer:
      "You can reach out via Coinremitter’s support portal or use their developer documentation for step-by-step guidance and troubleshooting.",
  },
];


  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };





  return (
 <>

 {/* NAVBAR */}
 <NavBar />



     {/* <!-- SECTION 1 --> */}
<section class="container-fluid section-1">
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-8">
      <h1>ICO Payment Processor by CoinRemitter</h1>
      <p>Enable crypto payments in your ICO. Accept crypto payments from investors in ICO launches.</p>
    </div>
  </div>
</section>


{/* SECTION-2 */}
<section className="py-5 section-why">
      <Container>
        <Row className="align-items-center">
          {/* Left Column */}
          <Col lg={6} md={12} className="mb-4 mb-lg-0">
            <h1 className="fw-bold mb-4 heading-big">
              Why Choose CoinRemitter For <br /> Accepting ICO Payments?
            </h1>
            <hr className="underline mb-4" />

            {/* Features */}
            <div className="features-list">
              {features.map((f, idx) => (
                <div className="d-flex align-items-start mb-3 feature-item" key={idx}>
                  <div className="icon-wrap me-3">
                    {/* SVG hexagon border (stroke = #ffc107) */}
                    <svg className="hex-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      {/* The polygon gives the border / path */}
                      <polygon
                        points="50,5 90,25 90,75 50,95 10,75 10,25"
                        fill="none"
                        stroke="#ffc107"
                        strokeWidth="3"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg>

                    {/* Icon sits centered; we use color #ffc107 for icon glyph */}
                    <div className="icon-inner" aria-hidden>
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



    {/* SECTION-3 */}
        <section className="py-5 bg-light section-steps">
      <Container>
        <h2 className="text-center fw-bold mb-5 display-6">
          Get Started With CoinRemitter’s{" "}
          <span className="border-bottom border-warning">
            ICO Payment Processor
          </span>
        </h2>
        <Row className="justify-content-center g-4">
          {steps.map((step, idx) => (
            <Col key={idx} lg={4} md={6} sm={10} className="d-flex justify-content-center">
              <div className="hex-card text-center">
                {/* Hexagon Shape */}
                <svg className="hex-shape" viewBox="0 0 331 382" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.28 95.55L165.78 0.58L330.28 95.55V285.5L165.78 380.47L1.28 285.5V95.55Z"
                    stroke="rgba(0,0,0,0.15)"
                    fill="none"
                  />
                </svg>

                {/* Inner content */}
                <div className="hex-content">
                  <h3 className="step-number">{step.number}</h3>
                  <h4 className="step-text">{step.text}</h4>
                  <div className="step-icon">{step.icon}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>


     {/* Section 4: One row, two columns */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            {/* First Column: Image */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="text-center">
                {/* Using a placeholder image - replace with your actual image */}
                <img 
                  src={secondimage}
                  alt="Witness Successful ICO Launch" 
                  className="img-fluid rounded "
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                {/* For your local image, use: */}
                {/* <img 
                  src={require('./Image/witness-successful-ICO-launch.png')} 
                  alt="Witness Successful ICO Launch" 
                  className="img-fluid rounded shadow"
                /> */}
              </div>
            </div>
            
            {/* Second Column: Content with icons */}
            <div className="col-lg-6">
              <h2 className="mb-4 fw-bold" style={{ color: '#000' }}>
                Witness A Successful ICO Launch With CoinRemitter
              </h2>
              
              <div className="feature-card p-4 rounded shadow border-0">
                <div className="d-flex align-items-start mb-4">
                  <div className="icon-wrapper me-3 flex-shrink-0" style={{ color: '#f7931a' }}>
                    <FaHeadset size={28} />
                  </div>
                  <div>
                    <h5 className="mb-2 fw-semibold">24x7 Technical Support in API Integration During ICO Launch Period</h5>
                    <p className="mb-0 text-muted small">Round-the-clock assistance for seamless integration</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-4">
                  <div className="icon-wrapper me-3 flex-shrink-0" style={{ color: '#f7931a' }}>
                    <FaUsers size={28} />
                  </div>
                  <div>
                    <h5 className="mb-2 fw-semibold">A Dedicated Team of Experts For Technical Support Integration</h5>
                    <p className="mb-0 text-muted small">Specialized professionals focused on your success</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-4">
                  <div className="icon-wrapper me-3 flex-shrink-0" style={{ color: '#f7931a' }}>
                    <FaCoins size={28} />
                  </div>
                  <div>
                    <h5 className="mb-2 fw-semibold">Multi-Currency Support to Attract Large Audience Processing Fee</h5>
                    <p className="mb-0 text-muted small">Accept payments in multiple cryptocurrencies</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start">
                  <div className="icon-wrapper me-3 flex-shrink-0" style={{ color: '#f7931a' }}>
                    <FaShieldAlt size={28} />
                  </div>
                  <div>
                    <h5 className="mb-2 fw-semibold">Robust Security Measures to Protect Your Funds</h5>
                    <p className="mb-0 text-muted small">Advanced security protocols for your peace of mind</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Contact Information */}
      <section className="py-0 white">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="mb-3 fw-bold" style={{ color: '#000' }}>
                When Will Your ICO Take Place? Reach Out To Us
              </h2>
              <p className="lead text-dark">
                Our priority is to ensure the success of your ICO. Let's discuss how we can make a smooth payment flow on your website.
              </p>
            </div>
          </div>
          
          <div className="row justify-content-center">
            {/* Contact Method 1 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow text-center p-4 contact-card">
                <div className="card-body d-flex flex-column">
                  <div className="icon-wrapper mb-3 mx-auto" style={{ color: '#f7931a' }}>
                    <FaEnvelope size={48} />
                  </div>
                  <h5 className="card-title fw-semibold mb-3">Email Support</h5>
                  <p className="card-text flex-grow-1">
                    Sending a support request email to Coinremitter's support staff.
                  </p>
                  <a href="mailto:support@coinremitter.com" className="btn contact-btn mt-auto">
                    Send Email
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Method 2 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow text-center p-4 contact-card">
                <div className="card-body d-flex flex-column">
                  <div className="icon-wrapper mb-3 mx-auto" style={{ color: '#f7931a' }}>
                    <FaTicketAlt size={48} />
                  </div>
                  <h5 className="card-title fw-semibold mb-3">Support Ticket</h5>
                  <p className="card-text flex-grow-1">
                    Generating a support ticket from your merchant dashboard.
                  </p>
                  <a href="/support" className="btn contact-btn mt-auto">
                    Create Ticket
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Method 3 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow text-center p-4 contact-card">
                <div className="card-body d-flex flex-column">
                  <div className="icon-wrapper mb-3 mx-auto" style={{ color: '#f7931a' }}>
                    <FaComments size={48} />
                  </div>
                  <h5 className="card-title fw-semibold mb-3">Quick Chat</h5>
                  <p className="card-text flex-grow-1">
                    Sending us a message via Coinremitter's quick chat support.
                  </p>
                  <a href="/chat" className="btn contact-btn mt-auto">
                    Start Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* SECTION-6 */}
  <section class="container-fluid py-5 bg-light">
    <div className='container'>
        <div class="section-header">
            <h2 class="section-title">Supported Cryptocurrencies For ICO Payments</h2>
            <p class="section-subtitle">Accept payments in multiple cryptocurrencies to reach a wider audience</p>
        </div>
{/* 
        <!-- First Row - 9 Cryptocurrencies --> */}
        <div class="crypto-grid">
            {/* <!-- Bitcoin --> */}
            <div class="crypto-card">
                <div class="crypto-icon">
                    <img src={btc} alt="Bitcoin" />
                </div>
                <h3 class="crypto-name">Bitcoin</h3>
            </div>

            {/* <!-- Litecoin --> */}
            <div class="crypto-card">
                <div class="crypto-icon">
                    <img src={ltc} alt="Litecoin"/>
                </div>
                <h3 class="crypto-name">Litecoin</h3>
            </div>

            {/* <!-- Bitcoin Cash --> */}
            <div class="crypto-card">
                <div class="crypto-icon">
                    <img src={bch} alt="Bitcoin Cash"/>
                </div>
                <h3 class="crypto-name">Bitcoin Cash</h3>
            </div>

            {/* <!-- Ethereum --> */}
            <div class="crypto-card">
                <div class="crypto-icon">
                     <img src={eth} alt="Bitcoin Cash"/>
                </div>
                <h3 class="crypto-name">Ethereum</h3>
            </div>

            {/* <!-- Dogecoin --> */}
            <div class="crypto-card">
                <div class="crypto-icon">
                      <img src={doge} alt="Bitcoin Cash"/>
                </div>
                <h3 class="crypto-name">Dogecoin</h3>
            </div>

            {/* <!-- Dash --> */}
            <div class="crypto-card">
                <div class="crypto-icon">
                     <img src={dash} alt="Bitcoin Cash"/>
                </div>
                <h3 class="crypto-name">Dash</h3>
            </div>

            {/* <!-- USDT ERC20 --> */}
            <div class="crypto-card">
                <div class="crypto-icon">
                     <img src={tcn} alt="Bitcoin Cash"/>
                </div>
                <h3 class="crypto-name">USDT (ERC20)</h3>
            </div>

            {/* <!-- USDT TRC20 --> */}
            <div class="crypto-card">
                <div class="crypto-icon">
                      <img src={usdterc20} alt="Bitcoin Cash"/>
                </div>
                <h3 class="crypto-name">USDT (TRC20)</h3>
            </div>

            {/* <!-- Tron --> */}
            <div class="crypto-card">
                <div class="crypto-icon">
                  <img src={trx} alt="Bitcoin Cash"/>
                </div>
                <h3 class="crypto-name">Tron</h3>
            </div>
        </div>

        {/* <!-- Second Row - 3 Cryptocurrencies --> */}
        <div class="crypto-grid-3">
            {/* <!-- Zano --> */}
            <div class="crypto-card">
                <div class="crypto-icon">
                     <img src={zano} alt="Bitcoin Cash"/>
                </div>
                <h3 class="crypto-name">Zano</h3>
            </div>

            {/* <!-- Dogecoin (Duplicate) --> */}
            <div class="crypto-card">
                <div class="crypto-icon">
                   <img src={doge} alt="Bitcoin Cash"/>
                </div>
                <h3 class="crypto-name">Dogecoin</h3>
            </div>

            {/* <!-- Bitcoin (Duplicate) --> */}
            <div class="crypto-card">
                <div class="crypto-icon">
                     <img src={bch} alt="Bitcoin Cash"/>
                </div>
                <h3 class="crypto-name">Bitcoin</h3>
            </div>
        </div>
        </div>
    </section>


{/* SECTION-7 */}
      <section className="container py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Frequently Asked Questions</h2>
        <div className="faq-underline mx-auto"></div>
      </div>

      {/* FAQ List */}
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div className="faq-item mb-3" key={index}>
            <div
              className="faq-question d-flex justify-content-between align-items-center p-3 bg-light rounded shadow-sm"
              onClick={() => toggleAccordion(index)}
              style={{ cursor: "pointer" }}
            >
              <span className="fw-semibold">{item.question}</span>
              <FaPlus
                className={`faq-icon ${
                  openIndex === index ? "rotate-icon" : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <div className="faq-answer p-3 border-start border-3 border-primary bg-white">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>






 {/* FOOTER */}
 <Footer />
 
 
 
 
 
 
 
 
 
 
 
 </>
  )
}

export default IcoPayment
