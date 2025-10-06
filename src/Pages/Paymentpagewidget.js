import React, { useState } from "react";
import NavBar from './NavBar';
import { Container, Row, Col } from "react-bootstrap";
import paymentPage from "C:/Users/pc/Desktop/Coin/coinmiter/src/Image/payment-page8.svg";
import { FaPlus } from "react-icons/fa";


// Image Imports
import PageStyle from "C:/Users/pc/Desktop/Coin/coinmiter/src/Image/Page-Style.ed41477a.svg";
import GoalTracker from "C:/Users/pc/Desktop/Coin/coinmiter/src/Image/Goal-Tracker.fdbd9a22.svg";
import PriceFields from "C:/Users/pc/Desktop/Coin/coinmiter/src/Image/Price-Fields.67263e73.svg";
import InputFields from "C:/Users/pc/Desktop/Coin/coinmiter/src/Image/Additional-Options.9969706b.svg";
import PayButton from "C:/Users/pc/Desktop/Coin/coinmiter/src/Image/Pay-Button.1a52dba1.svg";
import AdditionalOptions from "C:/Users/pc/Desktop/Coin/coinmiter/src/Image/Additional-Options.9969706b.svg";
import Footer from './Footer';



const Paymentpagewidget = () => {

const [openIndex, setOpenIndex] = useState(null);

const toggleAccordion = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

const faqs = [
  {
    question: "How is the Payment Page different from the Payment Button?",
    answer:
      "The Payment Page offers a dedicated checkout experience, while the Payment Button is a quick way to accept payments directly.",
  },
  {
    question: "Can wholesalers use the Payment Page Widget?",
    answer:
      "Yes, wholesalers can integrate the Payment Page Widget seamlessly for bulk transactions.",
  },
  {
    question:
      "Can I accept payments without integrating the payment page into my website?",
    answer:
      "Yes, you can share the Payment Page link directly with your customers without website integration.",
  },
  {
    question: "Does the Payment Page work on mobile devices?",
    answer:
      "Yes, the Payment Page is fully responsive and works smoothly across all devices.",
  },
  {
    question: "Can I customize the Payment Page with my branding?",
    answer:
      "Absolutely! You can add your own logo, colors, and design to match your brand identity.",
  },
];





  return (
  <>

  {/* NAVBAR */}

  <NavBar />
  
  
  
  
  {/* SECTION-1 */}
   <section className="py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Column */}
          <Col lg={6} md={12} className="mb-4 mb-lg-0">
            <h2 className="fw-bold text-dark display-5">
              Accept Crypto Payments <br /> On A Dedicated Page
            </h2>
            <hr className="custom-hr my-4" />
            <p className="text-muted fs-5">
              This feature lets you accept payment in crypto with a page-like
              interface. You can create a page, link it to your site, and let
              individuals pay or donate in crypto easily. The page can be
              effortlessly created without requiring coding skills, and it
              doesn’t require any complex integration.
            </p>
            <button className="btn crypto-btn btn-lg fw-bold px-4 py-3">
              CREATE NOW
            </button>
          </Col>

          {/* Right Column */}
          <Col lg={6} md={12} className="text-center">
            <img
              src={paymentPage}
              alt="Payment Page"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>



{/* SECTION-2 */}
<section className="py-5 bg-light text-center">
  <Container>
    {/* Heading */}
    <h2 className="fw-bold text-dark mb-3 display-5">
      <span className="border-bottom border-warning">Why Use</span> CoinRemitter’s Payment Page
    </h2>
    <p className="text-muted fs-6 mb-5">
      Just like the Payment Button, this is also a versatile feature with slightly more capabilities.
      Those who want to accept crypto payments in a fixed or custom amount can use the Payment Page.
    </p>

    {/* Four Hexagon Boxes */}
    <Row className="justify-content-center g-4">
      {/* Hexagon 1 */}
      <Col lg={3} md={6} sm={12}>
        <div className="hexagon-wrap">
          <svg viewBox="0 0 331 382" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.28101 95.5515L165.781 0.57735L330.281 95.5515V285.5L165.781 380.474L1.28101 285.5V95.5515Z"
              stroke="url(#grad1)"
            />
            <defs>
              <linearGradient id="grad1" x1="165.781" y1="190.526" x2="165.781" y2="381.051">
                <stop stopOpacity="0" />
                <stop offset="1" stopColor="#000" />
              </linearGradient>
            </defs>
          </svg>
          <div className="hex-content">
            <h3 className="text-warning fw-bold display-6">100%</h3>
            <p>Anonymous Contributions</p>
          </div>
        </div>
      </Col>

      {/* Hexagon 2 */}
      <Col lg={3} md={6} sm={12}>
        <div className="hexagon-wrap">
          <svg viewBox="0 0 331 382" xmlns="http://www.w3.org/2000/svg" className="rotated">
            <path
              d="M330.281 285.5L165.781 380.474L1.28125 285.5L1.28125 95.5515L165.781 0.577454L330.281 95.5515L330.281 285.5Z"
              stroke="url(#grad2)"
            />
            <defs>
              <linearGradient id="grad2" x1="165.781" y1="190.526" x2="165.781" y2="0.0512716">
                <stop stopOpacity="0" />
                <stop offset="1" stopColor="#000" />
              </linearGradient>
            </defs>
          </svg>
          <div className="hex-content">
            <h3 className="text-warning fw-bold display-6">0%</h3>
            <p>Chargeback Risk</p>
          </div>
        </div>
      </Col>

      {/* Hexagon 3 */}
      <Col lg={3} md={6} sm={12}>
        <div className="hexagon-wrap">
          <svg viewBox="0 0 331 382" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.28101 95.5515L165.781 0.57735L330.281 95.5515V285.5L165.781 380.474L1.28101 285.5V95.5515Z"
              stroke="url(#grad3)"
            />
            <defs>
              <linearGradient id="grad3" x1="165.781" y1="190.526" x2="165.781" y2="381.051">
                <stop stopOpacity="0" />
                <stop offset="1" stopColor="#000" />
              </linearGradient>
            </defs>
          </svg>
          <div className="hex-content">
            <h3 className="text-warning fw-bold display-6">50%</h3>
            <p>Less Transaction Fees</p>
          </div>
        </div>
      </Col>

      {/* Hexagon 4 */}
      <Col lg={3} md={6} sm={12}>
        <div className="hexagon-wrap">
          <svg viewBox="0 0 331 382" xmlns="http://www.w3.org/2000/svg" className="rotated">
            <path
              d="M330.281 285.5L165.781 380.474L1.28125 285.5L1.28125 95.5515L165.781 0.577454L330.281 95.5515L330.281 285.5Z"
              stroke="url(#grad4)"
            />
            <defs>
              <linearGradient id="grad4" x1="165.781" y1="190.526" x2="165.781" y2="0.0512716">
                <stop stopOpacity="0" />
                <stop offset="1" stopColor="#000" />
              </linearGradient>
            </defs>
          </svg>
          <div className="hex-content">
            <h3 className="text-warning fw-bold display-6">100%</h3>
            <p>Borderless</p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>




{/* SECTION-3 */}
 <section className="py-5 bg-light text-center">
      <Container>
        {/* Heading */}
        <h2 className="fw-bold text-dark mb-5 display-5">
          <span className="border-bottom border-warning">Key Features</span> Of CoinRemitter’s Payment Page
        </h2>

        {/* First Row */}
        <Row className="g-4 mb-4">
          <Col lg={4} md={6} sm={12}>
            <div className="feature-card p-4 h-100">
              <h4 className="fw-bold mb-3" style={{ color: "#d97d0e" }}>Page Style</h4>
              <p className="text-dark">
                From the ‘Style’ button, you can set the appearance of your page. Here, you can set your preferred template,
                primary color, and background color.
              </p>
              <img src={PageStyle} alt="Page Style" className="img-fluid mt-3" />
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="feature-card p-4 h-100">
              <h4 className="fw-bold mb-3" style={{ color: "#d97d0e" }}>Goal Tracker</h4>
              <p className="text-dark">
                You can set an amount goal to display the funds you want to raise. Similarly, you can set a supporter goal
                to display the remaining stock.
              </p>
              <img src={GoalTracker} alt="Goal Tracker" className="img-fluid mt-3" />
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="feature-card p-4 h-100">
              <h4 className="fw-bold mb-3" style={{ color: "#d97d0e" }}>Price Fields</h4>
              <p className="text-dark">
                Here, you have three options: fixed amount, custom amount (ideal for fundraising), or quantity-based (ideal
                for bulk purchases).
              </p>
              <img src={PriceFields} alt="Price Fields" className="img-fluid mt-3" />
            </div>
          </Col>
        </Row>

        {/* Second Row */}
        <Row className="g-4">
          <Col lg={4} md={6} sm={12}>
            <div className="feature-card p-4 h-100">
              <h4 className="fw-bold mb-3" style={{ color: "#d97d0e" }}>Input Fields</h4>
              <p className="text-dark">
                You can add custom input fields if you want your customers or donors to submit their information when paying.
                Note that the Email Address field is mandatory.
              </p>
              <img src={InputFields} alt="Input Fields" className="img-fluid mt-3" />
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="feature-card p-4 h-100">
              <h4 className="fw-bold mb-3" style={{ color: "#d97d0e" }}>Pay Button</h4>
              <p className="text-dark">
                Add button label, color, default fiat currency (to consider the price), and decide whether you want to
                show/hide the price.
              </p>
              <img src={PayButton} alt="Pay Button" className="img-fluid mt-3" />
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="feature-card p-4 h-100">
              <h4 className="fw-bold mb-3" style={{ color: "#d97d0e" }}>Additional Options</h4>
              <p className="text-dark">
                You can add contact details and link your social media profiles with icons to build trust with your customers.
              </p>
              <img src={AdditionalOptions} alt="Additional Options" className="img-fluid mt-3" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>



    {/* SECTION-4 */}
       <section className="py-5" id="section-6" style={{backgroundColor: '#fff'}}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h2 className="display-5 fw-bold mb-4 text-dark">
              <span className="border-bottom border-3 d-inline-block pb-2" style={{borderColor: '#f7931a'}}>Who Can Benefit</span> from the Payment Page?
            </h2>
            <p className="lead mb-4 text-dark">
              This feature mainly focuses on businesses and NGOs that want to accept payments in a fixed or custom amount. However, anyone looking for an affordable and reliable solution can use CoinRemitter's Payment Page to accept payment in crypto.
            </p>
            <button 
              href="https://merchant.coinremitter.com/signup" 
              className="btn crypto-btn btn-lg fw-bold px-5 py-3 border-0"
            
            >
              SIGN UP NOW
            </button>
          </div>
          
          {/* Right Column - Cards with specific positioning */}
          <div className="col-lg-6">
            <div className="position-relative" style={{minHeight: '400px'}}>
              
              {/* Top Row - 3 Cards */}
              <div className="row justify-content-center mb-4">
                {/* Freelancers Card */}
                <div className="col-4">
                  <div className="card border-0 text-center bg-transparent">
                    <div className="card-body p-2">
                      <div className="p-4 mb-2 rounded" style={{backgroundColor: '#f8f9fa'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 60 60" fill="none">
                          <path d="M39.2615 23.206C44.5827 23.206 48.9121 18.8767 48.9121 13.5554C48.9121 8.23416 44.5827 3.90479 39.2615 3.90479C33.9402 3.90479 29.6108 8.23416 29.6108 13.5554C29.6108 18.8767 33.9402 23.206 39.2615 23.206Z" fill="#F7931A"></path>
                          <path d="M42.4687 28.3359H36.3374C32.1778 28.3359 28.3237 30.1725 25.7212 33.3234H35.1553C35.5921 33.3234 35.9709 33.6253 36.0693 34.05L39.3871 48.3909H45.2709C46.2693 48.3909 47.0831 47.5219 47.0831 46.4541V41.9653C47.0831 41.4478 47.5031 41.0278 48.0206 41.0278C48.5381 41.0278 48.9581 41.4478 48.9581 41.9653V46.4541C48.9581 48.5559 47.3043 50.2659 45.2709 50.2659H39.8212L41.1703 56.0953H48.8268C52.9199 56.0953 56.249 52.7653 56.249 48.6731V42.1172C56.249 34.5187 50.0681 28.3359 42.4687 28.3359Z" fill="#F7931A"></path>
                          <path d="M23.8877 35.1985H3.99023L8.8268 56.0954H39.2459L34.4102 35.1985H23.8877Z" fill="#F7931A"></path>
                        </svg>
                      </div>
                      <h6 className="card-title fw-medium text-dark mb-0">Freelancers</h6>
                    </div>
                  </div>
                </div>
                
                {/* Wholesalers Card */}
                <div className="col-4">
                  <div className="card border-0 text-center bg-transparent">
                    <div className="card-body p-2">
                      <div className="p-4 mb-2 rounded" style={{backgroundColor: '#f8f9fa'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 60 60" fill="none">
                          <path d="M43.206 1.875C39.2354 1.875 36.7017 4.20961 35.2736 6.36398C33.6186 3.90234 30.8944 1.875 27.3118 1.875C21.9199 1.875 17.6953 6.65238 17.6953 12.4219C17.6953 19.3038 23.6827 22.4849 34.0204 31.4539L35.2734 32.4513L36.324 31.4539C46.6452 22.504 52.8241 19.0332 52.8241 12.4219C52.8241 6.65238 48.5995 1.875 43.206 1.875Z" fill="#F7931A"></path>
                          <path d="M7.14844 37.0312H0V58.125H7.14844V37.0312Z" fill="#F7931A"></path>
                          <path d="M50.4025 42.2695L42.1991 47.5781H22.9688V44.0625C23.4916 44.0625 38.2516 44.0625 38.7891 44.0625V37.0312C38.4107 37.0312 28.4662 37.0312 27.8203 37.0312C26.8358 37.0312 26.4492 36.3281 25.8164 35.871C23.5311 33.8319 20.6134 32.8125 17.6953 32.8125C15.6021 32.8125 13.1017 33.433 10.6641 34.9761V58.125H41.25L60 44.0625C57.8555 41.0391 53.6367 40.125 50.4025 42.2695Z" fill="#F7931A"></path>
                        </svg>
                      </div>
                      <h6 className="card-title fw-medium text-dark mb-0">Wholesalers</h6>
                    </div>
                  </div>
                </div>
                
                {/* Donation Platforms Card */}
                <div className="col-4">
                  <div className="card border-0 text-center bg-transparent">
                    <div className="card-body p-2">
                      <div className="p-4 mb-2 rounded" style={{backgroundColor: '#f8f9fa'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 60 60" fill="none">
                          <path d="M43.206 1.875C39.2354 1.875 36.7017 4.20961 35.2736 6.36398C33.6186 3.90234 30.8944 1.875 27.3118 1.875C21.9199 1.875 17.6953 6.65238 17.6953 12.4219C17.6953 19.3038 23.6827 22.4849 34.0204 31.4539L35.2734 32.4513L36.324 31.4539C46.6452 22.504 52.8241 19.0332 52.8241 12.4219C52.8241 6.65238 48.5995 1.875 43.206 1.875Z" fill="#F7931A"></path>
                          <path d="M7.14844 37.0312H0V58.125H7.1484V37.0312Z" fill="#F7931A"></path>
                          <path d="M50.4025 42.2695L42.1991 47.5781H22.9688V44.0625C23.4916 44.0625 38.2516 44.0625 38.7891 44.0625V37.0312C38.4107 37.0312 28.4662 37.0312 27.8203 37.0312C26.8358 37.0312 26.4492 36.3281 25.8164 35.871C23.5311 33.8319 20.6134 32.8125 17.6953 32.8125C15.6021 32.8125 13.1017 33.433 10.6641 34.9761V58.125H41.25L60 44.0625C57.8555 41.0391 53.6367 40.125 50.4025 42.2695Z" fill="#F7931A"></path>
                        </svg>
                      </div>
                      <h6 className="card-title fw-medium text-dark mb-0">Donation Platforms</h6>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row - 2 Cards (centered) */}
              <div className="row justify-content-center">
                {/* Event Organizers Card */}
                <div className="col-4">
                  <div className="card border-0 text-center bg-transparent">
                    <div className="card-body p-2">
                      <div className="p-4 mb-2 rounded" style={{backgroundColor: '#f8f9fa'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 60 60" fill="none">
                          <path d="M23.2301 39.4629L14.4536 55.0488H45.546L36.7695 39.4629H23.2301Z" fill="#F7931A"></path>
                          <path d="M56.4844 26.2699C58.5303 25.5443 60 23.5904 60 21.2988C60 18.3911 57.6343 16.0254 54.7266 16.0254C51.8188 16.0254 49.4531 18.3911 49.4531 21.2988C49.4531 22.8227 50.1036 24.197 51.1405 25.1605C50.0404 25.8498 48.6034 26.6748 46.8874 27.4946C43.0686 29.3191 37.0386 31.4941 30 31.4941C22.9615 31.4941 16.9316 29.3191 13.1128 27.4946C11.3966 26.6747 9.95977 25.8498 8.85961 25.1605C9.89648 24.1969 10.5469 22.8227 10.5469 21.2988C10.5469 18.3911 8.18121 16.0254 5.27344 16.0254C2.36566 16.0254 0 18.3911 0 21.2988C0 23.5904 1.46965 25.5443 3.51562 26.2699V46.9043H0V55.0488H10.5469V46.9043H7.03125V28.1658C8.20184 28.897 9.70406 29.757 11.4942 30.6175C15.6625 32.6213 22.2567 35.0096 30.0002 35.0096C37.7436 35.0096 44.3379 32.6211 48.5061 30.6175C50.2961 29.757 51.7983 28.8971 52.9688 28.1659V46.9043H49.4531V55.0488H60V46.9043H56.4844V26.2699Z" fill="#F7931A"></path>
                          <path d="M24.4239 22.1129L30 20.1301L35.5762 22.1129L35.4135 16.197L39.0225 11.5064L33.3457 9.83297L30 4.95117L26.6543 9.83297L20.9775 11.5064L24.5866 16.197L24.4239 22.1129Z" fill="#F7931A"></path>
                        </svg>
                      </div>
                      <h6 className="card-title fw-medium text-dark mb-0">Event Organizers</h6>
                    </div>
                  </div>
                </div>
                
                {/* Consultant & Coaches Card */}
                <div className="col-4">
                  <div className="card border-0 text-center bg-transparent">
                    <div className="card-body p-2">
                      <div className="p-4 mb-2 rounded" style={{backgroundColor: '#f8f9fa'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 60 60" fill="none">
                          <g clipPath="url(#clip0_12638_975)">
                            <path d="M18.2446 36.4453H14.3848V30.4706C14.3848 28.5269 13.6089 26.7622 12.3518 25.4667C14.4987 24.0399 15.9174 21.6005 15.9174 18.8347C15.9174 14.4465 12.3473 10.876 7.95868 10.876C3.5701 10.876 0 14.4461 0 18.8347C0 21.2256 1.0611 23.3716 2.73514 24.8318C1.07071 26.1502 0 28.1868 0 30.4706V48.2666H11.7334V60H23.5547V41.7553C23.5547 38.8275 21.1725 36.4453 18.2446 36.4453Z" fill="#F7931A"></path>
                            <path d="M57.2649 24.8318C58.9389 23.3716 60 21.2256 60 18.8347C60 14.4461 56.4299 10.876 52.0413 10.876C47.6527 10.876 44.0826 14.4461 44.0826 18.8347C44.0826 21.6 45.5013 24.0399 47.6482 25.4667C46.3911 26.7622 45.6152 28.5269 45.6152 30.4701V36.4453H41.7554C38.8275 36.4453 36.4453 38.8275 36.4453 41.7553V60H48.2666V48.2666H60V30.4706C60 28.1868 58.9293 26.1502 57.2649 24.8318Z" fill="#F7931A"></path>
                            <path d="M41.25 14.2575V4.96078C41.25 2.22519 39.0248 0 36.2892 0H23.7108C20.9752 0 18.75 2.22519 18.75 4.96078V14.2575C18.75 16.9931 20.9752 19.2188 23.7108 19.2188H25.8403L30 26.4235L34.1597 19.2188H36.2892C39.0248 19.2188 41.25 16.9931 41.25 14.2575Z" fill="#F7931A"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_12638_975">
                              <rect width="60" height="60" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h6 className="card-title fw-medium text-dark mb-0">Consultant & Coaches</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* SECTION-5 */}
      
     <section className="py-5 bg-light" id="section-7">
      <div className="container">
        <div className="row justify-content-between">
      
          {/* Right Column - Heading and Button */}
          <div className="col-lg-7 col-md-6">
            <div className="position-relative">
              {/* Vertical Green Line */}
              <div 
                className="position-absolute start-0 top-0 h-100 d-none d-md-block" 
                style={{
                  width: '2px',
                  backgroundColor: '#21bb5a',
                  left: '60px'
                }}
              ></div>

              {/* Step 1 */}
              <div className="card border-0 shadow-sm mb-4 position-relative">
                <div className="card-body p-0">
                  <div className="row g-0 align-items-center">
                    <div className="col-auto">
                      <div 
                        className="d-flex align-items-center justify-content-center text-white fw-bold display-6"
                        style={{
                          width: '80px',
                          height: '100%',
                          backgroundColor: '#21bb5a',
                          minHeight: '120px'
                        }}
                      >
                        01
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-8">
                            <h4 className="fw-bold text-dark mb-2">Set Page Appearance</h4>
                            <p className="text-muted mb-0">
                              Click Style or a device to translate, print or review on if background exists. 
                              Also, we have something to address to you and your URL.
                            </p>
                          </div>
                          <div className="col-md-4 text-center text-md-end mt-3 mt-md-0">
                            <div className="bg-light rounded p-3 d-inline-block">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 72 73" fill="none">
                                <g clipPath="url(#clip0_12630_787)">
                                  <path d="M0 17.375H72V0.5H0V17.375ZM50.7656 6.82812H63.4219V11.0469H50.7656V6.82812ZM25.4531 6.82812H29.6719V11.0469H25.4531V6.82812ZM17.0156 6.82812H21.2344V11.0469H17.0156V6.82812ZM8.57812 6.82812H12.7969V11.0469H8.57812V6.82812Z" fill="#6c757d"></path>
                                  <path d="M52.5461 42.1053L49.5622 39.1208L33.4562 55.2268L31.4067 60.2613L36.4412 58.2118L52.5461 42.1053Z" fill="#6c757d"></path>
                                  <path d="M12.7969 32.2812H29.6719V40.7188H12.7969V32.2812Z" fill="#6c757d"></path>
                                  <path d="M58.5132 36.1376L55.5283 33.1548L52.5449 36.1381L55.5288 39.1226L58.5132 36.1376Z" fill="#6c757d"></path>
                                  <path d="M0 72.5H72V21.5938H0V72.5ZM63.4219 66.0312H50.7656V61.8125H63.4219V66.0312ZM63.4219 57.5938H50.7656V53.375H63.4219V57.5938ZM64.4788 36.1375L38.4269 61.9564L23.7184 67.9489L30.1723 52.545L55.5282 27.1891L64.4788 36.1375ZM8.57812 28.0625H33.8906V44.9375H8.57812V28.0625ZM8.57812 53.375H21.2344V57.5938H8.57812V53.375ZM8.57812 61.8125H21.2344V66.0312H8.57812V61.8125Z" fill="#6c757d"></path>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="card border-0 shadow-sm mb-4 position-relative">
                <div className="card-body p-0">
                  <div className="row g-0 align-items-center">
                    <div className="col-auto">
                      <div 
                        className="d-flex align-items-center justify-content-center text-white fw-bold display-6"
                        style={{
                          width: '80px',
                          height: '100%',
                          backgroundColor: '#21bb5a',
                          minHeight: '120px'
                        }}
                      >
                        02
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-8">
                            <h4 className="fw-bold text-dark mb-2">Add a Goal Tracker</h4>
                            <p className="text-muted mb-0">
                              For more recent tasks on next document, 2014/10 is displayed on a streaming display, 
                              downloaded in the Cloud Tracker with the correct information.
                            </p>
                          </div>
                          <div className="col-md-4 text-center text-md-end mt-3 mt-md-0">
                            <div className="bg-light rounded p-3 d-inline-block">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 72 73" fill="none">
                                <g clipPath="url(#clip0_12637_794)">
                                  <path d="M36 40.8594C38.4076 40.8594 40.3594 38.9076 40.3594 36.5C40.3594 34.0924 38.4076 32.1406 36 32.1406C33.5924 32.1406 31.6406 34.0924 31.6406 36.5C31.6406 38.9076 33.5924 40.8594 36 40.8594Z" fill="#6c757d"></path>
                                  <path d="M36 22.6484C28.3622 22.6484 22.1484 28.8622 22.1484 36.5C22.1484 44.1378 28.3622 50.3516 36 50.3516C43.6378 50.3516 49.8516 44.1378 49.8516 36.5C49.8516 28.8622 43.6378 22.6484 36 22.6484ZM36 45.0781C31.2699 45.0781 27.4219 41.2301 27.4219 36.5C27.4219 31.7699 31.2699 27.9219 36 27.9219C40.7301 27.9219 44.5781 31.7699 44.5781 36.5C44.5781 41.2301 40.7301 45.0781 36 45.0781Z" fill="#6c757d"></path>
                                  <path d="M36 13.1562C23.1282 13.1562 12.6562 23.6282 12.6562 36.5C12.6562 49.3718 23.1282 59.8438 36 59.8438C48.8718 59.8438 59.3438 49.3718 59.3438 36.5C59.3438 23.6282 48.8718 13.1562 36 13.1562ZM36 54.5703C26.036 54.5703 17.9297 46.464 17.9297 36.5C17.9297 26.536 26.036 18.4297 36 18.4297C45.964 18.4297 54.0703 26.536 54.0703 36.5C54.0703 46.464 45.964 54.5703 36 54.5703Z" fill="#6c757d"></path>
                                  <path d="M36 0.5C16.1177 0.5 0 16.6177 0 36.5C0 43.0602 1.75556 49.2098 4.82119 54.5066L0 72.5L17.9934 67.6788C23.2902 70.7444 29.4398 72.5 36 72.5C55.8823 72.5 72 56.3823 72 36.5C72 16.6177 55.8823 0.5 36 0.5ZM36 64.0625C20.802 64.0625 8.4375 51.698 8.4375 36.5C8.4375 21.302 20.802 8.9375 36 8.9375C51.198 8.9375 63.5625 21.302 63.5625 36.5C63.5625 51.698 51.198 64.0625 36 64.0625Z" fill="#6c757d"></path>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="card border-0 shadow-sm mb-4 position-relative">
                <div className="card-body p-0">
                  <div className="row g-0 align-items-center">
                    <div className="col-auto">
                      <div 
                        className="d-flex align-items-center justify-content-center text-white fw-bold display-6"
                        style={{
                          width: '80px',
                          height: '100%',
                          backgroundColor: '#21bb5a',
                          minHeight: '120px'
                        }}
                      >
                        03
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-8">
                            <h4 className="fw-bold text-dark mb-2">Set Pricing</h4>
                            <p className="text-muted mb-0">
                              Everyone makes them Share Paid or using Final Answer (if he used missing or from Mike Obama)? 
                              For full details of options, You can read the price from Customer Details Amount for fundraising.
                            </p>
                          </div>
                          <div className="col-md-4 text-center text-md-end mt-3 mt-md-0">
                            <div className="bg-light rounded p-3 d-inline-block">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 72 73" fill="none">
                                <g clipPath="url(#clip0_12638_801)">
                                  <path d="M56.1493 13.9583C55.5363 13.9583 54.9235 14.1915 54.4569 14.6581C54.0048 15.1101 53.7559 15.7113 53.7559 16.3506C53.7559 16.9899 54.0049 17.591 54.4569 18.0431C55.39 18.9763 56.9084 18.9764 57.8418 18.0431C58.2939 17.5911 58.5428 16.9901 58.5428 16.3506C58.5428 15.7113 58.2938 15.1102 57.8418 14.6581C57.3752 14.1915 56.7622 13.9583 56.1493 13.9583Z" fill="#6c757d"></path>
                                  <path d="M62.7985 0.5H39.1467L0 39.6467L32.8533 72.5L72 33.3533V9.70153L62.7985 0.5ZM15.9289 41.6378L36.6365 20.9302L39.6231 23.9168L18.9155 44.6244L15.9289 41.6378ZM21.9023 47.611L34.6455 34.8679L37.6321 37.8545L24.889 50.5977L21.9023 47.611ZM30.8623 56.5711L27.8756 53.5845L44.601 36.8591L47.5876 39.8457L30.8623 56.5711ZM60.8285 21.0297C59.5386 22.3197 57.844 22.9648 56.1494 22.9648C54.4549 22.9648 52.7604 22.3197 51.4704 21.0297C50.2206 19.7801 49.5321 18.1181 49.5321 16.3506C49.5321 14.5831 50.2205 12.9213 51.4704 11.6715C54.0503 9.09161 58.2485 9.09147 60.8286 11.6715C62.0785 12.9213 62.7669 14.5831 62.7669 16.3506C62.7669 18.1181 62.0783 19.7799 60.8285 21.0297Z" fill="#6c757d"></path>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="card border-0 shadow-sm mb-4 position-relative">
                <div className="card-body p-0">
                  <div className="row g-0 align-items-center">
                    <div className="col-auto">
                      <div 
                        className="d-flex align-items-center justify-content-center text-white fw-bold display-6"
                        style={{
                          width: '80px',
                          height: '100%',
                          backgroundColor: '#21bb5a',
                          minHeight: '120px'
                        }}
                      >
                        04
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-8">
                            <h4 className="fw-bold text-dark mb-2">Set Customer Inputs</h4>
                            <p className="text-muted mb-0">
                              Let customers submit their information through various input fields, including the mandatory Client Address type [date].
                            </p>
                          </div>
                          <div className="col-md-4 text-center text-md-end mt-3 mt-md-0">
                            <div className="bg-light rounded p-3 d-inline-block">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 72 73" fill="none">
                                <path d="M12.6567 63.3574H59.343V67.3024H12.6567V63.3574Z" fill="#6c757d"></path>
                                <path d="M12.6567 36.7776H59.343V41.4188H12.6567V36.7776Z" fill="#6c757d"></path>
                                <path d="M18.5625 5.69775H72.0001V14.1358H18.5625V5.69775Z" fill="#6c757d"></path>
                                <path d="M0 67.3026H8.4381V59.1388H63.5619V67.3026H72V18.3547H0L0 67.3026ZM63.5619 45.6378H8.4381V32.559H63.5619V45.6378ZM8.43795 23.6991H36V27.9178H8.43795V23.6991ZM36 50.2788V54.4976H8.43795V50.2788H36Z" fill="#6c757d"></path>
                                <path d="M0 5.69775H14.3437V14.1358H0V5.69775Z" fill="#6c757d"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="card border-0 shadow-sm mb-4 position-relative">
                <div className="card-body p-0">
                  <div className="row g-0 align-items-center">
                    <div className="col-auto">
                      <div 
                        className="d-flex align-items-center justify-content-center text-white fw-bold display-6"
                        style={{
                          width: '80px',
                          height: '100%',
                          backgroundColor: '#21bb5a',
                          minHeight: '120px'
                        }}
                      >
                        05
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-8">
                            <h4 className="fw-bold text-dark mb-2">Set Up Button</h4>
                            <p className="text-muted mb-0">
                              Set the Button button on the browser to appearances. Your custom Quick-to-write tool does not change any result in the material that currency.
                            </p>
                          </div>
                          <div className="col-md-4 text-center text-md-end mt-3 mt-md-0">
                            <div className="bg-light rounded p-3 d-inline-block">
                              <svg width="40" height="40" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="71" height="30" transform="translate(0.5 12)" fill="#6c757d"></rect>
                                <path d="M7.78894 31V22.252H11.7609C13.6929 22.252 14.9649 23.332 14.9649 25.216C14.9649 26.992 13.8129 28.216 11.7609 28.216H10.2249V31H7.78894ZM11.3289 24.292H10.2249V26.356H11.3289C11.8449 26.356 12.4929 26.248 12.4929 25.312C12.4929 24.412 11.8449 24.292 11.3289 24.292ZM14.4487 31L17.1727 22.252H20.6407L23.3647 31H20.8327L20.3767 29.44H17.4367L16.9807 31H14.4487ZM17.9767 27.592H19.8367L19.3207 25.828L18.9487 24.436H18.8647L18.4927 25.828L17.9767 27.592ZM25.2009 31V27.772L21.9609 22.252H24.7329L26.3649 25.396H26.4609L28.1289 22.252H30.8889L27.6369 27.772V31H25.2009ZM34.1678 31V22.252H37.0358L39.8798 27.616H39.9758L39.8918 24.952V22.252H42.2318V31H39.5318L36.6878 25.828H36.5918L36.6518 28.168V31H34.1678ZM47.8907 31.12C45.2147 31.12 43.4267 29.536 43.4267 26.62C43.4267 23.716 45.2147 22.132 47.8907 22.132C50.5787 22.132 52.3667 23.716 52.3667 26.62C52.3667 29.536 50.5787 31.12 47.8907 31.12ZM47.8907 29.056C49.0787 29.056 49.8707 28.348 49.8707 26.62C49.8707 24.904 49.0787 24.196 47.8907 24.196C46.7147 24.196 45.9227 24.892 45.9227 26.62C45.9227 28.36 46.7147 29.056 47.8907 29.056ZM54.5824 31L52.8064 22.252H55.4944L56.1064 26.2L56.3944 28.348H56.5024L57.4264 22.252H60.3784L61.3504 28.372H61.4464L61.6984 26.236L62.2744 22.252H64.9624L63.1864 31H59.8744L58.9504 25.6H58.8544L57.8944 31H54.5824Z" fill="white"></path>
                                <path d="M65 50.7096L44.014 32L44 59.6412L50.3683 53.7335L54.1086 62L59.9441 59.5181L56.2038 51.2516L65 50.7096Z" fill="#6c757d" stroke="white" strokeWidth="2"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="card border-0 shadow-sm mb-4 position-relative">
                <div className="card-body p-0">
                  <div className="row g-0 align-items-center">
                    <div className="col-auto">
                      <div 
                        className="d-flex align-items-center justify-content-center text-white fw-bold display-6"
                        style={{
                          width: '80px',
                          height: '100%',
                          backgroundColor: '#21bb5a',
                          minHeight: '120px'
                        }}
                      >
                        06
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-8">
                            <h4 className="fw-bold text-dark mb-2">Add Payment Options</h4>
                            <p className="text-muted mb-0">
                              There are some time that users would be notified payments. By converting more workload different currencies, 
                              you can provide an additional amount option so your customers.
                            </p>
                          </div>
                          <div className="col-md-4 text-center text-md-end mt-3 mt-md-0">
                            <div className="bg-light rounded p-3 d-inline-block">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 72 73" fill="none">
                                <path d="M44.8163 40.7188H0V49.1562H42.4688C42.4688 46.0691 43.3627 43.211 44.8163 40.7188Z" fill="#6c757d"></path>
                                <path d="M46.6875 49.1562C46.6875 56.1462 52.3538 61.8125 59.3438 61.8125C66.3337 61.8125 72 56.1462 72 49.1562C72 42.1663 66.3337 36.5 59.3438 36.5C52.3538 36.5 46.6875 42.1663 46.6875 49.1562ZM65.6719 47.0469V51.2656H61.4531V55.4844H57.2344V51.2656H53.0156V47.0469H57.2344V42.8281H61.4531V47.0469H65.6719Z" fill="#6c757d"></path>
                                <path d="M59.3438 32.2812C60.8089 32.2812 62.206 32.5279 63.5625 32.8805V11.1875H0V36.5H48.3007C51.2685 33.9073 55.1029 32.2812 59.3438 32.2812ZM21.2344 25.9531H8.57812V21.7344H21.2344V25.9531ZM31.7812 30.1719C28.2918 30.1719 25.4531 27.3332 25.4531 23.8438C25.4531 20.3543 28.2918 17.5156 31.7812 17.5156C35.2707 17.5156 38.1094 20.3543 38.1094 23.8438C38.1094 27.3332 35.2707 30.1719 31.7812 30.1719ZM42.4688 21.7344H55.125V25.9531H42.4688V21.7344Z" fill="#6c757d"></path>
                                <path d="M31.7812 25.9531C32.9462 25.9531 33.8906 25.0087 33.8906 23.8438C33.8906 22.6788 32.9462 21.7344 31.7812 21.7344C30.6163 21.7344 29.6719 22.6788 29.6719 23.8438C29.6719 25.0087 30.6163 25.9531 31.7812 25.9531Z" fill="#6c757d"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="card border-0 shadow-sm mb-4 position-relative">
                <div className="card-body p-0">
                  <div className="row g-0 align-items-center">
                    <div className="col-auto">
                      <div 
                        className="d-flex align-items-center justify-content-center text-white fw-bold display-6"
                        style={{
                          width: '80px',
                          height: '100%',
                          backgroundColor: '#21bb5a',
                          minHeight: '120px'
                        }}
                      >
                        07
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-4">
                        <div className="row align-items-center">
                          <div className="col-md-8">
                            <h4 className="fw-bold text-dark mb-2">Get the Page URL</h4>
                            <p className="text-muted mb-0">
                              Unless they indicate, Payments' Page doesn't provide word/winner code. Instead, it purchases URL to link 
                              the page without platform or share with customers individually.
                            </p>
                          </div>
                          <div className="col-md-4 text-center text-md-end mt-3 mt-md-0">
                            <div className="bg-light rounded p-3 d-inline-block">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 72 73" fill="none">
                                <path d="M0 5H5.83594V11.8906H0V5Z" fill="#6c757d"></path>
                                <path d="M10.0547 5H15.8906V11.8906H10.0547V5Z" fill="#6c757d"></path>
                                <path d="M31.3546 37.4229L34.4718 34.3057C32.6837 32.5787 29.8165 32.2239 27.9423 34.0981L18.7247 43.3158C16.9818 45.0589 16.9818 47.8949 18.7247 49.6378L22.123 53.0361C23.8661 54.779 26.702 54.779 28.4449 53.0361L31.5623 49.9187C28.217 46.4934 27.8317 40.9459 31.3546 37.4229Z" fill="#6c757d"></path>
                                <path d="M20.1094 5H72V11.8906H20.1094V5Z" fill="#6c757d"></path>
                                <path d="M0 16.1094V68H72V16.1094H0ZM56.2586 43.8915L47.0409 53.1092C45.3998 54.7503 43.2177 55.6543 40.8968 55.6543C38.4899 55.6543 36.1976 54.6454 34.5452 52.9017L31.4279 56.0189C29.7342 57.7126 27.5086 58.5598 25.2838 58.5598C23.0584 58.5598 20.8339 57.7131 19.1398 56.0189L15.7414 52.6205C12.3536 49.2327 12.3536 43.7202 15.7414 40.3325L24.9591 31.1148C28.4444 27.6294 34.0484 27.9694 37.4548 31.3223L40.572 28.205C42.2132 26.5639 44.3952 25.6599 46.716 25.6599C49.0369 25.6599 51.219 26.5637 52.86 28.205L56.2583 31.6033C59.6462 34.9914 59.6462 40.5039 56.2586 43.8915Z" fill="#6c757d"></path>
                                <path d="M34.3374 46.728L34.5451 46.9357L37.6625 43.8185C39.5265 41.9543 39.2904 39.0507 37.4548 37.2888L34.3376 40.4061C32.5945 42.149 32.5945 44.9849 34.3374 46.728Z" fill="#6c757d"></path>
                                <path d="M49.877 31.1883C49.0326 30.344 47.9102 29.8789 46.716 29.8789C45.5218 29.8789 44.3992 30.344 43.5549 31.1883L40.4376 34.3055C43.7828 37.7307 44.1681 43.2782 40.6452 46.8013L37.5278 49.9185C39.3167 51.6461 42.1829 52.0002 44.0573 50.1261L53.275 40.9084C55.0179 39.1655 55.0179 36.3294 53.275 34.5865L49.877 31.1883Z" fill="#6c757d"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

             
                 {/* Left Column - Steps Cards */}
          <div className="col-lg-5 col-md-6 mb-5 mb-lg-0">
            <div >
              <h2 className="display-5 fw-bold mb-4 text-dark">
                <span className="border-bottom border-3 d-inline-block pb-2" style={{borderColor: '#f7931a'}}>
                  7 Easy Steps to Accept
                </span>
                <span className="d-block mt-2">Crypto Payments With the Payment Page</span>
              </h2>
              <a 
                href="https://merchant.coinremitter.com/signup" 
                className="btn crypto-btn btn-lg fw-bold px-5 py-3 border-0"
               
              >
                LEARN MORE
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>



    {/* <!-- SECTION-4: FAQ --> */}
<section className="container py-5">
  {/* Heading */}
  <div className="text-center mb-5">
    <h2 className="fw-bold">
      Payment Page FAQs
    </h2>
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











  {/* FOOTER */}
  
  <Footer />
  
  
  
  
  
  
  
  
  
  
  
  
  </>
  )
}

export default Paymentpagewidget
