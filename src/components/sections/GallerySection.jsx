import React, { useState } from 'react';
import PhotoWithFallback from '../PhotoWithFallback';

const GallerySection = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-pink-50">
      <h2 className="text-4xl md:text-5xl font-serif text-center mb-4 gradient-text">
        Moments Captured in Time
      </h2>
      <p className="text-center text-rose-500 mb-16">
        Every photo tells our story
      </p>

      <div className="max-w-6xl mx-auto">
        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((item, i) => (
            <div
              key={i}
              className="break-inside-avoid group relative glass-card rounded-2xl overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all"
              onClick={() => setSelectedPhoto(item)}
            >
              <div 
                className="relative w-full"
                style={{ aspectRatio: item.aspectRatio || '3/4' }}
              >
                <PhotoWithFallback
                  src={item.photo}
                  fallback={
                    <div className="w-full h-full bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                      <span className="text-4xl">{item.icon}</span>
                    </div>
                  }
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ 
                    objectPosition: item.objectPosition || 'center center'
                  }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium drop-shadow-lg capitalize">
                    {item.label}
                  </p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Optional) */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src={selectedPhoto.photo} 
              alt={selectedPhoto.label}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {selectedPhoto.label}
            </p>
            <button 
              className="absolute top-4 right-4 text-white text-2xl hover:scale-110 transition-transform"
              onClick={() => setSelectedPhoto(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
