import React, { useRef, useState } from 'react';
import img5 from "../assets/5.png";
import vidio from "../assets/vidio2.mp4";
export default function Videos() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.controls = true; 
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-[95%] m-auto py-12">
      <div className="relative w-full h-[450px] md:h-[580px] bg-black overflow-hidden shadow-2xl group">
        
        <video 
          ref={videoRef}
          className="w-full h-full object-cover" 
          poster={img5}
        >
          <source src={vidio} type="video/mp4" />
        </video>
        
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300 group-hover:bg-black/30">
            <button 
              onClick={playVideo} 
              className="w-16 h-16 md:w-20 md:h-20 bg-[#FCD34D] rounded-full flex items-center justify-center text-black shadow-lg transform transition duration-300 hover:scale-110 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}