import React from 'react';
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
    <section id="blog" className="blog-section py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Physics Tips & Tricks—Prepare Smarter for JEE & NEET
        </h2>

        {/* Video Carousel */}
        <div className="relative">
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
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* YouTube Embed */}
                  <div className="relative aspect-video">
                    <iframe
                      src={video.url}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                  </div>

                  {/* Video Title */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !text-blue-600 !left-0"></div>
          <div className="swiper-button-next !text-blue-600 !right-0"></div>
        </div>
      </div>
    </section>
  );
}