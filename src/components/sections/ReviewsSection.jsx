import React from 'react';
import { Star } from 'lucide-react';

const ReviewsSection = ({ config, reviews }) => {
  // Separate regular and special reviews
  const regularReviews = reviews.filter(review => !review.special);
  const specialReview = reviews.find(review => review.special);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-pink-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 gradient-text">
          Verified Reviews of {config.herName}
        </h2>

        {/* Regular reviews in masonry-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {regularReviews.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 transform hover:scale-105 transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-rose-600">
                  {item.role}
                </h3>
                {item.verified && (
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    ✓ Verified
                  </span>
                )}
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(item.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-3 italic">"{item.review}"</p>
              <p className="text-sm text-rose-400">{item.reviewer}</p>
            </div>
          ))}
        </div>

        {/* Special review - full width finale */}
        {specialReview && (
          <div className="glass-card rounded-2xl p-8 transform hover:scale-105 transition-all bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-200">
            <div className="text-center mb-4">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white text-sm font-semibold rounded-full">
                ⭐ FEATURED REVIEW ⭐
              </span>
            </div>
            
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-rose-600">
                {specialReview.role}
              </h3>
              {specialReview.verified && (
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                  ✓ Verified
                </span>
              )}
            </div>

            <div className="flex justify-center gap-1 mb-4">
              <span className="text-4xl">{"∞ ⭐"}</span>
            </div>

            <p className="text-gray-700 mb-4 italic text-lg text-center">"{specialReview.review}"</p>
            <p className="text-rose-400 text-center font-semibold">{specialReview.reviewer}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;