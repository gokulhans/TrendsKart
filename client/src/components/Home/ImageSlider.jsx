import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import HomeImg from "../../assets/trendskart/home/Artboard 5.jpg";
import Image2 from "../../assets/trendskart/home/Artboard 7.jpg";
import Image3 from "../../assets/trendskart/home/Artboard 8.jpg";

const images = [ Image3,Image2,HomeImg];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const scrollToNewArrivals = () => {
    // Using the ID to scroll
    const newArrivalsSection = document.getElementById("newArrival");
    if (newArrivalsSection) {
      newArrivalsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col">
      <main>
      <section className="relative bg-[#C84332] lg:h-[75vh] sm:h-[50vh] w-full overflow-hidden">

          <div className="relative h-full w-full">
            {/* Navigation Buttons */}
            <Button
              className="absolute left-10 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-transform scale-110 opacity-70"
              size="icon"
              variant="ghost"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-8 w-8 text-black" />
            </Button>
            <Button
              className="absolute right-10 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-transform scale-110 opacity-70"
              size="icon"
              variant="ghost"
              onClick={handleNext}
            >
              <ChevronRight className="h-8 w-8 text-black" />
            </Button>

            {/* Sliding Image Container */}
            <div
              className="flex h-full w-full transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  alt={`Slide ${index}`}
                  className="h-full w-full object-fill flex-shrink-0"
                  src={image}
                />
              ))}
            </div>

            {/* Overlay Content */}
            <div className="absolute bottom-12 w-full flex flex-col items-center">
              {/* <Button
                className="rounded-full bg-white px-12 py-3 text-lg font-medium text-black hover:bg-gray-100 shadow-lg"
                onClick={scrollToNewArrivals}
              >
                Shop Now
              </Button> */}
              <div className="mt-6 flex justify-center gap-2">
                {images.map((_, index) => (
                  <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentIndex ? "bg-white" : "bg-white opacity-50"
                  } hidden sm:block`}
                />
                
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

  
    </div>
  );
}

export default ImageSlider;
