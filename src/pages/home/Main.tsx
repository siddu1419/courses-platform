import React, { useEffect, useState } from 'react';
import heroImage from '../../assets/hero_image.jpeg';

export default function Main() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);
  const [showTestModal, setShowTestModal] = useState(false);

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

  const handleWebinarPayment = () => {
    window.open('https://rzp.io/rzp/kBUJZQoJ', '_blank');
  };

  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  return (
    <main className="relative mb-10 mt-14 grid grid-rows-2 items-center gap-8 overflow-hidden lg:mt-20 lg:grid-cols-2 lg:grid-rows-1 lg:gap-32 lg:py-8">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-orange-50/30"></div>
        <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-r from-blue-100/10 via-transparent to-orange-100/10"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute -z-10 h-full w-full overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 12 + 3}px`,
              height: `${Math.random() * 12 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: Math.random() > 0.5 
                ? 'linear-gradient(45deg, #3b82f6, #6366f1)' 
                : 'linear-gradient(45deg, #f97316, #ec4899)',
              opacity: Math.random() * 0.4 + 0.1,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Hero Text Section */}
      <section className="hero-text order-2 flex flex-col gap-6 sm:mx-auto sm:max-w-md sm:text-center lg:order-1 lg:mx-[unset] lg:max-w-[unset] lg:gap-10 lg:text-left">
        <div className="relative">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 lg:text-5xl lg:leading-snug">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Cracking JEE/NEET Physics
              </span>
              <span className="absolute bottom-0 left-0 h-3 w-full bg-gradient-to-r from-blue-100 to-orange-100 opacity-80 -z-0 transform -rotate-1 scale-x-105"></span>
            </span>
            <br />
            <span className="text-gray-800">with logic, not fear.</span>
          </h1>
          <div className="mt-4 h-1.5 w-32 rounded-full bg-gradient-to-r from-blue-500 via-purple-400 to-orange-400 shadow-sm"></div>
        </div>
        
        <p className="text-lg font-light leading-relaxed text-gray-700 sm:!leading-9 lg:text-xl">
          Transform your <span className="font-medium text-blue-600">JEE & NEET preparation</span> with interactive simulators and <span className="font-medium text-orange-500">practical learning</span> that makes Physics <span className="relative">
            <span className="relative z-10">fun and intuitive</span>
            <span className="absolute bottom-0 left-0 h-2 w-full bg-yellow-100 opacity-60 -z-0 transform -rotate-1"></span>
          </span>.
        </p>
        
        <div className="mt-8 flex flex-wrap gap-4 sm:mx-auto lg:mx-[unset] lg:mt-12">
          <button
            onClick={() => setShowUserDetailsModal(true)}
            className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-medium text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/40"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Attend Webinar ₹99
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          </button>
          
          <button 
            onClick={scrollToCourses}
            className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-blue-600 bg-white px-8 py-4 font-medium text-blue-600 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-blue-50 hover:shadow-md"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Courses
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-blue-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          </button>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="hero-img order-1 h-auto w-full max-w-md overflow-hidden rounded-2xl shadow-2xl sm:mx-auto sm:text-center lg:order-2 lg:mx-[unset] lg:max-w-[unset] lg:text-left">
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <img
            src={heroImage}
            alt="Physics learning with interactive simulators"
            className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </section>

      {/* User Details Modal */}
        {showUserDetailsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            {/* Changed overflow-hidden to overflow-auto and added max-h-[90vh] */}
            <div className="relative max-h-[90vh] w-full max-w-5xl overflow-auto rounded-3xl bg-white shadow-2xl">
            <button 
              onClick={() => setShowUserDetailsModal(false)}
              className="absolute right-6 top-6 z-10 rounded-full bg-gray-100 p-2 text-gray-500 transition-all hover:bg-gray-200 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex h-full w-full flex-col overflow-y-auto lg:flex-row">
              {/* Left Side - Benefits */}
              <div className="flex-1 space-y-8 bg-gradient-to-br from-blue-50/80 to-orange-50/80 p-10 lg:p-12">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                      ExamTrakker Webinar
                    </span>
                  </h3>
                  <p className="text-lg font-medium text-gray-800">
                    Do You Have What It Takes to Crack JEE?
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      For students & parents – Cracking IIT JEE isn't just about formulas, it's about <span className="font-medium text-blue-600">mastering key skills</span>.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { color: 'from-blue-500 to-blue-400', text: 'Analytical Ability – Break down tough problems systematically' },
                      { color: 'from-orange-500 to-orange-400', text: 'Conceptual Clarity – Truly understand Physics principles' },
                      { color: 'from-purple-500 to-purple-400', text: 'Accuracy – Deliver precise answers under pressure' },
                      { color: 'from-pink-500 to-pink-400', text: 'Endurance – Maintain focus through long sessions' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${item.color}`}></div>
                        <p className="text-gray-700">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="rounded-xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                  <p className="text-gray-700">
                    In this <span className="font-bold text-blue-600">₹99 interactive webinar</span>, you'll:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                      <span>Take a fun challenge to test your skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-orange-500"></span>
                      <span>Explore cutting-edge physics simulators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-purple-500"></span>
                      <span>Participate in live quizzes and discussions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-lg bg-gradient-to-r from-blue-600/5 to-orange-500/5 p-4 text-center">
                  <p className="font-bold text-orange-600">
                    Limited seats available! Secure your spot now!
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="flex-1 p-10 lg:p-12">
                <div className="flex h-full flex-col">
                  <div>
                    <h3 className="mb-8 text-2xl font-bold text-gray-900">Register for Webinar</h3>
                    <form className="space-y-6">
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={userDetails.name}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-gray-300 px-5 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={userDetails.email}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-gray-300 px-5 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={userDetails.phone}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-gray-300 px-5 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          placeholder="+91 "
                          required
                        />
                      </div>
                    </form>
                  </div>
                  
                  <button
                    onClick={handleWebinarPayment}
                    className="group relative mt-8 w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 font-medium text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Pay ₹99 & Register Now
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Test Modal */}
      {showTestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="relative max-w-md rounded-2xl bg-white p-10 text-center shadow-2xl">
            <button 
              onClick={() => setShowTestModal(false)}
              className="absolute right-5 top-5 rounded-full bg-gray-100 p-1.5 text-gray-500 transition-all hover:bg-gray-200 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-green-50 text-green-600 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h2 className="mb-3 text-2xl font-bold text-gray-900">Registration Complete!</h2>
            <p className="mb-2 text-gray-600">Your payment was successful. Welcome to ExamTrakker!</p>
            <p className="mb-6 text-sm text-gray-500">Take this quick test to help us personalize your learning experience.</p>
            
            <a
              href="https://tally.so/r/w8MlvP"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 font-medium text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Take Assessment Test
            </a>
          </div>
        </div>
      )}
    </main>
  );
}