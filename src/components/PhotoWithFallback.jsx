import React, { useState } from 'react';

const PhotoWithFallback = ({ src, fallback, alt, className, onClick }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  if (imageError || !src) {
    return (
      <div
        className={`${className} flex items-center justify-center ${
          typeof fallback === "string" ? "text-6xl" : ""
        } bg-gradient-to-br from-pink-100 to-rose-100`}
        onClick={onClick}
      >
        {fallback}
      </div>
    );
  }

  return (
    <div className={className} onClick={onClick}>
      {imageLoading && (
        <div
          className={`absolute inset-0 flex items-center justify-center ${
            typeof fallback === "string" ? "text-6xl" : ""
          } bg-gradient-to-br from-pink-100 to-rose-100 animate-pulse`}
        >
          {fallback}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{ display: imageLoading ? "none" : "block" }}
      />
    </div>
  );
};

export default PhotoWithFallback;