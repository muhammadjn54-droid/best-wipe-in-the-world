import React from 'react'

export default function BlobPage() {
  return (
    <div>
        <div className="bg-[#1E1E1E] text-white py-10 px-8">
  <div className="flex items-center justify-between">
    <h1 className="text-4xl font-bold">Blog</h1>
    
    {/* Сатри ҷустуҷӯ (Search Bar) */}
    <div className="relative w-[400px]">
      <input 
        type="text" 
        placeholder="Search..." 
        className="w-full bg-transparent border border-gray-600 px-4 py-3 outline-none focus:border-amber-500"
      />
      <button className="absolute right-3 top-3 text-gray-400 hover:text-white">
        🔍
      </button>
    </div>
  </div>
</div>
    </div>
  )
}
