import React, { useState } from "react";
import NavBar from './NavBar';


import btc from "../Image/btc.png";
import ltc from "../Image/ltc.png";
import bch from "../Image/bch.png";
import eth from "../Image/eth.png";
import doge from "../Image/doge.png";
import tcn from "../Image/tcn.png";
import dash from "../Image/dash.png";
import usdterc20 from "../Image/usdterc20.png";
import { FaPlus } from "react-icons/fa";
import trx from "../Image/trx.png";
import zano from "../Image/zano.png";


import { FaCoins, FaQrcode, FaShieldAlt, FaBolt, FaArrowRight } from 'react-icons/fa';
import { FaBitcoin } from 'react-icons/fa6';

import { FaUniversity,  FaDollarSign,  FaArrowDown } from 'react-icons/fa';
import Footer from "./Footer";





const Topcrypto = () => {



     const [openIndex, setOpenIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    
    const faqs = [
      {
        question: "Do I need programming skills to use Coinremitter’s plugins?",
        answer:
          "No, CoinRemitter’s plugins are ready-to-use and can be integrated without programming skills.",
      },
      {
        question: "Is there any cost for integrating CoinRemitter’s plugins?",
        answer: "No, integration is completely free of cost.",
      },
      {
        question: "Are CoinRemitter’s plugins open source?",
        answer: "Yes, they are open-source and customizable according to your needs.",
      },
      {
        question:
          "Can I accept crypto payments in multiple currencies with CoinRemitter’s plugins?",
        answer:
          "Yes, CoinRemitter plugins support multiple cryptocurrencies for payments.",
      },
    ];
  



      // Cryptocurrency data
  const cryptoData = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: "112,159.00",
      change24h: "-0.34%",
      volume24h: "48,374,895,320.00",
      marketCap: "223,488,885,252.00",
      image: btc,
      isPositive: false
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      price: "4,141.60",
      change24h: "-0.92%",
      volume24h: "30,916,761,867.00",
      marketCap: "500,043,636,193.00",
      image: eth,
      isPositive: false
    },
    {
      symbol: "USDT",
      name: "Tether",
      price: "1.00",
      change24h: "-0.05%",
      volume24h: "100,554,981,624.00",
      marketCap: "172,780,373,360.00",
      image: usdterc20, // Using USDT ERC20 image
      isPositive: false
    },
    {
      symbol: "BNB",
      name: "BNB",
      price: "1,007.90",
      change24h: "+2.65%",
      volume24h: "2,974,412,296.00",
      marketCap: "140,281,767,911.00",
      image: tcn, // Assuming TCN is for BNB
      isPositive: true
    },
    {
      symbol: "DOGE",
      name: "Dogecoin",
      price: "0.24",
      change24h: "-1.57%",
      volume24h: "2,923,296,812.00",
      marketCap: "35,745,910,280.00",
      image: doge,
      isPositive: false
    },
    {
      symbol: "TRX",
      name: "TRON",
      price: "0.34",
      change24h: "-1.56%",
      volume24h: "769,140,668.00",
      marketCap: "31,795,880,623.00",
      image: trx,
      isPositive: false
    },
    {
      symbol: "BCH",
      name: "Bitcoin Cash",
      price: "557.42",
      change24h: "-0.69%",
      volume24h: "357,736,678.00",
      marketCap: "11,113,211,795.00",
      image: bch,
      isPositive: false
    },
    {
      symbol: "LTC",
      name: "Litecoin",
      price: "106.54",
      change24h: "+0.50%",
      volume24h: "463,203,703.00",
      marketCap: "8,133,692,411.00",
      image: ltc,
      isPositive: true
    },
    {
      symbol: "DASH",
      name: "Dash",
      price: "21.00",
      change24h: "+0.28%",
      volume24h: "17,821,243.00",
      marketCap: "261,241,555.00",
      image: dash,
      isPositive: true
    },
    {
      symbol: "ZANO",
      name: "Zano",
      price: "11.73",
      change24h: "+3.31%",
      volume24h: "1,620,697.00",
      marketCap: "175,326,168.00",
      image: zano,
      isPositive: true
    }
  ];



  return (
    <>

    {/* NAVBAR */}
    <NavBar />
       {/* <!-- SECTION 1 --> */}
<section id='support' class="container-fluid section-1">
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-6">
      <h1>Market Rates of Cryptocurrencies</h1>
      <p>Current market cap: 4T, Variation over the last day: -0.52%.</p>
    </div>
  </div>
</section>



 {/* Section-2 */}
<section className="container">
  {/* Cryptocurrency Table Card */}
  <div className="row py-5">
    <div className="col-12">
      <div className="card shadow-sm border-0 crypto-card">
    
        {/* Card Body with Table */}
        <div className="card-body p-0">
          <div className="crypto-table">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead>
                  <tr>
                    <th scope="col">Coin</th>
                    <th scope="col">Price</th>
                    <th scope="col">24h(%)</th>
                    <th scope="col">Volume(24h)</th>
                    <th scope="col">Market Cap</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptoData.map((coin, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img 
                            src={coin.image} 
                            alt={coin.name} 
                            className="coin-image me-2"
                            style={{width: '24px', height: '24px'}}
                          />
                          <div>
                            <span className="coin-symbol">{coin.symbol}</span><br />
                            <span className="coin-name">{coin.name}</span>
                          </div>
                        </div>
                      </td>
                      <td>${coin.price}</td>
                      <td className={coin.isPositive ? "positive" : "negative"}>
                        {coin.change24h}
                      </td>
                      <td>${coin.volume24h}</td>
                      <td>${coin.marketCap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Card Footer */}
        <div className="card-footer bg-light border-0 py-2">
          <div className="row">
            <div className="col-12 text-center">
              <small className="text-muted">
                Data updates every 60 seconds • Source: Crypto Market API
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
    

     {/* Section-3 */}
        <section className="crypto-payment-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Content Column */}
          <div className="col-lg-6 col-md-12 content-col">
            <h1 className="section-heading">
              Hassle-Free Crypto Payments <span className="accent-text">@CoinRemitter</span>
            </h1>
            <p className="section-subheading">
              We aim to provide quick crypto payment processor services to merchants willing to take a step ahead with crypto payments.
            </p>
            
            {/* Features List */}
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
            
            {/* Get Started Button */}
            <button className="btn btn-amber-custom btn-lg">
              GET STARTED <FaArrowRight className="ms-2" />
            </button>
            
            {/* Payment Method */}
            <div className="payment-method">
              <div className="payment-method-title">Payment Method</div>
              <div className="coin-remitter-badge">
                <FaBolt className="me-2" /> CoinRemitter
              </div>
              
              {/* BTC Info */}
              <div className="btc-info">
                <div className="btc-icon">
                  <FaBitcoin className="btc-logo" />
                </div>
                <div className="btc-text">BTC Bitcoin</div>
              </div>
            </div>
          </div>
          
          {/* Image Column */}
          <div className="col-lg-6 col-md-12 image-col">
            {/* Replace with your actual GIF path */}
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
{/* Section-4: Single Row Icon Strip */}
<section className="container-fluid py-3" style={{ backgroundColor: '#FF9900' }}>
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
    <section className="container py-5" id="why-coinremitter">
  {/* Heading */}
  <div className="text-center mb-5">
    <h2 className="fw-bold" style={{ fontSize: '2.5rem', color: '#FF9900' }}>
      Why Choose CoinRemitter?
    </h2>
  </div>

  {/* Feature Cards */}
  <div className="row g-4">
    {/* Card 1 */}
    <div className="col-12 col-md-4">
      <div className="card h-100 shadow-sm border-0 rounded-4 p-4 text-center">
        <div className="mb-3 text-warning" style={{ fontSize: '2.5rem' }}>
        
          <FaUniversity />
        </div>
        <h5 className="fw-bold mb-2">No KYC & Bank Account Required</h5>
        <p className="text-muted">
          Merchants can sign up without processing KYC or adding a bank account if they want to accept crypto payments with CoinRemitter.
        </p>

              <button className="btn custom-btn d-flex justify-content-end align-items-center gap-2">
 <FaArrowRight className="arrow-icon" />
</button>
      </div>


    </div>

    {/* Card 2 */}
    <div className="col-12 col-md-4">
      <div className="card h-100 shadow-sm border-0 rounded-4 p-4 text-center">
        <div className="mb-3 text-warning" style={{ fontSize: '2.5rem' }}>
        
          <FaArrowDown />
        </div>
        <h5 className="fw-bold mb-2">Lowest Crypto Processing Fee</h5>
        <p className="text-muted">
          Among all crypto payment gateways, CoinRemitter charges the lowest crypto processing fees while withdrawing funds to an external address.
        </p>

               <button className="btn custom-btn d-flex justify-content-end align-items-center gap-2">
 <FaArrowRight className="arrow-icon" />
</button>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-12 col-md-4">
      <div className="card h-100 shadow-sm border-0 rounded-4 p-4 text-center">
        <div className="mb-3 text-warning" style={{ fontSize: '2.5rem' }}>
         
          <FaDollarSign />
        </div>
        <h5 className="fw-bold mb-2">Gas Fee Reduction Feature</h5>
        <p className="text-muted">
          Merchants can enable the feature named gas solution on the CoinRemitter settings to reduce the actual gas fee charged by the blockchain.
        </p>

             <button className="btn custom-btn d-flex justify-content-end align-items-center gap-2">
 <FaArrowRight className="arrow-icon" />
</button>
      </div>
    </div>
  </div>
</section>



{/* <!-- SECTION-4: FAQ --> */}
 <section className="container py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Frequently Asked Questions</h2>
        <div className="faq-underline mx-auto"></div>
      </div>

      {/* Custom Accordion */}
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
