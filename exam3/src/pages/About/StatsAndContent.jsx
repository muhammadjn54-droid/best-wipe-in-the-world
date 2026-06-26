import React from 'react';

const StatsAndContent = () => {
  return (
    <section className=" text-gray-300 py-16 px-8 md:px-24">
      <div className="grid grid-cols-3 gap-8 mb-16 text-center">
        <div>
          <div className="text-5xl font-bold text-white mb-2">20</div>
          <p className="text-xs uppercase tracking-widest">Years Working</p>
        </div>
        <div>
          <div className="text-5xl font-bold text-white mb-2">7</div>
          <p className="text-xs uppercase tracking-widest">Talented Managers</p>
        </div>
        <div>
          <div className="text-5xl font-bold text-white mb-2">100+</div>
          <p className="text-xs uppercase tracking-widest">Complitly Projects</p>
        </div>
      </div>

      <div className="max-w-3xl m-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Challenge</h2>
        <p className="mb-8 leading-relaxed">
          To and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the 
          sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything 
          was interesting to her. She knew nothing. I knew everything...been there, done that. She was 
          in the moment, I was in the past. She was mindful. I was mindless.
        </p>

        <h3 className="text-xl font-bold text-white mb-4">Everything along the way</h3>
        <p className="mb-8 leading-relaxed">
          One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the 
          future. The same is true as we experience the emotional sensation of stress from our first 
          instances of social rejection or ridicule. We quickly learn to fear and thus automatically 
          avoid potentially stressful situations of all kinds, including the most common of all: 
          making mistakes.
        </p>

        <hr className="border-gray-700 mb-8" />

        <ul className="space-y-4 list-disc pl-5">
          <li>Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken.</li>
          <li>Everything was interesting to her. She knew nothing. I knew everything...been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.</li>
          <li>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule.</li>
          <li>We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.</li>
        </ul>
      </div>
    </section>
  );
};

export default StatsAndContent;