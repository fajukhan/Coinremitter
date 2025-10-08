import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';


import Joomla2 from '../Image/Joomla-2.png';
import Bloer20 from '../Image/bloer-20.png';
import Regulutton from '../Image/Regulutton.png';
import The25 from '../Image/The-25.png';
import BlogBan30 from '../Image/blog-ban30.png';
import BlogBa31 from '../Image/blog-ba31.png';




const CryptNews = () => {
  return (
    <>
    

    {/* NAVBAR */}
    <NavBar />




   {/* SECTION-1 */}
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









    {/* FOOTER */}
    <Footer />
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default CryptNews
