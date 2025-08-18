"use client";

import { useState, useRef } from "react";
import { FaRocket, FaStar, FaUsers, FaCoins } from "react-icons/fa";
import H4 from "./H4";
import P from "./P";

const storyFeatures = [
  {
    icon: <FaRocket className="text-4xl text-cyan-400" />,
    title: "Meme-Powered Rocket",
    description: "Built from laughter and pure determination, ARKCARBON's rocket ship is fueled by the power of memes and community spirit.",
  },
  {
    icon: <FaStar className="text-4xl text-yellow-400" />,
    title: "Galactic Adventures",
    description: "Exploring galaxies, quacking with aliens, and delivering financial freedom across the universe.",
  },
  {
    icon: <FaUsers className="text-4xl text-blue-400" />,
    title: "Community Driven",
    description: "Powered by the strongest community of meme enthusiasts and DeFi pioneers in the crypto universe.",
  },
  {
    icon: <FaCoins className="text-4xl text-green-400" />,
    title: "100x Potential",
    description: "From $0.01 presale to $1 target listing price aiming for the stars with 100x return potential.",
  },
];

export default function StoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef(null);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const x = e.touches[0].clientX;
    const diff = x - startX;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const offset = (diff / containerWidth) * 100;
    
    setCurrentX(x);
    setDragOffset(offset);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    const diff = currentX - startX;
    const threshold = 50; // minimum swipe distance
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentIndex > 0) {
        // Swipe right - go to previous
        setCurrentIndex(prev => prev - 1);
      } else if (diff < 0 && currentIndex < storyFeatures.length - 1) {
        // Swipe left - go to next
        setCurrentIndex(prev => prev + 1);
      }
    }
    
    setDragOffset(0);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      {/* Desktop Grid View */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {storyFeatures.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1d243e] rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <H4 text={feature.title}/>
              <P text={feature.description} variant="typeThree"/>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Swipeable Slider */}
      <div className="md:hidden">
        <div 
          ref={containerRef}
          className="overflow-hidden relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}%))`,
              transition: isDragging ? 'none' : 'transform 0.3s ease-out'
            }}
          >
            {storyFeatures.map((feature, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-[#1d243e] rounded-xl p-6 border border-gray-700 h-full">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      {feature.icon}
                    </div>
                    <H4 text={feature.title}/>
                    <P text={feature.description}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {storyFeatures.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-cyan-400 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 