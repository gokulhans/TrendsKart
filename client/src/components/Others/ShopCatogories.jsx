import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "@/Common/api";
import { config } from "@/Common/configurations";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import icons

const ShopCategories = () => {
  const [categories, setCategories] = useState([]);
  const scrollContainerRef = useRef(null);

  const loadCategories = async () => {
    const { data } = await axios.get(`${URL}/user/categories`, config);
    setCategories(data.categories);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -150, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 150, behavior: "smooth" });
  };

  return (
    <div className="relative bg-white py-4">
      {/* Left Scroll Button */}
      <button
        className="absolute left-0 top-1/2 hidden md:flex transform -translate-y-1/2 z-20 border border-gray-400 text-gray-600 hover:border-blue-500 hover:text-blue-500 p-3 rounded-full shadow-lg"
        onClick={scrollLeft}
        aria-label="Scroll left"
      >
        <FiChevronLeft className="w-3 h-3" /> {/* React Icon */}
      </button>

      {/* Right Scroll Button */}
      <button
        className="absolute right-0 top-1/2 hidden md:flex transform -translate-y-1/2 z-20 border border-gray-400 text-gray-600 hover:border-blue-500 hover:text-blue-500 p-3 rounded-full shadow-lg"
        onClick={scrollRight}
        aria-label="Scroll right"
      >
        <FiChevronRight className="w-3 h-3" /> {/* React Icon */}
      </button>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 h-full w-6 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 h-full w-6 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

      {/* Scrollable Categories */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 justify-start items-center overflow-x-auto px-4"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE & Edge
        }}
      >
        <style>
          {`
          div::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
          `}
        </style>

        {categories.map((category, index) => (
          <Link key={index} to={`/collections?category=${category._id}`}>
            <div className="flex flex-col items-center text-center justify-center bg-white rounded-lg min-w-[100px] h-24 p-2 hover:shadow-lg transition duration-200">
              <img
                src={`${URL}/img/${category.imgURL}`}
                alt={category.name}
                className="w-12 h-12 object-contain"
              />
              <span className="text-xs font-medium text-gray-700 mt-1">
                {category.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopCategories;




// {
/* {categories.map((item, index) => {
        
        <li key={index}>
          <Link
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
            href={`/collections?category=${item._id}`}
          >
            {item.name}
          </Link>
        </li>;
      })} */
// }

/*
import React, { useEffect, useState } from "react";
import ProductCard3 from "../Cards/ProductCard3";
import axios from "axios";
import { URL } from "@/Common/api";
import { config } from "@/Common/configurations";

const ShopCategories = () => {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const { data } = await axios.get(`${URL}/user/categories`, config);
    setCategories(data.categories);
    console.log(data.categories);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div className="my-4 flex flex-col items-center w-full bg-[#CC4254] py-4 sm:rounded-[20px]">
      <h1 className="text-white text-[30px] my-6 text-center">
        Shop by Categories
      </h1>
      <div className="flex flex-wrap w-full items-center justify-center px-2">
        {categories.map((item, index) => {
          // Check if this is the last item and if there are 5 items
          const isLastItem =
            index === categories.length - 1 && categories.length % 2 !== 0;

          return (
            <div
              className={`p-2 ${
                isLastItem
                  ? "w-full pt-4 sm:pt-0 lg:w-1/5"
                  : "w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5"
              }`} // Last item takes full width if there are 5 items
              key={item._id}
            >
              <ProductCard3 item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopCategories;

{
  /* {categories.map((item, index) => {
        
        <li key={index}>
          <Link
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
            href={`/collections?category=${item._id}`}
          >
            {item.name}
          </Link>
        </li>;
      })} */
// }
