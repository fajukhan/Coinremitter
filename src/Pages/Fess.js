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
<section className="container px-5 section-2">
  <h1>Fees <span style={{color: 'orange'}}>Chart</span></h1>
  <p>
    We are the one who provides the lowest transaction fee. We have no other hidden charges, nor we charge for <br />
    the deposite fee, except for the transaction and processing fees which are down below.
  </p>

  {/* <!-- Table Header --> */}
  <div className="row table-header align-items-start text-center justify-content-between py-2 border-bottom">
    <div className="col-2 col-md-2 text-start">CRYPTOCURRENCIES</div>
    <div className="col-2 d-none d-md-block">SYMBOL</div>
    <div className="col-2">TRANSACTION FEE</div>
    <div className="col-2">PROCESSING FEE</div>
    <div className="col-2 text-end">MINIMUM PAYMENT <span style={{color:'red'}}>&#9432;</span></div>
  </div>

  {/* <!-- Crypto Rows --> */}

  {/* Bitcoin */}
  <div className="row crypto-row gx-2 justify-content-between align-items-center text-center text-md-start py-2 border-bottom">
    <div className="col-4 col-md-3 d-flex align-items-center text-start">
      <img src={btc} alt="Bitcoin" className="crypto-img" />
      Bitcoin
    </div>
    <div className="col-2 d-none d-md-block">BTC</div>
    <div className="col-2">0.0002</div>
    <div className="col-2">0.24%</div>
    <div className="col-2 text-end">0.0002</div>
  </div>

  {/* Litecoin */}
  <div className="row crypto-row gx-2 justify-content-between  align-items-center text-center text-md-start py-2 border-bottom">
    <div className="col-4 col-md-3 d-flex align-items-center text-start">
      <img src={ltc} alt="Litecoin" className="crypto-img" />
      Litecoin
    </div>
    <div className="col-2 d-none d-md-block">LTC</div>
    <div className="col-2">0.02</div>
    <div className="col-2">0.24%</div>
    <div className="col-2 text-end">0.016</div>
  </div>

  {/* Bitcoin Cash */}
  <div className="row justify-content-between  crypto-row gx-2 align-items-center text-center text-md-start py-2 border-bottom">
    <div className="col-4 col-md-3 d-flex align-items-center text-start">
      <img src={bch} alt="Bitcoin Cash" className="crypto-img" />
      Bitcoin Cash
    </div>
    <div className="col-2 d-none d-md-block">BCH</div>
    <div className="col-2">0.03</div>
    <div className="col-2">0.25%</div>
    <div className="col-2 text-end">0.04</div>
  </div>

  {/* DogeCoin */}
  <div className="row justify-content-between  crypto-row gx-2 align-items-center text-center text-md-start py-2 border-bottom">
    <div className="col-4 col-md-3 d-flex align-items-center text-start">
      <img src={doge} alt="DogeCoin" className="crypto-img" />
      DogeCoin
    </div>
    <div className="col-2 d-none d-md-block">DOGE</div>
    <div className="col-2">8</div>
    <div className="col-2">0.26%</div>
    <div className="col-2 text-end">16</div>
  </div>

  {/* Test Coin */}
  <div className="row justify-content-between  crypto-row gx-2 align-items-center text-center text-md-start py-2 border-bottom">
    <div className="col-4 col-md-3 d-flex align-items-center text-start">
      <img src={tcn} alt="Test Coin" className="crypto-img" />
      Test Coin
    </div>
    <div className="col-2 d-none d-md-block">TCN</div>
    <div className="col-2">0.0005</div>
    <div className="col-2">0.27%</div>
    <div className="col-2 text-end">0.008</div>
  </div>

  {/* Dash */}
  <div className="row justify-content-between  crypto-row gx-2 align-items-center text-center text-md-start py-2 border-bottom">
    <div className="col-4 col-md-3 d-flex align-items-center text-start">
      <img src={dash} alt="Dash" className="crypto-img" />
      Dash
    </div>
    <div className="col-2 d-none d-md-block">DASH</div>
    <div className="col-2">0.03</div>
    <div className="col-2">0.21%</div>
    <div className="col-2 text-end">0.03184715</div>
  </div>

  {/* Zano */}
  <div className="row justify-content-between  crypto-row gx-2 align-items-center text-center text-md-start py-2 border-bottom">
    <div className="col-4 col-md-3 d-flex align-items-center text-start">
      <img src={zano} alt="Zano" className="crypto-img" />
      Zano
    </div>
    <div className="col-2 d-none d-md-block">ZANO</div>
    <div className="col-2">0.7</div>
    <div className="col-2">0.28%</div>
    <div className="col-2 text-end">0.4</div>
  </div>
{/* Binance Coin */}
<div className="row crypto-row gx-2 justify-content-between text-md-start py-2 border-bottom">
  <div className="col-4 col-md-3 d-flex align-items-center text-start">
    <img src={bnb} alt="Binance Coin" className="crypto-img" />
    Binance Coin
  </div>
  <div className="col-2 d-none d-md-block">BNB</div>
  <div className="col-2 d-flex justify-content-center gap-2">
    <span className="fee-badge fee-green">
      <i><FaGasPump /></i>
      0.005
    </span>
    <span className="fee-badge fee-red">
     <i><FaGasPump /></i>
      0.008
    </span>
  </div>
  <div className="col-2">0.23%</div>
  <div className="col-2 text-end">0.015</div>
