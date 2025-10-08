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
import firstlogo1 from '../Image/firstlogo1.svg';
import usdterc20 from '../Image/usdterc20.png';
import usdttrc20 from '../Image/usdttrc20.png';

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
    <div class="col-12 col-md-8 col-lg-10">
      <h1>Transparent Fee Structure</h1>
      <p>Explore the transparent fee structure of Coinremitter. Know transaction and processing fees on different crypto transactions. Scroll down to go to the crypto fee calculator.</p>
    </div>
  </div>
</section>



{/* <!-- SECTION 2 - Large Screen Optimized --> */}
<section className="container px-3 px-lg-5 section-2 py-5">
  {/* Header */}
  <div className="text-center mb-5">
    <h1 className="fw-bold display-4 mb-3">
      Fees <span style={{color: '#00CEC9'}}>Chart</span>
    </h1>
    <p className="lead text-muted mx-auto" style={{maxWidth: '800px'}}>
      We are the one who provides the lowest transaction fee. We have no other hidden charges, 
      nor we charge for the deposit fee, except for the transaction and processing fees which are down below.
    </p>
  </div>

  {/* Main Table - Large Screen Only */}
  <div className="d-none d-lg-block">
    <div className="table-responsive">
      <table className="table table-hover align-middle">
        <thead className="table-dark tableth1">
          <tr className='tableth1'>
            <th className="px-4 py-3 text-start tableth1">CRYPTOCURRENCIES</th>
            <th className="px-4 py-3 text-center tableth1">SYMBOL</th>
            <th className="px-4 py-3 text-center tableth1">TRANSACTION FEE</th>
            <th className="px-4 py-3 text-center tableth1">PROCESSING FEE</th>
            <th className="px-4 py-3 text-end tableth1">MINIMUM PAYMENT</th>
          </tr>
        </thead>
        <tbody>
          {/* Bitcoin */}
          <tr>
            <td className="px-4 py-3">
              <div className="d-flex align-items-center">
                <img src={btc} alt="Bitcoin" className="me-3" style={{width: '32px', height: '32px'}} />
                <span className="fw-semibold">Bitcoin</span>
                <i className="bi bi-check-circle-fill text-success ms-2 fs-5"></i>
              </div>
            </td>
            <td className="px-4 py-3 text-center">BTC</td>
            <td className="px-4 py-3 text-center">0.0002</td>
            <td className="px-4 py-3 text-center text-success fw-semibold">0.24%</td>
            <td className="px-4 py-3 text-end">0.0002</td>
          </tr>

          {/* Litecoin */}
          <tr>
            <td className="px-4 py-3">
              <div className="d-flex align-items-center">
                <img src={ltc} alt="Litecoin" className="me-3" style={{width: '32px', height: '32px'}} />
                <span className="fw-semibold">Litecoin</span>
                <i className="bi bi-check-circle-fill text-success ms-2 fs-5"></i>
              </div>
            </td>
            <td className="px-4 py-3 text-center">LTC</td>
            <td className="px-4 py-3 text-center">0.02</td>
            <td className="px-4 py-3 text-center text-success fw-semibold">0.24%</td>
            <td className="px-4 py-3 text-end">0.016</td>
          </tr>

          {/* Bitcoin Cash */}
          <tr>
            <td className="px-4 py-3">
              <div className="d-flex align-items-center">
                <img src={bch} alt="Bitcoin Cash" className="me-3" style={{width: '32px', height: '32px'}} />
                <span className="fw-semibold">Bitcoin Cash</span>
                <i className="bi bi-exclamation-triangle-fill text-warning ms-2 fs-5"></i>
              </div>
            </td>
            <td className="px-4 py-3 text-center">BCH</td>
            <td className="px-4 py-3 text-center">0.03</td>
            <td className="px-4 py-3 text-center text-warning fw-semibold">0.25%</td>
            <td className="px-4 py-3 text-end">0.04</td>
          </tr>

          {/* DogeCoin */}
          <tr>
            <td className="px-4 py-3">
              <div className="d-flex align-items-center">
                <img src={doge} alt="DogeCoin" className="me-3" style={{width: '32px', height: '32px'}} />
                <span className="fw-semibold">DogeCoin</span>
                <i className="bi bi-x-circle-fill text-danger ms-2 fs-5"></i>
              </div>
            </td>
            <td className="px-4 py-3 text-center">DOGE</td>
            <td className="px-4 py-3 text-center">8</td>
            <td className="px-4 py-3 text-center text-danger fw-semibold">0.26%</td>
            <td className="px-4 py-3 text-end">16</td>
          </tr>

          {/* Test Coin */}
          <tr>
            <td className="px-4 py-3">
              <div className="d-flex align-items-center">
                <img src={tcn} alt="Test Coin" className="me-3" style={{width: '32px', height: '32px'}} />
                <span className="fw-semibold">Test Coin</span>
                <i className="bi bi-dash-circle-fill text-secondary ms-2 fs-5"></i>
              </div>
            </td>
            <td className="px-4 py-3 text-center">TCN</td>
            <td className="px-4 py-3 text-center">0.0005</td>
            <td className="px-4 py-3 text-center text-danger fw-semibold">0.27%</td>
            <td className="px-4 py-3 text-end">0.008</td>
          </tr>

          {/* Dash */}
          <tr>
            <td className="px-4 py-3">
              <div className="d-flex align-items-center">
                <img src={dash} alt="Dash" className="me-3" style={{width: '32px', height: '32px'}} />
                <span className="fw-semibold">Dash</span>
                <i className="bi bi-check-circle-fill text-success ms-2 fs-5"></i>
              </div>
            </td>
            <td className="px-4 py-3 text-center">DASH</td>
            <td className="px-4 py-3 text-center">0.03</td>
            <td className="px-4 py-3 text-center text-success fw-semibold">0.21%</td>
            <td className="px-4 py-3 text-end">0.03184715</td>
          </tr>

          {/* Zano */}
          <tr>
            <td className="px-4 py-3">
              <div className="d-flex align-items-center">
                <img src={zano} alt="Zano" className="me-3" style={{width: '32px', height: '32px'}} />
                <span className="fw-semibold">Zano</span>
                <i className="bi bi-x-circle-fill text-danger ms-2 fs-5"></i>
              </div>
            </td>
            <td className="px-4 py-3 text-center">ZANO</td>
            <td className="px-4 py-3 text-center">0.7</td>
            <td className="px-4 py-3 text-center text-danger fw-semibold">0.28%</td>
            <td className="px-4 py-3 text-end">0.4</td>
          </tr>

          {/* Binance Coin */}
          <tr>
            <td className="px-4 py-3">
              <div className="d-flex align-items-center">
                <img src={bnb} alt="Binance Coin" className="me-3" style={{width: '32px', height: '32px'}} />
                <span className="fw-semibold">Binance Coin</span>
                <i className="bi bi-check-circle-fill text-success ms-2 fs-5"></i>
              </div>
            </td>
            <td className="px-4 py-3 text-center">BNB</td>
            <td className="px-4 py-3 text-center text-success fw-semibold">0.23%</td>
            <td className="px-4 py-3 text-center">0.015</td>
            <td className="px-4 py-3 text-end text-muted">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* Premium Members Section */}
  <div className="mt-5">
    <div className="text-center mb-4">
      <h3 className=" fw-bold" style={{color:'#00CEC9'}}>
        <i className="bi bi-star-fill me-2"></i>
        FOR PREMIUM MEMBERS ONLY
      </h3>
    </div>

    <div className="row justify-content-center">
      {/* Tron */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100 bord1">
          <div className="card-body text-center">
            <img src={trx} alt="Tron" className="mb-3" style={{width: '48px', height: '48px'}} />
            <h5 className="card-title fw-bold">Tron</h5>
            <p className="text-muted mb-2">TRX</p>
            <div className="d-flex justify-content-center gap-3 mb-3">
              <span className="badge bg-success">
                <i className="bi bi-fuel-pump me-1"></i>12
              </span>
              <span className="badge bg-danger">
                <i className="bi bi-fuel-pump me-1"></i>15
              </span>
            </div>
            <p className="text-success fw-semibold mb-1">0.23%</p>
            <p className="mb-0">15</p>
          </div>
        </div>
      </div>

      {/* Ethereum */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100 bord1">
          <div className="card-body text-center">
            <img src={eth} alt="Ethereum" className="mb-3" style={{width: '48px', height: '48px'}} />
            <h5 className="card-title fw-bold">Ethereum</h5>
            <p className="text-muted mb-2">ETH</p>
            <div className="d-flex justify-content-center gap-3 mb-3">
              <span className="badge bg-success">
                <i className="bi bi-fuel-pump me-1"></i>0.003
              </span>
              <span className="badge bg-danger">
                <i className="bi bi-fuel-pump me-1"></i>0.005
              </span>
            </div>
            <p className="text-success fw-semibold mb-1">0.23%</p>
            <p className="mb-0">0.0054</p>
          </div>
        </div>
      </div>

      {/* Tether USD ERC20 */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100 bord1">
          <div className="card-body text-center">
            <img src={usdterc20} alt="Tether USD ERC20" className="mb-3" style={{width: '48px', height: '48px'}} />
            <h5 className="card-title fw-bold">Tether USD ERC20</h5>
            <p className="text-muted mb-2">USDTERC20</p>
            <div className="d-flex justify-content-center gap-3 mb-3">
              <span className="badge bg-success">
                <i className="bi bi-fuel-pump me-1"></i>2
              </span>
              <span className="badge bg-danger">
                <i className="bi bi-fuel-pump me-1"></i>5
              </span>
            </div>
            <p className="text-success fw-semibold mb-1">0.23%</p>
            <p className="mb-0">8</p>
          </div>
        </div>
      </div>

      {/* Tether USD TRC20 */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100 bord1">
          <div className="card-body text-center">
            <img src={usdttrc20} alt="Tether USD TRC20" className="mb-3" style={{width: '48px', height: '48px'}} />
            <h5 className="card-title fw-bold">Tether USD TRC20</h5>
            <p className="text-muted mb-2">USDTTRC20</p>
            <div className="d-flex justify-content-center gap-3 mb-3">
              <span className="badge bg-success">
                <i className="bi bi-fuel-pump me-1"></i>2
              </span>
              <span className="badge bg-danger">
                <i className="bi bi-fuel-pump me-1"></i>5
              </span>
            </div>
            <p className="text-success fw-semibold mb-1">0.23%</p>
            <p className="mb-0">8</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Footer Note */}
  <div className="text-center mt-5 pt-4 border-top">
    <p className="text-muted mb-4">
      <i className="bi bi-info-circle-fill text-info me-2"></i>
      You will only be charged above fees if you withdraw funds Manually or Automatically. Deposit is free
    </p>
    <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
      <span className="badge bg-success fs-6 px-3 py-2">
        <i className="bi bi-fuel-pump me-2"></i>With Gas Station
      </span>
      <span className="badge bg-secondary fs-6 px-3 py-2">
        <i className="bi bi-fuel-pump me-2"></i>Without Gas Station
      </span>
      <a href="/gas-station" className="text-decoration-none fw-semibold" style={{color:'#00CEC9'}}>
        Read more about Gas Station
      </a>
    </div>
  </div>
</section>



{/* Custom CSS for Large Screens */}
<style jsx>{`
  .tableth1 {
    background-color: #00CEC9 !important;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  
  .table-hover tbody tr:hover {
    background-color: rgba(255, 193, 7, 0.1);
    transform: translateY(-1px);
    transition: all 0.3s ease;
  }
  
  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  }
  
  .bord1 {
    border-color: #00CEC9!important;
    border-width: 2px !important;
  }
  
  .badge {
    font-size: 0.85rem;
    padding: 0.5rem 0.75rem;
  }
  
  /* Icon colors */
  .text-success { color: #28a745 !important; }
  .text-danger { color: #dc3545 !important; }
  .text-warning { color: #ffc107 !important; }
  
  /* Responsive table */
  @media (min-width: 1200px) {
    .table-responsive {
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 5px 25px rgba(0,0,0,0.1);
    }
  }
`}</style>



{/* SECTION-3 */}
<section className="container py-5">
  {/* First Heading */}
  <div className="text-center mb-4">
    <h1 className="fw-bold py-3" style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>Comparison Table</h1>
    <p className="text-muted" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
      Compare Coinremitter's services to other crypto payment gateways. Know why Coinremitter stands out with its excellent services.
    </p>
  </div>

  {/* Mobile View - Only visible on small screens */}
  <div className="d-block d-md-none">
    {/* Coinremitter Card */}
    <div className="card mb-4 bord1">
      <div className="card-header bg-opacity-10 text-center py-3 bord1">
        <img src={firstlogo1} alt="logo" style={{ width: '120px' }} />
      </div>
      <div className="card-body bord1">
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
            <th style={{ border: '2px solid #00CEC9' }}>
              <img src={firstlogo1} alt="Coinremitter" style={{ width: '130px' }} />
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
            <td style={{ border: '2px solid #00CEC9' }}>0.23%</td>
            <td>1%</td>
            <td>Network fee* + 0.99%</td>
            <td>1%</td>
            <td>2% to 5%</td>
            <td>1%</td>
          </tr>

          {/* Supported Coins */}
          <tr>
            <td className="text-start fw-bold">Supported Coins</td>
            <td style={{ border: '2px solid #00CEC9' }} className="text-start">
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
            <td style={{ border: '2px solid #00CEC9' }}>No</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>No</td>
          </tr>

          {/* Supported Plugins */}
          <tr>
            <td className="text-start fw-bold">Supported Plugins</td>
            <td style={{ border: '2px solid #00CEC9' }} className="text-start">
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
            <td style={{ border: '2px solid #00CEC9' }} className="text-start">
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
    <a href="/signup">
    <button className="btn btn-lg crypto-btn px-4 py-2 crypto-btn py-3" style={{fontSize:'1.3rem'}}>SIGN UP FOR FREE</button></a>
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
