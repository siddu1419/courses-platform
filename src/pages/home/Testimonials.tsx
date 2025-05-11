import PageHeading from '../../components/PageHeading';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Star Icon Components
function StarIconFilled({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

function StarIconOutline({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.017 5.395a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm-8.034 0a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z" />
    </svg>
  );
}

type TestimonialProps = {
  name: string;
  review: string;
  rating: number;
};

function TestimonialCard({ name, review, rating }: TestimonialProps) {
  return (
    <motion.article 
      whileHover={{ y: -5 }}
      className="relative bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col min-w-full sm:min-w-[calc(33.333%-1rem)]"
    >
      <div className="p-6 flex-grow">
        <div className="mb-4">
          <QuoteIcon className="w-8 h-8 text-orange-500 opacity-20" />
        </div>
        
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          {review}
        </p>
      </div>
      
      <div className="px-6 pb-6 mt-auto">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <div className="flex mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                i < rating ? (
                  <StarIconFilled key={i} className="w-5 h-5 text-orange-500" />
                ) : (
                  <StarIconOutline key={i} className="w-5 h-5 text-orange-500" />
                )
              ))}
            </div>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center">
            <span className="text-orange-600 font-bold text-lg">
              {name.charAt(0)}
            </span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-blue-600 rounded-b-2xl"></div>
    </motion.article>
  );
}

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: 'Nivrithi',
      review: 'Every class with Dileep sir is a mix of fun, learning, and deep understanding. He takes the time to ensure that each student gets the concept, often using creative methods to explain topics. His friendly and open nature makes it easy to ask questions and learn without hesitation.',
      rating: 5,
    },
    {
      name: 'Rahul',
      review: 'Dileep sir makes physics incredibly fun and interactive. He brings concepts to life with real-world examples and physical objects, making even the toughest topics easy to grasp. His friendly and talkative nature ensures that every class feels engaging and enjoyable.',
      rating: 5,
    },
    {
      name: 'Vidhya Charan',
      review: "One of the best teachers I've ever had! Dileep sir makes physics feel easy with his interactive approach. He connects with students on a personal level, ensuring that everyone understands. His ability to simplify complex topics is truly remarkable.",
      rating: 5,
    },
    {
      name: 'Aakanksha',
      review: 'A teacher like Dileep sir is hard to find. He combines knowledge with enthusiasm, making physics both exciting and easy to understand. His interactive teaching style keeps students engaged, and his willingness to explain concepts repeatedly ensures that no one is left confused.',
      rating: 5,
    },
    {
      name: 'Yashwanth',
      review: 'Who needs a lab when you have Dileep sir? He used a simple door to explain torque, showing us how pushing from different points changes the force needed. Every class feels like a discovery, not just a lesson.',
      rating: 5,
    },
    {
      name: 'Samiksha',
      review: "We never know what to expect in Dileep sir's class! He once used a disc to explain moment of inertia and made it roll on the floor to show how mass distribution affects motion. Learning from him feels more like exploring than studying!",
      rating: 5,
    },
  ];

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = container.children[0]?.clientWidth || 0;
    const scrollPosition = index * cardWidth;
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
    
    setCurrentIndex(index);
  };

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < testimonials.length - 1;

  return (
    <section id="testimonials" className="py-16 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <PageHeading 
            h1="What Students Say"
            h2="Testimonials"
          />
        </div>
        
        <p className="mx-auto max-w-3xl text-center text-lg text-gray-600 mb-12">
          Don't just take our word for it. Hear from students who've experienced our unique approach to learning physics.
        </p>

        <div className="relative">
          {/* Navigation buttons */}
          <button 
            onClick={() => scrollToIndex(currentIndex - 1)}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button 
            onClick={() => scrollToIndex(currentIndex + 1)}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Testimonials container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory gap-6"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full sm:w-1/3 snap-center"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}