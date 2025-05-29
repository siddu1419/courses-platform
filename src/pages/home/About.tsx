import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import dileep from '../../assets/dileep.jpeg';

// Sample videos data
const videos = [
  {
    title: "Why learning is Fun?",
    url: "https://www.youtube.com/embed/OJaGFR2iaC4"
  },
  {
    title: "Ray Optics - Why 'CHASING FORMULAS' is a bad idea?",
    url: "https://www.youtube.com/embed/5IWzau_RhM0"
  },
  {
    title: "Newton's Laws of motion - 'CHASING FORMULAS' is a bad idea?",
    url: "https://www.youtube.com/embed/RYZkt6ez3Gk"
  },
  {
    title: "Why students fear Integration in JEE & NEET?",
    url: "https://www.youtube.com/embed/cIY4HYmGoz8"
  },
];

export default function About() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* About Section with Photo */}
      <section id="about" className="about-section py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Text Content */}
              <div className="lg:w-1/2">
                {/* Title Section */}
                <div className="text-left mb-8 md:mb-12">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    <span className="relative inline-block">
                      <span className="relative z-10">Hey, I'm Dileep Palavalasa</span>
                      <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 bg-gradient-to-r from-orange-200 to-blue-200 opacity-75 -z-0 transform -rotate-1"></span>
                    </span>
                  </h2>
                  <p className="text-lg sm:text-xl text-blue-600 font-medium">Making Physics Feel Like Play Since 2015</p>
                  <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-600 mt-3 sm:mt-4 rounded-full"></div>
                </div>

                {/* Content Section */}
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 space-y-6 mb-8 sm:mb-10">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    I'm an IITian who's a bit obsessed with teaching Physics in a way that actually makes sense (and is fun, of course). I've helped hundreds of students get into IIT and other top colleges, but here's the thing—
                    <span className="relative px-1">
                      <span className="relative z-10">it's not just about the results.</span>
                      <span className="absolute bottom-0 left-0 w-full h-2 sm:h-3 bg-yellow-100 opacity-60 -z-0 transform -rotate-1"></span>
                    </span>
                    It's about making Physics feel easy, relatable, and exciting.
                  </p>

                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <div className="flex-shrink-0 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base">
                      Instead of drowning in endless theory, I use simulators and hands-on experiments to help you <span className="font-medium text-blue-600">experience Physics</span> rather than just memorize it. Trust me, you'll actually see how concepts work in real-time!
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    My goal is simple: I want you to <span className="font-medium text-orange-500">love learning Physics</span>, not dread it. We'll have fun, experiment, and maybe even laugh a little (or a lot) along the way.
                  </p>

                  <div className="p-3 sm:p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                    <p className="text-gray-700 italic text-sm sm:text-base">
                      "So, if you're ready for something different—something a bit more fun and interactive—let's get started! 🙌"
                    </p>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="text-left px-2">
                  <a
                    href="https://www.youtube.com/@dileep0667"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Check Out My YouTube Channel
                  </a>
                  <p className="mt-3 sm:mt-4 text-gray-500 text-xs sm:text-sm">Join 10,000+ students who transformed their Physics learning</p>
                </div>
              </div>

              {/* Photo Section */}
              <div className="lg:w-1/2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
                  <img 
                    src={dileep} 
                    alt="Dileep Palavalasa teaching Physics"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900">Interactive Physics Learning</h3>
                    <p className="text-sm text-gray-600 mt-1">Where concepts come to life through experiments</p>
                  </div>
                </div>
                <div className="absolute -z-10 -top-6 -right-6 w-64 h-64 bg-gradient-to-r from-orange-300 to-blue-300 rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Video Section */}
      <section id="blog" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Title with gradient text */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-3">
              Physics Tips & Tricks
            </h2>
            <p className="text-xl text-blue-600/90 max-w-3xl mx-auto">
              Prepare smarter for JEE & NEET with our expert video tutorials
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Video Carousel */}
          <div className="relative px-2 sm:px-10">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ 
                clickable: true,
                el: '.swiper-pagination',
                type: 'bullets',
                bulletClass: 'swiper-pagination-bullet !bg-blue-500 !opacity-20',
                bulletActiveClass: '!bg-gradient-to-r !from-orange-500 !to-blue-600 !opacity-100'
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {videos.map((video, index) => (
                <SwiperSlide key={index}>
                  <div className="h-full pb-10">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border border-blue-200/50 h-full transform hover:-translate-y-2">
                      {/* YouTube Embed */}
                      <div className="relative aspect-video rounded-t-2xl overflow-hidden">
                        <iframe
                          src={video.url}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                          NEW
                        </div>
                      </div>

                      {/* Video Title */}
                      <div className="p-6 flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">
                          {video.title}
                        </h3>
                        <div className="flex items-center text-sm font-medium text-blue-600 group">
                          <svg className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                          </svg>
                          <span className="group-hover:underline">Watch Now</span>
                        </div>
                      </div>
                      
                      {/* Gradient Bottom Border */}
                      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-400 to-blue-500 rounded-b-2xl"></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev !w-12 !h-12 !rounded-full !bg-white !shadow-lg !text-blue-600 hover:!bg-blue-50 !left-0 after:!text-xl after:!font-bold hover:!shadow-xl transition-all"></div>
            <div className="swiper-button-next !w-12 !h-12 !rounded-full !bg-white !shadow-lg !text-blue-600 hover:!bg-blue-50 !right-0 after:!text-xl after:!font-bold hover:!shadow-xl transition-all"></div>
            
            {/* Custom Pagination */}
            <div className="swiper-pagination !relative !bottom-0 !mt-8"></div>
          </div>
        </div>
      </section>
    </div>
  );
}