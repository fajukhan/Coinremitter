import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { FaPlus, FaThLarge, FaPencilRuler, FaCogs, FaMousePointer, FaMobileAlt, FaFeatherAlt, FaHandPointer, FaShieldAlt } from 'react-icons/fa';
import WidgetEditor from '../Image/widget-design-editor.svg';
import WidgetEmbed from '../Image/widget-embed-code.svg';
import Footer from './Footer';
import errorFreeImg from '../Image/error-free-java-code.svg';
import convenientPaymentsImg from '../Image/convenient-payments.svg';
import widgetTemplatesImg from '../Image/multiple-widget-templates.svg';
import walletIntegrationImg from '../Image/wallet-integration.svg';
import widgetCustomizationImg from '../Image/widget-customization.svg';
import widgetMobileImg from '../Image/widget-mobile-device.png';
import { Container, Row, Col } from "react-bootstrap";

const faqs = [
  {
    question: "For what type of businesses is CoinRemitter’s pricing widget ideal?",
    answer: "It’s ideal for SaaS platforms, freelancers, gaming sites, nonprofits, and startups looking to accept crypto payments seamlessly."
  },
  {
    question: "Will the Pricing Widget slow down my website?",
    answer: "No. The widget is lightweight and optimized for performance, ensuring your site remains fast and responsive."
  },
  {
    question: "Can I display multiple cryptocurrency payment options in the same widget?",
    answer: "Yes. You can configure the widget to support multiple crypto payment options for customer flexibility."
  },
  {
    question: "Does CoinRemitter charge any fees for using the widget creation tool?",
    answer: "No. The widget creation tool is free to use. Transaction fees may apply depending on your wallet setup."
  },
  {
    question: "Can I customize the widget after publishing it?",
    answer: "Absolutely. You can update layout, colors, and payment settings anytime—even after publishing."
  },
  {
    question: "Can I accept fiat payments with CoinRemitter’s pricing widget?",
    answer: "Currently, the widget is designed for cryptocurrency payments only. Fiat support may be added in future updates."
  },
  {
    question: "What are the processing fees on transactions processed through widgets?",
    answer: "Processing fees depend on the wallet and network used. CoinRemitter charges minimal fees compared to other platforms."
  }
];

