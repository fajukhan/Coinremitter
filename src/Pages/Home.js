
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '../Pages/Footer1.css';
import card1 from '../Image/card1.svg';
import card5 from '../Image/card5.svg';
import card3 from '../Image/card3.svg';
import card4 from '../Image/card4.svg';
import btc from '../Image/btc.png';
import bch from '../Image/bch.png';
import bnb from '../Image/bnb.png';
import dash from '../Image/dash.png';
import doge from '../Image/doge.png';
import eth from '../Image/eth.png';
import ltc from '../Image/ltc.png';
import tcn from '../Image/tcn.png';
import trx from '../Image/trx.png';
import news1 from '../Image/news1.png';
import news2 from '../Image/news2.png';
import news3 from '../Image/news3.png';
import news4 from '../Image/news4.png';
import news5 from '../Image/news5.png';
import news7 from '../Image/news7.png';
import news8 from '../Image/news8.png';
import usdterc20 from '../Image/usdterc20.png';
import usdttrc20 from '../Image/usdttrc20.png';
import icopayment from '../Image/icopayment.png';
import { IoCodeSlashSharp } from "react-icons/io5";
import { SiFueler } from "react-icons/si";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineApi } from "react-icons/md";
import { SiCryptpad } from "react-icons/si";
import { FaPuzzlePiece } from "react-icons/fa6";
import { TiArrowRepeat } from "react-icons/ti";
import { BsCashStack } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa";
 import cryptobg1 from '../Image/cryptobg1.png'; // adjust path as needed
 import { FaSuitcaseRolling } from "react-icons/fa";
 import { GrTechnology } from "react-icons/gr";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdMapsHomeWork } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { MdPermMedia } from "react-icons/md";
