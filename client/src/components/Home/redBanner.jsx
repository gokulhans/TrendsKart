import React from 'react';
import redbanner from '../../assets/trendskart/home/red_banner.jpg';

const RedBanner = () => {
  return (
    <div>
      <div
        className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]" // Define height and width
        style={{ overflow: 'hidden' }} // Ensures no overflow issues
      >
        <img
          src={redbanner}
          alt="Red Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default RedBanner;
