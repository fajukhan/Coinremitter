import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const CookiesPolicy = () => {
  return (
  <>
  {/* NAVBAR */}
  <NavBar />


      {/* SECTION-1 */}
<section class="container-fluid section-1">
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-6">
      <h1>Cookie Policy</h1>
    
    </div>
  </div>
</section>


{/* SECTION-2 - Cookie Policy */}
<section className="py-5 bg-white">
    <div className="container-fluid px-md-5 px-3">
        {/* Cookie Policy Heading */}
        <div className="mb-5 content-section">
            <div className="mb-4">
                <h5 className="section-heading-1">Cookie Policy</h5>
            </div>
            
            <p className="mt-2 text-black cls-1">
                Every time you visit our website we may store or retrieve information on your browser, mostly in the form of cookies. We may make changes to this cookie policy at any time to reflect and comply with operational, legal, or regulatory requirements.
            </p>
            
            <p className="mt-3 text-black cls-1">
                Cookies do not contain any information that personally identifies "you" as a user, but personal information that we store about you which may be linked to the information stored and obtained from cookies.
            </p>
        </div>

        {/* Definitions */}
        <div className="mb-5 content-section">
            <div className="mb-4">
                <h5 className="section-heading-1">Definitions</h5>
            </div>
            
            <div className="mb-3">
                <h6 className="d-flex align-items-start mb-2">
                    <i className="bi bi-circle-fill bullet-point"></i> Company
                </h6>
                <p className="mt-1 text-black cls-1">
                    (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to Coinremitter, 8 Eu Tong Sen St., Singapore 059818
                </p>
            </div>

            <div className="mb-3">
                <h6 className="d-flex align-items-start mb-2">
                    <i className="bi bi-circle-fill bullet-point"></i> Website
                </h6>
                <p className="mt-1 text-black cls-1">
                    refers to Coinremitter
                </p>
            </div>

            <div className="mb-3">
                <h6 className="d-flex align-items-start mb-2">
                    <i className="bi bi-circle-fill bullet-point"></i> You
                </h6>
                <p className="mt-1 text-black cls-1">
                    stand for the individual accessing or using our Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.
                </p>
            </div>
        </div>

        {/* Type of Cookies We Use */}
        <div className="mb-5 content-section">
            <div className="mb-4">
                <h5 className="section-heading-1">Type of Cookies We Use</h5>
            </div>
            
            <p className="mt-2 text-black cls-1">
                Cookies can be "Persistent" or "Session" cookies. Cookies that remain on your personal computer or mobile device when you go offline are known as persistent cookies, while cookies which are deleted as soon as you close your web browser are known as session cookies.
            </p>
        </div>

        {/* Session Cookies */}
        <div className="mb-5 content-section">
            <div className="mb-4">
                <h5 className="section-heading-1">Session Cookies</h5>
            </div>
            
            <p className="mt-2 text-black cls-1">
                These cookies are essential to provide you with services available through the website and to enable you to use some of its features. To authenticate users and prevent any fraudulent use of user accounts. Without these cookies, you might not get some services that you ask for, and we only use these cookies to provide you with those services.
            </p>
        </div>

        {/* Persistent Cookies */}
        <div className="mb-5 content-section">
            <div className="mb-4">
                <h5 className="section-heading-1">Persistent Cookies</h5>
            </div>
            
            <p className="mt-2 text-black cls-1">
                Every time you use the website you make certain choices. These cookies help us to remember that, such as your login details or language preference. The need for these cookies is to provide you with a more personal and better experience and to avoid having you re-enter your preferences every time you use the Website.
            </p>
        </div>

        {/* Choices Regarding Cookies */}
        <div className="mb-5 content-section">
            <div className="mb-4">
                <h5 className="section-heading-1">Choices Regarding Cookies</h5>
            </div>
            
            <p className="mt-2 text-black cls-1">
                If you want to avoid the use of cookies on the Website, you need to <strong>disable the use of cookies</strong> in your browser and then delete the cookies saved associated with this website. You can use this option for preventing the use of cookies.
            </p>
            
            <p className="mt-3 text-black cls-1">
                If you do not accept <strong>our cookies</strong>, You may experience some inconvenience while using the website and <strong>some features may not function</strong> properly, or as you want it to.
            </p>
        </div>

        {/* Contact Us */}
        <div className="mb-5 content-section">
            <div className="mb-4">
                <h5 className="section-heading-1">Contact Us</h5>
            </div>
            
            <p className="mt-2 text-black cls-1">
                If you have any questions about this cookie policy.
            </p>
            
            <p className="mt-2 text-black cls-1">
                You can contact us: <strong>support@coinremitter.com</strong>
            </p>
        </div>
    </div>
</section>






  {/* FOOTER */}
  <Footer />
  
  </>
  )
}

export default CookiesPolicy