import { SiPcgamingwiki } from "react-icons/si";
import { FaFileMedical } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa"; 
import { FaHandsHelping } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import laptop from '../Image/laptop.png';
import { GiTwoCoins } from "react-icons/gi";
import { RiBankFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import { IoHeadsetSharp } from "react-icons/io5";
import { PiStarThin } from "react-icons/pi";
import NavBar from './NavBar';
import Footer from './Footer';


const codeVS = `const Coinremitter = require('coinremitter-api');
const BtcWallet = new Coinremitter('WALLET_API_KEY', 'WALLET_PASSWORD');
const param = { label: "order5" }
const address = await BtcWallet.createAddress(param);
console.log("New address : ", address);`;

const codeTerminal = `$ node index.js
Wallet address
{
  success: true,
  data: {
    wallet_id: 'xxxxxxxxxxxxxxxxxxx',
    wallet_name: 'BTCWallet',
    coin: 'Bitcoin',
    coin_symbol: 'BTC',
    address: 'bc1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    label: 'order_5',
    qr_code: 'https://quickchart.io/qr?margin=1&size=200&text=bc1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  }
}`;





const Home = () => {
  const cards = [
    { id: 1, img: card1,  },
    { id: 2, img: card5,},
    { id: 3, img: card3,  },
    { id: 4, img: card4,},
  ];


   // Typing animation for terminal code
  const [typedCode, setTypedCode] = useState('');
  useEffect(() => {
    setTypedCode('');
    let i = 0;
    const interval = setInterval(() => {
      setTypedCode(codeTerminal.slice(0, i));
      i++;
      if (i > codeTerminal.length) clearInterval(interval);
    }, 10); // typing speed
    return () => clearInterval(interval);
  }, []); // re-run on mount (page refresh)

  return (
    <>

    {/* NAVBAR */}
      <NavBar />
      {/* SECTION-1 */}
      <section>
         <div className="container text-center py-5">
        <h1 className="fw-bold mb-4">
          Crypto Payments Easy With <span style={{ color: '#FF9900' }}>CoinRemitter</span>
        </h1>

           {/* Subheading */}
      <p className="text-muted mb-4">
        Explore the crypto payment gateway specially designed for businesses
      </p>

      {/* CTA Button */}
      <button className="btn btn-outline-dark fw-bold px-4 py-2 mb-5 btn-hover1" style={{ borderRadius: '8px' }}>
        START ACCEPTING CRYPTO PAYMENTS
      </button>

      <div className="container text-center py-5">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3.2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: false  // Direction automatically left to right
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="card-3d">
                <img src={card.img} alt="Crypto"  className="card-image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

       {/* Stats Section */}
      <div className="row justify-content-between text-center">
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 bg-dark text-white rounded">
            <h3 className="fw-bold">40569+</h3>
            <p>Active Users</p>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 bg-dark text-white rounded">
            <h3 className="fw-bold">19.54M+</h3>
            <p>Transactions</p>
          </div>
        </div>
      </div>
       </div>
      </section>

        {/* SECTION-2 */}
      <section className='container-fluid py-5'>
         <div className="text-center mb-4">
          <h1 className="fw-bold mb-2">
            The Crypto API By Developers, <span style={{ color: '#FF9900' }}>For Developers</span>
          </h1>
          <p className="lead text-muted mb-4">
            Integrate our easy to use APIs, libraries to support your programming language, and interactive documentation.
          </p>
      
        </div>

          {/* Slider Section */}
        <div className="row justify-content-between ">
          <div className="col-12">
              <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Autoplay]}
      className="mySwiper"
      breakpoints={{
        576: { slidesPerView: 1 },
        768: { slidesPerView: 1.1 },
        992: { slidesPerView: 1.3 },
        1200: { slidesPerView: 1.5 },
        1400: { slidesPerView: 1.7 },
      }}
    >

                  <SwiperSlide>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-stretch ">
          {/* VS Code Block */}
          <div className="code-block vs-code flex-fill">
            <div className="code-block-header">index.js</div>
            <pre className="m-0"><code>{codeVS}</code></pre>
          </div>
          {/* Terminal Block */}
          <div className="code-block terminal flex-fill">
            <div className="code-block-header">&gt;_ Terminal</div>
            <pre className="m-0"><code>{typedCode}</code></pre>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-stretch">
          {/* VS Code Block (duplicate or change as needed) */}
          <div className="code-block vs-code flex-fill">
            <div className="code-block-header">index.js</div>
            <pre className="m-0"><code>{codeVS}</code></pre>
          </div>
          {/* Terminal Block (duplicate or change as needed) */}
          <div className="code-block terminal flex-fill">
            <div className="code-block-header">&gt;_ Terminal</div>
            <pre className="m-0"><code>{typedCode}</code></pre>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
          </div>
           </div>
               <div className="d-flex flex-wrap justify-content-center gap-3  ">
            <button className="btn btn-outline-dark fw-bold px-4 py-2  btn-hover1" style={{ borderRadius: '8px' }}>READ API DOCS</button>
          </div>

      </section>


      {/* SECTION-3 */}
{/* SECTION-3: Top Supported Cryptocurrencies */}
<section className="container-fluid py-5">
  <div className="text-center mb-4">
    <h1 className="fw-bold mb-3 section3-title">
      Top Supported Cryptocurrencies
    </h1>
    <div className="section3-underline"></div>
    <p className="lead text-muted mb-5 section3-desc">
      Coinremitter supports the following cryptocurrencies. These cryptocurrencies are widely popular and they’re being adopted by more than 200 million investors.
    </p>
  </div>
  <div className="row justify-content-center mb-4 g-3">
    <div className="col-4 col-sm-3 col-md-2 d-flex justify-content-center">
      <div className="rounded-circle shadow coin-card">
        <img src={btc} alt="Bitcoin" className="img-fluid" />
      </div>
    </div>
    <div className="col-4 col-sm-3 col-md-2 d-flex justify-content-center">
      <div className="rounded-circle shadow coin-card">
           <img src={bch} alt="Bitcoin" className="img-fluid" />
      </div>
    </div>
    <div className="col-4 col-sm-3 col-md-2 d-flex justify-content-center">
      <div className="rounded-circle shadow coin-card">
          <img src={bnb} alt="Bitcoin" className="img-fluid" />
      </div>
    </div>
    <div className="col-4 col-sm-3 col-md-2 d-flex justify-content-center">
      <div className="rounded-circle shadow coin-card">
            <img src={dash} alt="Bitcoin" className="img-fluid" />
      </div>
    </div>
    <div className="col-4 col-sm-3 col-md-2 d-flex justify-content-center">
      <div className="rounded-circle shadow coin-card">
          <img src={btc} alt="Bitcoin" className="img-fluid" />
      </div>
    </div>
    <div className="col-4 col-sm-3 col-md-2 d-flex justify-content-center">
      <div className="rounded-circle shadow coin-card">
           <img src={doge} alt="Bitcoin" className="img-fluid" />
      </div>
    </div>
    <div className="col-4 col-sm-3 col-md-2 d-flex justify-content-center">
      <div className="rounded-circle shadow coin-card">
         <img src={eth} alt="Bitcoin" className="img-fluid" />
      </div>
    </div>
    <div className="col-4 col-sm-3 col-md-2 d-flex justify-content-center">
      <div className="rounded-circle shadow coin-card">
          <img src={ltc} alt="Bitcoin" className="img-fluid" />
      </div>
    </div>
    <div className="col-4 col-sm-3 col-md-2 d-flex justify-content-center">
      <div className="rounded-circle shadow coin-card">
      <img src={tcn} alt="Bitcoin" className="img-fluid" />
      </div>
    </div>

      <div className="col-4 col-sm-3 col-md-2 d-flex justify-content-center">
      <div className="rounded-circle shadow coin-card">
      <img src={trx} alt="Bitcoin" className="img-fluid" />
      </div>
    </div>

      <div className="col-4 col-sm-3 col-md-2 d-flex justify-content-center">
      <div className="rounded-circle shadow coin-card">
      <img src={usdterc20} alt="Bitcoin" className="img-fluid" />
      </div>
    </div>

      <div className="col-4 col-sm-3 col-md-2 d-flex justify-content-center">
      <div className="rounded-circle shadow coin-card">
      <img src={usdttrc20} alt="Bitcoin" className="img-fluid" />
      </div>
    </div>



  </div>
     <div className="d-flex flex-wrap justify-content-center gap-3 py-5 ">
            <button className="btn btn-outline-dark fw-bold px-4 py-2  btn-hover1" style={{ borderRadius: '8px' }}>LIST YOUR COIN</button>
          </div>
</section>


{/* SECTION-4 */}
<section className="container-fluid py-5">
  {/* Heading and Subheading */}
  <div className="text-center mb-5">
    <h1 className="fw-bold mb-3 section-pricing-title">
      Easy To Use Crypto Payments Widgets
    </h1>
    <div className="section-pricing-underline mb-3"></div>
    <p className="lead text-muted section-pricing-desc">
      Accept top cryptocurrencies with fast, secure, and user-friendly widgets. Integrate our widget in minutes and unlock new revenue streams worldwide.
    </p>
  </div>
  {/* Row with two columns  1 */}
  <div className="row align-items-center justify-content-center m-5 g-4" style={{border:"1px solid #ddd", borderRadius:"10px", }}>
    {/* Left Column */}
    <div className="col-12 col-md-6">
      <div className="p-4 h-100">
        <h2 className="fw-bold mb-3">Pricing Widget</h2>
        <p className="mb-4">
          Showcase your plans with a customizable pricing table and let customers pay instantly in crypto. Ideal for SaaS platforms, subscription services, and digital products.
        </p>
        <button className="btn fw-bold mb-4 section-pricing-btn">
          INTEGRATE PRICING WIDGET <span style={{ fontSize: '1.2em' }}>→</span>
        </button>
        <ul className="list-unstyled mt-3">
          <li className="mb-3 d-flex align-items-center">
            <span className="me-2 section-pricing-list-icon">✔️</span>
            <span>Multiple Widget Layouts for Different Business Categories</span>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <span className="me-2 section-pricing-list-icon">✔️</span>
            <span>Add/Remove Widget Cards Based on the Number of Plans</span>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <span className="me-2 section-pricing-list-icon">✔️</span>
            <span>Clickable Call-to-Action Buttons With Plan Name &amp; Pricing</span>
          </li>
        </ul>
      </div>
    </div>
    {/* Right Column */}
    <div className="col-12 col-md-6 text-center">
      <img
        src={require('../Image/pricing.gif')}
        alt="Pricing Widget"
        className="img-fluid rounded shadow"
        style={{ maxHeight: 350, background: '#fff' }}
      />
    </div>
  </div>

  {/* Row with two columns  2 */}
<div className="row align-items-center justify-content-center m-5 g-4" style={{ border: "1px solid #ddd", borderRadius: "10px" }}>
  {/* Left Column */}
  <div className="col-12 col-md-6">
    <div className="p-4 h-100">
      <h2 className="fw-bold mb-3">Presale Widget</h2>
      <p className="mb-4">
        Easily launch your ICO presale or token sale and accept crypto Payments directly on your website. An ideal solution for blockchain projects and token launches.
      </p>
       <button className="btn fw-bold mb-4 section-pricing-btn">
          LAUNCH PRESALE <span style={{ fontSize: '1.2em' }}>→</span>
        </button>
      <ul className="list-unstyled mt-3">
        <li className="mb-3 d-flex align-items-center">
          <span className="me-2 section-pricing-list-icon" style={{ color: "#FF9900", fontSize: "1.5rem" }}>✔️</span>
          <span>Token Details With Icon, Token Name, &amp; Token Symbol</span>
        </li>
        <li className="mb-3 d-flex align-items-center">
          <span className="me-2 section-pricing-list-icon" style={{ color: "#FF9900", fontSize: "1.5rem" }}>✔️</span>
          <span>Up to Four Token Distribution Rounds With Different Pricing</span>
        </li>
        <li className="mb-3 d-flex align-items-center">
          <span className="me-2 section-pricing-list-icon" style={{ color: "#FF9900", fontSize: "1.5rem" }}>✔️</span>
          <span>Pricing Strategies and Bonus Rewards on Bulk Purchases</span>
        </li>
      </ul>
    </div>
  </div>
  {/* Right Column */}
  <div className="col-12 col-md-6 text-center">
    <img
      src={require('../Image/presale-widget.93c7ddf9.gif')}
      alt="Presale Widget"
      className="img-fluid rounded shadow"
      style={{ maxHeight: 350, background: '#fff' }}
    />
  </div>
</div>

{/* Row with two columns: Payment Button 3 */}
<div className="row align-items-center justify-content-center m-5 g-4" style={{ border: "1px solid #ddd", borderRadius: "10px" }}>
  {/* Left Column */}
  <div className="col-12 col-md-6">
    <div className="p-4 h-100">
      <h2 className="fw-bold mb-3">Payment button</h2>
      <p className="mb-4">
        Add a simple button to accept cryptocurrency payments or donations in a pre-defined amount. Great for charities, content creators, and quick online payments.
      </p>
      <button className="btn fw-bold mb-4 section-pricing-btn" style={{ color: "#FF9900", background: "transparent", border: "none", fontSize: "1.2rem", paddingLeft: 0 }}>
        CREATE PAYMENT BUTTON <span style={{ fontSize: '1.2em' }}>→</span>
      </button>
      <ul className="list-unstyled mt-3">
        <li className="mb-3 d-flex align-items-center">
          <span className="me-2 section-pricing-list-icon" style={{ color: "#FF9900", fontSize: "1.5rem" }}>✔️</span>
          <span>Custom Button Styling With Color, Icon, and Shadow</span>
        </li>
        <li className="mb-3 d-flex align-items-center">
          <span className="me-2 section-pricing-list-icon" style={{ color: "#FF9900", fontSize: "1.5rem" }}>✔️</span>
          <span>Price in a Fixed Amount in Your Preferred Fiat Currency</span>
        </li>
        <li className="mb-3 d-flex align-items-center">
          <span className="me-2 section-pricing-list-icon" style={{ color: "#FF9900", fontSize: "1.5rem" }}>✔️</span>
          <span>Branding Option With Business Logo in the Popup</span>
        </li>
      </ul>
    </div>
  </div>
  {/* Right Column */}
  <div className="col-12 col-md-6 text-center">
    <img
      src={require('../Image/payment-button.8ed67243.gif')}
      alt="Payment Button"
      className="img-fluid rounded shadow"
      style={{ maxHeight: 350, background: '#fff' }}
    />
  </div>
</div>

{/* Row with two columns: Payment Page 4 */}
<div className="row align-items-center justify-content-center m-5 g-4" style={{ border: "1px solid #ddd", borderRadius: "10px" }}>
  {/* Left Column */}
  <div className="col-12 col-md-6">
    <div className="p-4 h-100">
      <h2 className="fw-bold mb-3">Payment Page</h2>
      <p className="mb-4">
        Easily create a branded payment page for smooth cryptocurrency payments with a sharable URL. Perfect for freelancers, fundraisers, and businesses of any size.
      </p>
      <button className="btn fw-bold mb-4 section-pricing-btn" style={{ color: "#FF9900", background: "transparent", border: "none", fontSize: "1.2rem", paddingLeft: 0 }}>
        SET UP PAYMENT PAGE <span style={{ fontSize: '1.2em' }}>→</span>
      </button>
      <ul className="list-unstyled mt-3">
        <li className="mb-3 d-flex align-items-center">
          <span className="me-2 section-pricing-list-icon" style={{ color: "#FF9900", fontSize: "1.5rem" }}>✔️</span>
          <span>Goal Tracker for Amount and Quantity-Based Targets</span>
        </li>
        <li className="mb-3 d-flex align-items-center">
          <span className="me-2 section-pricing-list-icon" style={{ color: "#FF9900", fontSize: "1.5rem" }}>✔️</span>
          <span>Price Fields for Fixed/Custom Amounts and Quantity</span>
        </li>
        <li className="mb-3 d-flex align-items-center">
          <span className="me-2 section-pricing-list-icon" style={{ color: "#FF9900", fontSize: "1.5rem" }}>✔️</span>
          <span>Custom URL Option for Payment Page Redirection</span>
        </li>
      </ul>
    </div>
  </div>
  {/* Right Column */}
  <div className="col-12 col-md-6 text-center">
    <img
      src={require('../Image/payment-page.4db556ef.gif')}
      alt="Payment Page"
      className="img-fluid rounded shadow"
      style={{ maxHeight: 350, background: '#fff' }}
    />
  </div>
</div>
</section>


{/* SECTION-5 */}
<section className="container-fluid py-5">
  {/* Heading */}
  <div className="text-center mb-5">
    <h1 className="fw-bold mb-3" style={{ fontSize: '2.7rem' }}>
      Why Trust <span style={{ color: '#000' }}>CoinRemitter</span>?
    </h1>
    <div style={{
      width: 180,
      height: 4,
      background: '#FF9900',
      borderRadius: 2,
      margin: '0 auto 1.5rem auto'
    }}></div>
  </div>
  {/* Stats Grid */}
  <div className="row g-0 justify-content-center m-5" style={{ border: '1px solid #FF9900', borderRadius: '2px', overflow: 'hidden' }}>
    {/* Row 1 */}
    <div className="btn-hover1 col-12 col-md-4 d-flex flex-column justify-content-center align-items-center py-5" style={{ borderRight: '1px solid #FF9900', borderBottom: '1px solid #FF9900' }}>
      <h2 className="fw-bold" style={{ fontSize: '2.7rem' }}>0</h2>
      <div className="mt-2" style={{ fontSize: '1.2rem' }}>Lost funds &amp; almost no downtime</div>
    </div>
    <div className="btn-hover1 col-12 col-md-4 d-flex flex-column justify-content-center align-items-center py-5" style={{ borderRight: '1px solid #FF9900', borderBottom: '1px solid #FF9900' }}>
      <h2 className="fw-bold" style={{ fontSize: '2.7rem' }}>10+</h2>
      <div className="mt-2" style={{ fontSize: '1.2rem' }}>Supported cryptocurrencies</div>
    </div>
    <div className="btn-hover1 col-12 col-md-4 d-flex flex-column justify-content-center align-items-center py-5" style={{ borderBottom: '1px solid #FF9900' }}>
      <h2 className="fw-bold" style={{ fontSize: '2.7rem' }}>99%</h2>
      <div className="mt-2" style={{ fontSize: '1.2rem' }}>Merchant Satisfaction Rate</div>
    </div>
    {/* Row 2 */}
    <div className="btn-hover1 col-12 col-md-4 d-flex flex-column justify-content-center align-items-center py-5" style={{ borderRight: '1px solid #FF9900' }}>
      <h2 className="fw-bold" style={{ fontSize: '2.7rem' }}>130+</h2>
      <div className="mt-2" style={{ fontSize: '1.2rem' }}>Countries supported</div>
    </div>
    <div className="btn-hover1 col-12 col-md-4 d-flex flex-column justify-content-center align-items-center py-5" style={{ borderRight: '1px solid #FF9900' }}>
      <h2 className="fw-bold" style={{ fontSize: '2.7rem' }}>20+</h2>
      <div className="mt-2" style={{ fontSize: '1.2rem' }}>Industries associated</div>
    </div>
    <div className="btn-hover1 col-12 col-md-4 d-flex flex-column justify-content-center align-items-center py-5">
      <h2 className="fw-bold" style={{ fontSize: '2.7rem' }}>40569+</h2>
      <div className="mt-2" style={{ fontSize: '1.2rem' }}>Active Users</div>
    </div>
  </div>
</section>


{/* SECTION-6  */}
<section className="container-fluid py-5">

  <div className="row g-4 justify-content-center mx-5">
    {/* Row 1 */}
    <div className=" col-12 col-md-4">
      <div className="btn-hover1 p-4 h-100 bg-light rounded-4 shadow-sm text-start">
        <div className="mb-3">
          <i className="bi bi-arrow-left-right"><SiCryptpad size={50} /></i>
        </div>
        <h5 className="fw-bold mb-2" >LOW CRYPTO PROCESSING FEE</h5>
        <p className="mb-0" style={{ fontSize: 16 }}>
          Coinremitter is a crypto payment gateway that charges only 0.23% processing fees from merchants while withdrawing crypto funds.
        </p>
      </div>
    </div>
    <div className="col-12 col-md-4">
      <div className="btn-hover1 p-4 h-100 bg-light rounded-4 shadow-sm text-start">
        <div className="mb-3" >
          <i className="bi bi-code-slash"><IoCodeSlashSharp size={50}/>
</i>
        </div>
        <h5 className="fw-bold mb-2" >OPEN-SOURCE PLUGINS</h5>
        <p className="mb-0" style={{ fontSize: 16 }}>
          Install Coinremitter's crypto payment plugins in your websites based on WordPress, Magento, etc &amp; accept crypto payments easily.
        </p>
      </div>
    </div>
    <div className="col-12 col-md-4">
      <div className="btn-hover1  p-4 h-100 bg-light rounded-4 shadow-sm text-start">
        <div className="mb-3" >
          <i className="bi bi-fuel-pump"><SiFueler size={50} /></i>
        </div>
        <h5 className="fw-bold mb-2" >GAS STATION</h5>
        <p className="mb-0" style={{ fontSize: 16 }}>
          Gas station reduces gas fees on selected crypto, which allows merchants to save more on withdrawals after accepting crypto payments.
        </p>
      </div>
    </div>
    {/* Row 2 */}
    <div className=" col-12 col-md-4">
      <div className="btn-hover1  p-4 h-100 bg-light rounded-4 shadow-sm text-start">
        <div className="mb-3">
          <i className="bi bi-receipt"><LiaFileInvoiceSolid size={50}/></i>
        </div>
        <h5 className="btn-hover1  fw-bold mb-2">INVOICE SERVICES</h5>
        <p className="mb-0" style={{ fontSize: 16 }}>
          Easy &amp; dynamic invoices can be generated for requesting crypto payments, even for the payments accepted with crypto API.
        </p>
      </div>
    </div>
      <div className="col-12 col-md-4">
      <div className="btn-hover1  p-4 h-100 bg-light rounded-4 shadow-sm text-start">
        <div className="mb-3">
          <i className="bi bi-shield-lock"><MdOutlineSecurity  size={50}/></i>
        </div>
        <h5 className="fw-bold mb-2" >DEFENCE GRADE SECURITY</h5>
        <p className="mb-0" style={{ fontSize: 16 }}>
          Merchants who are accepting crypto payments with Coinremitter can rely on Coinremitter's security features to keep their funds safe.
        </p>
      </div>
    </div>
    <div className="col-12 col-md-4">
      <div className="btn-hover1  p-4 h-100 bg-light rounded-4 shadow-sm text-start">
        <div className="mb-3" >
          <i className="bi bi-file-earmark-text"><MdOutlineApi size={50}/></i>
        </div>
        <h5 className="fw-bold mb-2" >API &amp; DOCUMENTATION</h5>
        <p className="mb-0" style={{ fontSize: 16 }}>
          Comprehensive API and documentation to help you integrate and automate your crypto payment flows with ease.
        </p>
      </div>
    </div>
  </div>
</section>


{/* SECTION-7*/}
<section className="container-fluid py-5">
  <div className="row align-items-center mx-5">
    {/* Left: Plugin Logos Grid */}
    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
      <div className="container-fluid">
        {/* Row 1: 2 columns */}
        <div className="row g-0">
          <div className="col-6 border" style={{ background: "#fff", minHeight: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Magento.svg" alt="Magento" style={{ maxHeight: 60 }} />
            <span className="ms-2 fw-bold" style={{ fontSize: 28, color: "#F26322" }}>Magento</span>
          </div>
          <div className="col-6 border" style={{ background: "#fff", minHeight: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" alt="WordPress" style={{ maxHeight: 60 }} />
          </div>
        </div>
        {/* Row 2: 3 columns */}
        <div className="row g-0">
          <div className="col-4 border" style={{ background: "#fff", minHeight: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" alt="Laravel" style={{ maxHeight: 50 }} />
          </div>
          <div className="col-4 border" style={{ background: "#fff", minHeight: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/PrestaShop_Logo.png" alt="PrestaShop" style={{ maxHeight: 50 }} />
          </div>
          <div className="col-4 border" style={{ background: "#fff", minHeight: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Opencart_logo.png" alt="OpenCart" style={{ maxHeight: 50 }} />
          </div>
        </div>
        {/* Row 3: 2 columns */}
        <div className="row g-0">
          <div className="col-6 border" style={{ background: "#fff", minHeight: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP" style={{ maxHeight: 50 }} />
          </div>
          <div className="col-6 border" style={{ background: "#fff", minHeight: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" style={{ maxHeight: 50 }} />
          </div>
        </div>
      </div>
    </div>
    {/* Right: Heading, Paragraph, Button */}
    <div className="col-12 col-lg-6 d-flex flex-column align-items-start justify-content-center ps-lg-5">
      <h1 className="fw-bold mb-3" style={{ fontSize: '2.7rem' }}>
        Open-Source Plugins
      </h1>
      <div style={{
        width: 180,
        height: 4,
        background: '#FF9900',
        borderRadius: 2,
        marginBottom: '1.5rem'
      }}></div>
      <p className="mb-4" style={{ maxWidth: 500, fontSize: 18 }}>
        Coinremitter’s crypto payment plugins can be used to accept crypto payments directly on websites based on supported platforms. Installing plugins can enable crypto payment gateway services on your website.
      </p>
      <button className="btn fw-bold px-4 py-3" style={{
        background: '#FF9900',
        color: '#fff',
        borderRadius: '10px',
        fontSize: 18,
        fontWeight: 700
      }}>
        KNOW MORE
      </button>
    </div>
  </div>
</section>


{/* Section-8 */}
<section className='py-5'>
  {/* Heading */}
  <div className="text-center mb-5">
    <h1 className="fw-bold mb-3" style={{ fontSize: '2.7rem' }}>
      Accept Crypto Payments For Your ICO
    </h1>
   
  </div>
<section
  className="container-fluid py-5"
   style={{
    backgroundImage: `url(${icopayment})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundColor: 'white',
    minHeight: '300px',
     minWidth: '100%'
  }}
>


  {/* Cards and ICO image */}
  <div className="row align-items-center justify-content-between mb-3">
    {/* Left Top Card */}
    <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-end">
      <div className="bg-white shadow-sm rounded-3 d-flex align-items-center p-4" style={{ minWidth: 340, maxWidth: 400 }}>
        <span className="me-3" style={{ fontSize: 36, color: '#FF9900' }}>
          <i className="bi bi-puzzle"><FaPuzzlePiece /></i>
        </span>
        <span className="fw-semibold" style={{ fontStyle: 'italic', fontSize: 18 }}>
          Easy ICO Payment Processor Integration
        </span>
      </div>
    </div>
    
    {/* Right Top Card */}
    <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-start">
      <div className="bg-white shadow-sm rounded-3 d-flex align-items-center p-4" style={{ minWidth: 340, maxWidth: 400 }}>
        <span className="me-3" style={{ fontSize: 36, color: '#FF9900' }}>
          <i className="bi bi-arrow-repeat"><TiArrowRepeat /></i>
        </span>
        <span className="fw-semibold" style={{ fontStyle: 'italic', fontSize: 18 }}>
          High Uptime for Consistent Service Availability
        </span>
      </div>
    </div>
  </div>

  <div className="row align-items-center justify-content-between">
    {/* Left Bottom Card */}
    <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-end">
      <div className="bg-white shadow-sm rounded-3 d-flex align-items-center p-4" style={{ minWidth: 340, maxWidth: 400 }}>
        <span className="me-3" style={{ fontSize: 36, color: '#FF9900' }}>
          <i className="bi bi-cash-stack"><BsCashStack /></i>
        </span>
        <span className="fw-semibold" style={{ fontStyle: 'italic', fontSize: 18 }}>
          Capable of Handling High Volume Transactions
        </span>
      </div>
    </div>
    {/* Spacer for center */}
    <div className="col-12 col-md-4 d-none d-md-block"></div>
    {/* Right Bottom Card */}
    <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-start">
      <div className="bg-white shadow-sm rounded-3 d-flex align-items-center p-4" style={{ minWidth: 340, maxWidth: 400 }}>
        <span className="me-3" style={{ fontSize: 36, color: '#FF9900' }}>
          <i className="bi bi-headset"><FaHeadset /></i>
        </span>
        <span className="fw-semibold" style={{ fontStyle: 'italic', fontSize: 18 }}>
          Dedicated support within the ICO period
        </span>
      </div>
    </div>
  </div>

  
</section>
{/* Button */}
  <div className="text-center mt-5">
    <button className="btn fw-bold px-5 py-3" style={{
      background: '#FF9900',
      color: '#fff',
      borderRadius: '16px',
      fontSize: 20,
      fontWeight: 700
    }}>
      LEARN MORE
    </button>
  </div>
  </section>


  {/* Section-9 */}
 <section className="container-fluid py-5" style={{ background: "#fafafa" }}>
      {/* Heading */}
      <div className=" ms-5">
        <h1 className="fw-bold" style={{ fontSize: '2.7rem', lineHeight: 1.1 }}>
          Which Industries Are Primarily <br /> Accepting Crypto?
        </h1>
        <div style={{
          width: 280,
          height: 4,
          background: '#FF9900',
          borderRadius: 2,
         
        }}></div>
      </div>

      {/* Main Row with two equal columns */}
      <div className="">
        <div className="row align-items-center">
          {/* Left Column: Cards Grid */}
          <div className="col-12 col-lg-6">
            <div className="row g-3 ms-4">
              {/* Travel & Hospitality */}
              <div className="col-6">
                <div className="d-flex align-items-center bg-white shadow-sm rounded-3 p-3" style={{ minHeight: 80 }}>
                  <span className="me-3" style={{ fontSize: 32, color: '#FF9900' }}>
                    <i className="bi bi-suitcase-lg"><FaSuitcaseRolling /></i>
                  </span>
                  <span className="fw-semibold" style={{ fontStyle: 'italic', fontSize: 18 }}>
                    Travel &amp; Hospitality
                  </span>
                </div>
              </div>
              {/* Technology & Software */}
              <div className="col-6">
                <div className="d-flex align-items-center bg-white shadow-sm rounded-3 p-3" style={{ minHeight: 80 }}>
                  <span className="me-3" style={{ fontSize: 32, color: '#FF9900' }}>
                    <i className="bi bi-pc-display"><GrTechnology /></i>
                  </span>
                  <span className="fw-semibold" style={{ fontStyle: 'italic', fontSize: 18 }}>
                    Technology &amp; Software
                  </span>
                </div>
              </div>
              {/* Food & Beverage */}
              <div className="col-6">
                <div className="d-flex align-items-center bg-white shadow-sm rounded-3 p-3" style={{ minHeight: 80 }}>
                  <span className="me-3" style={{ fontSize: 32, color: '#FF9900' }}>
                    <i className="bi bi-cup-straw"><IoFastFoodSharp /></i>
                  </span>
                  <span className="fw-semibold" style={{ fontStyle: 'italic', fontSize: 18 }}>
                    Food &amp; Beverage
                  </span>
                </div>
              </div>
              {/* Real Estate */}
              <div className="col-6">
                <div className="d-flex align-items-center bg-white shadow-sm rounded-3 p-3" style={{ minHeight: 80 }}>
                  <span className="me-3" style={{ fontSize: 32, color: '#FF9900' }}>
                    <i className="bi bi-house-door"><MdMapsHomeWork /></i>
                  </span>
                  <span className="fw-semibold" style={{ fontStyle: 'italic', fontSize: 18 }}>
                    Real Estate
                  </span>
                </div>
              </div>
              {/* E-Commerce */}
              <div className="col-6">
                <div className="d-flex align-items-center bg-white shadow-sm rounded-3 p-3" style={{ minHeight: 80 }}>
                  <span className="me-3" style={{ fontSize: 32, color: '#FF9900' }}>
                    <i className="bi bi-cart-check"><FaCartShopping /></i>
                  </span>
                  <span className="fw-semibold" style={{ fontStyle: 'italic', fontSize: 18 }}>
                    E-Commerce
                  </span>
                </div>
              </div>
              {/* Media & Entertainment */}
              <div className="col-6">
                <div className="d-flex align-items-center bg-white shadow-sm rounded-3 p-3" style={{ minHeight: 80 }}>
                  <span className="me-3" style={{ fontSize: 32, color: '#FF9900' }}>
                    <i className="bi bi-collection-play"><MdPermMedia /></i>
                  </span>
                  <span className="fw-semibold" style={{ fontStyle: 'italic', fontSize: 18 }}>
                    Media &amp; Entertainment
                  </span>
                </div>
              </div>
              {/* Online Gaming */}
              <div className="col-6">
                <div className="d-flex align-items-center bg-white shadow-sm rounded-3 p-3" style={{ minHeight: 80 }}>
                  <span className="me-3" style={{ fontSize: 32, color: '#FF9900' }}>
                    <i className="bi bi-controller"><SiPcgamingwiki /></i>
                  </span>
                  <span className="fw-semibold" style={{ fontStyle: 'italic', fontSize: 18 }}>
                    Online Gaming
                  </span>
                </div>
              </div>
              {/* Medical & Healthcare */}
              <div className="col-6">
                <div className="d-flex align-items-center bg-white shadow-sm rounded-3 p-3" style={{ minHeight: 80 }}>
                  <span className="me-3" style={{ fontSize: 32, color: '#FF9900' }}>
                    <i className="bi bi-heart-pulse"><FaFileMedical /></i>
                  </span>
                  <span className="fw-semibold" style={{ fontStyle: 'italic', fontSize: 18 }}>
                    Medical &amp; Healthcare
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image inside container */}
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img
              src={cryptobg1}
              alt="Industries Accepting Crypto"
              className="img-fluid"
              style={{ maxWidth: "90%", maxHeight: 540 }}
            />
          </div>
        </div>
      </div>
    </section>


  {/* SECTION-10 */}
       <section className="container-fluid py-5" style={{ background: "#fff" }}>
  {/* Heading and Subheading */}
  <div className="text-center mb-4">
    <h1 className="fw-bold mb-3" style={{ fontSize: '2.7rem' }}>
      Affiliation Program
    </h1>
    <div style={{
      width: 180,
      height: 4,
      background: '#FF9900',
      borderRadius: 2,
      margin: '0 auto 1.5rem auto'
    }}></div>
    <p className="lead text-muted mb-4">
      Earn referral bonus by adding new members to the community.
    </p>
  </div>
  {/* Steps Row */}
  <div className="row g-0 justify-content- mx-5" style={{ border: '1px solid #222', borderRadius: '2px', overflow: 'hidden' }}>
    {/* Step 1 */}
    <div className="col-12 col-md-6 col-lg-3 d-flex flex-column justify-content-between align-items-start p-4 position-relative affiliation-card" style={{ minHeight: 320, borderRight: '1px solid #222', background: "#fff" }}>
      <div>
        <div className="mb-3 affiliation-icon" style={{ fontSize: 54, color: '#bbb' }}>
          <i className="bi bi-person-plus"><FaUserFriends /></i>
        </div>
        <h5 className="fw-bold mb-2" style={{ color: '#FF9900' }}>INVITE USERS</h5>
        <p className="mb-0" style={{ fontSize: 16 }}>
          Let your network know about Coinremitter’s seamless crypto payment services
        </p>
      </div>
    <span
  className="position-absolute top-50 end-0 translate-middle-y d-none d-lg-block"
  style={{
    right: '-20px',
    zIndex: 2,
    pointerEvents: 'none'
  }}
>
  <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,0 40,30 0,60" fill="#FF9900" />
  </svg>
</span> 
      <span className="position-absolute bottom-20 end-0" style={{ fontSize: 140, color: '#eee', zIndex: 0, right: 10, bottom: -20, fontWeight: 700, userSelect: 'none' }}>1</span>
    </div>
    {/* Step 2 */}
    <div className="col-12 col-md-6 col-lg-3 d-flex flex-column justify-content-between align-items-start p-4 position-relative affiliation-card" style={{ minHeight: 320, borderRight: '1px solid #222', background: "#fff" }}>
      <div>
        <div className="mb-3 affiliation-icon" style={{ fontSize: 54, color: '#bbb' }}>
          <i className="bi bi-handshake"><FaHandsHelping /></i>
        </div>
        <h5 className="fw-bold mb-2" style={{ color: '#FF9900' }}>THEY JOIN</h5>
        <p className="mb-0" style={{ fontSize: 16 }}>
          Ask your network to click the link shared by you &amp; join Coinremitter.
        </p>
      </div>
     <span
  className="position-absolute top-50 end-0 translate-middle-y d-none d-lg-block"
  style={{
    right: '-20px',
    zIndex: 2,
    pointerEvents: 'none'
  }}
>
  <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,0 40,30 0,60" fill="#FF9900" />
  </svg>
</span> 
      <span className="position-absolute bottom-0 end-0" style={{ fontSize: 140, color: '#eee', zIndex: 0, right: 10, bottom: -20, fontWeight: 700, userSelect: 'none' }}>2</span>
    </div>
    {/* Step 3 */}
    <div className="col-12 col-md-6 col-lg-3 d-flex flex-column justify-content-between align-items-start p-4 position-relative affiliation-card" style={{ minHeight: 320, borderRight: '1px solid #222', background: "#fff" }}>
      <div>
        <div className="mb-3 affiliation-icon" style={{ fontSize: 54, color: '#bbb' }}>
          <i className="bi bi-people"><FaUserCheck /></i>
        </div>
        <h5 className="fw-bold mb-2" style={{ color: '#FF9900' }}>THEY USE</h5>
        <p className="mb-0" style={{ fontSize: 16 }}>
          Ask your referrals to accept crypto payments using Coinremitter.
        </p>
      </div>
    <span
  className="position-absolute top-50 end-0 translate-middle-y d-none d-lg-block"
  style={{
    right: '-20px',
    zIndex: 2,
    pointerEvents: 'none'
  }}
>
  <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,0 40,30 0,60" fill="#FF9900" />
  </svg>
</span> 
      <span className="position-absolute bottom-0 end-0" style={{ fontSize: 140, color: '#eee', zIndex: 0, right: 10, bottom: -20, fontWeight: 700, userSelect: 'none' }}>3</span>
    </div>
    {/* Step 4 */}
    <div className="col-12 col-md-6 col-lg-3 d-flex flex-column justify-content-between align-items-start p-4 position-relative affiliation-card" style={{ minHeight: 320, background: "#fff" }}>
      <div>
        <div className="mb-3 affiliation-icon" style={{ fontSize: 54, color: '#bbb' }}>
          <i className="bi bi-diagram-3"><GiTakeMyMoney /></i>
        </div>
        <h5 className="fw-bold mb-2" style={{ color: '#FF9900' }}>YOU EARN</h5>
        <p className="mb-0" style={{ fontSize: 16 }}>
          Get up to 75% of your referral’s withdrawal fees as a referral bonus.
        </p>
      </div>
       <span
  className="position-absolute top-50 end-0 translate-middle-y d-none d-lg-block"
  style={{
    right: '-20px',
    zIndex: 2,
    pointerEvents: 'none'
  }}
>
  <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,0 40,30 0,60" fill="#FF9900" />
  </svg>
</span> 
      <span className="position-absolute bottom-0 end-0" style={{ fontSize: 140, color: '#eee', zIndex: 0, right: 10, bottom: -20, fontWeight: 700, userSelect: 'none' }}>4</span>
    </div>
  </div>
</section>


{/* SECTION-11 */}

<section className="container-fluid py-5" style={{ background: "#fafafa" }}>
  <div className="row align-items-center justify-content-between">
    {/* Left: Laptop Image */}
    <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center">
      <img
        src={laptop}
        alt="CoinRemitter Dashboard"
        className="img-fluid"
        style={{ maxWidth: "90%", maxHeight: 520 }}
      />
    </div>
    {/* Right: Heading, Paragraph, Cards */}
    <div className="col-12 col-lg-6">
      <h1 className="fw-bold" style={{ fontSize: '2.7rem', lineHeight: 1.1 }}>
        Why Choose CoinRemitter
      </h1>
      <div style={{
        width: 180,
        height: 4,
        background: '#FF9900',
        borderRadius: 2,
        margin: '1rem 0 1.5rem 0'
      }}></div>
      <p className="mb-4" style={{ fontSize: 18 }}>
        Coinremitter’s next-level crypto payment services offer the best experience to merchants. Know the key reasons for choosing Coinremitter:
      </p>
      {/* Cards Grid */}
      <div className="row g-3">
        {/* Card 1 */}
        <div className="col-12 col-md-6">
          <div className="d-flex align-items-center bg-white shadow-sm rounded-3 p-4 h-100">
            <span className="me-3" style={{ fontSize: 36, color: '#FF9900' }}>
              <i className="bi bi-coin"><GiTwoCoins /></i>
            </span>
            <span>
              <span className="fw-bold" style={{ color: "#FF9900" }}>Support of major<br />cryptocurrencies</span>
            </span>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-12 col-md-6">
          <div className="d-flex align-items-center bg-white shadow-sm rounded-3 p-4 h-100">
            <span className="me-3" style={{ fontSize: 36, color: '#FF9900' }}>
              <i className="bi bi-bank"><RiBankFill /></i>
            </span>
            <span>
              <span className="fw-bold" style={{ color: "#FF9900" }}>No ID and no bank<br />account required</span>
            </span>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-12 col-md-6">
          <div className="d-flex align-items-center bg-white shadow-sm rounded-3 p-4 h-100">
            <span className="me-3" style={{ fontSize: 36, color: '#FF9900' }}>
              <i className="bi bi-globe"><FaGlobe /></i>
            </span>
            <span>
              <span className="fw-bold" style={{ color: "#FF9900" }}>Global, safe, and<br />anonymous</span>
            </span>
          </div>
        </div>
        {/* Card 4 */}
        <div className="col-12 col-md-6">
          <div className="d-flex align-items-center bg-white shadow-sm rounded-3 p-4 h-100">
            <span className="me-3" style={{ fontSize: 36, color: '#FF9900' }}>
              <i className="bi bi-headset"><IoHeadsetSharp /></i>
            </span>
            <span>
              <span className="fw-bold" style={{ color: "#FF9900" }}>24x7 support for<br />technical issues</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* SECTION-12 */}

<section className="container-fluid py-5" style={{ background: "#fff" }}>
  {/* Heading and Subheading */}
  <div className="text-center mb-4">
    <h1 className="fw-bold mb-3" style={{ fontSize: '2.7rem' }}>
      Upgrade Now For A Better <br /> Crypto Payment Experience
    </h1>
    <div style={{
      width: 260,
      height: 4,
      background: '#FF9900',
      borderRadius: 2,
      margin: '0 auto 1.5rem auto'
    }}></div>
    <p className="lead text-muted mb-4">
      Get the best out of our services with the premium plan. Accept crypto payments like a pro with Coinremitter’s premium plan.
    </p>
  </div>
  {/* Plans Row */}
  <div className="row justify-content-center align-items-stretch g-0" style={{ maxWidth: 1100, margin: "0 auto" }}>
    {/* Free Plan */}
    <div className="col-12 col-lg-6 d-flex flex-column bg-light p-4" style={{ borderTopLeftRadius: 12, borderBottomLeftRadius: 12, border: "1px solid #eee", borderRight: "none", minHeight: 420 }}>
      <h4 className="fw-bold mb-2">Limited Access Plan</h4>
      <div className="d-flex align-items-end mb-3">
        <span className="fw-bold" style={{ fontSize: 48 }}>FREE</span>
        <span className="ms-2 text-muted" style={{ fontSize: 16 }}>PER MONTH</span>
      </div>
      {/* Supported Coins */}
      <div className="bg-white p-3 mb-3 rounded shadow-sm" style={{ border: "1px solid #ddd" }}>
        <div className="fw-bold text-uppercase mb-2" style={{ fontSize: 13, letterSpacing: 1 }}>Supported Coins</div>
        <div className="d-flex flex-wrap gap-2 mb-2">
          {/* Replace src with your imported images */}
          <span className="d-flex align-items-center border rounded px-2 py-1" style={{ fontSize: 15 }}>
            <img src={btc} alt="BTC" width={22} className="me-1" /> BTC
          </span>
          <span className="d-flex align-items-center border rounded px-2 py-1" style={{ fontSize: 15 }}>
            <img src={ltc} alt="LTC" width={22} className="me-1" /> LTC
          </span>
          <span className="d-flex align-items-center border rounded px-2 py-1" style={{ fontSize: 15 }}>
            <img src={bch} alt="BCH" width={22} className="me-1" /> BCH
          </span>
          <span className="d-flex align-items-center border rounded px-2 py-1" style={{ fontSize: 15 }}>
            <img src={doge} alt="DOGE" width={22} className="me-1" /> DOGE
          </span>
          <span className="d-flex align-items-center border rounded px-2 py-1" style={{ fontSize: 15 }}>
            <img src={tcn} alt="TCN" width={22} className="me-1" /> TCN
          </span>
          <span className="d-flex align-items-center border rounded px-2 py-1" style={{ fontSize: 15 }}>
            <img src={dash} alt="DASH" width={22} className="me-1" /> DASH
          </span>
          <span className="d-flex align-items-center border rounded px-2 py-1" style={{ fontSize: 15 }}>
            <img src={bnb} alt="BNB" width={22} className="me-1" /> BNB
          </span>
         
        </div>
      </div>
      {/* Features */}
      <div className="mb-4">
        <div className="fw-bold text-uppercase mb-2" style={{ fontSize: 13, letterSpacing: 1 }}>Features</div>
        <ul className="list-unstyled mb-0">
          <li className="mb-2 d-flex align-items-center">
            <span className="me-2" style={{ color: "#FF9900", fontSize: 20 }}>✔️</span>
            Free Support For Limited Hours
          </li>
          <li className="mb-2 d-flex align-items-center">
            <span className="me-2" style={{ color: "#FF9900", fontSize: 20 }}>✔️</span>
            <b>100 Crypto API</b> Requests/Minute
          </li>
          <li className="mb-2 d-flex align-items-center">
            <span className="me-2" style={{ color: "#FF9900", fontSize: 20 }}>✔️</span>
            <b>500</b> Addresses Per Wallet
          </li>
          <li className="mb-2 d-flex align-items-center">
            <span className="me-2" style={{ color: "#FF9900", fontSize: 20 }}>✔️</span>
            On-Time Access To The Latest Features
          </li>
        </ul>
      </div>
      <div className="mt-auto text-center">
        <button className="btn btn-dark fw-bold px-5 py-3" style={{ borderRadius: 10, fontSize: 18 }}>
          GET STARTED &rarr;
        </button>
      </div>
    </div>
    {/* Premium Plan */}
    <div className="col-12 col-lg-6 d-flex flex-column p-4" style={{ background: "#FF9900", color: "#fff", borderTopRightRadius: 12, borderBottomRightRadius: 12, minHeight: 420 }}>
      <h4 className="fw-bold mb-2">Premium Plan</h4>
      <div className="d-flex align-items-end mb-3">
        <span className="fw-bold" style={{ fontSize: 48 }}>$99.99</span>
        <span className="ms-2" style={{ fontSize: 16 }}>PER MONTH</span>
      </div>
      {/* Supported Coins */}
      <div className="bg-white p-3 mb-3 rounded shadow-sm" style={{ border: "1px solid #ddd", color: "#222" }}>
        <div className="fw-bold text-uppercase mb-2" style={{ fontSize: 13, letterSpacing: 1 }}>Supported Coins</div>
        <div className="d-flex flex-wrap gap-2 mb-2">
          <span className="d-flex align-items-center border rounded px-2 py-1" style={{ fontSize: 15 }}>
            <img src={eth} alt="ETH" width={22} className="me-1" /> ETH
          </span>
          <span className="d-flex align-items-center border rounded px-2 py-1" style={{ fontSize: 15 }}>
            <img src={usdterc20} alt="USDTERC20" width={22} className="me-1" /> USDTERC20
          </span>
          <span className="d-flex align-items-center border rounded px-2 py-1" style={{ fontSize: 15 }}>
            <img src={trx} alt="TRX" width={22} className="me-1" /> TRX
          </span>
          <span className="d-flex align-items-center border rounded px-2 py-1" style={{ fontSize: 15 }}>
            <img src={usdttrc20} alt="USDTRC20" width={22} className="me-1" /> USDTRC20
          </span>
          <span className="d-flex align-items-center border rounded px-2 py-1" style={{ fontSize: 15 }}>
            +
          </span>
        </div>
        <div className="border rounded px-2 py-1 d-inline-block" style={{ fontSize: 15, background: "#f8f9fa" }}>
          FREE PLAN'S COIN
        </div>
      </div>
      {/* Features */}
      <div className="mb-4">
        <div className="fw-bold text-uppercase mb-2" style={{ fontSize: 13, letterSpacing: 1 }}>Features</div>
        <ul className="list-unstyled mb-0">
          <li className="mb-2 d-flex align-items-center">
            <span className="me-2" style={{ color: "#fff", fontSize: 20 }}>✔️</span>
            24x7 Free Support
          </li>
          <li className="mb-2 d-flex align-items-center">
            <span className="me-2" style={{ color: "#fff", fontSize: 20 }}>✔️</span>
            <b>500 Crypto API</b> Requests/Minute
          </li>
          <li className="mb-2 d-flex align-items-center">
            <span className="me-2" style={{ color: "#fff", fontSize: 20 }}>✔️</span>
            Unlimited Addresses Per Wallet
          </li>
          <li className="mb-2 d-flex align-items-center">
            <span className="me-2" style={{ color: "#fff", fontSize: 20 }}>✔️</span>
            Early Access To The Latest Features
          </li>
        </ul>
      </div>
      <div className="mt-auto text-center">
        <button className="btn fw-bold px-5 py-3" style={{
          background: "#fff",
          color: "#FF9900",
          borderRadius: 10,
          fontSize: 18
        }}>
          BUY NOW &rarr;
        </button>
      </div>
    </div>
  </div>
</section>


{/* SECTION-13 */}

<section className="container-fluid py-5" style={{ background: "#fafafa" }}>
  {/* Heading and Subheading */}
  <div className="text-center mb-4">
    <h1 className="fw-bold mb-3" style={{ fontSize: '2.7rem' }}>
      What Our Clients Say
    </h1>
    <div style={{
      width: 260,
      height: 4,
      background: '#FF9900',
      borderRadius: 2,
      margin: '0 auto 1.5rem auto'
    }}></div>
    <p className="lead text-muted mb-4">
      See how Coinremitter is making crypto payments easy and reliable for businesses worldwide.
    </p>
  </div>
  {/* Swiper Carousel */}
  <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 3500, disableOnInteraction: false }}
    loop={true}
    spaceBetween={24}
    breakpoints={{
      0: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
      1400: { slidesPerView: 4 },
      1600: { slidesPerView: 5 }
    }}
  >
    {/* Testimonial 1 */}
    <SwiperSlide>
      <div className="bg-white rounded-3 shadow-sm p-4  d-flex flex-column" style={{height:'500px', padding:"50px 0"}}>
        <h5 className="fw-bold mb-2">Game-Changing</h5>
        <div className="mb-2" style={{ color: "#FF9900" }}>
          {Array(5).fill().map((_, i) => <i key={i} className="bi bi-star-fill"><PiStarThin /></i>)}
        </div>
        <p className="flex-grow-1 mb-3">
          Coinremitter has been a game-changing crypto payment gateway for my online store. The staff has been quite supportive in integrating crypto API. The ease of accepting crypto payments and incredible response from my customers has improved my business's efficiency and profit margin.
        </p>
        <div className="fw-bold">Olivia Bennett</div>
        <div className="text-muted">C.T.O.</div>
      </div>
    </SwiperSlide>
    {/* Testimonial 2 */}
    <SwiperSlide>
      <div className="bg-white rounded-3 shadow-sm p-4  d-flex flex-column" style={{height:'500px', padding:"50px 0"}}>
        <h5 className="fw-bold mb-2">Good For Privacy</h5>
        <div className="mb-2" style={{ color: "#FF9900" }}>
          {Array(5).fill().map((_, i) => <i key={i} className="bi bi-star-fill"><PiStarThin /></i>)}
        </div>
        <p className="flex-grow-1 mb-3">
          I found that Coinremitter respected my privacy. I wasn't asked to submit any ID proof. I was actively looking for a crypto payment gateway without KYC and my search ended with Coinremitter. Also, its easy user interface and excellent customer service make it the most reliable cryptocurrency payment gateway overall.
        </p>
        <div className="fw-bold">Mason Turner</div>
        <div className="text-muted">C.E.O</div>
      </div>
    </SwiperSlide>
    {/* Testimonial 3 */}
    <SwiperSlide>
      <div className="bg-white rounded-3 shadow-sm p-4 d-flex flex-column" style={{height:'500px', padding:"50px 0"}}>
        <h5 className="fw-bold mb-2">User-Friendly</h5>
        <div className="mb-2" style={{ color: "#FF9900" }}>
          {Array(5).fill().map((_, i) => <i key={i} className="bi bi-star-fill"><PiStarThin /></i>)}
        </div>
        <p className="flex-grow-1 mb-3">
          Coinremitter has been the best crypto payment gateway for me. The integration of crypto API was extremely smooth and the user experience was quite flawless. I must say that the design of this cryptocurrency payment gateway has been very user-friendly and it has become an essential part of my business.
        </p>
        <div className="fw-bold">Liam Anderson</div>
        <div className="text-muted">Merchant</div>
      </div>
    </SwiperSlide>
    {/* Testimonial 4 */}
    <SwiperSlide>
      <div className="bg-white rounded-3 shadow-sm p-4 d-flex flex-column" style={{height:'500px', padding:"50px 0"}}>
        <h5 className="fw-bold mb-2">Simple To Use</h5>
        <div className="mb-2" style={{ color: "#FF9900" }}>
          {Array(5).fill().map((_, i) => <i key={i} className="bi bi-star-fill"><PiStarThin /></i>)}
        </div>
        <p className="flex-grow-1 mb-3">
          As a businessman, I found a simplified process for accepting cryptocurrency payments with Coinremitter. Its easy documentation helped me get started easily and quickly, and its security measures are way ahead of time. I've made Coinremitter my go-to choice for daily cryptocurrency payments. Highly recommended!
        </p>
        <div className="fw-bold">Olivia Baker</div>
        <div className="text-muted">C.T.O.</div>
      </div>
    </SwiperSlide>
    {/* Testimonial 5 */}
    <SwiperSlide>
      <div className="bg-white rounded-3 shadow-sm p-4  d-flex flex-column" style={{height:'500px', padding:"50px 0"}}>
        <h5 className="fw-bold mb-2">Quite Satisfied</h5>
        <div className="mb-2" style={{ color: "#FF9900" }}>
          {Array(5).fill().map((_, i) => <i key={i} className="bi bi-star-fill"><PiStarThin /></i>)}
        </div>
        <p className="flex-grow-1 mb-3">
          I’ve had some good experiences with Coinremitter. I found its crypto API to be quite useful when it came to accepting crypto payments on my website. The staff is quite supportive and always ready to assist. I must say that Coinremitter provides an easy way to accept crypto payments for businesses.
        </p>
        <div className="fw-bold">Ava Thompson</div>
        <div className="text-muted">C.E.O</div>
      </div>
    </SwiperSlide>
  </Swiper>
</section>


{/* SECTION-14: News & Media */}
<section className="container-fluid py-5" style={{ background: "#fff" }}>
  <div className="text-center mb-4 px-3">
    <h1 className="fw-bold mb-2" style={{ fontSize: '2.5rem' }}>
      News &amp; Media
    </h1>
    <div style={{
      width: 150,
      height: 4,
      background: '#FF9900',
      borderRadius: 2,
      margin: '0 auto 1.5rem auto'
    }}></div>
    <p className="lead text-muted mb-4 px-md-5">
      Know about our reputation from several reputed platforms.
    </p>
  </div>

  <div className="px-2">
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={16}
      breakpoints={{
        0: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
        1200: { slidesPerView: 7 }
      }}
      className="py-3"
    >
      {[news1, news2, news3, news4, news5, news8, news7, news5, news3].map((logo, index) => (
        <SwiperSlide key={index}>
          <div className="d-flex justify-content-center align-items-center p-2">
            <img src={logo} alt={`News ${index + 1}`} className="img-fluid" style={{ maxHeight: 100, width: 'auto' }} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>





<Footer />


    </>
  );
};

export default Home;
