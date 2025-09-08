import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const FloatingHeartButton = () => {
  const [hearts, setHearts] = useState([]);

  const spawnHeart = () => {
    const newHeart = {
      id: Date.now(),
      left: Math.random() * 40 - 20, // -20 to +20 pixels from button center
    };
    setHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 3000);
  };

  return (
    <>
      {/* Floating hearts animation - fixed positioning */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="fixed z-40 pointer-events-none"
          style={{
            bottom: window.innerWidth < 640 ? "16px" : "32px",
            right: `${(window.innerWidth < 640 ? 16 : 32) + heart.left}px`,
            animation: "floatUp 3s ease-out forwards",
          }}
        >
          <span className="text-4xl">💕</span>
        </div>
      ))}

      {/* Button */}
      <button
        onClick={spawnHeart}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform z-50"
      >
        <Heart
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          fill="currentColor"
        />
      </button>
    </>
  );
};

export default FloatingHeartButton;