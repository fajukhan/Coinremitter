import React, { useState } from "react";
import NavBar from './NavBar';

import btc from "../Image/btc.png";
import eth from "../Image/eth.png";
import usdterc20 from "../Image/usdterc20.png";
import bnb from "../Image/tcn.png";
import doge from "../Image/doge.png";
import trx from "../Image/trx.png";
import bch from "../Image/bch.png";
import ltc from "../Image/ltc.png";
import dash from "../Image/dash.png";
import zano from "../Image/zano.png";
import tcn from "../Image/tcn.png";
import { FaPlus } from "react-icons/fa";

import { FaCoins, FaQrcode, FaShieldAlt, FaBolt, FaArrowRight } from 'react-icons/fa';
import { FaBitcoin } from 'react-icons/fa6';
import { FaUniversity, FaDollarSign, FaArrowDown } from 'react-icons/fa';
import Footer from "./Footer";

const Topcrypto = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do I need programming skills to use Coinremitter's plugins?",
      answer: "No, CoinRemitter's plugins are ready-to-use and can be integrated without programming skills.",
    },
    {
      question: "Is there any cost for integrating CoinRemitter's plugins?",
      answer: "No, integration is completely free of cost.",
    },
    {
      question: "Are CoinRemitter's plugins open source?",
      answer: "Yes, they are open-source and customizable according to your needs.",
    },
    {
      question: "Can I accept crypto payments in multiple currencies with CoinRemitter's plugins?",
      answer: "Yes, CoinRemitter plugins support multiple cryptocurrencies for payments.",
    },
  ];

  // Cryptocurrency data
  const cryptoData = [
  { icon: btc, name: "BTC", full: "Bitcoin", price: "124396.00", change: "0.32%", volume: "66786257880.00", market: "2474971996400.00", up: true },
  { icon: eth, name: "ETH", full: "Ethereum", price: "4692.30", change: "3.35%", volume: "38769767040.00", market: "565241113856.00", up: true },
  { icon: usdterc20, name: "USDT", full: "Tether", price: "1.00", change: "0.01%", volume: "123795674063.00", market: "177492742964.00", up: true },
  { icon: bnb, name: "BNB", full: "BNB", price: "1226.29", change: "3.57%", volume: "4047050569.00", market: "170305041282.00", up: true },
  { icon: doge, name: "DOGE", full: "Dogecoin", price: "0.27", change: "4.57%", volume: "3791128465.00", market: "40062605044.00", up: true },
  { icon: trx, name: "TRX", full: "TRON", price: "0.35", change: "1.05%", volume: "728820462.00", market: "32716175840.00", up: true },
  { icon: bch, name: "BCH", full: "Bitcoin Cash", price: "594.41", change: "-0.88%", volume: "198836817.00", market: "11846169681.00", up: false },
  { icon: ltc, name: "LTC", full: "Litecoin", price: "118.27", change: "-1.98%", volume: "669191073.00", market: "9022518240.00", up: false },
  { icon: dash, name: "DASH", full: "Dash", price: "33.32", change: "-4.65%", volume: "68109137.00", market: "4139214600.00", up: false },
  { icon: zano, name: "ZANO", full: "Zano", price: "13.26", change: "1.43%", volume: "16879152.00", market: "198467200.00", up: true },
];


  return (
    <>
      {/* NAVBAR */}
      <NavBar />
      
      {/* SECTION 1 */}
 <section id='support' className="container-fluid section-1">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <h1>Market Rates of Cryptocurrencies</h1>
            <p>Current market cap: 4T, Variation over the last day: -0.52%.</p>
          </div>
        </div>
      </section>

      {/* Section-2 */}
   <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Top Cryptocurrencies</h2>

        <div className="table-responsive shadow-sm bg-white rounded">
          <div className="d-flex fw-semibold text-secondary border-bottom py-3 px-3">
            <div className="flex-grow-1 col-3">Coin</div>
            <div className="col-2 text-end">Price</div>
            <div className="col-2 text-end">24h(%)</div>
            <div className="col-2 text-end">Volume(24h)</div>
            <div className="col-3 text-end">Market Cap</div>
          </div>

          {cryptoData.map((coin, index) => (
            <div
              key={index}
              className="d-flex align-items-center py-3 px-3 border-bottom flex-wrap"
            >
              {/* Coin Name */}
              <div className="d-flex align-items-center flex-grow-1 col-12 col-sm-6 col-md-3 mb-2 mb-md-0">
                <img
                  src={coin.icon}
                  alt={coin.name}
                  className="me-2"
                  width="34"
                  height="34"
                />
                <div>
                  <div className="fw-bold">{coin.name}</div>
                  <small className="text-muted">{coin.full}</small>
                </div>
              </div>

              {/* Price */}
              <div className="col-6 col-md-2 text-md-end text-start fw-semibold mb-2 mb-md-0">
                {coin.price}
              </div>

              {/* Change */}
              <div
                className={`col-6 col-md-2 text-md-end text-start fw-semibold mb-2 mb-md-0 ${
                  coin.up ? "text-success" : "text-danger"
                }`}
              >
                {coin.change}
              </div>

              {/* Volume */}
              <div className="col-6 col-md-2 text-md-end text-start text-muted mb-2 mb-md-0">
                {coin.volume}
              </div>

              {/* Market Cap */}
              <div className="col-6 col-md-3 text-md-end text-start text-muted">
                {coin.market}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* Section-3 */}
      <section className="crypto-payment-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 content-col">
              <h1 className="section-heading" style={{color:'#000'}}>
                Hassle-Free Crypto Payments <span className="accent-text">@CoinRemitter</span>
              </h1>
              <p className="section-subheading">
                We aim to provide quick crypto payment processor services to merchants willing to take a step ahead with crypto payments.
              </p>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <FaCoins className="icon" />
                  </div>
                  <div className="feature-text">
                    <div className="feature-title">SELECT COIN</div>
                    <div className="feature-desc">Choose from a wide range of supported cryptocurrencies</div>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <FaQrcode className="icon" />
                  </div>
                  <div className="feature-text">
                    <div className="feature-title">SCAN WALLET</div>
                    <div className="feature-desc">Quick and secure wallet scanning for instant payments</div>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <FaShieldAlt className="icon" />
                  </div>
                  <div className="feature-text">
                    <div className="feature-title">SECURE PAY</div>
                    <div className="feature-desc">Military-grade encryption ensures your transactions are safe</div>
                  </div>
                </div>
              </div>
              
              <a href="/signup">
              <button className="btn crypto-btn fw-bold btn-lg" style={{ backgroundColor: '#00CEC9', color: 'white', border: 'none', fontWeight:'600' }}>
                GET STARTED <FaArrowRight className="ms-2" />
              </button>
              </a>
              
              <div className="payment-method">
                <div className="payment-method-title">Payment Method</div>
                <div className="coin-remitter-badge" style={{ backgroundColor: '#00CEC9' }}>
                  <FaBolt className="me-2" /> CoinRemitter
                </div>
                
                <div className="btc-info">
                  <div className="btc-icon">
                    <FaBitcoin className="btc-logo" />
                  </div>
                  <div className="btc-text">BTC Bitcoin</div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-12 image-col">
              <img 
                src={require('../Image/crypto-payment-method.gif')} 
                alt="Crypto Payment Method" 
                className="payment-gif" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section-4 */}
      <section className="container-fluid py-3" style={{ backgroundColor: '#00CEC9' }}>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-4">
            {[
              { img: ltc, label: 'LTC' },
              { img: btc, label: 'BTC' },
              { img: eth, label: 'ETH' },
              { img: dash, label: 'DASH' },
              { img: bch, label: 'BCH' },
              { img: trx, label: 'TRX' },
              { img: doge, label: 'DOGE' },
              { img: usdterc20, label: 'USDT TRC20' },
              { img: tcn, label: 'TCN' },
              { img: zano, label: 'ZANO' },
            ].map((coin, index) => (
              <div key={index} className="text-center">
                <img
                  src={coin.img}
                  alt={coin.label}
                  className="img-fluid mb-2"
                  style={{ maxHeight: '50px', maxWidth: '50px' }}
                />
                <div className="fw-bold text-white">{coin.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION-5 */}
      <section className="container-fluid py-5" id="why-coinremitter" style={{backgroundColor:'#f8f9fa'}}> 
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: '2.5rem', color: '#000' }}>
            Why Choose CoinRemitter?
          </h2>
        </div>

        <div className="row g-4 px-5">
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-4 p-4 text-center">
              <div className="mb-3" style={{ fontSize: '2.5rem', color: '#00CEC9' }}>
                <FaUniversity />
              </div>
              <h5 className="fw-bold mb-2">No KYC & Bank Account Required</h5>
              <p className="text-muted">
                Merchants can sign up without processing KYC or adding a bank account if they want to accept crypto payments with CoinRemitter.
              </p>
              <div className="d-flex justify-content-center align-items-center ">
                 <a href="/signup" style={{textDecoration:'none'}}>
              <button className="btn custom-btn d-flex justify-content-center align-items-center gap-2">NEXT
                <FaArrowRight className="arrow-icon text-white" style={{ color: '#00CEC9' }} />
              </button>
              </a>
              </div>
             
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-4 p-4 text-center">
              <div className="mb-3" style={{ fontSize: '2.5rem', color: '#00CEC9' }}>
                <FaArrowDown />
              </div>
              <h5 className="fw-bold mb-2">Lowest Crypto Processing Fee</h5>
              <p className="text-muted">
                Among all crypto payment gateways, CoinRemitter charges the lowest crypto processing fees while withdrawing funds to an external address.
              </p>

              <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center"> 
                       <a href="/fess " style={{textDecoration:'none'}}>
              <button className="btn custom-btn text-white d-flex justify-content-center align-items-center gap-2">NEXT
                <FaArrowRight className="arrow-icon text-white" style={{ color: '#00CEC9' }} />
              </button>
              </a>
                </div>
            
              </div>
             
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-4 p-4 text-center">
              <div className="mb-3" style={{ fontSize: '2.5rem', color: '#00CEC9' }}>
                <FaDollarSign />
              </div>
              <h5 className="fw-bold mb-2">Gas Fee Reduction Feature</h5>
              <p className="text-muted">
                Merchants can enable the feature named gas solution on the CoinRemitter settings to reduce the actual gas fee charged by the blockchain.
              </p>
              <div className="d-flex justify-content-center align-items-center">
              <a href="/coins " style={{textDecoration:'none'}}>
              <button className="btn custom-btn d-flex justify-content-center align-items-center gap-2">NEXT
                <FaArrowRight className="arrow-icon text-white" style={{ color: '#00CEC9' }} />
              </button>
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-4: FAQ */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Frequently Asked Questions</h2>
          <div className="faq-underline mx-auto" style={{ backgroundColor: '#00CEC9' }}></div>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div className="faq-item" key={index}>
              <div
                className="faq-question d-flex justify-content-between align-items-center"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                <FaPlus
                  className={`faq-icon ${openIndex === index ? "rotate-icon" : ""}`}
                  style={{ color: '#00CEC9' }}
                />
              </div>
              {openIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Topcrypto