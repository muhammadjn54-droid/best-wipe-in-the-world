import React from "react";
import { useTranslation } from "react-i18next";
import footer from "../pages/assets/Logo (24).png";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Footer() {
  const { t } = useTranslation();
  const footerRef = useScrollAnimation();

  return (
    <footer ref={footerRef} className="fade-in-on-scroll">
      <div className="flex items-center justify-center animate-fade-in">
        <img
          src={footer}
          alt="DubaiRealty"
          className="hover:opacity-80 transition duration-300"
        />
      </div>

      <div className="lg:flex justify-between w-[95%] mk ">
        <div className="par animate-fade-in-up">
          <h1 className=" font-bold text-gray-500">{t("footer.buy")}</h1>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.apartment_dubai")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.house_dubai")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.apartments_dubai")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.loft_dubai")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.penthouse_dubai")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.villa_dubai")}
          </p>
        </div>
        <div
          className=" lg:par animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <h1 className=" font-bold text-gray-500">{t("footer.services")}</h1>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.property_management")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.sell_property")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.rent_property")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.investments")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.real_estate_crypto")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.moving_dubai")}
          </p>
        </div>
        <div
          className="par animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className=" font-bold text-gray-500">
            {t("footer.information")}
          </h1>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.video")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.podcasts")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.laws")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.questions_answers")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.books")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.articles")}
          </p>
        </div>
        <div
          className="par animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <h1 className=" font-bold text-gray-500">
            {t("footer.about_company")}
          </h1>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.jobs")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.story")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.licenses")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.why_us")}
          </p>
          <p className="text-gray-500 hover:text-[#FCD34D] transition duration-300 cursor-pointer">
            {t("footer.real_estate_agency")}
          </p>
        </div>
        <div
          className="par animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <h1 className=" font-bold text-gray-500">{t("footer.contact")}</h1>
          <p className="text-gray-500">{t("footer.address_line")}</p>
          <p className="text-gray-500">{t("footer.city")}</p>
          <p className="text-gray-500">{t("footer.email_address")}</p>
          <button className="button-primary btn-hover-lift">
            {t("footer.book_consultation")}
          </button>
        </div>
      </div>
    </footer>
  );
}
