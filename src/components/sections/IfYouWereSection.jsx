import React, { useState } from 'react';
import PhotoWithFallback from '../PhotoWithFallback';

const IfYouWereSection = ({ data }) => {
  const [flippedCards, setFlippedCards] = useState({});

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 gradient-text">
          If Niva Was a Cat
        </h2>

        <p className="text-center mb-8 text-rose-400">
          Click cards to reveal answers 💕
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item, i) => (
            <div
              key={i}
              className="aspect-square cursor-pointer group"
              style={{ perspective: "1000px" }}
              onClick={() =>
                setFlippedCards((prev) => ({ ...prev, [i]: !prev[i] }))
              }
            >
              <div
                className="relative w-full h-full transition-transform duration-700 group-hover:scale-[1.02]"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards[i] ? "rotateY(180deg)" : "rotateY(0)",
                }}
              >
                {/* Front Card */}
                <div
                  className="absolute inset-0 glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-4xl md:text-5xl mb-4 animate-bounce">
                    {item.emoji}
                  </div>
                  <p className="text-rose-600 font-semibold text-sm md:text-base">
                  </p>
                  <p className="text-rose-500 font-medium">
                    {item.category}...
                  </p>
                </div>

                {/* Back Card */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  {item.answer.startsWith('/photos/cat-') ? (
                    /* Image Back - 8th photo positioned lower */
                    <div className="relative w-full h-full bg-gradient-to-br from-pink-50 to-rose-50">
                      <PhotoWithFallback
                        src={item.answer}
                        fallback={
                          <div className="w-full h-full bg-gradient-to-br from-pink-100 to-rose-100 flex flex-col items-center justify-center text-center p-4">
                            <div className="text-4xl mb-3">🐱</div>
                            <p className="text-gray-500 text-sm">
                              Image not found
                            </p>
                            <p className="text-rose-400 text-xs mt-2">
                              {item.category}
                            </p>
                          </div>
                        }
                        alt={item.category}
                        className="w-full h-full object-cover"
                        style={{ 
                          objectPosition: i === 7 ? 'center 60%' : 'center 40%' // 8th photo (index 7) positioned much lower
                        }}
                      />
                      
                      {/* Image Overlay with Category */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <p className="text-xs uppercase tracking-wider opacity-90">
                            {item.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Text Back */
                    <div className="w-full h-full bg-gradient-to-br from-pink-100 to-rose-100 p-6 flex flex-col items-center justify-center text-center">
                      <div className="text-2xl mb-3">{item.emoji}</div>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>
                      <div className="mt-4 pt-4 border-t border-pink-200/50 w-full">
                        <p className="text-rose-400 text-xs uppercase tracking-wider">
                          {item.category}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-rose-400 text-sm">
          Tap any card to see the magic ✨
        </p>
      </div>
    </section>
  );
};

export default IfYouWereSection;
