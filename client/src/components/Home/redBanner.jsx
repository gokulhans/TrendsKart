import React from 'react';
import redbanner from '../../assets/trendskart/home/red-banner.jpg';

const RedBanner = () => {
  return (
    <div>
    <div
  className="relative w-full"
  style={{ height: 'auto' }}
>
  <img
    src={redbanner}
    alt="Red Banner"
    className="w-full object-contain"
  />
</div>

    </div>
  );
};

export default RedBanner;
