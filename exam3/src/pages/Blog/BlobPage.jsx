import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useScrollAnimation from "../../hooks/useScrollAnimation";

import Top from "./Top";
import AddModal from "./AddModal";
import EditModal from "./EditModal";

export default function PropertySwiper() {
  const { t } = useTranslation();
  const [items, setItems] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selected, setSelected] = useState(null);
  const sectionRef = useScrollAnimation();

  const getData = () => {
    fetch("https://to-dos-api.softclub.tj/api/to-dos")
      .then((res) => res.json())
      .then((data) => setItems(data.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteItem = async (id) => {
    try {
      const res = await fetch(
        `https://to-dos-api.softclub.tj/api/to-dos?id=${id}`,
        {
          method: "DELETE",
        },
      );

      getData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div ref={sectionRef} className="fade-in-on-scroll min-h-screen p-8">
      <Top openAdd={() => setOpenAdd(true)} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="card-item bg-[#2c2c2c] border border-[#d4af37] rounded overflow-hidden animate-fade-in-up"
            style={{ animationDelay: `${(index % 3) * 0.15}s` }}
          >
            <div className="h-52 card-image">
              <Swiper className="h-full">
                {item.images?.map((img) => (
                  <SwiperSlide key={img.id} className="animate-fade-in">
                    <img
                      src={`https://to-dos-api.softclub.tj/images/${img.imageName}`}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="p-5">
              <h2 className="text-white text-xl font-bold">{item.name}</h2>

              <p className="text-gray-400 mt-3">{item.description}</p>

              <div className="flex gap-2 mt-5">
                <Link
                  to={`/property/${item.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded btn-hover-lift transition duration-300"
                >
                  Info
                </Link>

                <button
                  onClick={() => {
                    setSelected(item);
                    setOpenEdit(true);
                  }}
                  className="bg-yellow-500 text-black px-4 py-2 rounded btn-hover-lift transition duration-300"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteItem(item.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded btn-hover-lift transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AddModal
        open={openAdd}
        close={() => setOpenAdd(false)}
        refresh={getData}
      />

      <EditModal
        open={openEdit}
        close={() => setOpenEdit(false)}
        item={selected}
        refresh={getData}
      />
    </div>
  );
}
