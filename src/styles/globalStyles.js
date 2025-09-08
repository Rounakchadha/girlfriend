export const globalStyles = `
  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 0.3;
    }
    50% {
      transform: translate(30px, -20px) rotate(5deg);
      opacity: 0.4;
    }
    90% {
      opacity: 0.2;
    }
  }
  
  @keyframes gentleFloat {
    0%, 100% {
      transform: translateY(0px) translateX(0px) rotate(0deg);
    }
    33% {
      transform: translateY(-25px) translateX(15px) rotate(3deg);
    }
    66% {
      transform: translateY(-15px) translateX(-15px) rotate(-3deg);
    }
  }
  
  @keyframes floatUp {
    0% {
      transform: translateY(0) scale(0) rotate(0deg);
      opacity: 1;
    }
    50% {
      transform: translateY(-200px) scale(1.2) rotate(180deg);
      opacity: 1;
    }
    100% {
      transform: translateY(-500px) scale(0.3) rotate(360deg);
      opacity: 0;
    }
  }
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.8;
    }
  }
  
  @keyframes sparkle {
    0%, 100% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes shimmer {
    0% {
      background-position: -200% center;
    }
    100% {
      background-position: 200% center;
    }
  }
  
  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1);
    }
    10%, 30% {
      transform: scale(0.95);
    }
    20%, 40% {
      transform: scale(1.1);
    }
  }
  
  @keyframes typewriter {
    from {
      width: 0;
      opacity: 0;
    }
    1% {
      opacity: 1;
    }
    to {
      width: 100%;
      opacity: 1;
    }
  }
  
  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 5px rgba(255, 105, 180, 0.5);
    }
    50% {
      box-shadow: 0 0 20px rgba(255, 105, 180, 0.8), 
                  0 0 30px rgba(255, 105, 180, 0.6);
    }
  }
  
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes rotate360 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  /* Animation Classes */
  .animate-float {
    animation: gentleFloat 6s ease-in-out infinite;
  }
  
  .animate-float-slow {
    animation: gentleFloat 10s ease-in-out infinite;
  }
  
  .animate-pulse {
    animation: pulse 2s ease-in-out infinite;
  }
  
  .animate-sparkle {
    animation: sparkle 1.5s ease-in-out infinite;
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  .animate-shimmer {
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 182, 193, 0.4),
      transparent
    );
    background-size: 200% 100%;
    animation: shimmer 3s infinite;
  }
  
  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }
  
  .animate-bounce {
    animation: bounce 2s ease-in-out infinite;
  }
  
  .heartbeat {
    animation: heartbeat 1.5s ease-in-out infinite;
  }
  
  /* Text Effects */
  .gradient-text {
    background: linear-gradient(135deg, #ff69b4, #ff1493);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  /* Glass Morphism */
  .glass-card {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 182, 193, 0.25);
    box-shadow: 0 8px 32px 0 rgba(255, 105, 180, 0.15);
  }
  
  .glass-dark {
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  /* Typewriter Effect */
  .typewriter {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid rgba(255, 105, 180, 0.75);
    animation: 
      typewriter 3s steps(40) 1s forwards,
      blinkCursor 0.75s step-end infinite;
  }
  
  @keyframes blinkCursor {
    from, to {
      border-color: transparent;
    }
    50% {
      border-color: rgba(255, 105, 180, 0.75);
    }
  }
  
  /* Hover Effects */
  .hover-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .hover-lift:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3);
  }
  
  /* Loading Animation */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-spin {
    animation: spin 1s linear infinite;
  }
  
  /* Stagger Children Animation */
  .stagger-children > * {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  .stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
  .stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
  .stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
  .stagger-children > *:nth-child(4) { animation-delay: 0.4s; }
  .stagger-children > *:nth-child(5) { animation-delay: 0.5s; }

  .animate-float-around {
    animation: float-around linear infinite;
    position: absolute;
    bottom: -20%;
  }

  @keyframes float-around {
    from {
      transform: translateY(0) rotate(0deg);
    }
    to {
      transform: translateY(-120vh) rotate(720deg);
    }
  }

  .animate-fall-from-top {
    animation: fall-from-top linear infinite;
    position: absolute;
    top: -20%;
  }

  @keyframes fall-from-top {
    from {
      transform: translateY(0) rotate(0deg);
    }
    to {
      transform: translateY(120vh) rotate(720deg);
    }
  }
    /* Add these new styles to your existing CSS */

/* Interactive Timeline Scrollbar Styles */
.timeline-track {
  transition: width 0.3s ease;
  cursor: pointer;
}

.timeline-track:hover {
  width: 4px !important;
}

/* Draggable Heart Cursor States */
.heart-scroller {
  cursor: grab;
  transition: transform 0.2s ease;
}

.heart-scroller:active {
  cursor: grabbing;
  transform: scale(1.2);
}

.heart-scroller:hover {
  transform: scale(1.1);
}

/* Timeline Progress Dots */
.timeline-dot {
  transition: all 0.3s ease;
  pointer-events: none;
}

.timeline-dot.active {
  transform: scale(1.5);
  background-color: #f43f5e;
}

/* Tooltip for Heart */
.timeline-tooltip {
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  user-select: none;
}

.heart-scroller:hover .timeline-tooltip {
  opacity: 1;
}

/* Smooth dragging */
body.dragging {
  cursor: grabbing !important;
  user-select: none;
}

body.dragging * {
  cursor: grabbing !important;
}

/* Keep existing heartbeat animation */
@keyframes heartbeat {
  /* Your existing heartbeat animation */
}
/* Image Fitting Styles */
.aspect-square {
  aspect-ratio: 1 / 1;
}

/* Ensure smooth card transitions */
.glass-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 182, 193, 0.2);
}

/* Perfect image scaling */
.photo-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.photo-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Alternative: If you prefer no cropping */
.photo-container-contain img {
  object-fit: contain;
  background: linear-gradient(135deg, #fdf2f8, #fce7f3);
}

/* Smooth hover effects */
.group:hover .glass-card {
  box-shadow: 0 20px 40px rgba(255, 105, 180, 0.15);
}

/* Mobile responsive improvements */
@media (max-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}
  .headlines-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 2rem;
  width: 100%;
}

.headline-item {
  min-width: 0; /* Prevents overflow */
  word-wrap: break-word;
}

/* Explicit placement for each item */
.headline-1 { grid-column: 1; grid-row: 1; }
.headline-2 { grid-column: 2; grid-row: 1; }
.headline-3 { grid-column: 1; grid-row: 2; }
.headline-4 { grid-column: 2; grid-row: 2; }

/* Mobile responsive */
@media (max-width: 768px) {
  .headlines-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  
  .headline-1, .headline-2, .headline-3, .headline-4 {
    grid-column: 1;
    grid-row: auto;
  }
}
/* Gallery specific styles */
.gallery-image {
  object-fit: cover;
  object-position: center 20%; /* Adjust to keep faces visible */
}

/* For specific images that need different positioning */
.gallery-image-face-top {
  object-position: center 10%;
}

.gallery-image-face-center {
  object-position: center center;
}

.gallery-image-face-bottom {
  object-position: center 40%;
}

/* Smooth loading animation */
.gallery-item {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Add to your global CSS */

/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400&family=Dancing+Script:wght@700&display=swap');

/* Typing cursor blink */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.animate-blink {
  animation: blink 1s infinite;
}

/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out;
}

/* Writing pen movement */
@keyframes writing {
  0%, 100% {
    transform: rotate(45deg) translateX(0);
  }
  50% {
    transform: rotate(43deg) translateX(2px);
  }
}

.animate-writing {
  animation: writing 0.5s ease-in-out infinite;
}

/* Paper texture (optional) */
.letter-paper {
  position: relative;
  background: #fefefe;
  background-image: 
    repeating-linear-gradient(
      transparent,
      transparent 31px,
      #e5e7eb 31px,
      #e5e7eb 32px
    );
}

/* Handwritten text effect */
.handwritten {
  font-family: 'Kalam', cursive;
  color: #374151;
  text-indent: 20px;
}

/* Signature styling */
.signature {
  font-family: 'Dancing Script', cursive;
  color: #f43f5e;
  font-size: 1.8rem;
  transform: rotate(-2deg);
}
/* Envelope and Letter Animations */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes writing {
  0%, 100% {
    transform: rotate(45deg) translateX(0);
  }
  50% {
    transform: rotate(43deg) translateX(2px);
  }
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.15);
  }
  80% {
    transform: scale(1);
  }
}

/* Envelope hover effect */
.envelope-container {
  transition: all 0.3s ease;
}

.envelope-container:hover {
  transform: scale(1.05) translateY(-5px);
}

/* Paper texture effect */
.letter-texture {
  background-image: 
    repeating-linear-gradient(
      transparent,
      transparent 31px,
      rgba(229, 231, 235, 0.5) 31px,
      rgba(229, 231, 235, 0.5) 32px
    );
}

/* Smooth transitions */
.smooth-transition {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
/* Add to your HTML head or import in CSS */
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400&family=Tangerine:wght@700&family=Great+Vibes&display=swap');

/* Animations */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInSlow {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* 3D Envelope Effects */
.perspective-1000 {
  perspective: 1000px;
}

.envelope-3d {
  transform-style: preserve-3d;
  transition: transform 0.3s;
}

.envelope-3d:hover {
  transform: rotateX(-5deg) translateY(-5px);
}

.rotate-x-180 {
  transform: rotateX(180deg);
}

/* Smooth animations */
.animate-fadeIn {
  animation: fadeIn 1s ease-out;
}

.animate-fadeInSlow {
  animation: fadeInSlow 1.5s ease-out;
}

.animate-blink {
  animation: blink 1s infinite;
}


`;
