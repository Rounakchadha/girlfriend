import React, { useState, useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import PhotoWithFallback from '../PhotoWithFallback';

const StorySection = ({ timeline }) => {
  const [isVisible, setIsVisible] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => {
            const newState = { ...prev };
            if (entry.isIntersecting) {
              newState[entry.target.id] = true;
            } else {
              delete newState[entry.target.id];
            }
            return newState;
          });
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-observe]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Handle timeline scrollbar functionality
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || !timelineRef.current || !contentRef.current) return;
      
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const relativeY = Math.max(0, Math.min(e.clientY - timelineRect.top, timelineRect.height));
      const percentage = (relativeY / timelineRect.height) * 100;
      
      setScrollProgress(percentage);
      
      // Scroll the content based on timeline position
      const maxScroll = contentRef.current.scrollHeight - window.innerHeight;
      const targetScroll = (percentage / 100) * maxScroll;
      
      window.scrollTo({
        top: sectionRef.current.offsetTop + targetScroll,
        behavior: 'auto'
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.cursor = 'default';
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'grabbing';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Update scroll progress based on window scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return;
      
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = contentRef.current.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY - sectionTop;
      const percentage = Math.max(0, Math.min(100, (currentScroll / sectionHeight) * 100));
      
      setScrollProgress(percentage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTimelineClick = (e) => {
    if (!timelineRef.current || !contentRef.current || !sectionRef.current) return;
    
    const timelineRect = timelineRef.current.getBoundingClientRect();
    const relativeY = Math.max(0, Math.min(e.clientY - timelineRect.top, timelineRect.height));
    const percentage = (relativeY / timelineRect.height) * 100;
    
    const maxScroll = contentRef.current.scrollHeight - window.innerHeight;
    const targetScroll = (percentage / 100) * maxScroll;
    
    window.scrollTo({
      top: sectionRef.current.offsetTop + targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 gradient-text">
          Our Beautiful Story
        </h2>

        <div ref={contentRef} className="relative">
          {/* Interactive Timeline Scrollbar */}
          <div 
            ref={timelineRef}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-full cursor-pointer group"
            onClick={handleTimelineClick}
          >
            {/* Timeline Track */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-pink-200 via-rose-200 to-pink-200 group-hover:w-1 transition-all" />
            
            {/* Progress Fill */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-rose-400 to-pink-500 group-hover:w-1 transition-all"
              style={{ 
                height: `${scrollProgress}%`,
                top: 0
              }}
            />
            
            {/* Timeline Dots for each story */}
            {timeline.map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 transform -translate-x-1/2"
                style={{ 
                  top: `${(i / (timeline.length - 1)) * 100}%`
                }}
              >
                <div className={`w-2 h-2 rounded-full transition-all ${
                  (scrollProgress >= (i / (timeline.length - 1)) * 100) 
                    ? 'bg-rose-500 scale-150' 
                    : 'bg-pink-300'
                }`} />
              </div>
            ))}
            
            {/* Draggable Heart Scroller */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
              style={{ 
                top: `${scrollProgress}%`,
                zIndex: 10
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
                setIsDragging(true);
              }}
            >
              <div className="relative group">
                <Heart
                  className="w-8 h-8 text-rose-500 heartbeat drop-shadow-lg hover:scale-110 transition-transform"
                  fill="currentColor"
                />
                <div className="absolute inset-0 animate-ping">
                  <Heart
                    className="w-8 h-8 text-rose-400 opacity-30"
                    fill="currentColor"
                  />
                </div>
                {/* Tooltip */}
                <div className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Drag to scroll
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div
                key={i}
                data-observe
                id={`story-${i}`}
                className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} ${isVisible[`story-${i}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-100`}
                style={{ transitionDelay: `0ms` }}
              >
                <div className="md:w-3/5">
                  <div className="glass-card rounded-2xl p-4 hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <Heart
                        className="w-5 h-5 text-rose-400 heartbeat"
                        fill="currentColor"
                      />
                      <span className="text-sm text-pink-500 font-medium">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-rose-600 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    <p className="text-sm text-rose-400 italic">
                      "{item.memory}"
                    </p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center my-4 md:my-0">
                  <Heart
                    className={`w-4 h-4 heartbeat z-10 ${isVisible[`story-${i}`] ? 'text-rose-600 animate-glow' : 'text-rose-400'}`}
                    fill="currentColor"
                  />
                  <div className="absolute w-8 h-8 bg-pink-200 rounded-full animate-ping" />
                </div>

                <div className="md:w-2/5">
                  <div className="group relative aspect-video md:aspect-square glass-card rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all">
                    <PhotoWithFallback
                      src={item.photo}
                      fallback={item.fallback}
                      alt={item.title}
                      className="absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-sm">Click to view memory</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