</div>
<div className="text-start text-warning mb-3">
  FOR PREMIUM MEMBERS ONLY
</div>

 {/* Tron */}
<div className="row crypto-row gx-2 justify-content-between text-md-start py-2 border-bottom">
  <div className="col-4 col-md-3 d-flex align-items-center text-start">
    <img src={trx} alt="Tron" className="crypto-img" />
    Tron
  </div>
  <div className="col-2 d-none d-md-block">TRX</div>
  <div className="col-2 d-flex justify-content-center gap-2">
    <span className="fee-badge fee-green">
     <i><FaGasPump /></i>
      12
    </span>
    <span className="fee-badge fee-red">
      <i><FaGasPump /></i>
      15
    </span>
  </div>
  <div className="col-2">0.23%</div>
  <div className="col-2 text-end">15</div>
</div>


{/* Ethereum */}
<div className="row crypto-row gx-2 justify-content-between text-md-start py-2 border-bottom">
  <div className="col-4 col-md-3 d-flex align-items-center text-start">
    <img src={eth} alt="Ethereum" className="crypto-img" />
    Ethereum
  </div>
  <div className="col-2 d-none d-md-block">ETH</div>
  <div className="col-2 d-flex justify-content-center gap-2">
    <span className="fee-badge fee-green">
     <i><FaGasPump /></i>
      0.003
    </span>
    <span className="fee-badge fee-red">
     <i><FaGasPump /></i>
      0.005
    </span>
  </div>
  <div className="col-2">0.23%</div>
  <div className="col-2 text-end">0.0054</div>
</div>

{/* Tether USD ERC20 */}
<div className="row crypto-row gx-2 justify-content-between text-md-start py-2 border-bottom">
  <div className="col-4 col-md-3 d-flex align-items-center text-start">
    <img src={usdterc20} alt="Tether USD ERC20" className="crypto-img" />
    Tether USD ERC20
  </div>
  <div className="col-2 d-none d-md-block">USDTERC20</div>
  <div className="col-2 d-flex justify-content-center gap-2">
    <span className="fee-badge fee-green">
     <i><FaGasPump /></i>
      2
    </span>
    <span className="fee-badge fee-red">
      <i><FaGasPump /></i>
      5
    </span>
  </div>
  <div className="col-2">0.23%</div>
  <div className="col-2 text-end">8</div>
</div>

{/* Tether USD TRC20 */}
<div className="row crypto-row gx-2 align-items-center text-center text-md-start py-2 border-bottom">
  <div className="col-4 col-md-3 d-flex align-items-center text-start">

    <img src={usdttrc20} alt="" className='crypto-img' />
  </div>
  <div className="col-2 d-none d-md-block">USDTTRC20</div>
  <div className="col-2 d-flex justify-content-center gap-2">
    <span className="fee-badge fee-green">
     <i><FaGasPump /></i>
      2
    </span>
    <span className="fee-badge fee-red">
     <i><FaGasPump /></i>
      5
    </span>
  </div>
  <div className="col-2">0.23%</div>
  <div className="col-2 text-end">8</div>
</div>

<div className="container py-4">
  <div className="text-center mb-3 pt-5">
    You will only be charged above fees if you withdraw funds Manually or Automatically. Deposit is free
  </div>
  <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
    <div className="d-flex align-items-center gap-2">
      <i><FaGasPump /></i>
      <span>With Gas Station</span>
    </div>
    <div className="vr"></div>
    <div className="d-flex align-items-center gap-2">
    <i><FaGasPump /></i>
      <span>Without Gas Station</span>
    </div>
    <div className="vr"></div>
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
    <h2 className="fw-bold">Comparison Table</h2>
    <p className="text-muted">
      Compare Coinremitter’s services to other crypto payment gateways. Know why Coinremitter stands out with its excellent services.
    </p>
  </div>

  {/* Second Section: Table */}
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
