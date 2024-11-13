import React from "react";

import Nike from "../../assets/trendskart/home/nike.png";
import Adidas from "../../assets/trendskart/home/adidas.png";

function LogoSlider() {
  const logos = [
    {
      id: 1,
      src: Nike,
      alt: "Nike",
    },
    {
      id: 2,
      src: Adidas,
      alt: "Adidas",
    },
    {
      id: 1,
      src: Nike,
      alt: "Nike",
    },
    {
      id: 2,
      src: Adidas,
      alt: "Adidas",
    },
    {
      id: 1,
      src: Nike,
      alt: "Nike",
    },
    {
      id: 2,
      src: Adidas,
      alt: "Adidas",
    },
    {
      id: 1,
      src: Nike,
      alt: "Nike",
    },
    {
      id: 2,
      src: Adidas,
      alt: "Adidas",
    },
    {
      id: 1,
      src: Nike,
      alt: "Nike",
    },
    {
      id: 2,
      src: Adidas,
      alt: "Adidas",
    },
    {
      id: 1,
      src: Nike,
      alt: "Nike",
    },
    {
      id: 2,
      src: Adidas,
      alt: "Adidas",
    },
    {
      id: 1,
      src: Nike,
      alt: "Nike",
    },
    {
      id: 2,
      src: Adidas,
      alt: "Adidas",
    },
    // Add more logos as needed
  ];

  return (
    <>
      <div className="w-full bg-black p-4">
        <div className="container mx-auto">
          <div className="overflow-x-auto whitespace-nowrap  no-scrollbar">
            <div className="inline-flex space-x-8 p-2">
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className="bg-black flex items-center justify-center w-32 h-16"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoSlider;
