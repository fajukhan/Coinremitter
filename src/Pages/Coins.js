import React from 'react'
import NavBar from './NavBar'
import { NavLink } from 'react-router-dom';
import btc from "../Image/btc.png";
import ltc from "../Image/ltc.png";
import bch from "../Image/bch.png";
import eth from "../Image/eth.png";
import doge from "../Image/doge.png";
import tcn from "../Image/tcn.png";
import dash from "../Image/dash.png";
import usdterc20 from "../Image/usdterc20.png";
import usdttrc20 from "../Image/usdttrc20.png";
import trx from "../Image/trx.png";
import zano from "../Image/zano.png";
import Footer from './Footer';



const coinsData = [
  {
    name: "Bitcoin",
    code: "BTC",
    network: "Mainnet",
    img: btc,
    link: "#"
  },
  {
    name: "Litecoin",
    code: "LTC",
    network: "Mainnet",
    img: ltc,
    link: "#"
  },
  {
    name: "Bitcoin Cash",
    code: "BCH",
    network: "Mainnet",
    img: bch,
    link: "#"
  },
  {
    name: "Ethereum",
    code: "ETH",
    network: "Mainnet",
    img: eth,
    link: "#"
  },
  {
    name: "DogeCoin",
    code: "DOGE",
    network: "Mainnet",
    img: doge,
    link: "#"
  },
  {
    name: "Test Coin",
    code: "TCN",
    network: "Testnet",
    img: tcn,
    link: "#"
  },
  {
    name: "Dash",
    code: "DASH",
    network: "Mainnet",
    img: dash,
    link: "#"
  },
  {
    name: "Tether USD ERC20",
    code: "USDTERC20",
    network: "Mainnet",
    img: usdterc20,
    link: "#"
  },
  {
    name: "Binance Coin",
    code: "BNB",
    network: "Mainnet",
    img: btc, // Use correct image
    link: "#"
  },
  {
    name: "Tron",
    code: "TRX",
    network: "Mainnet",
    img: trx,
    link: "#"
  },
  {
    name: "Tether USD TRC20",
    code: "USDTRC20",
    network: "Mainnet",
    img: usdttrc20,
    link: "#"
  },
  {
    name: "Zano",
    code: "ZANO",
    network: "Mainnet",
    img: zano,
    link: "#"
  }
];

const images = [btc, ltc, bch, eth, doge, tcn, trx, usdterc20, usdttrc20, dash, zano , doge ];

const Coins = () => {

  return (
   <>


   <NavBar />


    {/* <!-- SECTION 1 --> */}
<section class="container-fluid section-1">
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-6">
      <h1>Supported Cryptocurrencies</h1>
      <p>CoinRemitter lets business owners accept crypto payments in the following currencies. All of then have a bunch of advantages for businesses that accept payment in crypto.</p>
    </div>
  </div>
</section>


{/* SECTION-2 */}
<section className='py-5'>
     <div className="container py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Check All The Supported <span className="text-warning">Cryptocurrencies</span></h2>
        <div className="mx-auto" style={{ width: "100px", height: "3px", background: "#f59e0b" }}></div>
      </div>

      {/* Grid of coins */}
      <div className="row g-4">
        {coinsData.map((coin, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-2">
              <div className="card-body text-center">
                <img src={coin.img} alt={coin.name} className="mb-3" style={{ width: "60px", height: "60px" }} />
                <h5 className="card-title">
                  {coin.name}<small className="text-muted"></small>
                </h5>
                <p className="text-muted small">Network: {coin.network}</p>
                <NavLink to={coin.link} className="btn btn-link p-0 small">Explorer URL</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

</section>


{/* SECTION-3 */}
<section>
     <div className="container py-5">
      <div className="row align-items-center">
        
        {/* First Column */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h1 className="fw-bold">Crypto Payments & Supported <br />Currencies</h1>
          <hr style={{ width: "100px", height:'5px' ,color: "#f59e0b", backgroundColor: "#f59e0b" }} className="mb-4" />
          <p>
            We can see <strong>crypto payments</strong> replacing fiat payments in the future, maybe or maybe not.
            CoinRemitter’s crypto payment gateway services aim to provide more convenience to business owners in accepting crypto payments. CoinRemitter’s supported currencies are specially curated by experts who cover all the beneficial aspects. Business owners may find a large number of customers willing to <strong>pay in cryptocurrencies</strong> supported by CoinRemitter.
          </p>
          <p>
            Each cryptocurrency has its advantages such as Bitcoin’s largest market cap, Litecoin’s rapidly growing adoption, Bitcoin Cash’s higher block size, Ethereum’s largest ecosystem in <strong>blockchain & cryptocurrency</strong>, Dogecoin’s rapidly growing popularity & network, Dash’s faster <strong>crypto transactions</strong>, Tether’s stability, Binance’s liquidity, and Tron’s incredibly low transaction fees.
          </p>
          <button className="btn crypto-btn text-dark fw-bold p-3 my-3">BEGIN ACCEPTING</button>
        </div>

        {/* Second Column */}
        <div className="col-12 col-md-6 overflow-hidden" style={{ height: "400px" }}>
          <div className="slide-container">
            <div className="image-grid">
              {images.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`crypto-${index}`}
                  style={{ width: "120px", margin: "10px" }}
                />
              ))}
            </div>
            <div className="image-grid">
              {images.map((imgSrc, index) => (
                <img
                  key={`dup-${index}`}
                  src={imgSrc}
                  alt={`crypto-dup-${index}`}
                  style={{ width: "120px", margin: "10px" }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* CSS for sliding animation */}
      <style jsx>{`
        .slide-container {
          display: flex;
          flex-direction: column;
          animation: slide 20s linear infinite;
        }
        .image-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          justify-items: center;
        }
        @keyframes slide {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>

</section>


<Footer />
   
   
   
   
   </>
  )
}

export default Coins
