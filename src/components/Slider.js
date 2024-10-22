import React, { useState, useEffect, useCallback } from "react";
import { BiSearch } from "react-icons/bi";
import { Typewriter } from 'react-simple-typewriter';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["assets/clg1.webp", "assets/clg2.webp", "assets/clg3.webp"];

  // Memoized function to go to the next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); 
    return () => clearInterval(slideInterval); 
  }, [nextSlide]); 

  return (
    <div className="relative">
    
      <div className="relative h-[70vh] overflow-hidden">
        
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        ))}

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          {/* Typewriter Effect */}
          <div className="flex items-center justify-center mb-6">
            <h1 className="text-white text-2xl sm:text-4xl">
              Find over&nbsp;
            </h1>
            <h1 className="text-white text-2xl sm:text-4xl min-w-[200px]">
              <Typewriter
                words={['3000+ courses', '25000+ colleges']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h1>
          </div>

          <div className="w-full max-w-md relative">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full py-3 pl-4 pr-10 rounded-md bg-white text-black focus:outline-none"
            />
            <BiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="hidden left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="hidden right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slider;
