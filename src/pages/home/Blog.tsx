import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// YouTube video data
const videos = [
  {
    title: "Why learning is Fun? ",
    url: "https://www.youtube.com/embed/OJaGFR2iaC4"
  },
  {
    title: "RAY OPTICS -- WHY 'CHASING FORMULAS' IS A BAD IDEA?",
    url: "https://www.youtube.com/embed/5IWzau_RhM0"
  },
  {
    title: "NEWTON'S LAWS OF MOTION -- 'CHASING FORMULAS' IS A BAD IDEA?",
    url: "https://www.youtube.com/embed/RYZkt6ez3Gk"
  },
  {
    title: "Why students fear Integration in JEE & NEET?",
    url: "https://www.youtube.com/embed/cIY4HYmGoz8"
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Physics Tips & Tricks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prepare smarter for JEE & NEET with our expert video tutorials
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Video Carousel */}
        <div className="relative px-10">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <div className="h-full flex">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-100 w-full">
                    {/* YouTube Embed */}
                    <div className="relative aspect-video">
                      <iframe
                        src={video.url}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      />
                    </div>

                    {/* Video Title */}
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {video.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                        </svg>
                        Watch Now
                      </div>
                    </div>
                    
                    {/* Gradient Bottom Border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-blue-600"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !w-12 !h-12 !rounded-full !bg-white !shadow-md !text-orange-600 hover:!bg-orange-50 !left-0 after:!text-xl after:!font-bold"></div>
          <div className="swiper-button-next !w-12 !h-12 !rounded-full !bg-white !shadow-md !text-orange-600 hover:!bg-orange-50 !right-0 after:!text-xl after:!font-bold"></div>
        </div>
      </div>
    </section>
  );
}
