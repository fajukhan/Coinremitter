import React, { useState } from "react";
import NavBar from './NavBar';
import plugin3 from "../Image/plugins3.png"
import Footer from './Footer';
import { FaPlus } from "react-icons/fa";

const Plugins = () => {




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





  




  return (
    <>


    <NavBar />
    

    {/* SECTION-1 */}
    <section id="section-1" class="py-5   section-1">
        <div className='container'>
  <div class="row justify-content-center text-center ">
    <div class="col-12 col-md-10 col-lg-8">
      {/* <!-- First Heading --> */}
      <h2 class="fw-bold display-5 mb-4 text-dark">
        CoinRemitter Integration
      </h2>

      {/* <!-- Second Paragraph --> */}
      <p class="text-muted fs-5 mb-4">
        Our <strong>cryptocurrencies payment solution</strong> provides plugins for major website builders and SDKs to make the process of accepting Bitcoin, and cryptocurrency as payment, easy, fast and seamless. Free-to-use plugins and a quick integration process make it easy for any online business to <strong>accept payment in crypto</strong> and expand in the global market.
      </p>

      {/* <!-- Third Button --> */}
      <a href="/" class="btn btn-lg px-4 py-2 fw-semibold text-uppercase crypto-btn">
        Get Started ➝
      </a>
    </div>
  </div>
  </div>
</section>


{/* SECTION-2 */}

<section class="container py-5">
  {/* <!-- First Heading --> */}
  <div class="text-center mb-4">
    <h2 class="fw-bold">Available Crypto Payment Plugins</h2>
    <p class="text-muted">
      CoinRemitter’s open-source plugins are ready-to-use 
      <span class="fw-bold">crypto payments solutions</span> 
      to accept crypto payments on business websites. 
      We have a wide range of <span class="fw-bold">crypto payment plugins</span> 
      compatible with various platforms, which are secure, easy to use, and reliable. 
      CoinRemitter’s plugins are supported for the platforms mentioned below. 
      Also, the plugin integration process can be learnt by clicking the icon of a particular platform below.
    </p>
  </div>

  {/* <!-- First Row --> */}
  <div class="row g-4 mb-4">
    {/* <!-- Magento --> */}
    <div class="col-md-6 col-lg-3">
      <div class="plugin-card text-center p-4 shadow-sm">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Magento_Logo.svg" alt="Magento" class="plugin-img mb-3" />
        <h5 class="fw-bold">Magento 2</h5>
      </div>
    </div>

    {/* <!-- WordPress --> */}
    <div class="col-md-6 col-lg-3">
      <div class="plugin-card text-center p-4 shadow-sm">
        <img src="https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg" alt="WordPress" class="plugin-img mb-3" />
        <h5 class="fw-bold">WordPress</h5>
      </div>
    </div>

    {/* <!-- OpenCart --> */}
    <div class="col-md-6 col-lg-3">
      <div class="plugin-card text-center p-4 shadow-sm">
        <img src="https://cdn.worldvectorlogo.com/logos/opencart.svg" alt="OpenCart" class="plugin-img mb-3" />
        <h5 class="fw-bold">OpenCart</h5>
      </div>
    </div>
{/* 
    <!-- Laravel --> */}
    <div class="col-md-6 col-lg-3">
      <div class="plugin-card text-center p-4 shadow-sm">
        <img src="https://cdn.worldvectorlogo.com/logos/laravel-2.svg" alt="Laravel" class="plugin-img mb-3" />
        <h5 class="fw-bold">Laravel</h5>
      </div>
    </div>
  </div>

  {/* <!-- Second Row --> */}
  <div class="row g-4">
    {/* <!-- PHP --> */}
    <div class="col-md-6 col-lg-4">
      <div class="plugin-card text-center p-4 shadow-sm">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP" class="plugin-img mb-3" />
        <h5 class="fw-bold">PHP</h5>
      </div>
    </div>

    {/* <!-- NodeJS --> */}
    <div class="col-md-6 col-lg-4">
      <div class="plugin-card text-center p-4 shadow-sm">
        <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Node JS" class="plugin-img mb-3" />
        <h5 class="fw-bold">Node JS</h5>
      </div>
    </div>

    {/* <!-- Prestashop --> */}
    <div class="col-md-6 col-lg-4">
      <div class="plugin-card text-center p-4 shadow-sm">
        <img src="https://cdn.worldvectorlogo.com/logos/prestashop.svg" alt="Prestashop" class="plugin-img mb-3" />
        <h5 class="fw-bold">Prestashop</h5>
      </div>
    </div>
  </div>
</section>



{/* SECTION-3 */}
    <section className="container py-5">
      <div className="row align-items-center g-5">
        
        {/* Left Column: Image */}
        <div className="col-lg-6 col-md-12 text-center">
          <img src={plugin3} alt="Payment Plugins" className="img-fluid plugins-img" />
        </div>

        {/* Right Column: Text Content */}
        <div className="col-lg-6 col-md-12">
          <h2 className="fw-bold mb-3">
            Open-Source <br />
            <span className="text-dark">Payment Gateway Plugins</span>
          </h2>
          <p className="mb-3 text-muted">
            CoinRemitter provides <span className="fw-bold">payment gateway plugins</span> that are open source,
            allowing necessary modifications. After a successful integration, the ‘pay in crypto’ option will
            be displayed on the website. So customers can make crypto payments conveniently.
          </p>
          <p className="mb-3 text-muted">
            CoinRemitter has plugins for multiple platforms, which are being used in the market by almost all
            major online businesses. They’re ideal for automating the crypto payment process and making it
            convenient for businesses as well as customers.
          </p>
          <p className="mb-4 text-muted">
            Integrating CoinRemitter’s <span className="fw-bold">payment gateway plugins</span> is very easy and quick.
            They can be integrated without requiring any technical expertise in no time. However, platforms that
            are not compatible with our plugins can integrate the <span className="fw-bold">crypto API</span>.
          </p>

          {/* Button */}
          <button className="btn  fw-bold px-4 py-2 crypto-btn">
            INTEGRATION PROCESS
          </button>
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

export default Plugins
