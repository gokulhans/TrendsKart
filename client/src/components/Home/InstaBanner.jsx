import React from "react";
import instabanner from "../../assets/trendskart/home/instabannerbg.jpg";

const BannerSection = () => {
  return (
    <section
      className="relative h-[300px] bg-cover bg-center"
      style={{ backgroundImage: `url(${instabanner})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">@TREND_KART_MUKKAM_</h2>
        <p className="text-lg md:text-xl font-medium mb-4">Follow us on Instagram</p>
        <a
          href="https://www.instagram.com/trend_kart"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-8 py-3 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all">
            Follow Us
          </button>
        </a>
      </div>
    </section>
  );
};

export default BannerSection;
