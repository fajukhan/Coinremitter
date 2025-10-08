import React, { useRef } from 'react';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import NavBar from './NavBar';
import blogBanner from "../Image/blog-banner.png";
import blogBanner1 from "../Image/blog-banner-1.png";
import blogBanner3 from "../Image/blog-banner-3.png";
import blogBanner4 from "../Image/blog-banner-4.png";

import blogBanner7 from "../Image/blog-banner-7.png";
import securityAlert from "../Image/Security-Alert.png";
import litecoinVsBitcoin from "../Image/Litecoin-vs-Bitcoin-Cash-2.png";
import blog24 from "../Image/blog-banner-24-min.png";
import blog28 from "../Image/blog-banner-28.png";
import business2025 from "../Image/Business-in-2025.png";
import blog33 from "../Image/blog-banner-33-min.png";
import blog21 from "../Image/blog-banner-21-min.png";
import blog22 from "../Image/blog-banner-22-min-1.png";
import blog42 from "../Image/blog-banner-42.png";
import coinremitterlog from "../Image/coinremitterlog.png";
import today from "../Image/today.png";
import cryoPayments from "../Image/cryo-payments.png";
import information23 from "../Image/infromation-23.png";

import Joomla2 from '../Image/Joomla-2.png';
import Bloer20 from '../Image/bloer-20.png';
import Regulutton from '../Image/Regulutton.png';
import The25 from '../Image/The-25.png';
import BlogBan30 from '../Image/blog-ban30.png';
import BlogBa31 from '../Image/blog-ba31.png';
import Footer from './Footer';





const categories = [
  "BLOCKCHAIN",
  "BUG BOUNTY",
  "COIN LISTING",
  "CRYPTO FOR E-COMMERCE",
  "CRYPTO FOR TWITTER",
  "CRYPTO PAYMENT",
];

