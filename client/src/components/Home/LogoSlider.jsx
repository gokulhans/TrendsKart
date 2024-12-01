import React, { useEffect, useState, useRef } from "react";
import Nike from "../../assets/trendskart/home/nike.jpg";
import Adidas from "../../assets/trendskart/home/adidas.png";
import lv from "../../assets/trendskart/home/lv.jpg";
import asics from "../../assets/trendskart/home/asics.png";
import casio from "../../assets/trendskart/home/casio.png";
import converse from "../../assets/trendskart/home/converse.png";
import crocs from "../../assets/trendskart/home/crocs.png";
import newbalance from "../../assets/trendskart/home/newbalance.png";
import omega from "../../assets/trendskart/home/omega.png";

function LogoSlider() {
  const logos = [
    { id: 2, src: Adidas, alt: "Adidas" },
    { id: 4, src: asics, alt: "asics" },
    { id: 5, src: casio, alt: "casio" },
    { id: 1, src: Nike, alt: "Nike" },
    { id: 6, src: converse, alt: "converse" },
    { id: 7, src: newbalance, alt: "newbalance" },
    { id: 3, src: lv, alt: "lv" },
    { id: 8, src: omega, alt: "omega" },
  ];

  return (
    <div className="w-full bg-white p-4 my-1">
      <div className="container mx-auto">
        <div className="overflow-scroll">
          <div
            className=" flex space-x-4  overflow-hidden"
            // style={{
            //   display: "flex",
            //   whiteSpace: "nowrap",
            // }}
          >
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center w-40 h-24 mx-6 sm:w-52 md:w-64 lg:w-72 xl:w-80"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain filter invert(1) grayscale(1) brightness(0)"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoSlider;
