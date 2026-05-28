// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center text-white px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Master the <span className="text-cyan-400">Cybermind</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-8">
          Next-generation learning platform for AI, Machine Learning, and Cybersecurity. 
          Build the future, one line of code at a time.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-8 rounded-full transition duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)]">
            Explore Courses
          </button>
          <button className="border border-slate-700 hover:bg-slate-800 py-3 px-8 rounded-full transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
