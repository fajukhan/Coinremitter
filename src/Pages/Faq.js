import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState('coinremitter');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqData = {
    coinremitter: {
      title: 'CoinRemitter',
      mainQuestion: 'What is CoinRemitter?',
      mainAnswer:
        'CoinRemitter is a cryptocurrency payment gateway that allows businesses to accept payments in various cryptocurrencies. It provides a secure, reliable, and seamless payment processing solution for merchants and vendors with a focus on user-friendly functionality.',
      questions: [
        {
          id: 'cr1',
          question:
            'Is it beneficial to start accepting payments in cryptocurrencies?',
          answer:
            'Yes, accepting cryptocurrency payments offers several benefits including lower transaction fees compared to traditional payment methods, access to a global customer base, faster settlement times, and protection against chargebacks.',
        },
        {
          id: 'cr2',
          question: 'Does CoinRemitter offer any bonus earnings?',
          answer:
            'Yes, we regularly offer promotional programs and bonus earnings for our users. These include referral bonuses, transaction fee discounts for high-volume merchants, and special seasonal promotions.',
        },
        {
          id: 'cr3',
          question: 'How many users does CoinRemitter currently have?',
          answer:
            'We have already made a family of 38000+ users and built up a strong connection with them. Our user base is growing rapidly as more businesses adopt cryptocurrency payments.',
        },
        {
          id: 'cr4',
          question: 'What makes CoinRemitter different from other gateways?',
          answer:
            'CoinRemitter focuses on simplicity and user experience, especially for those new to the crypto world. We offer the lowest withdrawal fees, prioritize user privacy, and provide seamless integration with popular platforms.',
        },
        {
          id: 'cr5',
          question: 'Can I list my coin on your gateway?',
          answer:
            'Yes, one of the main features of our gateway is the ability to easily list your coin. We\'ve designed the process to be straightforward and accessible to all cryptocurrency projects.',
        },
      ],
    },
    cryptoPayment: {
      title: 'Crypto Payment Integration',
      mainQuestion: 'What kind of services do you provide?',
      mainAnswer:
        'We provide a comprehensive suite of services including digital wallet solutions, payment processing, invoice generation, currency swap functionality, and plugins for popular platforms like PHP, Laravel, and WordPress through our REST API.',
      questions: [
        {
          id: 'cpi1',
          question: 'How much do you charge to accept cryptocurrency?',
          answer:
            'We offer some of the lowest fees in the industry. Our standard transaction fee is just 0.23% per transaction, with no hidden charges. Additionally, we provide discounted rates for high-volume merchants.',
        },
        {
          id: 'cpi2',
          question: 'How quickly are payments processed?',
          answer:
            "All payments are directly forwarded into the seller's wallet within a minute. Our Webhook function ensures consumers receive payment notifications quickly and efficiently.",
        },
        {
          id: 'cpi3',
          question: 'Which platforms can I integrate with CoinRemitter?',
          answer:
            'We provide plugins for PHP, Laravel, and WordPress. Our REST API and documentation ensure smooth integration with various platforms.',
        },
        {
          id: 'cpi4',
          question: 'Do you support currency swapping?',
          answer:
            'Yes, our platform allows you to perform currency swaps within a minute. This feature is designed to be user-friendly and efficient for all our users.',
        },
        {
          id: 'cpi5',
          question: 'How secure are transactions on your platform?',
          answer:
            'We prioritize security with two-factor authentication (2FA) and advanced encryption protocols. All transactions are monitored and protected to ensure the safety of your funds.',
        },
      ],
    },
    accountWallet: {
      title: 'Account & Wallet Service',
      mainQuestion: 'Do you support fiat or credit card services?',
      mainAnswer:
        'Currently, CoinRemitter focuses exclusively on cryptocurrency transactions. We do not directly support fiat currencies or credit card payments, ensuring a dedicated and optimized crypto payment experience.',
      questions: [
        {
          id: 'aws1',
          question: 'Do I need any ID and KYC to verify my account?',
          answer:
            'Our KYC requirements depend on your transaction volume and services used. For basic wallet functionality, no extensive verification is needed. For higher limits, we may require identity verification for security.',
        },
        {
          id: 'aws2',
          question: 'What security measures do you have?',
          answer:
            'We employ bank-level security including 2FA, encryption protocols, and regular security audits to protect your account and transactions.',
        },
        {
          id: 'aws3',
          question: 'How do I set up a digital wallet with CoinRemitter?',
          answer:
            "Setting up a wallet is simple. Just sign up, follow the step-by-step guide, and you'll be ready to accept cryptocurrency payments in no time.",
        },
        {
          id: 'aws4',
          question: 'Can I use CoinRemitter for invoice generation?',
          answer:
            'Yes, our digital invoice service is one of our core features. You can create and manage invoices seamlessly through our platform.',
        },
        {
          id: 'aws5',
          question: 'What if I encounter wallet issues?',
          answer:
            'We have a dedicated support team ready to assist with any wallet-related issues. Our focus is on providing reliable and seamless service to all users.',
        },
      ],
    },
  };

  const currentCategory = faqData[activeCategory];

  return (
    <>
      <NavBar />

      {/* SECTION 1 */}
      <section id="support" className="container-fluid section-1">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
            <h1>FAQs</h1>
            <p>You ask frequently, we answer seamlessly.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="faq-section py-5 white" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="text-center mb-5 fw-bold" style={{ color: '#000' }}>
                Frequently Asked Questions
              </h2>

              {/* Category Buttons */}
              <div className="row mb-5">
                {[
                  { id: 'coinremitter', icon: 'fas fa-wallet', label: 'CoinRemitter' },
                  { id: 'cryptoPayment', icon: 'fas fa-money-bill-transfer', label: 'Crypto Payment Integration' },
                  { id: 'accountWallet', icon: 'fas fa-gear', label: 'Account & Wallet Service' },
                ].map((cat) => (
                  <div key={cat.id} className="col-md-4 mb-3 mb-md-0">
                    <button
                      className={`btn w-100 py-3 fw-semibold ${
                        activeCategory === cat.id ? 'btn-custom-active' : 'btn-custom-outline'
                      }`}
                      onClick={() => setActiveCategory(cat.id)}
                      style={
                        activeCategory === cat.id
                          ? {
                              backgroundColor: '#00CEC9',
                              borderColor: '#00CEC9',
                              color: '#fff',
                            }
                          : {
                              borderColor: '#00CEC9',
                              color: '#00CEC9',
                            }
                      }
                    >
                      <i className={`${cat.icon} me-2`}></i>
                      {cat.label}
                    </button>
                  </div>
                ))}
              </div>

              {/* Main FAQ Content */}
              <div className="faq-content bg-white rounded shadow-sm p-4 mb-5">
                <div className="d-flex align-items-start">
                  <div className="flex-shrink-0 fs-2 me-3" style={{ color: '#00CEC9' }}>
                    <i className="fas fa-question-circle"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h4 style={{ color: '#00CEC9' }}>{currentCategory.mainQuestion}</h4>
                    <p className="mt-3 fs-5">{currentCategory.mainAnswer}</p>
                  </div>
                </div>
              </div>

              {/* Additional Questions */}
              <div className="mt-5">
                <h4 className="mb-4 ms-3" style={{ color: '#000' }}>
                  Other Common Questions
                </h4>
                <div className="accordion" id="faqAccordion">
                  {currentCategory.questions.map((item) => (
                    <div key={item.id} className="accordion-item border-0 mb-3">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed rounded shadow-sm d-flex justify-content-between align-items-center"
                          type="button"
                          onClick={() => toggleItem(item.id)}
                          style={{
                            backgroundColor: openItems[item.id] ? '#e9ffff' : 'white',
                            color: '#333',
                            border: 'none',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                          }}
                        >
                          <span className="me-3" style={{ flex: 1, textAlign: 'left' }}>
                            {item.question}
                          </span>
                          <span className="ms-2" style={{ color: '#00CEC9', fontSize: '1.2rem' }}>
                            {openItems[item.id] ? (
                              <i className="fas fa-minus"></i>
                            ) : (
                              <i className="fas fa-plus"></i>
                            )}
                          </span>
                        </button>
                      </h2>
                      <div className={`accordion-collapse collapse ${openItems[item.id] ? 'show' : ''}`}>
                        <div
                          className="accordion-body pt-3"
                          style={{
                            backgroundColor: '#f0fffd',
                            borderBottomLeftRadius: '8px',
                            borderBottomRightRadius: '8px',
                          }}
                        >
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Faq;
