import React from "react";
import { useTranslation } from "react-i18next";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const StatsAndContent = () => {
  const { t } = useTranslation();
  const sectionRef = useScrollAnimation();

  return (
    <section
      ref={sectionRef}
      className="fade-in-on-scroll text-gray-300 py-16 px-8 md:px-24"
    >
      <div className="grid grid-cols-3 gap-8 mb-16 text-center">
        <div className="animate-fade-in-up">
          <div className="text-5xl font-bold text-white mb-2">20</div>
          <p className="text-xs uppercase tracking-widest">Years Working</p>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="text-5xl font-bold text-white mb-2">7</div>
          <p className="text-xs uppercase tracking-widest">Talented Managers</p>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="text-5xl font-bold text-white mb-2">100+</div>
          <p className="text-xs uppercase tracking-widest">
            Complitly Projects
          </p>
        </div>
      </div>

      <div className="max-w-3xl m-auto">
        <h2
          className="text-2xl font-bold text-white mb-6 section-heading animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Challenge
        </h2>
        <p
          className="mb-8 leading-relaxed section-content animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          To and from, fascinated her: every pebble, ant, stick, leaf, blade of
          grass, and crack in the sidewalk was something to be picked up, looked
          at, tasted, smelled, and shaken. Everything was interesting to her.
          She knew nothing. I knew everything...been there, done that. She was
          in the moment, I was in the past. She was mindful. I was mindless.
        </p>

        <h3
          className="text-xl font-bold text-white mb-4 section-heading animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          Everything along the way
        </h3>
        <p
          className="mb-8 leading-relaxed section-content animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          One touch of a red-hot stove is usually all we need to avoid that kind
          of discomfort in the future. The same is true as we experience the
          emotional sensation of stress from our first instances of social
          rejection or ridicule. We quickly learn to fear and thus automatically
          avoid potentially stressful situations of all kinds, including the
          most common of all: making mistakes.
        </p>

        <hr className="border-gray-700 mb-8" />

        <ul
          className="space-y-4 list-disc pl-5 animate-fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          <li>
            Everything along the way, to and from, fascinated her: every pebble,
            ant, stick, leaf, blade of grass, and crack in the sidewalk was
            something to be picked up, looked at, tasted, smelled, and shaken.
          </li>
          <li>
            Everything was interesting to her. She knew nothing. I knew
            everything...been there, done that. She was in the moment, I was in
            the past. She was mindful. I was mindless.
          </li>
          <li>
            One touch of a red-hot stove is usually all we need to avoid that
            kind of discomfort in the future. The same is true as we experience
            the emotional sensation of stress from our first instances of social
            rejection or ridicule.
          </li>
          <li>
            We quickly learn to fear and thus automatically avoid potentially
            stressful situations of all kinds, including the most common of all:
            making mistakes.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default StatsAndContent;
