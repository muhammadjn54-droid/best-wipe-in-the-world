import React from "react";
import { useTranslation } from "react-i18next";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const ContentPage = () => {
  const { t } = useTranslation();
  const sectionRef = useScrollAnimation();

  return (
    <main
      ref={sectionRef}
      className="fade-in-on-scroll w-[70%] m-auto text-gray-300 min-h-screen px-8 md:px-24 py-12"
    >
      <div className="text-sm text-gray-500 mb-12 animate-fade-in-up">
        Main &gt; Services &gt; Rent &gt; Furnished Apartments in Dubai
      </div>

      <div className="max-w-3xl space-y-8 leading-relaxed">
        <p
          className="section-content animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          This response is important for our ability to learn from mistakes, but
          it also gives rise to self-criticism, because it is part of the
          threat-protection system. In other words, what keeps us safe can go
          too far, and keep us too safe. In fact it can trigger self-censoring.
        </p>

        <p
          className="section-content animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          One touch of a red-hot stove is usually all we need to avoid that kind
          of discomfort in the future. The same is true as we experience the
          emotional sensation of stress from our first instances of social
          rejection or ridicule. We quickly learn to fear and thus automatically
          avoid potentially stressful situations of all kinds, including the
          most common of all:
        </p>

        <p
          className="section-content animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          This response is important for our ability to learn from mistakes, but
          it also gives rise to self-criticism, because it is part of the
          threat-protection system. In other words, what keeps us safe can go
          too far, and keep us too safe. In fact it can trigger self-censoring.
        </p>

        <p
          className="section-content animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          One touch of a red-hot stove is usually all we need to avoid that kind
          of discomfort in the future. The same is true as we experience the
          emotional sensation of stress from our first instances of social
          rejection or ridicule. We quickly learn to fear and thus automatically
          avoid potentially stressful situations of all kinds, including the
          most common of all:
        </p>
      </div>
    </main>
  );
};

export default ContentPage;
