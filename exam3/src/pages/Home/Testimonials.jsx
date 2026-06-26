import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Paul",
      role: "Owner in Paul.com",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      text: "Projects for many large domestic and foreign corporations, enterprises in many fields such as finance, banking, F&B, education, communication.",
    },
    {
      id: 2,
      name: "Robert",
      role: "Founder in Apple Inc.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
      text: "Founded in 2001, Spansh is specializing in providing innovative services such as website design, brand identity and marketing.",
    },
    {
      id: 3,
      name: "Paul",
      role: "Owner in Paul.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      text: "Projects for many large domestic and foreign corporations, enterprises in many fields such as finance, banking, F&B, education, communication.",
    },
    {
      id: 4,
      name: "Alex",
      role: "CEO in Nexus",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
      text: "Exceptional service and deep understanding of luxury real estate. They helped us find the perfect investment opportunity in Dubai.",
    }
  ];

  return (
    <section className="w-full bg-[#272727] text-white py-20 px-4 md:px-12 testimonial-slider">
      <div className="max-w-6xl mx-auto">
        
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
          className="pb-16"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id} className="pt-12">
              <div className="border border-[#FCD34D]/30 bg-[#2d2d2d]/40 p-8 pt-14 relative rounded-none flex flex-col justify-between h-[250px]">
                
                <div className="absolute -top-10 left-6 w-20 h-20 rounded-full border-2 border-[#272727] overflow-hidden bg-zinc-800 shadow-xl">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute top-6 right-8 text-[#FCD34D] opacity-80">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 transform rotate-180">
                    <path d="M14 17h3l2-4V7h-6v6h3zM1 17h3l2-4V7H0v6h3z"/>
                  </svg>
                </div>

                <div>
                  <h3 className="text-xl font-bold tracking-wide text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#FCD34D] font-medium tracking-wider mb-4">
                    {item.role}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed font-light line-clamp-4">
                    {item.text}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <style>{`
        .testimonial-slider .swiper-pagination-bullet {
          background: #555 !important;
          opacity: 1 !important;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .testimonial-slider .swiper-pagination-bullet-active {
          background: #FCD34D !important;
          width: 10px;
          height: 10px;
        }
        .testimonial-slider .swiper-pagination {
          bottom: 0px !important;
        }
      `}</style>
    </section>
  );
}