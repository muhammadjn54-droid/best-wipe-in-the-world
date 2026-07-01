import React from "react";
import { useTranslation } from "react-i18next";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const ContactForm = () => {
  const { t } = useTranslation();
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="fade-in-on-scroll py-16 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 section-heading">
          Be in touch <br /> with us
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="form-input bg-transparent border border-gray-600 p-3 text-white focus:outline-none focus:border-yellow-500 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            />
            <input
              type="email"
              placeholder="Email *"
              className="form-input bg-transparent border border-gray-600 p-3 text-white focus:outline-none focus:border-yellow-500 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            />
            <input
              type="text"
              placeholder="Subject"
              className="form-input bg-transparent border border-gray-600 p-3 text-white focus:outline-none focus:border-yellow-500 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            />
          </div>

          <textarea
            placeholder="Message *"
            rows="6"
            className="form-input w-full bg-transparent border border-gray-600 p-3 text-white focus:outline-none focus:border-yellow-500 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-500 text-black px-10 py-3 font-bold uppercase hover:bg-yellow-600 transition btn-hover-lift animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
