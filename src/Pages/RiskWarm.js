import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const RiskWarm = () => {
  return (
   <>

   {/* NAVBAR */}
   <NavBar />


     {/* SECTION-1 */}
<section class="container-fluid section-1">
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-6">
      <h1>Risk warning</h1>
    
    </div>
  </div>
</section>

  
{/* SECTION-2 */}
<section className="py-5 bg-white">
    <div className="container-fluid px-md-5 px-3">
        {/* <!-- Disclaimer and Risk Warnings --> */}
        <div className="mb-5 content-section">
            <div className="mb-4">
                <h5 className="section-heading-1">Disclaimer and Risk Warnings</h5>
            </div>
            
            <p className="mt-2 text-black cls-1">
                The Website, Content, and Services are provided without any guarantees, conditions as to its accuracy/quality, and fit for a particular purpose or need. The Company does not guarantee that the Website and Services are error-free, or will operate without interruption. We are not in charge of any substance of outside sites that are connected to our pages.
            </p>
            
            <p className="mt-3 text-black cls-1">
                Any conclusions and remarks communicated on this site are not the perspectives held all through Coinremitter. No Partner, agent, or worker of Coinremitter acknowledges risk for any immediate or noteworthy misfortune emerging from the utilization of this archive or its services. This site ought to work according to Singapore's Payment Services Act 2019 (PSA).
            </p>
            
            <div className="mt-4">
                <h6 className="d-flex align-items-start mb-3">
                    <i className="bi bi-circle-fill bullet-point"></i> Coinremitter shall not be liable for any events that may include:
                </h6>
                <ul className="restricted-list text-black">
                    <li>Civil, criminal, and administrative actions</li>
                    <li>Server hack or damage that may arise</li>
                    <li>If such use is forbidden or otherwise limited in your country</li>
                    <li>Any new low regarding that comes in power or adopted by the authorities</li>
                    <li>Failure of power supply or communication system or other similar circumstances that prevent the Parties from the proper fulfillment of their obligations here under</li>
                </ul>
            </div>
            
            <p className="mt-3 text-black cls-1">
                And we are also not liable for the use or inability to use the Website and Services by anyone. We are not liable for any lost of fund due to cross chain transfer, internal transaction(in either sum or bionance smart chain) or cross token transfer made by you or your client. In such case fund will not recover in any case.
            </p>
            
            <div className="warning-note">
                <p className="mb-0 text-black cls-1">
                    <strong>Important:</strong> Any misuse of the services or the platforms by ("you" or "clients") will be considered as an act of violation against the Coinremitter terms, so, therefore, legal action might be taken against you as per Singapore law and order.
                </p>
            </div>
            
            <div className="mt-4">
                <h6 className="d-flex align-items-start mb-3">
                    <i className="bi bi-circle-fill bullet-point"></i> Investment Risks:
                </h6>
                <p className="mt-2 text-black cls-1">
                    It would be ideal if you take note that the estimation of ventures and the pay received from them may fall and you may get back short of what you contributed. Past execution isn't a manual for future execution. No speculation is reasonable in all cases and if you have any questions as to a venture's appropriateness then you should reach us.
                </p>
            </div>
            
            <div className="mt-4">
                <h6 className="d-flex align-items-start mb-3">
                    <i className="bi bi-circle-fill bullet-point"></i> Data Protection:
                </h6>
                <p className="mt-2 text-black cls-1">
                    We may process individual information identifying with you as per the Personal Data Protection Act (PDPA) of Singapore as revised and some other controls identifying information security, regarding what we may do with such information. You can know more about our privacy policy.
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

export default RiskWarm
