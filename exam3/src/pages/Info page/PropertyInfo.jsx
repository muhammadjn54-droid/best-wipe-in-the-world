import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PropertyInfo() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch("https://to-dos-api.softclub.tj/api/to-dos")
      .then((res) => res.json())
      .then((data) => {
        const one = data.data.find((x) => x.id === Number(id));
        setItem(one);
      });
  }, [id]);

  if (!item) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-[500px] rounded-lg overflow-hidden"
        >
          {item.images?.map((image) => (
            <SwiperSlide key={image.id}>
              <img
                src={`https://to-dos-api.softclub.tj/images/${image.imageName}`}
                alt={item.name}
                className="w-full h-[500px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {item.images?.map((image) => (
            <img
              key={image.id}
              src={`https://to-dos-api.softclub.tj/images/${image.imageName}`}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg border border-gray-700"
            />
          ))}
        </div>

        {/* Information */}
        <div className="mt-8">
          <h1 className="text-4xl font-bold">{item.name}</h1>

          <p className="text-gray-300 mt-4 text-lg">
            {item.description}
          </p>

          <div className="mt-8">
            <Link to="/blog">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition">
                ← Go to Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}