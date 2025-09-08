import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';

const HeroSection = ({ config, currentTime }) => {


  const getTimeGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return config.greetings.morning;
    if (hour < 17) return config.greetings.afternoon;
    if (hour < 21) return config.greetings.evening;
    return config.greetings.night;
  };

  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => { // Increased number of hearts
        const size = Math.random() * 10 + 10; // size between 10px and 20px
        const opacity = Math.random() * 0.5 + 0.3; // opacity between 0.3 and 0.8
        const animationDuration = 20 + Math.random() * 20; // duration between 20 and 40s
        const colorClasses = ['text-red-400', 'text-red-500', 'text-red-600']; // Red colors
        const colorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];

        return (
          <div
            key={i}
            className="absolute animate-float-around" // New animation class
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${animationDuration}s`,
            }}
          >
            <Heart
              className={colorClass}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
              }}
              fill="currentColor"
            />
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <FloatingParticles />

      {/* Time-sensitive greeting in top-left corner */}
      <div className="absolute top-6 left-6 z-20">
        <div className="glass-card px-6 py-3 rounded-2xl shadow-lg">
          <p className="text-rose-500 font-medium">{getTimeGreeting()}</p>
        </div>
      </div>
      

      <div className="relative z-10 text-center px-6">
        <div className="mb-8 animate-pulse">
          <Sparkles className="w-8 h-8 mx-auto text-pink-400" />
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif mb-4 gradient-text break-words pb-2">
          {config.hero.title}
        </h1>

        <div className="flex justify-center">
          <p className="text-lg sm:text-xl md:text-2xl text-rose-600 mb-8 font-light tracking-wide typewriter break-words px-4">
            {config.hero.subtitle}
          </p>
        </div>

        <button
          onClick={() => {
            document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group relative px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full font-medium transform transition-all hover:scale-105 hover:shadow-2xl"
        >
          <span className="relative z-10">{config.hero.buttonText}</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
        </button>

        <div className="mt-16 animate-bounce">
          <ChevronDown className="w-6 h-6 mx-auto text-pink-300" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;