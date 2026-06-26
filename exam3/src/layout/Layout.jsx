import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import img from "../pages/assets/Logo (24).png";
import Footer from "../components/Footer";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("APARTMENTS IN DUBAI");
  const navigate = useNavigate();

  const categories = ["Category number one", "Apartments in Dubai", "Category number twenty five"];

  return (
    <>
      <header className="bg-[#1E1E1E] text-white px-8 py-4 flex items-center justify-between border-b border-gray-800 relative z-50">
        <img src={img} className="h-[40px] cursor-pointer" alt="Logo" onClick={() => navigate("/")} />
        
        <button className="md:hidden text-2xl" onClick={() => setIsMobileMenuOpen(true)}>☰</button>

        <nav className="hidden md:flex items-center gap-8 uppercase text-sm font-medium">
          <div className="relative cursor-pointer" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <span className="text-amber-500 border-b-2 border-amber-500 pb-1">{selectedCategory} ▼</span>
            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-1 w-[260px] bg-[#2D2D2D] border border-gray-600 shadow-xl">
                {categories.map((cat, i) => (
                  <div key={i} onClick={() => setSelectedCategory(cat.toUpperCase())} className={`px-4 py-3 hover:bg-gray-700 ${selectedCategory === cat.toUpperCase() ? "bg-amber-500 text-black font-bold" : ""}`}>
                    {cat}
                  </div>
                ))}
              </div>
            )}
          </div>
          <NavLink to="/" className="text-gray-300 hover:text-white">Home</NavLink>
          <NavLink to="/blog" className="text-gray-300 hover:text-white">Blog</NavLink>
          <NavLink to="/about" className="text-gray-300 hover:text-white">About</NavLink>
          <NavLink to="/contact" className="text-gray-300 hover:text-white">Contact</NavLink>
        </nav>

        <div className="hidden md:block">
           <button className="bg-amber-500 text-black px-6 py-2 font-bold uppercase hover:bg-amber-600 transition">Book a consultation</button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#1E1E1E] z-50 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <div>
              <div className="font-bold text-lg">DubaiRealty</div>
              <div className="text-gray-400 text-[10px]">Real Estate</div>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-2xl">✕</button>
          </div>

          <div className="flex flex-col gap-6 text-2xl font-bold">
            <div className="text-amber-500">BUY ▲</div>
            {categories.map((cat, i) => <div key={i} className="text-white text-lg font-normal pl-4">{cat}</div>)}
            <NavLink to="/blog" className="text-white" onClick={() => setIsMobileMenuOpen(false)}>BLOG</NavLink>
            <NavLink to="/about" className="text-white" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</NavLink>
            <NavLink to="/contact" className="text-white" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</NavLink>
            <NavLink to="/" className="text-white" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
          </div>

          <div className="mt-auto flex flex-col items-center gap-6">
            <button className="bg-amber-500 text-black w-full py-3 font-bold uppercase">Book a consultation</button>
            <div className="text-white font-semibold">+7 (212) 674-25-10</div>
            <div className="text-amber-500 text-sm flex gap-2"><span className="font-bold">EN</span> <span className="text-white">RU</span></div>
          </div>
        </div>
      )}

      <Outlet />
      <Footer />
    </>
  );
}