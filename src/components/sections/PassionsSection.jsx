import React from 'react';

const PassionsSection = ({ passions }) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 gradient-text pb-4">
          Your Passions Light Up My World
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {passions.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 text-center transform hover:scale-110 hover:rotate-3 transition-all cursor-pointer"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-rose-600 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassionsSection;