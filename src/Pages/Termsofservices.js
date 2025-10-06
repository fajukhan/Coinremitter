import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { BsFillCircleFill } from "react-icons/bs";

const Termsofservices = () => {
  return (
  <>
{/* NAVBAR */}
  <NavBar />





  {/* SECTION-1 */}
<section class="container-fluid section-1">
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-6">
      <h1>Terms of Service</h1>
    
    </div>
  </div>
</section>


{/* SECTION-2 */}
    <section className="container-fluid py-5 px-5">
      <div className="row justify-content-start">
        <div className="col-12 col-md-10 col-lg-12">
          <h2 className="fw-bold mb-4" style={{ color: '#f7931a' }}>
            The Services
          </h2>
          <p style={{ color: '#000', fontSize: '1rem', lineHeight: '1.6' }} className="mb-4">
            Coinmmerce enables users to accept cryptocurrency as payment for goods or services. 
            The Purchaser agrees to transfer the specified amount of cryptocurrency, and the Merchant 
            agrees to deliver the corresponding product or service. Coinmmerce acts as a facilitator 
            and does not assume liability for the transaction outcome.
          </p>

          <h2 className="fw-bold mb-4" style={{ color: '#f7931a' }}>
            The gatherings concur as follows
          </h2>
          <p style={{ color: '#000', fontSize: '1rem', lineHeight: '1.6' }} className="mb-3">
            The Merchant affirms they have the authority to enter into this agreement. Coinmmerce 
            provides an installment gateway service for processing cryptocurrency payments. The Merchant 
            agrees to comply with all applicable laws and maintain accurate transaction records.
          </p>
        </div>
      </div>
    </section>


    {/* SECTION-3 */}
     
  <section class="py-5 bg-white"> 
    <div class="container-fluid px-5">

      {/* <!-- Heading --> */}
      <div class="mb-4">
        <h5 class="section-heading-1">1. Merchant's Account</h5>
      </div>

      {/* <!-- General --> */}
      <div class="mb-4">
        <h6 class="d-flex align-items-start">
          <BsFillCircleFill size={10} color="darkblue" className="me-2 mt-1" /> Generally
        </h6>
        <p class="mt-2 cls-1" style={{color:"#000"}}>
          To use the Services, you must open a Coinremitter Merchants account. When you open an account, we will ask you for contact information such as your name, phone number, email address, and information relating to the ultimate beneficial owner or the most senior individual from the organization. We will also ask you for information on your business, including your business's legal name, the physical address of the business, and your company's website. The information that you provide at the time of account opening must be accurate and complete. We may also obtain information about you from third parties, such as credit bureaus and identity verification services. We have the right to reject your account registration or to later close your Coinremitter Merchants account if you do not provide us with accurate, complete, and satisfactory information.
        </p>
      </div>

      {/* <!-- Guarding Password --> */}
      <div class="mb-4">
        <h6 class="d-flex align-items-center">
         <BsFillCircleFill size={10} color="darkblue" className="me-2" /> Guarding your Password
        </h6>
        <p class="mt-2 cls-1" style={{color:"#000"}}>
          You will choose a password when registering your account. You are responsible for maintaining the confidentiality of your password and account access information. You are fully responsible for all activities that occur with the use of your password or account. Please notify us immediately of any unauthorized use of your password or account or any other breach of security. If you share your password with others we will not be liable for any loss that you may incur as a result of someone else using your password or account, either with or without your knowledge.
        </p>
      </div>

      {/* <!-- Transaction Volume Limits --> */}
      <div class="mb-4">
        <h6 class="d-flex align-items-center">
          <BsFillCircleFill size={10} color="darkblue" className="me-2" /> Transaction Volume Limits
        </h6>
        <p class="mt-2 cls-1" style={{color:"#000"}}>
          Coinremitter imposes daily and annual transaction processing limits on merchants. When you register for a Coinremitter account, you will be able to choose between a free and premium plan. At Coinremitter's discretion, and based on Coinremitter’s risk assessment of your business, transaction capabilities should be decided.
        </p>
      </div>

      {/* <!-- Third-Party Services --> */}
      <div class="mb-4">
        <h6 class="d-flex align-items-center">
        <BsFillCircleFill size={10} color="darkblue" className="me-2" /> Use of Third-Party Services
        </h6>
        <p class="mt-2 cls-1" style={{color:"#000"}}>
          While using the Coinremitter website or the Services, you may be offered services, products, and promotions provided by third parties. If you decide to use these third-party services, you do so at your own risk and are solely responsible for reviewing, understanding, and complying with the associated terms and conditions. We expressly disclaim any liability for the third-party services and are not responsible for the performance of the third-party services or services.
        </p>
      </div>

      {/* <!-- Security --> */}
      <div class="mb-4">
        <h6 class="d-flex align-items-center">
          <BsFillCircleFill size={10} color="darkblue" className="me-2" /> Security
        </h6>
        <p class="mt-2 cls-1" style={{color:"#000"}}>
          We have implemented security measures designed to secure your information from accidental loss and unauthorized access, use, alteration, or disclosure. However, we cannot guarantee that unauthorized persons will never gain access to your information, and you acknowledge that you provide your information at your own risk.
        </p>
      </div>

    </div>
  </section>


  {/* SECTION-4 */}
      <section class="py-5 bg-white">
        <div class="container-fluid px-md-5 px-3">
            {/* <!-- Data Collection, Privacy, and Security --> */}
            <div class="mb-5 content-section">
                <div class="mb-4">
                    <h6 class="section-heading-1">2. Data Collection, Privacy, and Security</h6>
                </div>
                <p class="mt-2 cls-1" >
                    To provide the Services, we may share information about you and your Coinremitter account with third parties. All the information that can be shared is what you give us while creating a coinremitter merchant account. There is always certain risk attached to it so kindly read our Disclaimer & Risk Warning
                </p>
            </div>

            {/* <!-- Termination and Suspension --> */}
            <div class="mb-5 content-section">
                <div class="mb-4">
                    <h5 class="section-heading-1">3. Termination and Suspension</h5>
                </div>
                <p class="mt-2 cls-1"  style={{colo:"#000"}}>
                    We may terminate your account, at our discretion, upon notice to you via email or phone communication. We may also suspend your access to the Services if we suspect that you have failed to comply with these Terms, pose an unacceptable fraud risk to us, or if you provide any false, incomplete, inaccurate, or misleading information. We will not be liable to you for any losses that you incur in connection with our closure or suspension of your account. Additionally, if your merchant account is not in use for more than 1 year or so we coinremitter has the right to suspend your account, disabling processing capabilities.
                </p>
                
                <div class="mt-4">
                    <h6 class="d-flex align-items-start mb-3">
                        <i class="bi bi-circle-fill bullet-point"></i> What kind of business or website cannot get access to coinremitter services
                    </h6>
                    <ul class="restricted-list">
                        <li>Any terrorist group or any Anti-human-related group or businesses or website</li>
                        <li>Website directly or indirectly related to illegal activities</li>
                        <li>Any website which is a scam (hoax)</li>
                        <li>Any website that choose MLM scheme to promote their business</li>
                        <li>Any website which promise unimaginary returns (ROI) to their customer</li>
                    </ul>
                </div>
                
                <p class="mt-3 cls-1" style={{colo:"#000"}}>
                    We may ask for more information if we find some suspicious activity on your website or through your website, then there will be no prior notice given to you before suspending your account, or to take legal action against you and your business.
                </p>
            </div>

            {/* <!-- Fees --> */}
            <div class="mb-5 content-section">
                <div class="mb-4">
                    <h5 class="section-heading-1">4. Fees</h5>
                </div>
                <p class="mt-2 cls-1" style={{colo:"#000"}}>
                    Merchant Fees - There are two plans available free and premium, in both of the plans there is a processing fee that the merchant has to pay which is about 0.23%. And in the premium plan merchants have to buy the plan for 99.99 USD.
                </p>
            </div>
        </div>
    </section>


    {/* SECTION-5 */}
     <section class="py-5 bg-white">
        <div class="container-fluid px-md-5 px-3">
            {/* <!-- Settlement --> */}
            <div class="mb-5 content-section">
                <div class="mb-4">
                    <h5 class="section-heading-1">5. Settlement</h5>
                </div>
                <p class="mt-2 cls-1"style={{colo:"#000"}}>
                    We will verify the Purchaser's payments and post the balance to your accounting ledger, according to your preference settings. You cannot receive a settlement in your local currency. You assume volatility risks of the currency in which you choose to settle. For example, if you choose to settle in bitcoin, then you assume the volatility risk of the bitcoin value.
                </p>
            </div>

            {/* <!-- Discount Procedures --> */}
            <div class="mb-5 content-section">
                <div class="mb-4">
                    <h5 class="section-heading-1">6. Discount Procedures</h5>
                </div>
                <p class="mt-2 cls-1"style={{colo:"#000"}}>
                    There is nothing like a discount, but there is certainly an affiliate commission which you can earn by giving a reference of Coinremitter to your known merchants and so, the commission is about 75% of transaction fee 0.23%, which means you will receive 0.17% of the transaction amount on every transaction your referral makes.
                </p>
            </div>

            {/* <!-- Charge Changes --> */}
            <div class="mb-5 content-section">
                <div class="mb-4">
                    <h5 class="section-heading-1">7. Charge Changes</h5>
                </div>
                <p class="mt-2 cls-1"style={{colo:"#000"}}>
                    The Company may change fees and other charges of their service on occurrences to the volatility of cryptocurrencies price, and it comes into effect without prior notice to the merchant. Vendor's acknowledgment of another Fee Schedule, or Merchant's proceeds with the utilization of the Service, constitutes Merchant's acknowledgment of such changes.
                </p>
            </div>

            {/* <!-- Intellectual Property --> */}
            <div class="mb-5 content-section">
                <div class="mb-4">
                    <h5 class="section-heading-1">8. Intellectual Property</h5>
                </div>
                <p class="mt-2 cls-1"style={{colo:"#000"}}>
                    We retain all right, title, and interest in and to the Content and all of Coinremitter's brands, logos, and trademarks. Subject to the terms and states of this Agreement, Coinremitter thus allows to Merchant constrained, non-selective, non-transferable permit to use our content with our services.
                </p>
            </div>

            {/* <!-- Confidential Information --> */}
            <div class="mb-5 content-section">
                <div class="mb-4">
                    <h5 class="section-heading-1">9. Confidential Information</h5>
                </div>
                <p class="mt-2 cls-1"style={{colo:"#000"}}>
                    Confidential Information (the Receiving Party) from the other party (the Disclosing Party) concurs: (a) to hold the Disclosing Party's Confidential Information in strict certainty, and utilize a similar level of care that it uses to ensure the privacy of its secret data of like kind (however at the very least sensible care); (b) not to utilize any Confidential Information of the Disclosing Party for any reason outside the extent of this Agreement; and (c) aside from as generally approved by the Disclosing Party in composing, to confine access to Confidential Information of the Disclosing Party to those of its and its Affiliates' workers and temporary workers who require that entrance for purposes reliable with this Agreement and who have consented to classification arrangements with the Receiving Party containing insurances no less stringent.
                </p>
            </div>
        </div>

          <div class="container-fluid px-md-5 px-3">
            {/* <!-- Limitation of Liability --> */}
            <div class="mb-5 content-section">
                <div class="mb-4">
                    <h5 class="section-heading-1">10. Limitation of Liability</h5>
                </div>
                
                <p class="mt-2 cls-1"style={{colo:"#000"}}>
                    The company or any of its affiliates or vendors (or any officers, directors, employees or agents of the company or its affiliates or vendors) be liable for any indirect, incidental, consequential, special, or exemplary damages (however or whenever arising), including, without limitation, damages for:
                </p>
                
                <ul class="restricted-list mt-3">
                    <li>Lost revenue</li>
                    <li>Lost profits</li>
                    <li>Anticipated profits</li>
                    <li>Lost business or injury to business reputation</li>
                    <li>Cost of procurement of substitute services</li>
                </ul>
                
                <p class="mt-3 cls-1"style={{colo:"#000"}}>
                    Under any theory of liability or cause of action whether in tort (including negligence), contract or otherwise, regardless of whether it has been advised of the possibility of such damages.
                </p>
                
                <div class="mt-4">
                    <p class="mt-2 cls-1"style={{colo:"#000"}}>
                        The company's total liability to the merchant, whether arising in tort (including negligence), contract or otherwise, under this agreement or concerning any the company products or services, exceed the aggregate compensation the company received for providing the service to the merchant during the six (6) months preceding the date on which the claim arose.
                    </p>
                </div>
            </div>
        </div>
    </section>

  









{/* FOOTER */}
  <Footer />
  
  
  
  
  
  
  
  
  
  </>
  )
}

export default Termsofservices
