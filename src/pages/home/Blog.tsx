import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// YouTube video data
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

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
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
                <div className="h-full pb-10"> {/* Added padding for pagination */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border border-blue-200/50 h-full">
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
                    </div>

                    {/* Video Title */}
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">
                        {video.title}
                      </h3>
                      <div className="flex items-center text-sm font-medium text-blue-600">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                        </svg>
                        Watch Now
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
  );
}