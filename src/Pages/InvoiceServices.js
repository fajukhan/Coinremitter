import React, { useState } from 'react';
import NavBar from './NavBar';
import { FaClock, FaFileInvoiceDollar, FaQrcode, FaMoneyCheckAlt, FaPlus } from 'react-icons/fa';
import { BsReceipt, BsCoin, BsBuilding, BsPatchCheckFill } from "react-icons/bs";
import invoieef98b9 from '../Image/invoieef98b9.svg';
import Footer from './Footer';

const InvoiceServices = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    {
      question: "Can I send invoices to customers in different countries?",
      answer: "Yes, you can send invoices to customers in different countries. Our platform supports multiple currencies and international payment methods to facilitate cross-border transactions."
    },
    {
      question: "Which cryptocurrencies can I accept through invoices?",
      answer: "We support a wide range of cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Bitcoin Cash (BCH), and many ERC-20 tokens. You can select which cryptocurrencies to accept in your invoice settings."
    },
    {
      question: "Can invoices include my company branding?",
      answer: "Absolutely! You can customize your invoices with your company logo, brand colors, and contact information to maintain a professional appearance and strengthen your brand identity."
    },
    {
      question: "Are there any charges to use CoinRemitter's invoice?",
      answer: "Creating and sending invoices is free. We only charge a small transaction fee when payments are successfully processed through your invoices. There are no monthly subscriptions or hidden fees."
    },
    {
      question: "What happens if someone makes a payment to an expired invoice?",
      answer: "Payments made to expired invoices are automatically refunded to the sender. We recommend creating new invoices with updated expiration dates to ensure smooth transactions."
    },
    {
      question: "Are there transaction fees for invoice payments?",
      answer: "Yes, we charge a small transaction fee for each successful payment processed through our platform. The fee varies depending on the cryptocurrency used and is clearly displayed before payment confirmation."
    }
  ];

  return (
    <>
      {/* NAVBAR */}
      <NavBar />

      {/* SECTION-1 */}
      <section className="container py-5" id="invoice-services">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-3" style={{ color: '#000', fontSize: '2.5rem' }}>
              Invoice Services For Transparent & Secure Cryptocurrency Payments
            </h2>
            <hr style={{ borderTop: '3px solid #00CEC9', width: '60px' }} />
            <p className="text-muted fs-5 mt-3">
              CoinRemitter invoicing provides a secure, fast, and flexible solution to accept crypto payments in multiple currencies, simplify your billing, and improve cash flow.
            </p>

            <a href="/signup">
            <button
              className="btn btn-lg crypto-btn mt-4 px-4 py-2 fw-bold"
              style={{
                backgroundColor: '#00CEC9',
                color: '#fff',
                borderRadius: '12px',
                fontSize: '1.3rem',
              }}
            >
              CREATE NOW
            </button>
            </a>
          </div>

          <div className="col-12 col-md-6 text-center">
            <img src={invoieef98b9} alt="Invoice Services" className="img-fluid" style={{ maxHeight: '400px' }} />
          </div>
        </div>
      </section>

      {/* SECTION-2 */}
      <section className="container py-5" id="invoice-features">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: '2.5rem', color: '#000' }}>
            CoinRemitter Invoice Features
          </h2>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-12 col-md-6">
            <div className="card h-100 shadow-sm border-0 rounded-4 p-4" style={{ borderLeft: '5px solid #00CEC9' }}>
              <div className="d-flex align-items-center mb-3">
                <FaClock style={{ fontSize: '2rem', color: '#00CEC9' }} className="me-3" />
                <h5 className="fw-bold mb-0">Invoice Status</h5>
              </div>
              <p className="text-muted">
                You can set the validity of your invoice, and it will display Active or Expired accordingly.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card h-100 shadow-sm border-0 rounded-4 p-4" style={{ borderLeft: '5px solid #00CEC9' }}>
              <div className="d-flex align-items-center mb-3">
                <FaFileInvoiceDollar style={{ fontSize: '2rem', color: '#00CEC9' }} className="me-3" />
                <h5 className="fw-bold mb-0">Payment Details</h5>
              </div>
              <p className="text-muted">
                Display clear payment details, including amount, order info, and cryptocurrency, to ensure clarity.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="card h-100 shadow-sm border-0 rounded-4 p-4" style={{ borderLeft: '5px solid #00CEC9' }}>
              <div className="d-flex align-items-center mb-3">
                <FaQrcode style={{ fontSize: '2rem', color: '#00CEC9' }} className="me-3" />
                <h5 className="fw-bold mb-0">QR Code</h5>
              </div>
              <p className="text-muted">
                Automatically generates a QR code customers can scan to pay for products or services.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card h-100 shadow-sm border-0 rounded-4 p-4" style={{ borderLeft: '5px solid #00CEC9' }}>
              <div className="d-flex align-items-center mb-3">
                <FaMoneyCheckAlt style={{ fontSize: '2rem', color: '#00CEC9' }} className="me-3" />
                <h5 className="fw-bold mb-0">Payment Status</h5>
              </div>
              <p className="text-muted">
                Displays pending, underpaid, paid, or overpaid status depending on payment confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-3 */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why CoinRemitter Invoicing</h2>
          <div className="mx-auto" style={{ width: "80px", height: "3px", background: "#00CEC9" }}></div>
        </div>

        <div className="row g-4 text-center">
          {[{ icon: <BsReceipt />, title: '100K+', subtitle: 'Invoices Generated' },
            { icon: <BsCoin />, title: '10+', subtitle: 'Cryptocurrencies Supported' },
            { icon: <BsBuilding />, title: '20+', subtitle: 'Industries Associated' },
            { icon: <BsPatchCheckFill />, title: '99%', subtitle: 'Successful Payments' }].map((item, i) => (
            <div className="col-12 col-md-6 col-lg-3" key={i}>
              <div className="card border-0 shadow-sm h-100 p-4">
                <div className="icon mb-3" style={{ color: "#00CEC9", fontSize: "3rem" }}>
                  {item.icon}
                </div>
                <h3 className="fw-bold">{item.title}</h3>
                <p className="text-muted mb-0">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="section-title fw-bold">Invoice Services FAQs</h1>
            <div className="mx-auto" style={{ width: "80px", height: "3px", background: "#00CEC9" }}></div>
          </div>

          <div className="faq-accordion">
            {faqs.map((item, index) => (
              <div className="faq-item border-bottom py-3" key={index}>
                <div
                  className="faq-question d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(index)}
                  style={{ cursor: 'pointer', color: '#000' }}
                >
                  <span className="fw-semibold">{item.question}</span>
                  <FaPlus
                    className={`faq-icon ${openIndex === index ? 'rotate' : ''}`}
                    style={{ transition: 'transform 0.3s ease' }}
                  />
                </div>
                {openIndex === index && (
                  <div className="faq-answer mt-2">
                    <p className="text-muted">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default InvoiceServices;
