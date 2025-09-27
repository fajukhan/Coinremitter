import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { FaPlus } from 'react-icons/fa';
// ✅ Import your images correctly
import WidgetEditor from '../Image/widget-design-editor.svg';
import WidgetEmbed from '../Image/widget-embed-code.svg';
import Footer from './Footer';
import errorFreeImg from '../Image/error-free-java-code.svg';
import convenientPaymentsImg from '../Image/convenient-payments.svg';
import widgetTemplatesImg from '../Image/multiple-widget-templates.svg';
import walletIntegrationImg from '../Image/wallet-integration.svg';
import widgetCustomizationImg from '../Image/widget-customization.svg';
import { FaThLarge, FaPencilRuler, FaCogs, FaMousePointer } from 'react-icons/fa';
import { FaMobileAlt, FaFeatherAlt, FaHandPointer, FaShieldAlt } from 'react-icons/fa';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

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
  { icon: <FaThLarge size={40} color="#f59e0b" />, title: 'Choose a Layout' },
  { icon: <FaPencilRuler size={40} color="#f59e0b" />, title: 'Customize Widget' },
  { icon: <FaCogs size={40} color="#f59e0b" />, title: 'Update Settings' },
  { icon: <FaMousePointer size={40} color="#f59e0b" />, title: 'Click on Publish' },
];



