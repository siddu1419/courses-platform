import React, { useState, useEffect } from 'react';
import PageHeading from '../../components/PageHeading';
import eleventhLive from '../../assets/11-Live.jpeg';
import twelveLive from '../../assets/12-Live.jpeg';
import eleventhRec from '../../assets/11-Recorded.jpeg';
import twelveRec from '../../assets/12-Recorded.jpeg';
import jeeAdvanced from '../../assets/JEE-Advanced-Live.jpeg';
import comingSoon from '../../assets/Coming-Soon.jpeg';
import eleven12Rec from '../../assets/11-12-Recorded.jpeg';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface Course {
  name: string;
  cost: number;
  description: string;
  startDate: string;
  endDate: string;
  benefits: string[];
  image: string;
  paymentLink?: string;
  modalContent?: {
    header: string;
    intro: string;
    topics: string[];
    features: string[];
    additionalMessage?: string;
  };
}

export default function Courses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const courses: Course[] = [
    {
      name: '11th Topics - Live Online Classes',
      cost: 59999,
      description: 'This course is designed to make physics fun, interactive, and engaging with real-world examples and physics simulators that bring concepts to life. From mechanics to thermodynamics, every topic is taught with clarity, problem-solving strategies, and conceptual depth.',
      startDate: 'Last week of May 2025',
      endDate: 'December 2025',
      benefits: [
        'Live interactive classes with real-time Q&A',
        'Physics simulators to visualize concepts better',
        'Step-by-step problem-solving techniques',
        'Weekly quizzes & full-length tests',
        'Exam-focused tricks & shortcuts',
        'Doubt-clearing sessions after every class',
      ],
      image: eleventhLive,
      paymentLink: 'https://rzp.io/rzp/bpo4gbS',
      modalContent: {
        header: 'ExamTrakker Online Live Classes for 11th Standard Physics',
        intro: 'Hey future physics pioneers! Ready to dive into the awesome world of physics and build a rock-solid foundation for your JEE & NEET journey? Our 11th Standard Physics course is designed to ignite your curiosity and turn every concept into an adventure—from the basics to mind-blowing experiments!\n\nHeads up: Our classes are super exclusive! We kick off with a quick screening process to ensure you share that burning passion for physics. We welcome all learning styles—as long as you\'re eager to explore and learn.',
        topics: [
          'Physical World and Measurement',
          'Kinematics: Motion in a Straight Line',
          'Motion in a Plane',
          'Laws of Motion',
          'Work, Energy, and Power',
          'System of Particles and Rotational Motion',
          'Gravitation',
          'Properties of Bulk Matter',
          'Thermodynamics',
          'Behavior of Perfect Gas and Kinetic Theory',
          'Oscillations',
          'Waves',
        ],
        features: [
          'Live, Interactive Sessions: Connect with expert educators in real time and turn learning into an engaging adventure.',
          'Interactive Physics Simulators: Experience cutting-edge virtual labs that help you visualize and experiment with physics concepts like never before.',
          'Weekend Quizzes: Enjoy fun, stress-free quizzes every weekend to keep your skills sharp.',
          'Daily Doubt-Dissolving Sessions: Got questions? We clear your doubts daily—no question is too small!',
          'Recorded Lectures: Can\'t catch a live class? No worries—you can always catch up with our recorded sessions.',
          'Practice Sheets & Mock Tests: Access heaps of worksheets and mock exams to boost your confidence and exam readiness.',
          'Personalized Feedback: Receive tailored insights to help you grow and excel.',
          'Dedicated Support: Enjoy VIP assistance via WhatsApp and Telegram whenever you need it.',
        ],
        additionalMessage: 'Remember, securing a slot means you\'ll undergo our screening process—ensuring that every student admitted has that genuine zeal for learning physics. Think you\'ve got what it takes?\n\nDon\'t wait—start applying now to grab your exclusive spot with ExamTrakker and jumpstart your physics journey!',
      },
    },
    {
      name: '12th Topics - Live Online Classes',
      cost: 69999,
      description: 'This course is designed for JEE & NEET aspirants looking to master 12th-grade physics with a fun, creative, and application-based approach. Using physics simulators, we break down complex topics like electromagnetism, optics, and modern physics into easy-to-grasp visual explanations.',
      startDate: 'April 2025',
      endDate: 'September 2025',
      benefits: [
        'Live engaging classes with interactive discussions',
        'Physics simulators for visual learning',
        'Advanced problem-solving strategies for JEE & NEET',
        'Doubt-resolution after each session',
        'Mock tests & personalized performance analysis',
      ],
      image: twelveLive,
      paymentLink: 'https://rzp.io/rzp/gDHE4dr',
      modalContent: {
        header: 'ExamTrakker Online Live Classes for 12th Standard Physics',
        intro: 'Hey there, future physics rockstars! Getting into our class isn\'t for everyone—our slots are super exclusive, and we kick off with a quick screening process to ensure you have that unstoppable zeal for physics. Don\'t worry if you learn differently; we welcome diverse learning styles as long as you\'re passionate about cracking the mysteries of the universe!',
        topics: [
          'Electrostatics: Electric Charges and Fields, Gauss\'s Law, Electrostatic Potential and Capacitance',
          'Current Electricity: Electric Current and Ohm\'s Law, Kirchhoff\'s Laws and Applications, Electrical Energy and Power',
          'Magnetic Effects of Current and Magnetism: Moving Charges and Magnetism, Magnetism and Matter',
          'Electromagnetic Induction and Alternating Currents: Faraday\'s Laws of Electromagnetic Induction, Alternating Current Circuits',
          'Electromagnetic Waves: Characteristics and Properties of Electromagnetic Waves',
          'Optics: Ray Optics and Optical Instruments, Wave Optics',
          'Dual Nature of Radiation and Matter: Photoelectric Effect, Matter Waves',
          'Atoms and Nuclei: Atomic Models, Radioactivity',
          'Electronic Devices: Semiconductor Electronics',
        ],
        features: [
          'Live Interactive Sessions: Hang out with our expert educators in real time and dive into physics like never before.',
          'Interactive Physics Simulators: Explore mind-blowing virtual labs that let you experiment with concepts and truly see physics in action.',
          'Weekend Exams: Fun, low-pressure tests every weekend to keep your skills sharp.',
          'Daily Doubt-Busting Sessions: Got questions? We\'ve got answers—every single day!',
          'Recorded Lectures: Miss a session? No sweat—revisit our epic lectures anytime, anywhere.',
          'Practice Materials & Mock Tests: Tons of worksheets and mock exams to boost your confidence.',
          'Personalized Feedback: Tailored insights to keep you on track and improving.',
          'Premium Support: Enjoy VIP assistance via WhatsApp and Telegram whenever you need it.',
        ],
        additionalMessage: 'Remember, securing a spot here isn\'t easy—we start and finish with our screening process to make sure only those with a genuine passion for physics join our crew. If you\'re ready for a thrilling ride into the world of physics, it\'s time to prove your mettle.\n\nStart applying now and secure your exclusive slot with ExamTrakker!',
      },
    },
    {
      name: '11th Topics - Recorded Classes',
      cost: 14999,
      description: 'Prefer self-paced learning? This course includes high-quality recorded lectures covering all 11th-grade physics topics with interactive animations and physics simulations to simplify complex ideas. Learn whenever, wherever, at your own speed!',
      startDate: 'Immediate Access',
      endDate: 'Lifetime Access',
      benefits: [
        'HD-quality video lessons with structured modules',
        'Physics simulators to visualize core concepts',
        'Detailed numerical problem-solving walkthroughs',
        'Topic-wise quizzes & self-assessment tests',
        'Downloadable study materials & formula sheets',
      ],
      image: eleventhRec,
      paymentLink: 'https://rzp.io/rzp/85mLtO1',
      modalContent: {
        header: 'ExamTrakker Recorded Sessions for 11th Standard Physics',
        intro: 'Step into the world of physics with our recorded sessions specially designed for 11th Standard learners! If you couldn\'t secure a live slot or are looking for a more budget-friendly option without compromising on quality, our comprehensive archive of past online classes is your perfect solution. Build a strong foundation for JEE & NEET with engaging content, interactive simulators, and weekly live doubt sessions to clear all your queries.',
        topics: [
          'Physical World and Measurement',
          'Kinematics: Motion in a Straight Line',
          'Motion in a Plane',
          'Laws of Motion',
          'Work, Energy, and Power',
          'System of Particles and Rotational Motion',
          'Gravitation',
          'Properties of Bulk Matter',
          'Thermodynamics',
          'Behavior of Perfect Gas and Kinetic Theory',
          'Oscillations',
          'Waves',
        ],
        features: [
          'Recorded Lectures: Enjoy round-the-clock access to our dynamic class archive—learn at your own pace. Your videos are available for 2 years!',
          'Interactive Physics Simulators: Experience hands-on learning with virtual labs that bring physics concepts to life.',
          'Weekly Doubt Sessions: Get your questions answered live every week—your chance to interact with top educators.',
          'Practice Sheets & Mock Tests: Access heaps of worksheets and mock exams to boost your exam readiness.',
        ],
        additionalMessage: 'Don\'t wait—start your physics adventure today!\n\nUnlock the power of self-paced learning and become part of the ExamTrakker family. Apply now and get ready to rock your 11th Standard Physics journey!',
      },
    },
    {
      name: '12th Topics - Recorded Classes',
      cost: 16999,
      description: 'Designed for students who want to prepare at their own pace, this course offers in-depth recorded lessons covering all 12th-grade physics topics with engaging physics simulations and step-by-step problem-solving methods. Perfect for revision and last-minute prep!',
      startDate: 'Immediate Access',
      endDate: 'Lifetime Access',
      benefits: [
        'Structured HD video lessons covering all key topics',
        'Physics simulators for interactive learning',
        'Exam-oriented problem-solving approaches',
        'Self-assessment quizzes & practice problems',
        'Printable formula sheets & concept summaries',
      ],
      image: twelveRec,
      paymentLink: 'https://rzp.io/rzp/8cKEVuTi',
      modalContent: {
        header: 'ExamTrakker Recorded Sessions for 12th Standard Physics',
        intro: 'Missed out on our exclusive live classes? No worries—our treasure trove of recorded sessions is here to power up your physics journey at your own pace! Perfect for JEE & NEET aspirants, these top-notch lectures cover everything you need to ace 12th Standard Physics, and they come with weekly doubt sessions to clear up any confusion along the way.',
        topics: [
          'Electrostatics: Electric Charges and Fields, Gauss\'s Law, Electrostatic Potential and Capacitance',
          'Current Electricity: Electric Current and Ohm\'s Law, Kirchhoff\'s Laws and Applications, Electrical Energy and Power',
          'Magnetic Effects of Current and Magnetism: Moving Charges and Magnetism, Magnetism and Matter',
          'Electromagnetic Induction and Alternating Currents: Faraday\'s Law, Alternating Current Circuits',
          'Electromagnetic Waves: Characteristics and Properties of Electromagnetic Waves',
          'Optics: Ray Optics and Optical Instruments, Wave Optics',
          'Dual Nature of Radiation and Matter: Photoelectric Effect, Matter Waves',
          'Atoms and Nuclei: Atomic Models, Radioactivity',
          'Electronic Devices: Semiconductor Electronics',
        ],
        features: [
          'Recorded Lectures: Instant access to a rich library of high-quality sessions—learn anytime, anywhere. Your videos are available for 2 years!',
          'Weekly Doubt Sessions: Join our live doubt-clearing events each week to get expert help on any sticking points.',
          'Practice Materials & Mock Tests: Tons of worksheets and mock exams to boost your confidence and exam readiness.',
        ],
        additionalMessage: 'Ready to level up your physics game?\n\nGrab your access now and join the ExamTrakker community—where brilliant minds meet flexibility and fun!',
      },
    },
    {
      name: '11th + 12th Recorded Classes',
      cost: 25999,
      description: 'Comprehensive package covering both 11th and 12th grade physics with recorded lessons, perfect for students who want complete preparation at their own pace.',
      startDate: 'Immediate Access',
      endDate: 'Lifetime Access',
      benefits: [
        'Complete coverage of 11th and 12th syllabus',
        'Physics simulators for interactive learning',
        'Exam-oriented problem-solving approaches',
        'Self-assessment quizzes & practice problems',
        'Printable formula sheets & concept summaries',
      ],
      image: eleven12Rec,
      paymentLink: 'https://rzp.io/rzp/HmfFdtt',
      modalContent: {
        header: 'ExamTrakker Recorded Sessions for 11th & 12th Standard Physics',
        intro: 'Get access to our complete collection of recorded sessions for both 11th and 12th Standard Physics. This comprehensive package gives you everything you need to master physics concepts at your own pace, with the flexibility to learn whenever and wherever you want.',
        topics: [
          'All topics from 11th Standard Physics',
          'All topics from 12th Standard Physics'
        ],
        features: [
          'Recorded Lectures: Instant access to our complete library of high-quality sessions.',
          'Weekly Doubt Sessions: Live Q&A sessions to clarify your concepts.',
          'Practice Materials & Mock Tests: Comprehensive practice resources.',
          'Cost-effective package with significant savings',
        ],
        additionalMessage: 'This bundled package offers the best value for students looking to master both 11th and 12th Standard Physics concepts. Start your learning journey today!',
      },
    },
    {
      name: 'Crash course for JEE advanced',
      cost: 34,
      description: '', // Empty description as per requirement
      startDate: 'Coming Soon',
      endDate: 'Coming Soon',
      benefits: [], // Empty benefits array as no details are provided
      image: jeeAdvanced, // Example image URL
    },
    {
      name: 'JEE math ( coming soon )',
      cost: 0,
      description: '', // Empty description as per requirement
      startDate: 'Coming Soon',
      endDate: 'Coming Soon',
      benefits: [], // Empty benefits array as no details are provided
      image: comingSoon, // Example image URL
    },
    {
      name: 'JEE chem ( coming soon )',
      cost: 0,
      description: '', // Empty description as per requirement
      startDate: 'Coming Soon',
      endDate: 'Coming Soon',
      benefits: [], // Empty benefits array as no details are provided
      image: comingSoon, // Example image URL
    },
  ];

  const handleEnrollClick = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPaymentSuccess(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleRazorpayPayment = async () => {
    if (!selectedCourse) return;

    // For courses with direct payment links
    if (selectedCourse.paymentLink) {
      window.open(selectedCourse.paymentLink, '_blank');
      return;
    }

    // For other courses using Razorpay integration
    const options = {
      key: 'rzp_live_mXAqSwjm9lGTyn', // Replace with your Razorpay Key ID
      amount: selectedCourse.cost * 100, // Amount in paise (1 INR = 100 paise)
      currency: 'INR',
      name: selectedCourse.name,
      description: 'Enroll for Course',
      image: 'https://your-logo-url.com/logo.png', // Replace with your logo URL
      handler: (response: any) => {
        if (response.razorpay_payment_id) {
          alert('Payment Successful!');
          setPaymentSuccess(true);
          setIsModalOpen(false);
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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="courses" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeading h2="Our Courses" h1="Learn Physics with Simulators & Fun!" />

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Courses</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  course.startDate === 'Coming Soon' ? 'opacity-80' : ''
                }`}
              >
                <div className="h-full flex flex-col">
                  {/* Course Image */}
                  <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                    {course.image ? (
                      <img 
                        src={course.image} 
                        alt={course.name} 
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
                        <span className="text-gray-500 text-lg">Image Coming Soon</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Course Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                        {course.name}
                      </h3>
                      {course.description && (
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {course.description}
                        </p>
                      )}
                      <div className="mb-4">
                        <div className="flex items-center text-sm text-gray-500 mb-1">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {course.name.toLowerCase().includes('crash') ? 'Completed' : `${course.startDate} - ${course.endDate}`}
                        </div>
                        <div className="text-lg font-bold text-blue-600 mt-2">
                          {course.name.toLowerCase().includes('crash') ? '-' : (course.cost ? `₹${course.cost.toLocaleString('en-IN')}` : '-')}
                        </div>
                      </div>
                    </div>
                    
                    {/* Benefits List */}
                    {course.benefits && course.benefits.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-1">Key Benefits:</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {course.benefits.slice(0, 3).map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <svg className="w-3 h-3 text-green-500 mt-0.5 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Enroll Button */}
<div className="mt-auto space-y-2">
  {course.name.toLowerCase().includes('live') ? (
    <>
      {/* First Batch Button - Disabled */}
      <button
        disabled
        className="w-full py-2 px-4 rounded-lg font-medium bg-gray-200 text-gray-500 line-through cursor-not-allowed flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        1st Batch Sold Out
      </button>
      
      {/* 2nd Batch Apply Now Button */}
      <button
        onClick={() => handleEnrollClick(course)}
        disabled={course.startDate === 'Coming Soon'}
        className={`w-full py-2 px-4 rounded-lg font-medium ${
          course.startDate === 'Coming Soon'
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 transition-all shadow-md'
        }`}
      >
        2nd Batch: Apply Now
      </button>
    </>
  ) : (
    /* Regular Single Button for non-Live courses */
    <button
      onClick={() => course.startDate !== 'Coming Soon' && handleEnrollClick(course)}
      disabled={course.startDate === 'Coming Soon' || course.name.toLowerCase().includes('crash')}
      className={`w-full py-2 px-4 rounded-lg font-medium relative overflow-hidden group ${
        course.name.toLowerCase().includes('crash')
          ? 'bg-gradient-to-r from-gray-500 to-gray-700 text-white shadow-inner cursor-not-allowed'
          : course.startDate === 'Coming Soon'
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 transition-all shadow-md'
      }`}
    >
      {course.name.toLowerCase().includes('crash') ? (
        <>
          <span className="relative z-10 flex items-center justify-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-yellow-400" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
            Sold Out
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"></span>
        </>
      ) : (
        course.startDate === 'Coming Soon' ? 'Coming Soon' : 'Enroll Now'
      )}
    </button>
  )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      {isModalOpen && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-xl relative"> {/* Added relative here */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-2 shadow-md" // Added some styling
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>


            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Column: Course Details */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedCourse.name}</h2>
                <div className="text-blue-600 text-2xl font-bold mb-6">₹{selectedCourse.cost.toLocaleString('en-IN')}</div>
                
                {selectedCourse.modalContent && (
                  <>
                    <div className="prose max-w-none mb-6">
                      <p className="text-gray-700 whitespace-pre-line">{selectedCourse.modalContent.intro}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Course Highlights:</h3>
                      <ul className="space-y-2">
                        {selectedCourse.modalContent.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {selectedCourse.modalContent.additionalMessage && (
                      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6">
                        <p className="text-blue-700 whitespace-pre-line">{selectedCourse.modalContent.additionalMessage}</p>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Right Column: Payment Form */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Enrollment Form</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={userDetails.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={userDetails.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={userDetails.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div className="pt-4">
        {selectedCourse.name.toLowerCase().includes('live') ? (
          <a
            href="https://tally.so/r/wzLBNa"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md text-center"
          >
            Apply Now
          </a>
        ) : (
          <button
            type="button"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md"
            onClick={handleRazorpayPayment}
          >
            Pay ₹{selectedCourse.cost.toLocaleString('en-IN')}
          </button>
        )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Success Modal */}
      {paymentSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="text-center">
              <svg className="mx-auto h-16 w-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h2 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h2>
              <p className="text-gray-700 mb-6">Thank you for enrolling in the course. You will receive a confirmation email shortly with access details.</p>
              <button 
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}