import React from "react";
import NavBar from './NavBar'
import paymentooo65 from '../Image/paymentooo65.svg';

import { FaPaintBrush, FaMoneyBillWave, FaWallet, FaEye } from 'react-icons/fa';
import { FaSlidersH, FaCode } from 'react-icons/fa'; 
import {
  FaTools,
  FaStore,
  FaDonate,
  FaVideo,
  FaDumbbell
} from 'react-icons/fa';
import Footer from "./Footer";

const benefits = [
  { title: 'Up to 60%', subtitle: 'Faster Checkout' },
  { title: '100%', subtitle: 'Secure and Anonymous' },
  { title: 'Up to 38%', subtitle: 'Higher Sales' },
  { title: '100%', subtitle: 'Integration Success Ratio' },
];

const features = [
  {
    icon: <FaPaintBrush size={40} color="#00CEC9" />,
    title: 'Button Appearance',
    description:
      'Customize button text, size, background, font, border colors, icon, and shadow type for a tailored look.',
  },
  {
    icon: <FaMoneyBillWave size={40} color="#00CEC9" />,
    title: 'Fiat Pricing',
    description:
      'Set prices in your preferred fiat currency. Customers pay the crypto equivalent of the entered fiat amount.',
  },
  {
    icon: <FaWallet size={40} color="#00CEC9" />,
    title: 'Link a Wallet',
    description:
      'Connect one or multiple CoinRemitter wallets to receive funds and support multiple currencies.',
  },
  {
    icon: <FaEye size={40} color="#00CEC9" />,
    title: 'Button Preview',
    description:
      'See a live preview of your button while configuring it, so you know exactly how it will appear on your site.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Button Configuration',
    description:
      'Under the ‘Configuration’ tab, you have options to add text and set the price. Apart from that, the styling section allows you to set the button size, button background color, border color, text color, and shadow type.',
    icon: <FaSlidersH size={72} color="#808080" />,
  },
  {
    number: '2',
    title: 'Button Settings',
    description:
      'Under the ‘Settings’ tab, you have an option to link wallets. Here, you can add multiple wallets to support multiple currencies. You can also add a callback URL, a success URL, a whitelist domain, a logo, and custom input fields.',
    icon: <FaWallet size={72} color="#808080" />,
  },
  {
    number: '3',
    title: 'Button Integration',
    description:
      'After you click ‘Publish’, there will be ready-to-use code according to your preferences in the button configuration and settings under the ‘integrate’ tab. This code can be embedded into your website\'s source code to integrate the button.',
    icon: <FaCode size={72} color="#808080" />,
  },
];

const categories = [
  { label: 'Service Providers', icon: <FaTools size={28} color="#00CEC9" /> },
  { label: 'Online Stores', icon: <FaStore size={28} color="#00CEC9" /> },
  { label: 'Donation Platforms', icon: <FaDonate size={28} color="#00CEC9" /> },
  { label: 'Content Creators', icon: <FaVideo size={28} color="#00CEC9" /> },
  { label: 'Personal Trainers', icon: <FaDumbbell size={28} color="#00CEC9" /> },
];

const faqs = [
  {
    question: "Is there any fee to use the Payment Button?",
    answer: "No, CoinRemitter's Payment Button is free to use. There are no setup or subscription charges.",
  },
  {
    question: "Can I create more than one button?",
    answer: "Yes, you can create multiple payment buttons for different products, services, or donation campaigns.",
  },
  {
    question: "Can I link multiple wallets to a single button?",
    answer: "Absolutely. You can link multiple CoinRemitter wallets to support various cryptocurrencies in one button.",
  },
  {
    question: "Can I modify the button after publishing?",
    answer: "Yes, you can edit button settings and appearance even after publishing. Changes will reflect instantly.",
  },
  {
    question: "How to check if my payment button is integrated successfully?",
    answer: "You can test the button on your site or use the integration preview panel to verify functionality.",
  },
];

