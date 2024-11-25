import React from "react";

const Marquee = () => {
  return (
    <div className="w-full bg-red-500 text-white py-2 overflow-hidden">
      <div className="marquee whitespace-nowrap flex items-center space-x-8">
        {/* <p className="text-sm md:text-base font-semibold">
          🎉 Big Sale: Flat 50% off on selected items! 🛍️
        </p>
        <p className="text-sm md:text-base font-semibold">
          🚚 Free Shipping on orders above ₹999!
        </p> */}
        <p className="text-sm md:text-base font-semibold">
          📢 Follow us on Instagram: @trend_kart_mukkam_
        </p>
      </div>
    </div>
  );
};

export default Marquee;
