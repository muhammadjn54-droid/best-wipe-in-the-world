import React, { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "The largest and oldest Quotations Page on the Web with about 30 categories",
      answer: "Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque sed id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus."
    },
    {
      question: "A huge collection of inspirational quotes, thoughts of greatest minds in history",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      question: "Quotations from the great works of literature",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."
    },
    {
      question: "Read quotes and sayings from famous people in history",
      answer: "Praesent ac eros hendrerit, congue justo ac, molestie urna. Fusce nec neque vitae dolor dapibus elementum. Maecenas nec orci quis sem condimentum dapibus varius a lorem."
    },
    {
      question: "Collected quotes from Albert Einstein",
      answer: "Etiam auctor mollis justo eu tincidunt. Aliquam varius varius tortor. Cras id venenatis sem. Quisque ut risus ex. Sed et tempor massa."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#272727] text-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide uppercase mb-10">
          FAQ
        </h2>

        <div className="border-t border-gray-700">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-gray-700">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center py-6 text-left text-sm md:text-base font-medium tracking-wide hover:text-[#FCD34D] transition-colors duration-300 cursor-pointer"
                >
                  <span>{item.question}</span>
                  <span className={`text-[#FCD34D] text-lg transform transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}>
                    ➔
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] pb-6" : "max-h-0"}`}
                >
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed pl-2 font-light">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}