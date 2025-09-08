import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const LoveLetterSection = ({ letterData }) => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isWriting, setIsWriting] = useState(false);
  const [showSignature, setShowSignature] = useState(false);
  const [inkAnimation, setInkAnimation] = useState(false);
  
  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    // Start writing after envelope animation completes
    setTimeout(() => {
      setIsWriting(true);
      setInkAnimation(true);
      typeWriter();
    }, 2000);
  };

  const typeWriter = () => {
    const fullText = letterData.message;
    let currentIndex = 0;
    
    // Variable speed for more natural writing
    const writeNextChar = () => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
        
        // Random delay between 80-120ms for natural writing feel
        const delay = Math.random() * 40 + 80;
        setTimeout(writeNextChar, delay);
      } else {
        setShowSignature(true);
        setIsWriting(false);
        setInkAnimation(false);
      }
    };
    
    writeNextChar();
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-pink-50 via-rose-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Sparkles className="w-10 h-10 mx-auto mb-6 text-pink-400 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-serif gradient-text mb-4 pb-4">
            {letterData.title}
          </h2>
          {!isEnvelopeOpen && (
            <p className="text-rose-400 text-lg animate-pulse">
              A special message awaits you...
            </p>
          )}
        </div>

        {!isEnvelopeOpen ? (
          /* Beautiful Envelope Design */
          <div className="relative max-w-lg mx-auto perspective-1000">
            <div 
              className="envelope-3d cursor-pointer"
              onClick={handleOpenEnvelope}
            >
              {/* Envelope Shadow Base */}
              <div className="absolute inset-0 bg-black/10 blur-xl transform translate-y-4" />
              
              {/* Main Envelope Body */}
              <div className="relative">
                {/* Envelope Back */}
                <div className="relative w-full h-80 rounded-lg shadow-2xl overflow-hidden border border-amber-200" style={{ background: '#fdfbf7' }}>
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
                    }} />
                  </div>
                  
                  {/* Envelope Flap */}
                  <div 
                    className="absolute inset-x-0 top-0 h-40 shadow-lg transform-gpu hover:rotate-x-12 transition-all duration-500"
                    style={{
                      background: '#fcf8f2',
                      clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)',
                      transformOrigin: 'top',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    }}
                  >
                    {/* Wax Seal */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-red-700 to-red-900 rounded-full shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform">
                          <Heart className="w-10 h-10 text-white" fill="currentColor" />
                        </div>
                        <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-20" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Envelope Front Details */}
                  <div className="absolute inset-x-0 bottom-0 h-40 flex flex-col items-center justify-center">
                    <div className="text-center space-y-2">
                      <p className="text-amber-800 font-serif text-xl italic">To My Dearest</p>
                      <p className="text-amber-900 font-bold text-2xl">{letterData.recipientName || 'Love'}</p>
                      <p className="text-gray-500 text-sm mt-4">💌 Click to open 💌</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Letter Paper with Beautiful Design */
          <div className="relative">
            {/* Envelope Flap Opening Animation */}
            <div 
              className={`absolute inset-x-0 -top-32 h-40 bg-gradient-to-b from-rose-200 to-pink-200 rounded-t-lg shadow-2xl transform-gpu transition-all duration-1500 ${
                isEnvelopeOpen ? 'rotate-x-180 opacity-0 -translate-y-full' : ''
              }`}
              style={{
                clipPath: 'polygon(0 30%, 50% 0, 100% 30%, 100% 100%, 0 100%)',
                transformOrigin: 'top',
                transformStyle: 'preserve-3d',
              }}
            />

            {/* Beautiful Letter Paper */}
            <div 
              className={`relative transform transition-all duration-1500 ${
                isEnvelopeOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-full opacity-0 scale-95'
              }`}
            >
              <div 
                className="relative bg-ivory rounded-lg shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #fffdf7 0%, #fff9f0 50%, #fffdf7 100%)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 182, 193, 0.1)',
                }}
              >
                {/* Paper Texture */}
                <div className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' result='noise' /%3E%3CfeDiffuseLighting in='noise' lighting-color='white' surfaceScale='1'%3E%3CfeDistantLight azimuth='45' elevation='60' /%3E%3C/feDiffuseLighting%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23paper)' opacity='0.3' /%3E%3C/svg%3E")`,
                  }}
                />
                
                {/* Elegant Lines */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      transparent,
                      transparent 31px,
                      rgba(219, 190, 190, 0.3) 31px,
                      rgba(219, 190, 190, 0.3) 32px
                    )`,
                    backgroundPosition: '0 80px',
                  }}
                />
                
                {/* Decorative Left Margin */}
                <div className="absolute left-20 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-200 via-pink-200 to-rose-200 opacity-40" />
                
                {/* Letter Content */}
                <div className="relative p-16 md:p-20" style={{ minHeight: '800px' }}>
                  {/* Letter Header with Date */}
                  <div className="text-right mb-10 text-gray-600 text-sm animate-fadeIn">
                    <p className="italic" style={{ fontFamily: "'Tangerine', cursive", fontSize: '24px' }}>
                      {new Date().toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>

                  {/* Salutation */}
                  <div className="mb-8">
                    <p className="text-2xl text-gray-700" 
                      style={{ 
                        fontFamily: "'Tangerine', cursive", 
                        fontSize: '36px' 
                      }}
                    >
                    
                    </p>
                  </div>

                  {/* Letter Body with Handwritten Effect */}
                  <div 
                    className="text-gray-700 leading-loose whitespace-pre-wrap relative"
                    style={{
                      fontFamily: "'Kalam', cursive",
                      fontSize: '20px',
                      lineHeight: '32px',
                      minHeight: '400px',
                      textIndent: '2em'
                    }}
                  >
                    {displayedText}
                    {isWriting && (
                      <>
                        <span className="inline-block w-0.5 h-6 bg-gray-700 ml-0.5 animate-blink" />
                        {/* Ink trail effect */}
                        {inkAnimation && (
                          <span className="absolute -bottom-1 right-0 text-xs text-gray-400 italic animate-pulse">
                            ✍️
                          </span>
                        )}
                      </>
                    )}
                  </div>

                  {/* Beautiful Signature */}
                  {showSignature && (
                    <div className="mt-16 text-right animate-fadeInSlow">
                      <div className="inline-block text-center">
                        <p className="text-gray-600 mb-3" 
                          style={{ 
                            fontFamily: "'Tangerine', cursive",
                            fontSize: '28px'
                          }}
                        >
                          Forever and always,
                        </p>
                        <p 
                          className="text-3xl text-rose-500 mb-4"
                          style={{ 
                            fontFamily: "'Great Vibes', cursive",
                            fontSize: '42px',
                            transform: 'rotate(-3deg)'
                          }}
                        >
                          Your devoted admirer
                        </p>
                        
                        {/* Heart decoration */}
                        <div className="flex justify-center gap-3 mt-6">
                          {[...Array(5)].map((_, i) => (
                            <Heart
                              key={i}
                              className="text-rose-400"
                              fill="currentColor"
                              size={20 - i * 2}
                              style={{ 
                                animation: `float 3s ease-in-out infinite`,
                                animationDelay: `${i * 0.3}s`,
                                opacity: 1 - i * 0.15
                              }}
                            />
                          ))}
                        </div>
                        
                        {/* P.S. Section */}
                        <div className="mt-8 text-left">
                          <p className="text-gray-600 italic text-sm"
                            style={{ fontFamily: "'Kalam', cursive" }}
                          >
                            P.S. - I love you more than words can express 💕
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Decorative Corner Fold */}
                <div 
                  className="absolute top-0 right-0 w-20 h-20"
                  style={{
                    background: 'linear-gradient(135deg, transparent 50%, rgba(255, 249, 240, 0.8) 50%, #fffdf7)',
                    boxShadow: '-3px 3px 6px rgba(0,0,0,0.05)',
                  }}
                />
                
                {/* Bottom decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-rose-50/20 to-transparent" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoveLetterSection;