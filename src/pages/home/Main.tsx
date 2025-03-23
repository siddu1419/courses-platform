import React, { useEffect, useState } from 'react';
import heroImage from '../../assets/hero_image.jpeg';

export default function Main() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false); // State to control user details modal
  const [showTestModal, setShowTestModal] = useState(false); // State to control test modal

  // Load Razorpay SDK
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Handle Webinar Payment
  const handleWebinarPayment = async () => {
    if (!userDetails.name || !userDetails.email || !userDetails.phone) {
      alert('Please fill in all the details.');
      return;
    }

    const options = {
      key: 'rzp_live_mXAqSwjm9lGTyn', // Replace with your Razorpay Key ID
      amount: 1 * 100, // ₹99 in paise
      currency: 'INR',
      name: 'Webinar Registration',
      description: 'Attend a Webinar',
      image: 'https://your-logo-url.com/logo.png', // Replace with your logo URL
      handler: (response: any) => {
        if (response.razorpay_payment_id) {
          setShowTestModal(true); // Show test modal after successful payment
          setShowUserDetailsModal(false); // Close user details modal
        }
      },
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.phone,
      },
      theme: { color: '#F37254' },
      modal: {
        ondismiss: () => alert('Payment was not completed. Please try again.'),
      },
    };

    if (window.Razorpay) {
      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } else {
      alert('Razorpay SDK not loaded');
    }
  };

  // Scroll to Courses Section
  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Input Change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  return (
    <main className='mb-10 mt-14 grid grid-rows-2 items-center gap-8 lg:mt-20 lg:grid-cols-2 lg:grid-rows-1 lg:gap-32 lg:py-8'>
      {/* Hero Text Section */}
      <section className='hero-text order-2 flex flex-col gap-6 sm:mx-auto sm:max-w-md sm:text-center lg:order-1 lg:mx-[unset] lg:max-w-[unset] lg:gap-10 lg:text-left'>
        <div>
          <h1 className='text-3xl lg:text-5xl'>Experience Physics in a Whole New Way!</h1>
        </div>
        <p className='text-lg font-light text-neutral sm:!leading-9 lg:text-2xl'>
          Transform your JEE & NEET preparation with interactive simulators and practical learning that makes Physics fun and easy.
        </p>
        <div className='mt-8 flex gap-4 sm:mx-auto lg:mx-[unset] lg:mt-12'>
          <button
            className='btn-neutral-big-custom'
            onClick={() => setShowUserDetailsModal(true)}
          >
            Attend a webinar ₹99 /-
          </button>
          <button className='btn-neutral-big-custom' onClick={scrollToCourses}>
            Explore Courses
            {/* Arrow right icon */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className='hero-img h-auto w-full max-w-md rounded-lg sm:mx-auto sm:text-center lg:order-2 lg:mx-[unset] lg:max-w-[unset] lg:text-left'>
        <img
          src={heroImage}
          alt='Physics learning with interactive simulators'
        />
      </section>

      {showUserDetailsModal && (
        <div className="modal-overlay">
          <div className="modal-new-ui-container">
            {/* Cross Button on Top Right */}
            <button className="close-modal-top-right" onClick={() => setShowUserDetailsModal(false)}>
              ×
            </button>

            <div className="modal-new-ui-content">
              {/* Left Side: What You Get */}
              <div className="modal-new-ui-left">
                <h3>ExamTrakker Webinar: Do You Have What It Takes to Crack JEE?</h3>
                <p className="mt-4">
                  For students & parents – Cracking IIT JEE isn’t just about formulas, it’s about skills.
                </p>
                <ul className="mt-4 space-y-2">
                  <li>✅ <strong>Analytical Ability</strong> – Can you break down tough problems?</li>
                  <li>✅ <strong>Conceptual Clarity</strong> – Do you truly understand Physics?</li>
                  <li>✅ <strong>Accuracy</strong> – How precise are your answers?</li>
                  <li>✅ <strong>Endurance</strong> – Can you stay sharp under pressure?</li>
                </ul>
                <p className="mt-4">
                  In this ₹99 interactive webinar, students will take a fun challenge to test these key skills! Plus, explore simulators, live quizzes & smart learning techniques to boost JEE prep.
                </p>
                <p className="mt-4 font-bold">
                  Limited seats! Register now & discover your true potential!
                </p>
              </div>

              {/* Right Side: Payment Form */}
              <div className="modal-new-ui-right">
                <h3>Attend Webinar</h3>
                <form className="enroll-form">
                  <label>
                    Name:
                    <input
                      type="text"
                      name="name"
                      value={userDetails.name}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label>
                    Email:
                    <input
                      type="email"
                      name="email"
                      value={userDetails.email}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label>
                    Phone:
                    <input
                      type="tel"
                      name="phone"
                      value={userDetails.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <button
                    type="button"
                    className="pay-button"
                    onClick={handleWebinarPayment}
                  >
                    Pay ₹99
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Test Modal */}
      {showTestModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            {/* Cross Button on Top Right */}
            <button
              className="close-modal-top-right"
              onClick={() => setShowTestModal(false)}
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-4">Thank you for registering for the webinar!</h2>
            <p className="mb-6">Your payment was successful. Please take a quick test to get started.</p>
            <a
              href="https://tally.so/r/w8MlvP" // Replace with your actual test link
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Take Test
            </a>
          </div>
        </div>
      )}
    </main>
  );
}