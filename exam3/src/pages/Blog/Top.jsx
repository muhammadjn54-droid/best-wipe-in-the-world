import React from "react";

export default function Top({ title = "Blog", onSearch }) {
  return (
    <div className="text-white py-8 px-4 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold">
        {title}
      </h1>

      {/* Search */}
      <div className="relative w-full md:w-[400px]">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch?.(e.target.value)}
          className="w-full bg-[#2c2c2c] border border-gray-600 px-4 py-3 pr-10 outline-none rounded-md focus:border-[#d4af37] transition-all"
        />

        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
        >
          🔍
        </button>
      </div>

    </div>
  );
}