const Blogs = () => {

 const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
      }
    }
  };



  return (
    <>



     <NavBar />



    {/* SECTION-1 */}
    <section className='blog-section'> 
      <div className="container py-5 ">
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="fw-bold blog-heading">Latest Blogs</h2>
        <div className="underline"></div>
      </div>

      {/* Row: Categories + Search */}
      <div className="row align-items-center">
        {/* Categories with scroll arrows */}
        <div className="col-md-8 d-flex align-items-center">
          <button className="arrow-btn me-2" onClick={() => scroll("left")}>
            <FaChevronLeft />
          </button>
          <div className="scroll-container flex-grow-1" ref={scrollRef}>
            {categories.map((category, index) => (
              <button key={index} className="category-btn">
                {category}
              </button>
            ))}
          </div>
          <button className="arrow-btn ms-2" onClick={() => scroll("right")}>
            <FaChevronRight />
          </button>
        </div>

        {/* Search Box */}
        <div className="col-md-4 mt-3 mt-md-0">
          <div className="search-box w-100">
            <input type="text" placeholder="Search..." />
            <FaSearch className="search-icon" />
          </div>
        </div>
      </div>
    </div>
    </section>

    {/* SECTION-2 */}
     <section className="container py-5">
      <div className="row g-4">
        {/* Left Column */}
        <div className="col-lg-3 col-md-6">
          <div className="blog-card mb-4">
            <img src={blogBanner7} className="img-fluid rounded" alt="" />
            <p className="blog-category">CRYPTO PAYMENTS</p>
            <h6 className="fw-bold">
              Top 5 Altcoins to Accept Crypto Payments with CoinRemitter
            </h6>
            <small className="text-muted">Aug 08, 2025 – Tony</small>
          </div>

          <div className="blog-card mb-4">
            <img src={blogBanner4} className="img-fluid rounded" alt="" />
            <p className="blog-category">CRYPTO PAYMENTS</p>
            <h6 className="fw-bold">
              Cryptocurrency Payments Then and Now: What’s Changed?
            </h6>
            <small className="text-muted">Jul 28, 2025 – Tony</small>
          </div>

          <div className="blog-card">
            <img src={blogBanner4} className="img-fluid rounded" alt="" />
            <p className="blog-category">CRYPTO PAYMENTS</p>
            <h6 className="fw-bold">
              How Cryptocurrency Payments Became More Accessible in 2025
            </h6>
            <small className="text-muted">Jul 25, 2025 – Tony</small>
          </div>
        </div>

        {/* Middle Column */}
        <div className="col-lg-6 col-md-12">
          <div className="main-blog text-center p-3 border rounded shadow-sm">
            <img
              src={securityAlert}
              className="img-fluid rounded mb-3"
              alt=""
            />
            <p className="blog-category">CRYPTOCURRENCY</p>
            <h3 className="fw-bold">
              Security Alert: Protect Your CoinRemitter Account From Possible
              Scams
            </h3>
            <p className="text-muted">
              Cryptocurrency payments are now on par with traditional payments.
              With this popularity, scammers are also finding new ways to trick
              users. Though our crypto payment processor provides top-of-the-line
              security features, it is still important to know how to keep your
              account safe. In this article, we will help you understand the
              common scams and the [...]
            </p>
            <small className="text-muted d-block mb-3">Aug 26, 2025 – Tony</small>
            <a href="/cryptonews" className="btn crypto-btn btn-lg fw-bold px-4 py-3 ">
              READ MORE
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-3 col-md-6">
          <div className="blog-card mb-4">
            <img src={blogBanner3} className="img-fluid rounded" alt="" />
            <p className="blog-category">CRYPTO PAYMENTS</p>
            <h6 className="fw-bold">
              Stablecoins: The Safest Option to Accept Crypto Payments
            </h6>
            <small className="text-muted">Jul 21, 2025 – Tony</small>
          </div>

          <div className="blog-card mb-4">
            <img src={blogBanner1} className="img-fluid rounded" alt="" />
            <p className="blog-category">CRYPTOCURRENCY</p>
            <h6 className="fw-bold">
              Cryptocurrency Donations: The Future of Fundraising
            </h6>
            <small className="text-muted">Jul 18, 2025 – Tony</small>
          </div>

          <div className="blog-card">
            <img src={blogBanner} className="img-fluid rounded" alt="" />
            <p className="blog-category">CRYPTO PAYMENTS</p>
            <h6 className="fw-bold">
              5 Benefits of Accepting Bitcoin Payments With Low Fees
            </h6>
            <small className="text-muted">Jul 16, 2025 – Tony</small>
          </div>
        </div>
      </div>
    </section>


    {/* SECTION-3 */}
     <section className="container py-5">
      {/* Cryptocurrency Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold section-heading">Cryptocurrency</h2>
        <a href="/" className="browse-more">
          Browser More →
        </a>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-6 col-lg-3">
          <div className="blog-card">
            <img src={litecoinVsBitcoin} className="img-fluid" alt="" />
            <h6 className="fw-bold mt-2">
              Litecoin vs Bitcoin Cash: Key Differences Between Bitcoin’s Most Popular Forks
            </h6>
            <p className="blog-category">CRYPTOCURRENCY</p>
            <small className="text-muted">Jul 04, 2025 – Tony</small>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="blog-card">
            <img src={blog24} className="img-fluid" alt="" />
            <h6 className="fw-bold mt-2">
              What is CoinRemitter’s “Payment Page Widget”? How to Accept Payment in Crypto Using It
            </h6>
            <p className="blog-category">CRYPTOCURRENCY</p>
            <small className="text-muted">Jun 10, 2025 – Tony</small>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="blog-card">
            <img src={blog28} className="img-fluid" alt="" />
            <h6 className="fw-bold mt-2">
              Why More EU Companies Are Accepting Stablecoins Using CoinRemitter
            </h6>
            <p className="blog-category">CRYPTOCURRENCY</p>
            <small className="text-muted">Mar 28, 2025 – Tony</small>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="blog-card">
            <img src={blog33} className="img-fluid" alt="" />
            <h6 className="fw-bold mt-2">
              Top 5 Cryptocurrencies to Accept Payments in 2025
            </h6>
            <p className="blog-category">CRYPTOCURRENCY</p>
            <small className="text-muted">Mar 21, 2025 – Tony</small>
          </div>
        </div>
      </div>

      {/* Tutorials Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold section-heading">Tutorials</h2>
        <a href="/" className="browse-more">
          Browser More →
        </a>
      </div>

      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <div className="blog-card">
            <img src={blog21} className="img-fluid" alt="" />
            <h6 className="fw-bold mt-2">
              5 Things to Know Before You Accept Crypto Payments for ICO Presales
            </h6>
            <p className="blog-category">TUTORIALS</p>
            <small className="text-muted">Jul 11, 2025 – Tony</small>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="blog-card">
            <img src={business2025} className="img-fluid" alt="" />
            <h6 className="fw-bold mt-2">
              How to Choose a Cryptocurrency Payment Gateway for Business in 2025?
            </h6>
            <p className="blog-category">TUTORIALS</p>
            <small className="text-muted">May 05, 2025 – Tony</small>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="blog-card">
            <img src={blog22} className="img-fluid" alt="" />
            <h6 className="fw-bold mt-2">
              What is CoinRemitter’s “Payment Button Widget”? How to Integrate it into Your Website?
            </h6>
            <p className="blog-category">TUTORIALS</p>
            <small className="text-muted">Apr 16, 2025 – Tony</small>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="blog-card">
            <img src={blog42} className="img-fluid" alt="" />
            <h6 className="fw-bold mt-2">
              What is CoinRemitter’s “Presale Widget”? How to Integrate it into Your Website?
            </h6>
            <p className="blog-category">TUTORIALS</p>
            <small className="text-muted">Apr 04, 2025 – Tony</small>
          </div>
        </div>
      </div>

      {/* Information & News Section */}
      <div className="d-flex justify-content-between align-items-center mb-4 pt-5">
        <h2 className="fw-bold section-heading">Information & News</h2>
        <a href="/" className="browse-more">
          Browser More →
        </a>
      </div>

      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <div className="blog-card">
            <img src={coinremitterlog} className="img-fluid" alt="Crypto Payments" />
            <h6 className="fw-bold mt-2">
              How to Accept Crypto Payments With CoinRemitter While Managing Price Volatility
            </h6>
            <p className="blog-category">INFORMATION & NEWS</p>
            <small className="text-muted">Apr 04, 2025 – Tony</small>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="blog-card">
            <img src={today} className="img-fluid" alt="AI Blockchain" />
            <h6 className="fw-bold mt-2">
              How AI in blockchain can improve the experience of accepting crypto payments
            </h6>
            <p className="blog-category">INFORMATION & NEWS</p>
            <small className="text-muted">Mar 20, 2024 – Tony</small>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="blog-card">
            <img src={cryoPayments} className="img-fluid" alt="Twitter Predictions" />
            <h6 className="fw-bold mt-2">
              Coinremitter’s Perspective on X (Twitter) Crypto Payment Feature Predictions
            </h6>
            <p className="blog-category">INFORMATION & NEWS</p>
            <small className="text-muted">Jan 30, 2024 – Tony</small>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="blog-card">
            <img src={information23} className="img-fluid" alt="Bitcoin ETF" />
            <h6 className="fw-bold mt-2">
              Bitcoin ETF Decision Getting Delayed? What Experts Have to Say
            </h6>
            <p className="blog-category">INFORMATION & NEWS</p>
            <small className="text-muted">Jan 10, 2024 – Tony</small>
          </div>
        </div>
      </div>
    </section>


    {/* SECTION-4 */}
    <section id="section-9" className="container py-5">
  <div className="text-center mb-5">
    <h2 className="fw-bold display-6 position-relative d-inline-block">
      Crypto News
      <span className="underline "></span>
    </h2>
  </div>

  <div className="row g-4">
    {[
      { img: Joomla2, title: "Crypto Payments Made Easy", date: "May 06, 2023", author: "Tony" },
      { img: Bloer20, title: "Do You Need to Worry About Bitcoin's Price Volatility?", date: "May 06, 2023", author: "Tony" },
      { img: Regulutton, title: "Introducing CoinRemitter's New Crypto API Docs", date: "May 06, 2023", author: "Tony" },
      { img: The25, title: "The Best Cryptocurrency Payment Gateway Of 2025", date: "May 06, 2023", author: "Tony" },
      { img: BlogBan30, title: "No KYC Needed on CoinRemitter", date: "May 06, 2023", author: "Tony" },
      { img: BlogBa31, title: "Crypto Payments with CoinRemitter Are Fast", date: "May 06, 2023", author: "Tony" }
    ].map((article, index) => (
      <div className="col-12 col-sm-6 col-lg-4" key={index}>
        <div className="card h-100 shadow-sm news-card">
          <img src={article.img} className="card-img-top" alt={article.title} />
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text text-muted small">
              {article.date} — <strong>{article.author}</strong>
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


<Footer />
    
    
    </>
  )
}

export default Blogs
