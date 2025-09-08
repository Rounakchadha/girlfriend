import React from 'react';
import { Gift, Heart, Calendar, Clock, Star } from 'lucide-react';

const CountdownSection = ({ config, currentTime }) => {
  const daysUntil = (targetDate) => {
    const target = new Date(targetDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);

    if (target < today) {
      target.setFullYear(target.getFullYear() + 1);
    }

    const diff = target - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-pink-50 via-white to-rose-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 gradient-text pb-4">
          Counting Every Moment
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card rounded-3xl p-8 text-center transform hover:scale-105 transition-all">
            <Gift className="w-12 h-12 mx-auto mb-4 text-pink-400" />
            <h3 className="text-2xl font-semibold text-rose-600 mb-2">
              Your Birthday
            </h3>
            <div className="text-5xl font-bold gradient-text mb-2">
              {daysUntil(config.dates.herBirthday)}
            </div>
            <p className="text-rose-500">days to celebrate you</p>
            <div className="mt-4 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                />
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 text-center transform hover:scale-105 transition-all">
            <Heart
              className="w-12 h-12 mx-auto mb-4 text-pink-400 heartbeat"
              fill="currentColor"
            />
            <h3 className="text-2xl font-semibold text-rose-600 mb-2">
              Our Anniversary
            </h3>
            <div className="text-5xl font-bold gradient-text mb-2">
              {daysUntil(config.dates.anniversary)}
            </div>
            <p className="text-rose-500">days until our special day</p>
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Together since {new Date(config.dates.firstMet).getFullYear()}
              </p>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 text-center transform hover:scale-105 transition-all">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-pink-400" />
            <h3 className="text-2xl font-semibold text-rose-600 mb-2">
              Days Together
            </h3>
            <div className="text-5xl font-bold gradient-text mb-2">
              {Math.floor(
                (currentTime - new Date(config.dates.firstMet)) /
                  (1000 * 60 * 60 * 24)
              )}
            </div>
            <p className="text-rose-500">and counting forever</p>
            <div className="mt-4">
              <Clock className="w-5 h-5 inline text-pink-300" />
              <span className="text-sm text-gray-500 ml-2">
                Since {new Date(config.dates.firstMet).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;