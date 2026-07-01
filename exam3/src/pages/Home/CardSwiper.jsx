import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function LatestProjects() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: "Villas",
      category: "building",
      img: img1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur.",
    },
    {
      id: 5,
      title: "Villas 2",
      category: "building",
      img: img4,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur.",
    },
    {
      id: 2,
      title: "Houses",
      category: "building",
      img: img2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur.",
    },
    {
      id: 3,
      title: "Villas",
      category: "interior",
      img: img3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur.",
    },
    {
      id: 2,
      title: "Houses",
      category: "building",
      img: img2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur.",
    },
    {
      id: 3,
      title: "Villas",
      category: "interior",
      img: img3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur.",
    },
  ];

  const filteredProjects = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter,
  );

  return (
    <div
      ref={sectionRef}
      className="fade-in-on-scroll w-full bg-[#272727] text-white py-16 px-16"
    >
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold tracking-wide section-heading">
          Latest projects
        </h2>

        <div className="flex items-center gap-6 text-sm uppercase tracking-wider font-medium">
          <button
            onClick={() => setActiveFilter("all")}
            className={`filter-btn transition duration-300 ${activeFilter === "all" ? "text-[#FCD34D] border-b border-[#FCD34D]" : "text-gray-400 hover:text-white"}`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter("building")}
            className={`filter-btn transition duration-300 ${activeFilter === "building" ? "text-[#FCD34D] border-b border-[#FCD34D]" : "text-gray-400 hover:text-white"}`}
          >
            Building
          </button>
          <button
            onClick={() => setActiveFilter("interior")}
            className={`filter-btn transition duration-300 ${activeFilter === "interior" ? "text-[#FCD34D] border-b border-[#FCD34D]" : "text-gray-400 hover:text-white"}`}
          >
            Interior
          </button>
          <span className="text-gray-600">|</span>
          View all projects
        </div>
      </div>

      <Swiper
        key={activeFilter}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full h-[430px]"
      >
        {filteredProjects.map((project, index) => (
          <SwiperSlide
            key={`${project.id}-${index}`}
            className="animate-fade-in-up"
          >
            <div className="card-item relative w-full h-full cursor-pointer overflow-hidden group border border-transparent hover:border-gray-800 transition-all duration-300">
              <div className="card-image absolute inset-0 w-full h-full transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-xl font-bold tracking-wide text-white">
                  {project.title}
                </h3>
              </div>

              <div className="absolute inset-0 bg-[#FCD34D] text-black p-8 flex flex-col justify-between transition-all duration-500 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <div>
                  <h4 className="text-xl font-bold mb-5 tracking-wide">
                    Dubai
                  </h4>
                  <p className="text-xs leading-relaxed font-normal text-black/80">
                    {project.desc}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 font-bold text-[11px] uppercase tracking-widest border-b border-black/20 pb-1 w-max group/btn">
                  See project
                  <span className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1">
                    ➔
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
