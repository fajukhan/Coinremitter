import React, { useState } from 'react';
import NavBar from './NavBar'
import Footer from './Footer'

const ListYourcoin = () => {



  const [formData, setFormData] = useState({
    coinName: '',
    tickerSymbol: '',
    algorithm: 'Script Hybrid PoW/PoS',
    coinSupply: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };


  return (
   <>
   
   
   
   <NavBar />


       {/* <!-- SECTION 1 --> */}
<section id='support' class="container-fluid section-1">
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-6">
      <h1>Effortless Coin Listing Services</h1>
      <p>Apply for Coin Listing and get your own cryptocurrency listed on Coinremitter. Team Coinremitter will review your application and will make your coin available for crypto payments if found worthy.</p>
    </div>
  </div>
</section>



      {/* <!-- SECTION 2 --> */}
   <section className="coin-setup py-5 bg-white" style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            {/* Step Indicators */}
            <div className="d-flex justify-content-between align-items-center mb-5 position-relative">
              <div className="position-absolute top-50 start-0 end-0 translate-middle-y" style={{ height: '2px', backgroundColor: '#dee2e6', zIndex: 1 }}></div>
              
              <div className="step-indicator d-flex flex-column align-items-center position-relative" style={{ zIndex: 2 }}>
                <div className="rounded-circle d-flex align-items-center justify-content-center mb-2" 
                  style={{ width: '50px', height: '50px', backgroundColor: 'orange', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  <i className="fas fa-file-alt me-1"></i> 1
                </div>
                <span className="small text-muted">General Detail</span>
              </div>
              
              <div className="step-indicator d-flex flex-column align-items-center position-relative" style={{ zIndex: 2 }}>
                <div className="rounded-circle d-flex align-items-center justify-content-center mb-2" 
                  style={{ width: '50px', height: '50px', backgroundColor: '#dee2e6', color: '#6c757d', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  <i className="fas fa-cog me-1"></i> 2
                </div>
                <span className="small text-muted">Configuration</span>
              </div>
              
              <div className="step-indicator d-flex flex-column align-items-center position-relative" style={{ zIndex: 2 }}>
                <div className="rounded-circle d-flex align-items-center justify-content-center mb-2" 
                  style={{ width: '50px', height: '50px', backgroundColor: '#dee2e6', color: '#6c757d', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  <i className="fas fa-check-circle me-1"></i> 3
                </div>
                <span className="small text-muted">Completion</span>
              </div>
            </div>

            {/* Form Card */}
            <div className="card shadow-sm border-0">
              <div className="card-header bg-white py-4 border-0">
                <h4 className="card-title mb-0 text-center">
                  <i className="fas fa-info-circle me-2 text-primary"></i>
                  General Detail
                </h4>
              </div>
              
              <div className="card-body p-4 p-md-5">
                <form onSubmit={handleSubmit}>
                  {/* Coin Name Field */}
                  <div className="mb-4">
                    <label htmlFor="coinName" className="form-label fw-semibold">
                      <i className="fas fa-coin me-2 text-warning"></i>
                      Full Name Of Your Coin / Token
                      <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-signature text-primary"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="coinName"
                        name="coinName"
                        placeholder="Enter your coin name"
                        value={formData.coinName}
                        onChange={handleChange}
                        maxLength={15}
                        required
                      />
                      <span className="input-group-text bg-light">
                        <i className="fas fa-tag text-secondary"></i>
                      </span>
                    </div>
                    <div className="form-text text-end">
                      <i className="fas fa-text-height me-1"></i>
                      {formData.coinName.length}/15 characters
                    </div>
                  </div>

                  {/* Ticker Symbol Field */}
                  <div className="mb-4">
                    <label htmlFor="tickerSymbol" className="form-label fw-semibold">
                      <i className="fas fa-hashtag me-2 text-info"></i>
                      Ticker / Symbol
                      <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-at text-primary"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="tickerSymbol"
                        name="tickerSymbol"
                        placeholder="Enter ticker symbol"
                        value={formData.tickerSymbol}
                        onChange={handleChange}
                        maxLength={5}
                        required
                      />
                      <span className="input-group-text bg-light">
                        <i className="fas fa-code text-secondary"></i>
                      </span>
                    </div>
                    <div className="form-text text-end">
                      <i className="fas fa-text-height me-1"></i>
                      {formData.tickerSymbol.length}/5 characters
                    </div>
                  </div>

                  {/* Algorithm Field */}
                  <div className="mb-4">
                    <label htmlFor="algorithm" className="form-label fw-semibold">
                      <i className="fas fa-project-diagram me-2 text-success"></i>
                      Algorithm
                      <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-brain text-primary"></i>
                      </span>
                      <select
                        className="form-select"
                        id="algorithm"
                        name="algorithm"
                        value={formData.algorithm}
                        onChange={handleChange}
                        required
                      >
                        <option value="Script Hybrid PoW/PoS">Script Hybrid PoW/PoS</option>
                        <option value="SHA-256">SHA-256</option>
                        <option value="Scrypt">Scrypt</option>
                        <option value="X11">X11</option>
                        <option value="Ethash">Ethash</option>
                        <option value="Equihash">Equihash</option>
                        <option value="CryptoNight">CryptoNight</option>
                      </select>
                      <span className="input-group-text bg-light">
                        <i className="fas fa-microchip text-secondary"></i>
                      </span>
                    </div>
                    <div className="form-text">
                      <i className="fas fa-info-circle me-1"></i>
                      Select the algorithm your coin will use
                    </div>
                  </div>

                  {/* Coin Supply Field */}
                  <div className="mb-4">
                    <label htmlFor="coinSupply" className="form-label fw-semibold">
                      <i className="fas fa-database me-2 text-danger"></i>
                      Coin Supply
                      <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-coins text-primary"></i>
                      </span>
                      <input
                        type="number"
                        className="form-control"
                        id="coinSupply"
                        name="coinSupply"
                        placeholder="Enter total supply of coins or tokens"
                        value={formData.coinSupply}
                        onChange={handleChange}
                        min="0"
                        required
                      />
                      <span className="input-group-text bg-light">
                        <i className="fas fa-infinity text-secondary"></i>
                      </span>
                    </div>
                    <div className="form-text">
                      <i className="fas fa-info-circle me-1"></i>
                      Total Supply of Coins or Token
                    </div>
                  </div>

                  {/* Next Button */}
                  <div className="d-grid mt-5">
                    <button type="submit" className="btn btn-primary btn-lg py-3 fw-semibold">
                      <i className="fas fa-arrow-circle-right me-2"></i>
                      NEXT 
                      <i className="fas fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-4 p-3 bg-light rounded text-center">
              <p className="mb-0">
                <i className="fas fa-lightbulb text-warning me-2"></i>
                Need help? Check our <a href="#documentation" className="text-decoration-none">documentation</a> or <a href="#support" className="text-decoration-none">contact support</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>




   <Footer />
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   </>
  )
}

export default ListYourcoin