const PaymentButtonWidget = () => {
  return (
    <>
      {/* NAVBAR */}
      <NavBar />

      {/* SECTION-1 */}
      <section>
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-12 col-md-6 col-lg-6 mb-4 mb-md-0 ">
              <h1 className=" fw-bold" style={{ color: 'black' }}>Add a User-Friendly Crypto Payment Button to Your Website</h1>
              <span className="border-bottom border-3 pb-1 d-inline-block" style={{borderColor: '#00CEC9'}}></span>
              <p style={{ color: 'black' }}>
                Accept crypto payments or donations with a simple, customizable button.
                Users can pay or donate directly on your site with predefined amounts.
              </p>

              <a href="/signup">
              <button className="btn btn-lg crypto-btn mt-5 fw-bold" style={{ backgroundColor: '#00CEC9', color: 'white', borderColor: '#00CEC9', fontSize:'1.3rem' }}>
                Create Now
              </button>
              </a>
            </div>

            {/* Right Column */}
            <div className="col-12 col-md-6 col-lg-6 text-center">
              <img
                src={paymentooo65}
                alt="Crypto Payment"
                className="img-fluid"
                style={{ maxHeight: '300px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-2 */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="display-5 fw-bold text-black mb-3">
            <span className="border-bottom border-3 d-inline-block pb-1" style={{borderColor: '#00CEC9'}}>Why Use</span> CoinRemitter's Payment Button
          </h2>
          <p className="lead text-muted mb-5">
            This feature offers more versatility with fewer technical requirements. It is helpful to those who want to accept crypto payments in a fixed amount without coding skills.
          </p>

          <div className="row justify-content-center">
            {benefits.map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3 mb-4 d-flex justify-content-center">
                <div className="position-relative" style={{ width: '260px' }}>
                  {/* Hexagon SVG */}
                  <svg viewBox="0 0 331 280" fill="none" className="w-100" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M83.2857 279.5L1.08036 140L83.2857 0.5H247.714L329.92 140L247.714 279.5H83.2857Z"
                      fill="white"
                      stroke="#D9D9D9"
                    />
                  </svg>

                  {/* Text Overlay */}
                  <div className="position-absolute top-50 start-50 translate-middle text-center px-2">
                    <h3 className="fw-bold fs-3 mb-2" style={{color: '#00CEC9'}}>{item.title}</h3>
                    <p className="text-dark fs-5">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION-3 */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="display-5 fw-bold text-black mb-4">
            Key Features Of CoinRemitter's Payment Button
          </h2>

          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-12 col-md-6 mb-4">
                <div className="d-flex flex-column align-items-center px-3">
                  {feature.icon}
                  <h4 className="mt-3 text-black fw-semibold">{feature.title}</h4>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION-4 */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold text-black mb-5 display-6">
            <span className="border-bottom border-3 pb-1 d-inline-block" style={{borderColor: '#00CEC9'}}>
              3 Easy Steps to Accept
            </span>{' '}
            Crypto Payments With the Payment Button
          </h2>

          <div className="row justify-content-center">
            {steps.map((step, index) => (
              <div key={index} className="col-12 col-sm-6 col-xl-4 mb-4">
                {/* Hexagon Number */}
                <div className="position-relative mb-3">
                  <svg
                    width="96"
                    height="84"
                    viewBox="0 0 96 84"
                    fill="none"
                    className="mx-auto position-relative z-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 42L24 0.430786H72L96 42L72 83.5692H24L0 42Z"
                      fill="#00CEC9"
                    />
                  </svg>
                  <div
                    className="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-3"
                    style={{ zIndex: 2 }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Triangle Pointer */}
                <div
                  className="mx-auto"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: '16px solid transparent',
                    borderRight: '16px solid transparent',
                    borderBottom: '24px solid #C9C9C9',
                  }}
                ></div>

                {/* Content Box */}
                <div className="bg-white p-4 shadow-sm mt-3 mx-auto" style={{ maxWidth: 'calc(100% - 32px)' }}>
                  <div className="mb-3">{step.icon}</div>
                  <h3 className="fw-bold text-black fs-4">{step.title}</h3>
                  <p className="text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a href="/signup">
          <button
            className="btn btn-lg crypto-btn mt-4 fw-bold fw-semibold"
            style={{ backgroundColor: '#00CEC9', color: 'white', borderColor: '#00CEC9', fontSize:'1.3rem' }}
          >
            Learn More
          </button>
          </a>
        </div>
      </section>

      {/* SECTION-5 */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="fw-bold text-black mb-4 display-6">
            <span className="border-bottom border-3 pb-1 d-inline-block" style={{borderColor: '#00CEC9'}}>
              Who Can Benefit
            </span>{' '}
            from the Payment Button?
          </h2>
          <p className="text-black mb-5 fs-5">
            This feature mainly focuses on businesses and NGOs. However, anyone looking for an affordable and reliable solution can use CoinRemitter's Payment Button to accept payment in crypto.
          </p>

          <div className="row justify-content-center">
            {categories.map((item, index) => (
              <div key={index} className="col-6 col-md-4 col-xl-2 mb-4 d-flex flex-column align-items-center">
                {/* Triangle SVG */}
                <div className="position-relative mb-2" style={{ width: '110px', height: '80px' }}>
                  <svg
                    viewBox="0 0 220 140"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M110 0L220 140H0L110 0Z" fill="#d9d9d9" />
                    <path
                      d="M218.971 139.5H1.0293L110 0.808594L218.971 139.5Z"
                      stroke="black"
                      strokeOpacity="0.1"
                    />
                  </svg>
                  <div
                    className="position-absolute top-50 start-50 translate-middle"
                    style={{ zIndex: 2 }}
                  >
                    {item.icon}
                  </div>
                </div>
                <h6 className="text-black fw-semibold fst-italic">{item.label}</h6>
              </div>
            ))}
          </div>
              <a href="/signup">
          <button
            className="btn fw-semibold btn-lg crypto-btn mt-4 fw-bold"
            style={{ backgroundColor: '#00CEC9', color: 'white', borderColor: '#00CEC9', fontSize:'1.3rem' }}
          >
            Sign Up Now
          </button>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default PaymentButtonWidget;