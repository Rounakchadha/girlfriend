import React, { useState } from "react";
import { Heart, Sparkles } from "lucide-react";

const ReasonsSection = ({ reasons }) => {
  const [currentReason, setCurrentReason] = useState(
    reasons[Math.floor(Math.random() * reasons.length)]
  );

  const getNewReason = () => {
    let newReason;
    do {
      newReason = reasons[Math.floor(Math.random() * reasons.length)];
    } while (newReason === currentReason && reasons.length > 1);
    setCurrentReason(newReason);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-pink-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 gradient-text pb-4">
          365 Reasons I Love You
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-6xl font-bold gradient-text mb-2">1000+</div>
            <p className="text-rose-500">Smiles you've given me</p>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold gradient-text mb-2">∞</div>
            <p className="text-rose-500">Ways you amaze me</p>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold gradient-text mb-2">24/7</div>
            <p className="text-rose-500">Thinking of you</p>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8">
          <h3 className="text-2xl font-semibold text-rose-600 mb-6">
            Today's Reason:
          </h3>
          <p className="text-xl text-gray-700 italic mb-6">"{currentReason}"</p>
          <div className="text-center">
            <button
              onClick={getNewReason}
              className="group relative px-6 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full font-medium transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Another Reason
                <Heart className="w-4 h-4" fill="currentColor" />
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