const PricingWidget = () => {
  const images = [WidgetEditor, WidgetEmbed];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const cardData = [
    {
      title: 'Error-Free JavaScript Code',
      text: 'Integrate easily with tailored JS code for your pricing model.',
      img: errorFreeImg,
    },
    {
      title: 'Convenient Payments',
      text: 'Accept crypto payments quickly and easily.',
      img: convenientPaymentsImg,
    },
    {
      title: 'Multiple Widget Templates',
      text: 'Choose from various pricing templates to suit your business.',
      img: widgetTemplatesImg,
    },
    {
      title: 'Easy Wallet Integration',
      text: 'Connect your crypto wallet seamlessly for direct payments.',
      img: walletIntegrationImg,
    },
    {
      title: 'Effortless Customization',
      text: 'Modify colors, text, and layout to match your brand.',
      img: widgetCustomizationImg,
    },
  ];

  const steps = [
    { icon: <FaThLarge size={40} color="#00CEC9" />, title: 'Choose a Layout' },
    { icon: <FaPencilRuler size={40} color="#00CEC9" />, title: 'Customize Widget' },
    { icon: <FaCogs size={40} color="#00CEC9" />, title: 'Update Settings' },
    { icon: <FaMousePointer size={40} color="#00CEC9" />, title: 'Click on Publish' },
  ];

  const features = [
    { icon: <FaMobileAlt size={30} color="#00CEC9" />, text: 'Mobile-Friendly Design' },
    { icon: <FaFeatherAlt size={30} color="#00CEC9" />, text: 'Fast and Lightweight' },
    { icon: <FaHandPointer size={30} color="#00CEC9" />, text: 'Touch-Optimized Interface' },
    { icon: <FaShieldAlt size={30} color="#00CEC9" />, text: 'Secure and Reliable' },
  ];

  const items = [
    { title: "Fix Products & SaaS Platforms" },
    { title: "Freelancing & Service Providers" },
    { title: "Gaming & Entertainment Platforms" },
    { title: "Nonprofits & Donation-Based Organizations" },
    { title: "Startups & Small Businesses" },
  ];

  return (
    <>
      <NavBar />

      {/* SECTION-1 */}
      <section className="container py-5" id="section-4">
        <div className="row border border-2 border-secondary rounded-4 overflow-hidden">
          <div className="col-12 col-md-6 p-4 d-flex flex-column justify-content-center border-end border-secondary">
            <h2 className="fw-bold mb-3" style={{ fontSize: '2.2rem', color: '#000' }}>
              Create Pricing Widgets Without Coding To Accept Crypto Payments
            </h2>
            <p className="text-muted fs-5 mb-4">
              Showcase pricing plans on your website with an attractive and professional widget,
              allowing customers to pay with cryptocurrency directly for their preferred plans.
            </p>
            <a href="/signup">
            <button
              className="btn btn-lg crypto-btn fw-bold px-4 py-3"
              style={{
                backgroundColor: '#00CEC9',
                color: '#fff',
                borderRadius: '12px',
                fontSize: '1.3rem',
                width: 'fit-content',
              }}
            >
              CREATE NOW
            </button>
            </a>
          </div>

          <div className="col-12 col-md-6 p-4 text-center">
            <img
              src={images[currentIndex]}
              alt="Widget Preview"
              className="img-fluid"
              style={{ maxHeight: '400px', transition: 'opacity 0.5s ease-in-out' }}
            />
          </div>
        </div>
      </section>

      {/* SECTION-2 */}
      <section className="container py-5" id="section-7">
        <div className="row mb-4">
          {cardData.slice(0, 2).map((card, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card h-100 text-white bg-dark border-0">
                <img src={card.img} className="card-img-top p-4" alt={card.title} />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#00CEC9' }}>{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="col-md-4 d-flex align-items-center justify-content-center text-center">
            <h2 className="fw-bold" style={{ color: '#00CEC9' }}>
              Boost Sales & Expand Business
            </h2>
          </div>
        </div>

        <div className="row">
          {cardData.slice(2).map((card, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card h-100 text-white bg-dark border-0">
                <img src={card.img} className="card-img-top p-4" alt={card.title} />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#00CEC9' }}>{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION-3 */}
      <section className="container py-5" id="section-8">
        <h1 className="fw-bold text-center mb-4" style={{ color: '#000' }}>
          Accept Crypto Payments For Different Pricing Plans On Your Website In 4 Easy Steps
        </h1>
        <div className="row text-center">
          {steps.map((step, index) => (
            <div className="col-12 col-md-3 mb-4" key={index}>
              <div className="card h-100 border-0 bg-light shadow-sm">
                <div className="card-body">
                  <div className="mb-3">{step.icon}</div>
                  <h5 className="card-title fw-semibold">{step.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION-4 */}
      <section className="container py-5" id="section-9">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h1 className="fw-bold mb-3" style={{ color: '#000' }}>
              Made For Mobile Devices
            </h1>
            <p className="text-muted fs-5 mb-4">
              The Pricing Plan Widget is optimized for mobile devices to ensure a smooth and responsive experience for customers using smartphones.
            </p>

            <div className="row">
              {features.map((feature, index) => (
                <div className="col-6 d-flex align-items-center mb-3" key={index}>
                  <div className="me-3">{feature.icon}</div>
                  <span className="fw-semibold">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-md-6 text-center">
            <img
              src={widgetMobileImg}
              alt="Mobile Widget Preview"
              className="img-fluid"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      </section>

      {/* SECTION-5 */}
      <section className="py-5 text-center">
        <Container>
          <h2 className="fw-bold text-black mb-5 display-5">
            Who Can Benefit from the{" "}
            <span className="border-bottom border-3" style={{ borderColor: '#00CEC9' }}>
              Pricing Widget?
            </span>
          </h2>
          <Row className="justify-content-center mt-4">
            {items.map((item, i) => (
              <Col key={i} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
                <div className="position-relative" style={{ width: 200, height: 230 }}>
                  <svg className="w-100 h-100" viewBox="0 0 200 230" preserveAspectRatio="xMidYMid meet">
                    <polygon
                      points="100,10 190,65 190,165 100,220 10,165 10,65"
                      fill="none"
                      stroke="#00CEC9"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                    />
                  </svg>
                  <div className="position-absolute top-50 start-50 translate-middle text-center" style={{ width: "80%" }}>
                    <h5 className="fw-medium fst-italic mt-2" style={{ fontSize: "0.9rem", color: '#00CEC9' }}>
                      {item.title}
                    </h5>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FAQ SECTION */}
      <section className="container py-5" id="faq-section">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#000' }}>Pricing Widget FAQs</h2>
          <div className="mx-auto" style={{ width: "80px", height: "3px", background: "#00CEC9" }}></div>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div className="faq-item border-bottom py-3" key={index}>
              <div
                className="faq-question d-flex justify-content-between align-items-center"
                onClick={() => toggleAccordion(index)}
                style={{ cursor: 'pointer', color: '#000' }}
              >
                <span className="fw-semibold">{item.question}</span>
                <FaPlus className={`faq-icon ${openIndex === index ? 'rotate' : ''}`} />
              </div>
              {openIndex === index && (
                <div className="faq-answer mt-2 text-muted">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PricingWidget;
