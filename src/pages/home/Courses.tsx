import React, { useState, useEffect } from 'react';
import PageHeading from '../../components/PageHeading';
import CourseCard from '../../pages/home/CourseCard';
import eleventhLive from '../../assets/11_class_live.jpeg';
import twelveLive from '../../assets/12_class_live.jpeg';
import eleventhRec from '../../assets/11_class_rec.jpeg';
import twelveRec from '../../assets/12_class_rec.jpeg';

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
      cost: 1,
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
      modalContent: {
        header: 'ExamTrakker Online Live Classes for 11th Standard Physics',
        intro: 'Hey future physics pioneers! Ready to dive into the awesome world of physics and build a rock-solid foundation for your JEE & NEET journey? Our 11th Standard Physics course is designed to ignite your curiosity and turn every concept into an adventure—from the basics to mind-blowing experiments!\n\nHeads up: Our classes are super exclusive! We kick off with a quick screening process to ensure you share that burning passion for physics. We welcome all learning styles—as long as you’re eager to explore and learn.',
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
          'Recorded Lectures: Can’t catch a live class? No worries—you can always catch up with our recorded sessions.',
          'Practice Sheets & Mock Tests: Access heaps of worksheets and mock exams to boost your confidence and exam readiness.',
          'Personalized Feedback: Receive tailored insights to help you grow and excel.',
          'Dedicated Support: Enjoy VIP assistance via WhatsApp and Telegram whenever you need it.',
        ],
        additionalMessage: 'Remember, securing a slot means you’ll undergo our screening process—ensuring that every student admitted has that genuine zeal for learning physics. Think you’ve got what it takes?\n\nDon’t wait—start applying now to grab your exclusive spot with ExamTrakker and jumpstart your physics journey!',
      },
    },
    {
      name: '12th Topics - Live Online Classes',
      cost: 29,
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
      modalContent: {
        header: 'ExamTrakker Online Live Classes for 12th Standard Physics',
        intro: 'Hey there, future physics rockstars! Getting into our class isn’t for everyone—our slots are super exclusive, and we kick off with a quick screening process to ensure you have that unstoppable zeal for physics. Don’t worry if you learn differently; we welcome diverse learning styles as long as you’re passionate about cracking the mysteries of the universe!',
        topics: [
          'Electrostatics: Electric Charges and Fields, Gauss’s Law, Electrostatic Potential and Capacitance',
          'Current Electricity: Electric Current and Ohm’s Law, Kirchhoff’s Laws and Applications, Electrical Energy and Power',
          'Magnetic Effects of Current and Magnetism: Moving Charges and Magnetism, Magnetism and Matter',
          'Electromagnetic Induction and Alternating Currents: Faraday’s Laws of Electromagnetic Induction, Alternating Current Circuits',
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
          'Daily Doubt-Busting Sessions: Got questions? We’ve got answers—every single day!',
          'Recorded Lectures: Miss a session? No sweat—revisit our epic lectures anytime, anywhere.',
          'Practice Materials & Mock Tests: Tons of worksheets and mock exams to boost your confidence.',
          'Personalized Feedback: Tailored insights to keep you on track and improving.',
          'Premium Support: Enjoy VIP assistance via WhatsApp and Telegram whenever you need it.',
        ],
        additionalMessage: 'Remember, securing a spot here isn’t easy—we start and finish with our screening process to make sure only those with a genuine passion for physics join our crew. If you’re ready for a thrilling ride into the world of physics, it’s time to prove your mettle.\n\nStart applying now and secure your exclusive slot with ExamTrakker!',
      },
    },
    {
      name: '11th Topics - Recorded Classes',
      cost: 39,
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
      modalContent: {
        header: 'ExamTrakker Recorded Sessions for 11th Standard Physics',
        intro: 'Step into the world of physics with our recorded sessions specially designed for 11th Standard learners! If you couldn’t secure a live slot or are looking for a more budget-friendly option without compromising on quality, our comprehensive archive of past online classes is your perfect solution. Build a strong foundation for JEE & NEET with engaging content, interactive simulators, and weekly live doubt sessions to clear all your queries.',
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
        additionalMessage: 'Don’t wait—start your physics adventure today!\n\nUnlock the power of self-paced learning and become part of the ExamTrakker family. Apply now and get ready to rock your 11th Standard Physics journey!',
      },
    },
    {
      name: '12th Topics - Recorded Classes',
      cost: 49,
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
      modalContent: {
        header: 'ExamTrakker Recorded Sessions for 12th Standard Physics',
        intro: 'Missed out on our exclusive live classes? No worries—our treasure trove of recorded sessions is here to power up your physics journey at your own pace! Perfect for JEE & NEET aspirants, these top-notch lectures cover everything you need to ace 12th Standard Physics, and they come with weekly doubt sessions to clear up any confusion along the way.',
        topics: [
          'Electrostatics: Electric Charges and Fields, Gauss’s Law, Electrostatic Potential and Capacitance',
          'Current Electricity: Electric Current and Ohm’s Law, Kirchhoff’s Laws and Applications, Electrical Energy and Power',
          'Magnetic Effects of Current and Magnetism: Moving Charges and Magnetism, Magnetism and Matter',
          'Electromagnetic Induction and Alternating Currents: Faraday’s Law, Alternating Current Circuits',
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
      name: 'Crash course for JEE advanced',
      cost: 34,
      description: '', // Empty description as per requirement
      startDate: 'Coming Soon',
      endDate: 'Coming Soon',
      benefits: [], // Empty benefits array as no details are provided
      image: '', // Example image URL
    },
    {
      name: 'JEE math ( coming soon )',
      cost: 59,
      description: '', // Empty description as per requirement
      startDate: 'Coming Soon',
      endDate: 'Coming Soon',
      benefits: [], // Empty benefits array as no details are provided
      image: '', // Example image URL
    },
    {
      name: 'JEE chem ( coming soon )',
      cost: 59,
      description: '', // Empty description as per requirement
      startDate: 'Coming Soon',
      endDate: 'Coming Soon',
      benefits: [], // Empty benefits array as no details are provided
      image: '', // Example image URL
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
    <section id="courses" className="courses mb-10 mt-24 scroll-mt-16 lg:mt-48">
      <PageHeading h2="Our Courses" h1="Learn Physics with Simulators & Fun!" />

      <div className="course-container">
        <h2 className="border-b-2 border-neutral pb-3 text-lg lg:text-xl">Popular Courses</h2>
        <div className="course-cards-container mb-12 mt-8 grid gap-8 sm:grid-cols-2 md:my-14 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              name={course.name}
              cost={course.cost}
              description={course.description}
              startDate={course.startDate}
              endDate={course.endDate}
              image={course.image}
              onEnrollClick={() => handleEnrollClick(course)}
              isComingSoon={course.startDate === 'Coming Soon'}
            />
          ))}
        </div>
      </div>

      {/* Enrollment Modal */}
      {isModalOpen && selectedCourse && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button className="close-modal-top-right" onClick={handleCloseModal}>
              ×
            </button>

            {/* For Recorded Courses */}
            {selectedCourse.name.includes('Recorded Classes') ? (
              <div className="modal-recorded-container">
                {/* Left Column: Payment Form */}
                <div className="modal-left">
                  <h3>Enroll for {selectedCourse.name}</h3>
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
                      onClick={handleRazorpayPayment}
                    >
                      Pay ₹{selectedCourse.cost}
                    </button>
                  </form>
                </div>

                {/* Right Column: Course Details */}
                <div className="modal-right">
                  <h3>{selectedCourse.modalContent?.header}</h3>
                  <p>{selectedCourse.modalContent?.intro}</p>

                  <div className="course-details">
                    <h4>Topics Covered:</h4>
                    <ul>
                      {selectedCourse.modalContent?.topics.map((topic, index) => (
                        <li key={index}>• {topic}</li>
                      ))}
                    </ul>

                    <h4>What’s in Store for You:</h4>
                    <ul>
                      {selectedCourse.modalContent?.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              // For Live Classes
              <div className="course-modal-full">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">{selectedCourse.modalContent?.header}</h3>
                <p className="text-gray-700 mb-6">{selectedCourse.modalContent?.intro}</p>

                <div className="course-details">
                  <h4 className="text-xl font-semibold text-blue-600 mb-3">What You’ll Explore:</h4>
                  <ul className="list-disc list-inside mb-6">
                    {selectedCourse.modalContent?.topics.map((topic, index) => (
                      <li key={index} className="text-gray-700 mb-2">• {topic}</li>
                    ))}
                  </ul>

                  <h4 className="text-xl font-semibold text-blue-600 mb-3">Why You’ll Love It:</h4>
                  <ul className="list-disc list-inside mb-6">
                    {selectedCourse.modalContent?.features.map((feature, index) => (
                      <li key={index} className="text-gray-700 mb-2">• {feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Added text above the button */}
                <p className="text-gray-800 text-center mb-4 font-medium">
                  Please fill the form below, and our staff will get back to you.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://tally.so/r/wzLBNa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-8 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors w-full max-w-md text-center"
                  >
                    Fill the Form
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Payment Success Modal */}
      {paymentSuccess && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2>Thank you for enrolling in the course!</h2>
            <p>Your payment was successful. You will receive an email confirmation shortly.</p>
            <button className="close-modal" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}