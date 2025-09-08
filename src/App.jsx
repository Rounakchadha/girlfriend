import React, { useState, useEffect } from "react";
import {
  HeroSection,
  AboutHerSection,
  PassionsSection,
  ReasonsSection,
  CountdownSection,
  StorySection,
  IfYouWereSection,
  NewspaperSection,
  ApiSection,
  ReviewsSection,
  GallerySection,
  LoveLetterSection,
  FloatingHeartButton,
} from "./components";

import {
  config,
  storyTimeline,
  photoGallery,
  reviews,
  ifYouWere,
  aboutHer,
  apiFunctions,
  newspaperData,
  loveReasons,
  loveLetterMessage,
} from "./data";

import { globalStyles } from "./styles/globalStyles";

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 overflow-x-hidden">
      <style>{globalStyles}</style>

      {/* ARRANGE YOUR SECTIONS HERE - All sections included! */}
      <HeroSection config={config} currentTime={currentTime} />
      <div id="next-section">
        <AboutHerSection aboutHer={aboutHer} />
      </div>
      <ReasonsSection reasons={loveReasons} />
      <CountdownSection config={config} currentTime={currentTime} />
      <PassionsSection passions={aboutHer.passions} />
      <StorySection timeline={storyTimeline} />
      <IfYouWereSection data={ifYouWere} />
      <NewspaperSection
        config={config}
        data={newspaperData}
        currentTime={currentTime}
      />
      <GallerySection photos={photoGallery} />
      <ApiSection config={config} functions={apiFunctions} />
      <ReviewsSection config={config} reviews={reviews} />
      <LoveLetterSection letterData={loveLetterMessage} />

      <FloatingHeartButton />
    </div>
  );
};

export default App;