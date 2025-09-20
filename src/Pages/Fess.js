import React, { useState } from 'react';
import NavBar from './NavBar'
import btc from '../Image/btc.png';
import bch from '../Image/bch.png';
import bnb from '../Image/bnb.png';
import dash from '../Image/dash.png';
import doge from '../Image/doge.png';
import eth from '../Image/eth.png';
import ltc from '../Image/ltc.png';
import tcn from '../Image/tcn.png';
import trx from '../Image/trx.png';
import zano from '../Image/zano.png';
import spectrocoin from '../Image/spectrocoin.png';
import spicepay from '../Image/spicepay.png';
import opennode from '../Image/opennode.png';
import alfacoin from '../Image/alfacoin.png';
import Blockonomics from '../Image/Blockonomics.png';
import coinremiter from '../Image/coinremiter.png';
import usdterc20 from '../Image/usdterc20.png';
import usdttrc20 from '../Image/usdttrc20.png';
import { FaGasPump } from "react-icons/fa";
import Footer from './Footer';



const coinData = {
  BTC: { transactionFee: 0.0001, processingFeePercent: 0.23 },
  LTC: { transactionFee: 0.001, processingFeePercent: 0.2 },
  BCH: { transactionFee: 0.0005, processingFeePercent: 0.25 },
  DOGE: { transactionFee: 2, processingFeePercent: 0.3 },
  TEST: { transactionFee: 0.01, processingFeePercent: 0.1 },
  DASH: { transactionFee: 0.002, processingFeePercent: 0.22 },
  TRASH: { transactionFee: 0.005, processingFeePercent: 0.5 },
  ZONE: { transactionFee: 0.003, processingFeePercent: 0.18 },
  ETH: { transactionFee: 0.005, processingFeePercent: 0.35 },
  USDT: { transactionFee: 1, processingFeePercent: 0.4 },
  BNB: { transactionFee: 0.0003, processingFeePercent: 0.2 },
};
const Fess = () => {

  const [selectedCoin, setSelectedCoin] = useState('BTC');
  const [amount, setAmount] = useState('');
  const [totalFee, setTotalFee] = useState('');
  const [netAmount, setNetAmount] = useState('');

  const calculateFees = (value, coin) => {
    const coinInfo = coinData[coin];
    const amt = parseFloat(value);
    if (isNaN(amt)) {
      setTotalFee('');
      setNetAmount('');
      return;
    }

    const processingFee = amt * (coinInfo.processingFeePercent / 100);
    const total = coinInfo.transactionFee + processingFee;
    const net = amt - total;

    setTotalFee(total.toFixed(8) + ` ${coin}`);
    setNetAmount(net.toFixed(8) + ` ${coin}`);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    calculateFees(value, selectedCoin);
  };

  const handleCoinChange = (e) => {
    const coin = e.target.value;
    setSelectedCoin(coin);
    calculateFees(amount, coin);
  };
    
  return (
    <>
    <NavBar />
    


    {/* <!-- SECTION 1 --> */}
<section class="container-fluid section-1">
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-6">
      <h1>Transparent Fee Structure</h1>
      <p>Explore the transparent fee structure of Coinremitter. Know transaction and processing fees on different crypto transactions. Scroll down to go to the crypto fee calculator.</p>
    </div>
  </div>
</section>



  {/* <!-- SECTION 2 --> */}
<section className="container px-3 px-md-5 section-2">
  <h1 className="fw-bold mb-3" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)' }}>
    Fees <span style={{color: 'orange'}}>Chart</span>
  </h1>
  <p className="mb-4" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
    We are the one who provides the lowest transaction fee. We have no other hidden charges, nor we charge for the deposite fee, except for the transaction and processing fees which are down below.
  </p>

  {/* Table Header - Hidden on small screens, shown on medium and up */}
  <div className="d-none d-md-flex row table-header align-items-start text-center justify-content-between py-2 border-bottom">
    <div className="col-2 text-start">CRYPTOCURRENCIES</div>
    <div className="col-2">SYMBOL</div>
    <div className="col-2">TRANSACTION FEE</div>
    <div className="col-2">PROCESSING FEE</div>
    <div className="col-2 text-end">MINIMUM PAYMENT <span style={{color:'red'}}>&#9432;</span></div>
  </div>

  {/* Mobile Table Header - Only shown on small screens */}
  <div className="d-md-none row mb-2">
    <div className="col-12">
      <h6 className="text-muted">CRYPTOCURRENCIES FEES</h6>
    </div>
  </div>

  {/* Bitcoin */}
  <div className="row crypto-row gx-2 justify-content-between align-items-center py-3 py-md-2 border-bottom">
    <div className="col-7 col-md-3 d-flex align-items-center">
      <img src={btc} alt="Bitcoin" className="crypto-img me-2" style={{width: '30px', height: '30px'}} />
      <div>
        <div>Bitcoin</div>
        <small className="text-muted d-md-none">BTC</small>
      </div>
    </div>
    <div className="col-5 col-md-9">
      <div className="row text-center text-md-start">
        <div className="d-none d-md-block col-md-2">BTC</div>
        <div className="col-4 col-md-2">0.0002</div>
        <div className="col-4 col-md-2">0.24%</div>
        <div className="col-4 col-md-2 text-md-end">0.0002</div>
      </div>
    </div>
  </div>

  {/* Litecoin */}
  <div className="row crypto-row gx-2 justify-content-between align-items-center py-3 py-md-2 border-bottom">
    <div className="col-7 col-md-3 d-flex align-items-center">
      <img src={ltc} alt="Litecoin" className="crypto-img me-2" style={{width: '30px', height: '30px'}} />
      <div>
        <div>Litecoin</div>
        <small className="text-muted d-md-none">LTC</small>
      </div>
    </div>
    <div className="col-5 col-md-9">
      <div className="row text-center text-md-start">
        <div className="d-none d-md-block col-md-2">LTC</div>
        <div className="col-4 col-md-2">0.02</div>
        <div className="col-4 col-md-2">0.24%</div>
        <div className="col-4 col-md-2 text-md-end">0.016</div>
      </div>
    </div>
  </div>

  {/* Bitcoin Cash */}
  <div className="row crypto-row gx-2 justify-content-between align-items-center py-3 py-md-2 border-bottom">
    <div className="col-7 col-md-3 d-flex align-items-center">
      <img src={bch} alt="Bitcoin Cash" className="crypto-img me-2" style={{width: '30px', height: '30px'}} />
      <div>
        <div>Bitcoin Cash</div>
        <small className="text-muted d-md-none">BCH</small>
      </div>
    </div>
    <div className="col-5 col-md-9">
      <div className="row text-center text-md-start">
        <div className="d-none d-md-block col-md-2">BCH</div>
        <div className="col-4 col-md-2">0.03</div>
        <div className="col-4 col-md-2">0.25%</div>
        <div className="col-4 col-md-2 text-md-end">0.04</div>
      </div>
    </div>
  </div>

  {/* DogeCoin */}
  <div className="row crypto-row gx-2 justify-content-between align-items-center py-3 py-md-2 border-bottom">
    <div className="col-7 col-md-3 d-flex align-items-center">
      <img src={doge} alt="DogeCoin" className="crypto-img me-2" style={{width: '30px', height: '30px'}} />
      <div>
        <div>DogeCoin</div>
        <small className="text-muted d-md-none">DOGE</small>
      </div>
    </div>
    <div className="col-5 col-md-9">
      <div className="row text-center text-md-start">
        <div className="d-none d-md-block col-md-2">DOGE</div>
        <div className="col-4 col-md-2">8</div>
        <div className="col-4 col-md-2">0.26%</div>
        <div className="col-4 col-md-2 text-md-end">16</div>
      </div>
    </div>
  </div>

  {/* Test Coin */}
  <div className="row crypto-row gx-2 justify-content-between align-items-center py-3 py-md-2 border-bottom">
    <div className="col-7 col-md-3 d-flex align-items-center">
      <img src={tcn} alt="Test Coin" className="crypto-img me-2" style={{width: '30px', height: '30px'}} />
      <div>
        <div>Test Coin</div>
        <small className="text-muted d-md-none">TCN</small>
      </div>
    </div>
    <div className="col-5 col-md-9">
      <div className="row text-center text-md-start">
        <div className="d-none d-md-block col-md-2">TCN</div>
        <div className="col-4 col-md-2">0.0005</div>
        <div className="col-4 col-md-2">0.27%</div>
        <div className="col-4 col-md-2 text-md-end">0.008</div>
      </div>
    </div>
  </div>

  {/* Dash */}
  <div className="row crypto-row gx-2 justify-content-between align-items-center py-3 py-md-2 border-bottom">
    <div className="col-7 col-md-3 d-flex align-items-center">
      <img src={dash} alt="Dash" className="crypto-img me-2" style={{width: '30px', height: '30px'}} />
      <div>
        <div>Dash</div>
        <small className="text-muted d-md-none">DASH</small>
      </div>
    </div>
    <div className="col-5 col-md-9">
      <div className="row text-center text-md-start">
        <div className="d-none d-md-block col-md-2">DASH</div>
        <div className="col-4 col-md-2">0.03</div>
        <div className="col-4 col-md-2">0.21%</div>
        <div className="col-4 col-md-2 text-md-end">0.03184715</div>
      </div>
    </div>
  </div>

  {/* Zano */}
  <div className="row crypto-row gx-2 justify-content-between align-items-center py-3 py-md-2 border-bottom">
    <div className="col-7 col-md-3 d-flex align-items-center">
      <img src={zano} alt="Zano" className="crypto-img me-2" style={{width: '30px', height: '30px'}} />
      <div>
        <div>Zano</div>
        <small className="text-muted d-md-none">ZANO</small>
      </div>
    </div>
    <div className="col-5 col-md-9">
      <div className="row text-center text-md-start">
        <div className="d-none d-md-block col-md-2">ZANO</div>
        <div className="col-4 col-md-2">0.7</div>
        <div className="col-4 col-md-2">0.28%</div>
        <div className="col-4 col-md-2 text-md-end">0.4</div>
      </div>
    </div>
  </div>

  {/* Binance Coin */}
  <div className="row crypto-row gx-2 justify-content-between align-items-center py-3 py-md-2 border-bottom">
    <div className="col-7 col-md-3 d-flex align-items-center">
      <img src={bnb} alt="Binance Coin" className="crypto-img me-2" style={{width: '30px', height: '30px'}} />
      <div>
        <div>Binance Coin</div>
        <small className="text-muted d-md-none">BNB</small>
      </div>
    </div>
    <div className="col-5 col-md-9">
      <div className="row text-center text-md-start">
        <div className="d-none d-md-block col-md-2">BNB</div>
        <div className="col-4 col-md-2">
          <div className="d-flex flex-column flex-md-row gap-1 justify-content-center justify-content-md-start">
            <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25">
              <i className="me-1"><FaGasPump /></i>0.005
            </span>
            <span className="badge bg-danger bg-opacity-10 text-danger border border-danger border-opacity-25">
              <i className="me-1"><FaGasPump /></i>0.008
            </span>
          </div>
        </div>
        <div className="col-4 col-md-2">0.23%</div>
        <div className="col-4 col-md-2 text-md-end">0.015</div>
      </div>
    </div>
  </div>

  <div className="text-start text-warning mb-3">
    FOR PREMIUM MEMBERS ONLY
  </div>

  {/* Tron */}
  <div className="row crypto-row gx-2 justify-content-between align-items-center py-3 py-md-2 border-bottom">
    <div className="col-7 col-md-3 d-flex align-items-center">
      <img src={trx} alt="Tron" className="crypto-img me-2" style={{width: '30px', height: '30px'}} />
      <div>
        <div>Tron</div>
        <small className="text-muted d-md-none">TRX</small>
      </div>
    </div>
    <div className="col-5 col-md-9">
      <div className="row text-center text-md-start">
        <div className="d-none d-md-block col-md-2">TRX</div>
        <div className="col-4 col-md-2">
          <div className="d-flex flex-column flex-md-row gap-1 justify-content-center justify-content-md-start">
            <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25">
              <i className="me-1"><FaGasPump /></i>12
            </span>
            <span className="badge bg-danger bg-opacity-10 text-danger border border-danger border-opacity-25">
              <i className="me-1"><FaGasPump /></i>15
            </span>
          </div>
        </div>
        <div className="col-4 col-md-2">0.23%</div>
        <div className="col-4 col-md-2 text-md-end">15</div>
      </div>
    </div>
  </div>

  {/* Ethereum */}
  <div className="row crypto-row gx-2 justify-content-between align-items-center py-3 py-md-2 border-bottom">
    <div className="col-7 col-md-3 d-flex align-items-center">
      <img src={eth} alt="Ethereum" className="crypto-img me-2" style={{width: '30px', height: '30px'}} />
      <div>
        <div>Ethereum</div>
        <small className="text-muted d-md-none">ETH</small>
      </div>
    </div>
    <div className="col-5 col-md-9">
      <div className="row text-center text-md-start">
        <div className="d-none d-md-block col-md-2">ETH</div>
        <div className="col-4 col-md-2">
          <div className="d-flex flex-column flex-md-row gap-1 justify-content-center justify-content-md-start">
            <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25">
              <i className="me-1"><FaGasPump /></i>0.003
            </span>
            <span className="badge bg-danger bg-opacity-10 text-danger border border-danger border-opacity-25">
              <i className="me-1"><FaGasPump /></i>0.005
            </span>
          </div>
        </div>
        <div className="col-4 col-md-2">0.23%</div>
        <div className="col-4 col-md-2 text-md-end">0.0054</div>
      </div>
    </div>
  </div>

  {/* Tether USD ERC20 */}
  <div className="row crypto-row gx-2 justify-content-between align-items-center py-3 py-md-2 border-bottom">
    <div className="col-7 col-md-3 d-flex align-items-center">
      <img src={usdterc20} alt="Tether USD ERC20" className="crypto-img me-2" style={{width: '30px', height: '30px'}} />
      <div>
        <div>Tether USD ERC20</div>
        <small className="text-muted d-md-none">USDTERC20</small>
      </div>
    </div>
    <div className="col-5 col-md-9">
      <div className="row text-center text-md-start">
        <div className="d-none d-md-block col-md-2">USDTERC20</div>
        <div className="col-4 col-md-2">
          <div className="d-flex flex-column flex-md-row gap-1 justify-content-center justify-content-md-start">
            <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25">
              <i className="me-1"><FaGasPump /></i>2
            </span>
            <span className="badge bg-danger bg-opacity-10 text-danger border border-danger border-opacity-25">
              <i className="me-1"><FaGasPump /></i>5
            </span>
          </div>
        </div>
        <div className="col-4 col-md-2">0.23%</div>
        <div className="col-4 col-md-2 text-md-end">8</div>
      </div>
    </div>
  </div>

  {/* Tether USD TRC20 */}
  <div className="row crypto-row gx-2 justify-content-between align-items-center py-3 py-md-2 border-bottom">
    <div className="col-7 col-md-3 d-flex align-items-center">
      <img src={usdttrc20} alt="Tether USD TRC20" className="crypto-img me-2" style={{width: '30px', height: '30px'}} />
      <div>
        <div>Tether USD TRC20</div>
        <small className="text-muted d-md-none">USDTTRC20</small>
      </div>
    </div>
    <div className="col-5 col-md-9">
      <div className="row text-center text-md-start">
        <div className="d-none d-md-block col-md-2">USDTTRC20</div>
        <div className="col-4 col-md-2">
          <div className="d-flex flex-column flex-md-row gap-1 justify-content-center justify-content-md-start">
            <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25">
              <i className="me-1"><FaGasPump /></i>2
            </span>
            <span className="badge bg-danger bg-opacity-10 text-danger border border-danger border-opacity-25">
              <i className="me-1"><FaGasPump /></i>5
            </span>
          </div>
        </div>
        <div className="col-4 col-md-2">0.23%</div>
        <div className="col-4 col-md-2 text-md-end">8</div>
      </div>
    </div>
  </div>

  <div className="container py-4">
    <div className="text-center mb-3 pt-3 pt-md-5" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
      You will only be charged above fees if you withdraw funds Manually or Automatically. Deposit is free
    </div>
    <div className="d-flex justify-content-center align-items-center gap-3 gap-md-4 flex-wrap">
      <div className="d-flex align-items-center gap-2">
        <i><FaGasPump /></i>
        <span>With Gas Station</span>
      </div>
      <div className="vr d-none d-md-block"></div>
      <div className="d-flex align-items-center gap-2">
        <i><FaGasPump /></i>
        <span>Without Gas Station</span>
      </div>
      <div className="vr d-none d-md-block"></div>
      <div className="d-flex align-items-center gap-2">
        <span>Read more about</span>
        <a href="/" style={{ color: 'orange', textDecoration: 'none' }}>Gas Station</a>
      </div>
    </div>
  </div>
</section>



{/* SECTION-3 */}
<section className="container py-5">
  {/* First Heading */}
  <div className="text-center mb-4">
    <h2 className="fw-bold" style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>Comparison Table</h2>
    <p className="text-muted" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
      Compare Coinremitter's services to other crypto payment gateways. Know why Coinremitter stands out with its excellent services.
    </p>
  </div>

  {/* Mobile View - Only visible on small screens */}
  <div className="d-block d-md-none">
    {/* Coinremitter Card */}
    <div className="card mb-4 border-warning">
      <div className="card-header bg-warning bg-opacity-10 text-center py-3">
        <img src={coinremiter} alt="Coinremitter" style={{ width: '120px' }} />
      </div>
      <div className="card-body">
        <div className="mb-3">
          <h6 className="fw-bold">Fees</h6>
          <p>0.23%</p>
        </div>
        <div className="mb-3">
          <h6 className="fw-bold">Supported Coins</h6>
          <p className="mb-1">Bitcoin</p>
          <p className="mb-1">Bitcoin Cash</p>
          <p className="mb-1">Ethereum</p>
          <p className="mb-1">Litecoin</p>
          <p className="mb-1">DogeCoin</p>
          <p className="mb-1">Binance Coin</p>
          <p className="mb-1">Dash</p>
          <p className="mb-0">Tether USD ERC20</p>
        </div>
        <div className="mb-3">
          <h6 className="fw-bold">KYC</h6>
          <p>No</p>
        </div>
        <div className="mb-3">
          <h6 className="fw-bold">Supported Plugins</h6>
          <p className="mb-1">WordPress</p>
          <p className="mb-1">Magento 2</p>
          <p className="mb-1">Opencart</p>
          <p className="mb-1">Laravel</p>
          <p className="mb-1">PHP</p>
          <p className="mb-1">Prestashop</p>
          <p className="mb-0">Rest API</p>
        </div>
        <div>
          <h6 className="fw-bold">Security</h6>
          <p className="mb-1">2FA</p>
          <p className="mb-1">Code Card</p>
          <p className="mb-0">Email Verification</p>
        </div>
      </div>
    </div>

    {/* Other Providers - Accordion */}
    <div className="accordion" id="providersAccordion">
      {/* OpenNode */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#openNodeCollapse">
            <img src={opennode} alt="OpenNode" style={{ width: '100px' }} />
          </button>
        </h2>
        <div id="openNodeCollapse" className="accordion-collapse collapse" data-bs-parent="#providersAccordion">
          <div className="accordion-body">
            <div className="mb-3">
              <h6 className="fw-bold">Fees</h6>
              <p>1%</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Supported Coins</h6>
              <p className="mb-0">Bitcoin</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">KYC</h6>
              <p>Yes</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Supported Plugins</h6>
              <p className="mb-1">BigCommerce</p>
              <p className="mb-1">WordPress</p>
              <p className="mb-1">Prestashop</p>
              <p className="mb-1">Magento</p>
              <p className="mb-1">Opencart</p>
              <p className="mb-0">Shopify</p>
            </div>
            <div>
              <h6 className="fw-bold">Security</h6>
              <p className="mb-0">2FA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alfa Coins */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#alfaCoinsCollapse">
            <img src={alfacoin} alt="Alfa Coins" style={{ width: '100px' }} />
          </button>
        </h2>
        <div id="alfaCoinsCollapse" className="accordion-collapse collapse" data-bs-parent="#providersAccordion">
          <div className="accordion-body">
            <div className="mb-3">
              <h6 className="fw-bold">Fees</h6>
              <p>Network fee* + 0.99%</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Supported Coins</h6>
              <p className="mb-1">Bitcoin</p>
              <p className="mb-1">Ethereum</p>
              <p className="mb-1">Litecoin</p>
              <p className="mb-1">Bitcoin Cash</p>
              <p className="mb-1">XRP</p>
              <p className="mb-0">Dash</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">KYC</h6>
              <p>Yes</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Supported Plugins</h6>
              <p className="mb-0">Wordpress</p>
            </div>
            <div>
              <h6 className="fw-bold">Security</h6>
              <p className="mb-0">2FA</p>
            </div>
          </div>
        </div>
      </div>

      {/* SpicePay */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#spicePayCollapse">
            <img src={spicepay} alt="SpicePay" style={{ width: '100px' }} />
          </button>
        </h2>
        <div id="spicePayCollapse" className="accordion-collapse collapse" data-bs-parent="#providersAccordion">
          <div className="accordion-body">
            <div className="mb-3">
              <h6 className="fw-bold">Fees</h6>
              <p>1%</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Supported Coins</h6>
              <p className="mb-1">Bitcoin</p>
              <p className="mb-1">Ethereum</p>
              <p className="mb-1">Litecoin</p>
              <p className="mb-0">Bitcoin Cash</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">KYC</h6>
              <p>Yes</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Supported Plugins</h6>
              <p className="mb-1">Magento</p>
              <p className="mb-1">WooCommerce</p>
              <p className="mb-1">WordPress</p>
              <p className="mb-1">Opencart</p>
              <p className="mb-1">Zencart</p>
              <p className="mb-1">Prestashop</p>
              <p className="mb-0">WHMCS</p>
            </div>
            <div>
              <h6 className="fw-bold">Security</h6>
              <p className="mb-0">-</p>
            </div>
          </div>
        </div>
      </div>

      {/* SpectroCoin */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#spectroCoinCollapse">
            <img src={spectrocoin} alt="SpectroCoin" style={{ width: '100px' }} />
          </button>
        </h2>
        <div id="spectroCoinCollapse" className="accordion-collapse collapse" data-bs-parent="#providersAccordion">
          <div className="accordion-body">
            <div className="mb-3">
              <h6 className="fw-bold">Fees</h6>
              <p>2% to 5%</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Supported Coins</h6>
              <p className="mb-1">Bitcoin</p>
              <p className="mb-1">Ethereum</p>
              <p className="mb-1">Dash</p>
              <p className="mb-1">NEM</p>
              <p className="mb-1">Litecoin</p>
              <p className="mb-1">Stellar Lumens</p>
              <p className="mb-1">Ripple</p>
              <p className="mb-0">And More</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">KYC</h6>
              <p>Yes</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Supported Plugins</h6>
              <p className="mb-1">WooCommerce</p>
              <p className="mb-1">Magento</p>
              <p className="mb-1">PrestaShop</p>
              <p className="mb-1">OpenCart</p>
              <p className="mb-1">Drupal</p>
              <p className="mb-1">WHMCS</p>
              <p className="mb-0">ZenCart</p>
            </div>
            <div>
              <h6 className="fw-bold">Security</h6>
              <p className="mb-0">-</p>
            </div>
          </div>
        </div>
      </div>

      {/* Blockonomics */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#blockonomicsCollapse">
            <img src={Blockonomics} alt="Blockonomics" style={{ width: '100px' }} />
          </button>
        </h2>
        <div id="blockonomicsCollapse" className="accordion-collapse collapse" data-bs-parent="#providersAccordion">
          <div className="accordion-body">
            <div className="mb-3">
              <h6 className="fw-bold">Fees</h6>
              <p>1%</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Supported Coins</h6>
              <p className="mb-1">Bitcoin</p>
              <p className="mb-0">Bitcoin Cash</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">KYC</h6>
              <p>No</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Supported Plugins</h6>
              <p className="mb-1">WHMCS</p>
              <p className="mb-1">Wordpress</p>
              <p className="mb-1">Prestashop</p>
              <p className="mb-1">Opencart</p>
              <p className="mb-1">Wix</p>
              <p className="mb-1">SquareSpace</p>
              <p className="mb-0">Shopify</p>
            </div>
            <div>
              <h6 className="fw-bold">Security</h6>
              <p className="mb-0">Email Verification</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Desktop View - Only visible on medium and large screens */}
  <div className="d-none d-md-block">
    <div className="table-responsive">
      <table className="table text-center align-middle">
        <thead>
          <tr>
            <th></th>
            <th style={{ border: '2px solid #e68a00' }}>
              <img src={coinremiter} alt="Coinremitter" style={{ width: '130px' }} />
            </th>
            <th>
              <img src={opennode} alt="OpenNode" style={{ width: '130px' }} />
            </th>
            <th>
              <img src={alfacoin} alt="Alfa Coins" style={{ width: '130px' }} />
            </th>
            <th>
              <img src={spicepay} alt="SpicePay" style={{ width: '130px' }} />
            </th>
            <th>
              <img src={spectrocoin} alt="SpectroCoin" style={{ width: '130px' }} />
            </th>
            <th>
              <img src={Blockonomics} alt="Blockonomics" style={{ width: '130px' }} />
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Fees */}
          <tr>
            <td className="text-start fw-bold">Fees</td>
            <td style={{ border: '2px solid #e68a00' }}>0.23%</td>
            <td>1%</td>
            <td>Network fee* + 0.99%</td>
            <td>1%</td>
            <td>2% to 5%</td>
            <td>1%</td>
          </tr>

          {/* Supported Coins */}
          <tr>
            <td className="text-start fw-bold">Supported Coins</td>
            <td style={{ border: '2px solid #e68a00' }} className="text-start">
              Bitcoin<br />
              Bitcoin Cash<br />
              Ethereum<br />
              Litecoin<br />
              DogeCoin<br />
              Binance Coin<br />
              Dash<br />
              Tether USD ERC20
            </td>
            <td className="text-start">
              Bitcoin<br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </td>
            <td className="text-start">
              Bitcoin<br />
              Ethereum<br />
              Litecoin<br />
              Bitcoin Cash<br />
              XRP<br />
              Dash<br />
              <br />
              <br />
            </td>
            <td className="text-start">
              Bitcoin<br />
              Ethereum<br />
              Litecoin<br />
              Bitcoin Cash<br />
              <br />
              <br />
              <br />
              <br />
            </td>
            <td className="text-start">
              Bitcoin<br />
              Ethereum<br />
              Dash<br />
              NEM<br />
              Litecoin<br />
              Stellar Lumens<br />
              Ripple<br />
              And More
            </td>
            <td className="text-start">
              Bitcoin<br />
              Bitcoin Cash<br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </td>
          </tr>

          {/* KYC */}
          <tr>
            <td className="text-start fw-bold">KYC</td>
            <td style={{ border: '2px solid #e68a00' }}>No</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>No</td>
          </tr>

          {/* Supported Plugins */}
          <tr>
            <td className="text-start fw-bold">Supported Plugins</td>
            <td style={{ border: '2px solid #e68a00' }} className="text-start">
              WordPress<br />
              Magento 2<br />
              Opencart<br />
              Laravel<br />
              PHP<br />
              Prestashop<br />
              Rest API
            </td>
            <td className="text-start">
              BigCommerce<br />
              WordPress<br />
              Prestashop<br />
              Magento<br />
              Opencart<br />
              Shopify<br />
              <br />
              <br />
            </td>
            <td className="text-start">
              Wordpress<br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </td>
            <td className="text-start">
              Magento<br />
              WooCommerce<br />
              WordPress<br />
              Opencart<br />
              Zencart<br />
              Prestashop<br />
              WHMCS<br />
              <br />
            </td>
            <td className="text-start">
              WooCommerce<br />
              Magento<br />
              PrestaShop<br />
              OpenCart<br />
              Drupal<br />
              WHMCS<br />
              ZenCart<br />
              <br />
            </td>
            <td className="text-start">
              WHMCS<br />
              Wordpress<br />
              Prestashop<br />
              Opencart<br />
              Wix<br />
              SquareSpace<br />
              Shopify<br />
              <br />
            </td>
          </tr>

          {/* Security */}
          <tr>
            <td className="text-start fw-bold">Security</td>
            <td style={{ border: '2px solid #e68a00' }} className="text-start">
              2FA<br />
              Code Card<br />
              Email Verification<br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </td>
            <td>2FA</td>
            <td>2FA</td>
            <td>-</td>
            <td>-</td>
            <td>Email Verification</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* Signup Button */}
  <div className="text-center mt-4">
    <button className="btn btn-warning px-4 py-2 fw-bold">SIGN UP FOR FREE</button>
  </div>
</section>



{/* SECTION-4 */}
<section className='py-5'>
<div className="container py-4">
      <h2 className="text-center mb-3">Fees Calculator</h2>
      <p className="text-center mb-4">
        Select the coin and enter the amount you want to set. After the exclusion of the transaction fee and the processing fee, you will get the final amount.
      </p>

      <div className="row g-4 justify-content-center">
        <div className="col-12 col-md-4">
          <label className="form-label">Select Coin</label>
          <select className="form-select" value={selectedCoin} onChange={handleCoinChange}>
            {Object.keys(coinData).map((coin) => (
              <option key={coin} value={coin}>{coin}</option>
            ))}
          </select>
        </div>

        <div className="col-12 col-md-4">
          <label className="form-label">Amount ({selectedCoin})</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={handleAmountChange}
            placeholder={`Enter ${selectedCoin} amount`}
          />
        </div>

        <div className="col-12 col-md-4">
          <label className="form-label">Transaction Fee</label>
          <input
            type="text"
            className="form-control"
            value={`${coinData[selectedCoin].transactionFee} ${selectedCoin}`}
            readOnly
          />
        </div>

        <div className="col-12 col-md-4">
          <label className="form-label">Processing Fee</label>
          <input
            type="text"
            className="form-control"
            value={`${coinData[selectedCoin].processingFeePercent}% ${selectedCoin}`}
            readOnly
          />
        </div>

        <div className="col-12 col-md-4">
          <label className="form-label">Total Fee</label>
          <input type="text" className="form-control" value={totalFee} readOnly />
        </div>

        <div className="col-12 col-md-4">
          <label className="form-label">Net Amount</label>
          <input type="text" className="form-control" value={netAmount} readOnly />
        </div>
      </div>
    </div>
</section>




<Footer />

    </>
  )
}

export default Fess
