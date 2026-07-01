import React from 'react';
import { useTranslation } from 'react-i18next';
import img13 from "../assets/13.png";
import img14 from "../assets/14.png";
const ServicesSection = () => {
  const { t } = useTranslation();
  return (
    <section className=" py-16 px-8 md:px-24 text-white">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-3xl font-bold">We will also propose</h2>
        <a  className="text-gray-400 hover:text-white transition">View all services &gt;</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative h-[400px]">
          <img src={img13} alt="Mortgage" className="w-full h-full object-cover" />
          <p className="absolute bottom-6 left-6 font-bold text-lg">Mortgage Registration</p>
        </div>

        <div className="bg-yellow-500 text-black p-8 flex flex-col justify-center h-[400px]">
          <h3 className="text-2xl font-bold mb-4">Mortgage Registration</h3>
          <p className="mb-8">A person applying for a mortgage in the United Arab Emirates must meet the following requirements</p>
          <a  className="font-bold flex items-center gap-2">
            Learn more <span>&gt;</span>
          </a>
        </div>

        <div className="relative h-[400px]">
          <img src={img14} alt="Mortgage" className="w-full h-full object-cover" />
          <p className="absolute bottom-6 left-6 font-bold text-lg">Mortgage Registration</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;