import React, { useState } from 'react';
import NavBar from './NavBar';
import { FaClock, FaFileInvoiceDollar, FaQrcode, FaMoneyCheckAlt } from 'react-icons/fa';
import { BsReceipt, BsCoin, BsBuilding, BsPatchCheckFill } from "react-icons/bs";
import { FaShoppingCart, FaLaptopCode, FaSuitcaseRolling, FaBullhorn } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

import invoieef98b9 from '../Image/invoieef98b9.svg'; 
import {
  BsFileText,
  BsShare,
  BsClipboardCheck,
  BsWallet2,
} from "react-icons/bs";

import { FaPlus } from 'react-icons/fa';
import Footer from './Footer';


const InvoiceServices = () => {



    const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    {/* Left Column: Text Content */}
    <div className="col-12 col-md-6 mb-4 mb-md-0">
      <h2 className="fw-bold mb-3" style={{ color: '#000', fontSize: '2.5rem' }}>
        Invoice Services For Transparent & Secure Cryptocurrency Payments
      </h2>
      <hr style={{ borderTop: '3px solid #e48f07', width: '60px' }} />
      <p className="text-muted fs-5 mt-3">
        CoinRemitter invoicing provides a secure, fast, and flexible solution to accept crypto payments in multiple currencies with a few stats, simplify your billing, and improve cash flow.
      </p>
      <button
        className="btn mt-4 px-4 py-2 fw-bold crypto-btn"
        style={{
          backgroundColor: '#e48f07',
          color: '#000',
          borderRadius: '12px',
          fontSize: '1.1rem',
        }}
      >
        CREATE NOW
      </button>
    </div>

    {/* Right Column: Image */}
    <div className="col-12 col-md-6 text-center">
      <img
        src={invoieef98b9}
        alt="Invoice Services"
        className="img-fluid"
        style={{ maxHeight: '400px' }}
      />
    </div>
  </div>
</section>



{/* SECTION-2 */}

<section className="container py-5" id="invoice-features">
  {/* Heading */}
  <div className="text-center mb-5">
    <h2 className="fw-bold" style={{ fontSize: '2.5rem', color: '#000' }}>
      CoinRemitter Invoice Features
    </h2>
  </div>

  {/* First Row: Two Cards */}
  <div className="row g-4 mb-4">
    {/* Card 1: Invoice Status */}
    <div className="col-12 col-md-6">
      <div className="card h-100 shadow-sm border-0 rounded-4 p-4">
        <div className="d-flex align-items-center mb-3">
          <FaClock style={{ fontSize: '2rem', color: '#198754' }} className="me-3" />
          <h5 className="fw-bold mb-0">Invoice Status</h5>
        </div>
        <p className="text-muted">
          You can set the validity of your invoice, and it will display Active or Expired accordingly. So customers can view the status of the invoice and proceed accordingly.
        </p>
      </div>
    </div>

    {/* Card 2: Payment Details */}
    <div className="col-12 col-md-6">
      <div className="card h-100 shadow-sm border-0 rounded-4 p-4">
        <div className="d-flex align-items-center mb-3">
          <FaFileInvoiceDollar style={{ fontSize: '2rem', color: '#198754' }} className="me-3" />
          <h5 className="fw-bold mb-0">Payment Details</h5>
        </div>
        <p className="text-muted">
          You can display clear payment details, including amount, order details, and cryptocurrency, to ensure clear communication between you and customers.
        </p>
      </div>
    </div>
  </div>

  {/* Second Row: Two Cards */}
  <div className="row g-4">
    {/* Card 3: QR Code */}
    <div className="col-12 col-md-6">
      <div className="card h-100 shadow-sm border-0 rounded-4 p-4">
        <div className="d-flex align-items-center mb-3">
          <FaQrcode style={{ fontSize: '2rem', color: '#198754' }} className="me-3" />
          <h5 className="fw-bold mb-0">QR Code</h5>
        </div>
        <p className="text-muted">
          The system automatically generates a QR code when creating an invoice. Customers can scan it to pay for your products or services.
        </p>
      </div>
    </div>

    {/* Card 4: Payment Status */}
    <div className="col-12 col-md-6">
      <div className="card h-100 shadow-sm border-0 rounded-4 p-4">
        <div className="d-flex align-items-center mb-3">
          <FaMoneyCheckAlt style={{ fontSize: '2rem', color: '#198754' }} className="me-3" />
          <h5 className="fw-bold mb-0">Payment Status</h5>
        </div>
        <p className="text-muted">
          Active invoices can display pending, underpaid, paid, or overpaid depending on the payment status. Expired invoices cannot reflect the payment status.
        </p>
      </div>
    </div>
  </div>
</section>




{/* <!-- SECTION-3 --> */}
<section className="container py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Why CoinRemitter Invoicing</h2>
        <div
          className="underline mx-auto"
          style={{ width: "80px", height: "3px", background: "#e48f07" }}
        ></div>
      </div>

      {/* Row of Cards */}
      <div className="row g-4 text-center">
        {/* Card 1 */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card border-0 shadow-sm h-100 p-4">
            <div className="icon mb-3" style={{ color: "#e48f07", fontSize: "3rem" }}>
              <BsReceipt />
            </div>
            <h3 className="fw-bold">100K+</h3>
            <p className="text-muted mb-0">Invoices Generated</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card border-0 shadow-sm h-100 p-4">
            <div className="icon mb-3" style={{ color: "#e48f07", fontSize: "3rem" }}>
              <BsCoin />
            </div>
            <h3 className="fw-bold">10+</h3>
            <p className="text-muted mb-0">Cryptocurrencies Supported</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card border-0 shadow-sm h-100 p-4">
            <div className="icon mb-3" style={{ color: "#e48f07", fontSize: "3rem" }}>
              <BsBuilding />
            </div>
            <h3 className="fw-bold">20+</h3>
            <p className="text-muted mb-0">Industries Associated</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card border-0 shadow-sm h-100 p-4">
            <div className="icon mb-3" style={{ color: "#e48f07", fontSize: "3rem" }}>
              <BsPatchCheckFill />
            </div>
            <h3 className="fw-bold">99%</h3>
            <p className="text-muted mb-0">Successful Payments</p>
          </div>
        </div>
      </div>
    </section>

   {/* <!-- SECTION-4 --> */}
    <section className="container py-5">
      <div className="row align-items-center g-5">
        {/* Left Column */}
        <div className="col-12 col-lg-6">
          <div className="d-flex flex-column gap-3">
            {/* Step 1 */}
            <div className="d-flex align-items-start p-3 border rounded bg-white shadow-sm">
              <div
                className="me-3 d-flex align-items-center justify-content-center fw-bold text-white"
                style={{
                  width: "120px",
                  height: "60px",
                  background: "#28a745",
                  borderRadius: "8px",
                }}
              >
                1
              </div>
              <div className="flex-grow-1">
                <h6 className="fw-bold mb-1">Generate an Invoice</h6>
                <p className="text-muted small mb-0">
                  Go to 'Invoices' and click 'New' to generate an invoice. Select
                  a wallet, enter pricing, and submit other optional details to
                  create your invoice.
                </p>
              </div>
              <div className="text-muted fs-1">
                <BsFileText />
              </div>
            </div>

            {/* Step 2 */}
            <div className="d-flex align-items-start p-3 border rounded bg-white shadow-sm">
              <div
                className="me-3 d-flex align-items-center justify-content-center fw-bold text-white"
                style={{
                    width: "120px",
                  height: "60px",
                  background: "#28a745",
                  borderRadius: "8px",
                }}
              >
                2
              </div>
              <div className="flex-grow-1">
                <h6 className="fw-bold mb-1">Request the Payment</h6>
                <p className="text-muted small mb-0">
                  After creating an invoice, click 'Share Invoice' to obtain a
                  shareable link. Customers can visit the URL to view the invoice
                  and pay with crypto.
                </p>
              </div>
              <div className="text-muted fs-1">
                <BsShare />
              </div>
            </div>

            {/* Step 3 */}
            <div className="d-flex align-items-start p-3 border rounded bg-white shadow-sm">
              <div
                className="me-3 d-flex align-items-center justify-content-center fw-bold text-white"
                style={{
                   width: "100px",
                  height: "60px",
                  background: "#28a745",
                  borderRadius: "8px",
                }}
              >
                3
              </div>
              <div className="flex-grow-1">
                <h6 className="fw-bold mb-1">Track the Payment Status</h6>
                <p className="text-muted small mb-0">
                  View whether the amount is paid, underpaid, or overpaid to
                  maintain transparency between you and your customers.
                </p>
              </div>
              <div className="text-muted fs-1">
                <BsClipboardCheck />
              </div>
            </div>

            {/* Step 4 */}
            <div className="d-flex align-items-start p-3 border rounded bg-white shadow-sm">
              <div
                className="me-3 d-flex align-items-center justify-content-center fw-bold text-white"
                style={{
                   width: "120px",
                  height: "60px",
                  background: "#28a745",
                  borderRadius: "8px",
                }}
              >
                4
              </div>
              <div className="flex-grow-1">
                <h6 className="fw-bold mb-1">Receive Funds in Your Wallet</h6>
                <p className="text-muted small mb-0">
                  Payments will be deposited into the wallet added to the invoice.
                  You can transfer your funds to an external wallet to get control
                  over them.
                </p>
              </div>
              <div className="text-muted fs-1">
                <BsWallet2 />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-12 col-lg-6">
          <h1 className="fw-bold mb-3">
            4 Easy Steps To Accept <br /> Crypto Payments With Invoices
          </h1>
          <div
            className="mb-4"
            style={{ width: "80px", height: "3px", background: "#e48f07" }}
          ></div>
          <p className="text-muted mb-4">
            Accepting cryptocurrency payments through an invoice just takes a few
            simple steps. Anyone c  an create an invoice on CoinRemitter to request
            payments.
          </p>
          <button
            className="btn fw-bold text-dark px-4 py-2 crypto-btn"
            style={{ background: "#e48f07", borderRadius: "8px" }}
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
   

   {/* <!-- SECTION-5 --> */}
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-12 col-lg-6 mb-5 mb-lg-0">
          <h1 className="fw-bold mb-3" style={{ fontSize: "2.2rem" }}>
            Businesses That Can Use <br /> CoinRemitter’s Invoice Services
          </h1>
          <div
            className="mb-3"
            style={{ width: "80px", height: "3px", background: "#e48f07" }}
          ></div>
          <p className="text-muted mb-4">
            CoinRemitter’s Invoice is a helpful feature for many industries.
            However, we’re listing the top five industries that can benefit the
            most.
          </p>
          <button
            className="btn fw-bold px-4 py-3 crypto-btn"
            style={{
              background: "#e48f07",
              color: "#000",
              borderRadius: "6px",
            }}
          >
            SIGN UP NOW
          </button>
        </div>

        {/* Right Column */}
        <div className="col-12 col-lg-6">
          <div className="row g-4 justify-content-center">
            {/* Row 1 - 3 Columns */}
            <div className="col-12 col-md-4">
              <div className="hex-card text-center p-4 h-100">
                <FaShoppingCart size={40} color="#e48f07" />
                <p className="fw-semibold mt-2">E-commerce & Online Retail</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="hex-card text-center p-4 h-100">
                <MdOutlineWork size={40} color="#e48f07" />
                <p className="fw-semibold mt-2">
                  Freelance & Creative Services
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="hex-card text-center p-4 h-100">
                <FaLaptopCode size={40} color="#e48f07" />
                <p className="fw-semibold mt-2">IT & Software Development</p>
              </div>
            </div>

            {/* Row 2 - 2 Columns */}
            <div className="col-12 col-md-6">
              <div className="hex-card text-center p-4 h-100">
                <FaSuitcaseRolling size={40} color="#e48f07" />
                <p className="fw-semibold mt-2">Travel and Hospitality</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="hex-card text-center p-4 h-100">
                <FaBullhorn size={40} color="#e48f07" />
                <p className="fw-semibold mt-2">
                  Digital Marketing & Advertising
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for Hex Shape */}
      <style>{`
        .hex-card {
          background: #f1efefff;
          clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%);
          transition: all 0.3s ease;
        }
        .hex-card:hover {
          background: #fff7e6;
          transform: translateY(-5px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.1);
        }
      `}</style>
    </section>
   



    {/* FAQ Section */}
      <section className="faq-section py-5">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-5">
            <h1 className="section-title fw-bold">Invoice Services FAQs</h1>
            <div className="title-underline mx-auto"></div>
          </div>

          {/* FAQ Accordion */}
          <div className="faq-accordion">
            {faqs.map((item, index) => (
              <div className="faq-item" key={index}>
                <div 
                  className="faq-question d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.question}</span>
                  <FaPlus 
                    className={`faq-icon ${openIndex === index ? 'rotate' : ''}`}
                  />
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



    <Footer />
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   </>
  )
}

export default InvoiceServices
