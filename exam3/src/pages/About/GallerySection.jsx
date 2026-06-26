import React from 'react';
import img10 from "../assets/10.png";
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";
const Gallery = () => {
  return (
    <section className=" py-16 px-8 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        
        <div className="flex flex-col gap-6">
          <div className="h-64 md:h-80 w-full overflow-hidden">
            <img src={img10} alt="Cityscape" className="w-full h-full object-cover" />
          </div>
          <div className="h-64 md:h-80 w-full overflow-hidden">
            <img src={img11} alt="Marina" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="h-full w-full overflow-hidden">
          <img src={img12} alt="Beach" className="w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default Gallery;