import React from 'react';

const ContactForm = () => {
  return (
    <section className=" py-16 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">
          Be in touch <br /> with us
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input 
              type="text" 
              placeholder="Name" 
              className="bg-transparent border border-gray-600 p-3 text-white focus:outline-none focus:border-yellow-500"
            />
            <input 
              type="email" 
              placeholder="Email *" 
              className="bg-transparent border border-gray-600 p-3 text-white focus:outline-none focus:border-yellow-500"
            />
            <input 
              type="text" 
              placeholder="Subject" 
              className="bg-transparent border border-gray-600 p-3 text-white focus:outline-none focus:border-yellow-500"
            />
          </div>

          <textarea 
            placeholder="Message *" 
            rows="6" 
            className="w-full bg-transparent border border-gray-600 p-3 text-white focus:outline-none focus:border-yellow-500"
          ></textarea>

          <button 
            type="submit" 
            className="bg-yellow-500 text-black px-10 py-3 font-bold uppercase hover:bg-yellow-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;