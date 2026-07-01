import React from "react";
import { useTranslation } from "react-i18next";
import bg7 from "../assets/7.png";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function Section() {
  const { t } = useTranslation();
  const sectionRef = useScrollAnimation();

  return (
    <section
      ref={sectionRef}
      className="fade-in-on-scroll w-[95%] m-auto bg-cover bg-center bg-no-repeat text-black text-center py-20 relative overflow-hidden flex items-center justify-center min-h-[350px]"
      style={{ backgroundImage: `url(${bg7})` }}
    >
      <div className="absolute inset-0 bg-[#FCD34D]/90 z-10"></div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 w-full flex flex-col items-center">
        <p className="text-black text-xs md:text-sm font-medium tracking-wide mb-2 animate-fade-in-down">
          Do you have any questions?
        </p>

        <h2
          className="text-4xl md:text-6xl font-bold tracking-tight mb-8 section-heading animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Contact us
        </h2>

        <div
          className="flex flex-col sm:flex-row justify-center items-center w-full max-w-xl mx-auto shadow-sm animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <input
            className="form-input w-full sm:w-[70%] bg-white text-black placeholder-gray-400 border-none py-3.5 px-5 focus:outline-none text-sm transition duration-300"
            type="email"
            placeholder="Enter your mail"
          />
          <button className="w-full sm:w-[30%] bg-[#272727] hover:bg-[#1a1a1a] text-white font-medium text-sm py-3.5 px-6 transition duration-300 cursor-pointer uppercase tracking-wider btn-hover-lift">
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
