import React from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import aboutusimg from '../Image/aboutusimg.png';

const About = () => {
  return (
<>
<NavBar />



      {/* <!-- SECTION 1 --> */}
<section id='support' class="container-fluid section-1">
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-6">
      <h1>About us</h1>
      <p>Coinremitter is fully functional gateway of cryptocurrencies. We always wanted coinremitter to be easy for users. The kind of service we are providing is reliable, trustworthy and seamless.</p>
    </div>
  </div>
</section>


{/* SECTION-2 */}


<section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* First Column - Image */}
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
            <div className="about-image">
              <img 
                src={aboutusimg} 
                alt="About Coinremitter" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
          
          {/* Second Column - Content */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="about-content">
              <h2 className="mb-4">About Coinremitter</h2>
              <p className="lead">
                The kind of service we are providing is reliable, trustworthy and seamless.
              </p>
              
              <p>
                We have already made a family of 38000+ users and built up a strong connection with them.
                Our services such as digital wallet and digital invoice including other functionalities
                performs seamlessly.
              </p>
              
              <p>
                We focus more on our user's needs and accomplish them as soon as possible. We always aim to make services simple for those merchants and
                vendors who are eventually new within this crypto world and wanted to make strong
                communication and looking for to make strong wallet transaction with their buyers
                or sellers.
              </p>
              
              <p>
                To connect with individual websites is also our major step for those who are using
                coinremitter plugin like PHP, Laravel and Wordpress from their websites with the
                help of our rest API through docs.
              </p>
              
              <div className="mt-4">
                <a href="#blog" className="btn btn-primary btn-lg">
                  READ OUR BLOG
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>




      {/* <!-- FOOTER --> */}
      <Footer />






</>
  )
}

export default About