const features = [
  { icon: <FaMobileAlt size={30} color="green" />, text: 'Mobile-Friendly Design' },
  { icon: <FaFeatherAlt size={30} color="green" />, text: 'Fast and Lightweight' },
  { icon: <FaHandPointer size={30} color="green" />, text: 'Touch-Optimized Interface' },
  { icon: <FaShieldAlt size={30} color="green" />, text: 'Secure and Reliable' },
];








  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


   const items = [
  {
    title: "Fix Products & SaaS Platforms",
    icon: (
      <svg
        className="mx-auto"
        width="48"
        height="48"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M33.7875 0H30.2695V6.6832H33.7875V0Z" fill="#F59E0B" />
          <path d="M26 12H40V20H26V12Z" fill="#F59E0B" />
          <path d="M15 28H45V35H15V28Z" fill="#F59E0B" />
          <path d="M10 45H50V52H10V45Z" fill="#F59E0B" />
        </g>
      </svg>
    ),
  },
  {
    title: "Freelancing & Service Providers",
    icon: (
      <svg
        className="mx-auto"
        width="48"
        height="48"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M60 38.4H0V47.1H22.3L20.9 52.6H17.2V56.1H42.7V52.6H39.1L37.6 47.1H60V38.4Z"
            fill="#F59E0B"
          />
          <path d="M15 20H45V30H15V20Z" fill="#F59E0B" />
        </g>
      </svg>
    ),
  },
  {
    title: "Gaming & Entertainment Platforms",
    icon: (
      <svg
        className="mx-auto"
        width="48"
        height="48"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M20.7 4L21.7 0H10.7L11.7 4H20.7Z"
            fill="#F59E0B"
          />
          <path
            d="M5 20H55V40H5V20Z"
            fill="#F59E0B"
          />
          <circle cx="20" cy="30" r="4" fill="white" />
          <circle cx="40" cy="30" r="4" fill="white" />
        </g>
      </svg>
    ),
  },
  {
    title: "Nonprofits & Donation-Based Organizations",
    icon: (
      <svg
        className="mx-auto"
        width="48"
        height="48"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M3.5 56.5H0V60H8.8V25H3.5V56.5Z"
            fill="#F59E0B"
          />
          <path
            d="M20 15C20 10 25 5 30 5C35 5 40 10 40 15C40 25 30 35 30 35C30 35 20 25 20 15Z"
            fill="#F59E0B"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Startups & Small Businesses",
    icon: (
      <svg
        className="mx-auto"
        width="48"
        height="48"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M1.6 38.6L0.7 40.1L7.3 44.1L0 60L15.9 52.7L19.9 59.3L21.4 58.4C23.9 56.9 25.2 54.6 25.8 52.2L7.8 34.2C5.4 34.8 3.1 36.1 1.6 38.6Z"
            fill="#F59E0B"
          />
          <path d="M30 5L40 25H20L30 5Z" fill="#F59E0B" />
        </g>
      </svg>
    ),
  },
];





  return (
    <>
      {/* NAVBAR */}
      <NavBar />

 {/* SECTION-1 */}
<section className="container py-5" id="section-4">
  <div className="row border border-secondary rounded-4 overflow-hidden">
    {/* Left Column with Right Border */}
    <div className="col-12 col-md-6 p-4 d-flex flex-column justify-content-center border-end border-secondary">
      <h2 className="fw-bold mb-3" style={{ fontSize: '2.2rem', color: '#000' }}>
        Create Pricing Widgets Without Coding To Accept Crypto Payments
      </h2>
      <p className="text-muted fs-5 mb-4">
        Showcase pricing plans on your website with an attractive and professional widget,
        allowing customers to pay with cryptocurrency directly for their preferred plans.
      </p>
      <button
        className="btn fw-bold px-4 py-3 crypto-btn"
        style={{
          backgroundColor: '#f59e0b',
          color: '#000',
          borderRadius: '12px',
          fontSize: '1.1rem',
          width: 'fit-content',
        }}
      >
        CREATE NOW
      </button>
    </div>

    {/* Right Column: Auto Image Slider */}
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
      {/* First Row */}
      <div className="row mb-4">
        {cardData.slice(0, 2).map((card, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card h-100 text-white bg-dark border-0">
              <img src={card.img} className="card-img-top p-4" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#f59e0b' }}>{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Heading Only */}
        <div className="col-md-4 d-flex align-items-center justify-content-center text-center">
          <h2 className="fw-bold" style={{ color: '#f59e0b' }}>
            Boost Sales & Expand Business
          </h2>
        </div>
      </div>

      {/* Second Row */}
      <div className="row">
        {cardData.slice(2).map((card, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card h-100 text-white bg-dark border-0">
              <img src={card.img} className="card-img-top p-4" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#f59e0b' }}>{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>



{/* SECTION-3 */}
 <section className="container py-5" id="section-8">
      {/* Heading */}
      <h1 className="fw-bold text-center mb-4" style={{ color: '#000' }}>
        Accept Crypto Payments For Different Pricing Plans On Your Website In 4 Easy Steps
      </h1>

      {/* Divider Row */}
      <div className="row align-items-center mb-4">
        <div className="col-12">
          <hr className="text-secondary" />
        </div>
        {steps.map((step, index) => (
          <div className="col-3 text-center fw-bold" key={index}>
            {index + 1}
          </div>
        ))}
      </div>

      {/* Icon Cards Row */}
      <div className="row text-center">
        {steps.map((step, index) => (
          <div className="col-12 col-md-3 mb-4" key={index}>
            <div className="card h-100 border-0 bg-light">
              <div className="card-body">
                <div className="mb-3">{step.icon}</div>
                <h5 className="card-title fw-semibold">{step.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-4 ">
        <button
          className="btn fw-bold px-4 py-3 crypto-btn"
          style={{
            backgroundColor: '#f59e0b',
            color: '#000',
            borderRadius: '12px',
            fontSize: '1.1rem',
          }}
        >
          LEARN MORE
        </button>
      </div>
    </section>



    {/* SECTION-4 */}
     <section className="container py-5" id="section-9">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h1 className="fw-bold mb-3" style={{ color: '#000' }}>
            Made For Mobile Devices
          </h1>
          <p className="text-muted fs-5 mb-4">
            The Pricing Plan Widget is optimized for mobile devices to ensure a smooth and responsive experience for customers using smartphones.
          </p>

          {/* Feature Icons */}
          <div className="row">
            {features.map((feature, index) => (
              <div className="col-6 d-flex align-items-center mb-3" key={index}>
                <div className="me-3">{feature.icon}</div>
                <span className="fw-semibold">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
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


{/* SECTION-7 */}
<section className="py-5 text-center">
  <Container>
    <h2 className="fw-bold text-black mb-5 display-5">
      Who Can Benefit from the{" "}
      <span className="border-bottom border-warning">Pricing Widget?</span>
    </h2>
    <Row className="justify-content-center mt-4">
      {items.map((item, i) => (
        <Col
          key={i}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="d-flex justify-content-center mb-4"
        >
          <div className="position-relative" style={{ width: 200, height: 230 }}>
            {/* Hexagon Border */}
            <svg 
              className="w-100 h-100" 
              viewBox="0 0 200 230"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient
                  id={`gradientStroke${i}`}
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                >
                  <stop
                    offset="50%"
                    stopColor="#d4d4d4"
                    stopOpacity="1"
                  ></stop>
                  <stop
                    offset="50%"
                    stopColor="#d4d4d4"
                    stopOpacity="0"
                  ></stop>
                </linearGradient>
              </defs>
              <polygon
                points="100,10 190,65 190,165 100,220 10,165 10,65"
                fill="none"
                stroke={`url(#gradientStroke${i})`}
                strokeWidth="2"
                strokeDasharray="8 4"
              />
            </svg>
            {/* Content */}
            <div
              className="position-absolute top-50 start-50 translate-middle text-center"
              style={{ width: "80%" }}
            >
              {item.icon}
              <h5 className="fw-medium fst-italic mt-2" style={{ fontSize: "0.9rem" }}>
                {item.title}
              </h5>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>




    {/* SECTION-6 */}
    <section className="container py-5" id="faq-section">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Pricing Widget FAQs</h2>
        <div className="faq-underline mx-auto"></div>
      </div>

      {/* FAQ List */}
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div className="faq-item border-bottom py-3" key={index}>
            <div
              className="faq-question d-flex justify-content-between align-items-center"
              onClick={() => toggleAccordion(index)}
              style={{ cursor: 'pointer' }}
            >
              <span className="fw-semibold">{item.question}</span>
              <FaPlus
                className={`faq-icon transition ${openIndex === index ? 'rotate-icon' : ''}`}
              />
            </div>
            {openIndex === index && (
              <div className="faq-answer mt-2 text-muted">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>






{/* FOOTER */}
<Footer />

    </>
  );
};

export default PricingWidget;
