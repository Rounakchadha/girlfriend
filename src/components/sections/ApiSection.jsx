import React from 'react';
import { Code } from 'lucide-react';

const ApiSection = ({ config, functions }) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Code className="w-8 h-8 text-pink-400" />
          <h2 className="text-4xl md:text-5xl font-serif gradient-text">
            The {config.herName} API
          </h2>
          <Code className="w-8 h-8 text-pink-400" />
        </div>

        <div className="glass-card rounded-3xl p-8 font-mono text-sm">
          <div className="mb-6">
            <span className="text-green-600">
              // API Documentation v2.14 - Forever Edition
            </span>
          </div>

          <div className="space-y-6">
            {functions.map((func, i) => (
              <div key={i}>
                <div className="text-blue-600 mb-2">
                  {config.herName.toLowerCase()}.{func.name}
                </div>
                <div className="ml-4 text-gray-700">
                  <span className="text-purple-600">Returns:</span>{" "}
                  {func.returns}
                  {func.comment && (
                    <span className="text-gray-500"> {func.comment}</span>
                  )}
                  {func.warning && (
                    <div className="text-red-500 mt-1">{func.warning}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-8 pt-6 border-t border-rose-200">
              <span className="text-green-600">// Error Handling</span>
              <div className="mt-2">
                <span className="text-red-600">try</span>{" "}
                {`{ ${config.herName.toLowerCase()}.beNotPerfect() }`}
                <div className="text-red-600">catch</div>{" "}
                {`{ throw new Error("Impossible operation") }`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiSection;