import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import './App.css';
import Fess from "./Pages/Fess";
import Coins from "./Pages/Coins";
import Blogs from "./Pages/Blogs";
import Plugins from "./Pages/Plugins";
import SignInPage from "./Pages/SignInPage";
import Signup from "./Pages/Signup";
import Support from "./Pages/Support";
import About from "./Pages/About";
import Faq from "./Pages/Faq";
import ListYourcoin from "./Pages/ListYourcoin";
import Topcrypto from "./Pages/Topcrypto";
import InvoiceServices from "./Pages/InvoiceServices";
import PricingWidget from "./Pages/PricingWidget";
import PresaleWidget from "./Pages/PresaleWidget";
import PaymentButtonWidget from "./Pages/PaymentButtonWidget";
import Paymentpagewidget from "./Pages/Paymentpagewidget";
import Termsofservices from "./Pages/Termsofservices";
import RiskWarm from "./Pages/RiskWarm";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import CookiesPolicy from "./Pages/CookiesPolicy";
import IcoPayment from "./Pages/IcoPayment";
import CryptNews from "./Pages/CryptNews";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />  // ✅ Render the Home component here
    },
  

        {
      path: "fess",
      element: <Fess />
    },

         {
      path: "coins",
      element: <Coins />
    },


          {
      path: "blogs",
      element: <Blogs />
    },

    
          {
      path: "plugins",
      element: <Plugins />
    },


             {
      path: "signinpage",
      element: <SignInPage />
    },

            {
      path: "signup",
      element: <Signup />
    },

    
            {
      path: "support",
      element: <Support />
    },


                {
      path: "about",
      element: <About />
    },

    
                {
      path: "faq",
      element: <Faq />
    },


                 {
      path: "listyourcoin",
      element: <ListYourcoin />
    },


    
                 {
      path: "topcrypto",
      element: <Topcrypto />
    },


                   {
      path: "invoiceservices",
      element: <InvoiceServices />
    },


    
   {
      path: "pricingwidget",
      element: <PricingWidget />
    },


      
   {
      path: "presalwidget",
      element: <PresaleWidget />
    },


          
   {
      path: "paymentbuttonwidget",
      element: <PaymentButtonWidget />
    },


     {
      path: "paymentpagewidget",
      element: <Paymentpagewidget />
    },


    
     {
      path: "termsofsevices",
      element: <Termsofservices />
    },


    
     {
      path: "riskwarm",
      element: <RiskWarm />
    },


    
     {
      path: "privarypolicy",
      element: <PrivacyPolicy />
    },


     
     {
      path: "cookiespolicy",
      element: <CookiesPolicy />
    },


       
     {
      path: "icopayment",
      element: <IcoPayment />
    },


     {
      path: "cryptonews",
      element: <CryptNews />
    },




  ]);

  return <RouterProvider router={router} />;
};

export default App;
