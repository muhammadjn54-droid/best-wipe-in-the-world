import React from "react";

export default function UsefulArticles() {
  const articles = [
    {
      id: 1,
      type: "image",
      title: "Discover Architecture",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      type: "text",
      date: "Jule 03, 2022",
      title: "Discover Architecture",
      description: "Projects for many large domestic and foreign corporations, enterprises in many fields such",
    },
    {
      id: 3,
      type: "image",
      title: "Discover Architecture",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="w-full bg-[#272727] text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            Useful articles
          </h2>
          <a 
            className="text-xs text-gray-400 hover:text-[#FCD34D] transition duration-300 flex items-center gap-2 uppercase tracking-widest font-medium"
          >
            View all articles
            <span className="text-sm">➔</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((item) => (
            <div key={item.id} className="relative w-full h-[380px] overflow-hidden group">
              
              {item.type === "image" ? (
                <>
                  <div className="w-full h-full bg-zinc-800 relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-lg font-semibold tracking-wide text-white">
                      {item.title}
                    </h3>
                  </div>
                </>
              ) : (
                <div className="w-full h-full border border-[#FCD34D]/30 bg-[#2d2d2d] p-8 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">
                      {item.date}
                    </p>
                    <h3 className="text-xl font-bold tracking-wide mb-4">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <a 
                    className="text-xs text-[#FCD34D] hover:text-white font-semibold uppercase tracking-widest flex items-center gap-2 transition duration-300"
                  >
                    Learn more
                    <span className="text-sm">➔</span>
                  </a>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}