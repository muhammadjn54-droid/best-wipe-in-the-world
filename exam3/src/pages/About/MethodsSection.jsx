import React from 'react';

const MethodsSection = () => {
  return (
    <section className="w-[60%] m-auto text-gray-300 py-16 px-8 md:px-24">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-8">Methods for Everyone</h2>
        
        <div className="space-y-6 leading-relaxed mb-12">
          <p>
            Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of 
            grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, 
            and shaken. Everything was interesting to her. She knew nothing. I knew everything...been 
            there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.
          </p>
          <p>
            One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the 
            future. The same is true as we experience the emotional sensation of stress from our first 
            instances of social rejection or ridicule. We quickly learn to fear and thus automatically 
            avoid potentially stressful situations of all kinds, including the most common of all: making 
            mistakes.
          </p>
        </div>

        <div className="border-2 border-yellow-500 p-8">
          <span className="text-4xl text-yellow-500 mb-4 block">“</span>
          <p className="text-white text-xl font-medium mb-6">
            Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.
          </p>
          <div className="text-sm">
            <p className="font-bold text-white">Paul</p>
            <p className="text-gray-400">Elite Author</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodsSection;