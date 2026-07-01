import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import img from "../pages/assets/Logo (24).png";
import Footer from "../components/Footer";

export default function Layout() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    "APARTMENTS IN DUBAI",
  );

  const categories = [
    "Category number one",
    "Apartments in Dubai",
    "Category number twenty five",
  ];

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <header className="bg-[#1E1E1E] text-white border-b border-gray-700 px-6 py-4 flex items-center justify-between relative z-50 animate-fade-in">
        <img
          src={img}
          alt="Logo"
          className="h-10 cursor-pointer hover:opacity-80 transition duration-300"
          onClick={() => navigate("/")}
        />

        <button
          className="md:hidden text-3xl animate-fade-in"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          ☰
        </button>

        <nav className="hidden md:flex items-center gap-8 uppercase text-sm">
          <NavLink
            to="/"
            className="nav-link transition duration-300 hover:text-[#FCD34D]"
          >
            {t("nav.home")}
          </NavLink>
          <NavLink
            to="/blog"
            className="nav-link transition duration-300 hover:text-[#FCD34D]"
          >
            {t("nav.blog")}
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link transition duration-300 hover:text-[#FCD34D]"
          >
            {t("nav.about")}
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-link transition duration-300 hover:text-[#FCD34D]"
          >
            {t("nav.contact")}
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <select
            value={i18n.language}
            onChange={handleLanguageChange}
            className="bg-[#2D2D2D] text-white border border-gray-600 rounded px-3 py-2 outline-none focus:border-[#FCD34D] transition duration-300"
          >
            <option value="en">English</option>
            <option value="ru">Russian</option>
          </select>

          <button className="bg-amber-500 text-black px-6 py-2 font-bold rounded hover:bg-amber-600 btn-hover-lift transition duration-300">
            {t("nav.book")}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1E1E1E] text-white flex flex-col">
          {/* ... */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
            <h2 className="text-amber-500 text-xl font-bold">{t("nav.buy")}</h2>

            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
              {t("nav.home")}
            </NavLink>
            <NavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)}>
              {t("nav.blog")}
            </NavLink>
            <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              {t("nav.about")}
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              {t("nav.contact")}
            </NavLink>
          </div>
        </div>
      )}

      <Outlet />
      <Footer />
    </>
  );
}
