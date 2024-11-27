import React from "react";

import allcat from "../../assets/trendskart/categories/allcat.png";

function CategoriesGroup() {
  return (
    <div className="relative flex items-center my-12 rounded-none p-6 sm:p-24 justify-center bg-black">
      {/* Base Image */}
      <img src={allcat} alt="Categories" className="w-full mb-4" />

      {/* Invisible Clickable Divs */}
      <a
        href="http://localhost:5173/collections?search=watch"
        className="absolute top-0 left-0 w-[33.33%] h-[50%] cursor-pointer"
        title="Wearables"
      ></a>
      <a
        href="http://localhost:5173/collections?search=runner"
        className="absolute top-0 left-[33.33%] w-[66.66%] h-[50%] cursor-pointer"
        title="Footwears"
      ></a>
      <a
        href="http://localhost:5173/collections?search=earphones"
        className="absolute top-[50%] left-0 w-[66.66%] h-[50%] cursor-pointer"
        title="Headsets"
      ></a>
      <a
        href="http://localhost:5173/collections?search=perfumes"
        className="absolute top-[50%] left-[66.66%] w-[33.33%] h-[50%] cursor-pointer"
        title="Perfumes"
      ></a>
    </div>
  );
}

export default CategoriesGroup;
