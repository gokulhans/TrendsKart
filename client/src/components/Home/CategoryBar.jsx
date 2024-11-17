import React from "react";

// Import all images
import sneakersImg from "../../assets/trendskart/categories/shoe.png";
import chappalsImg from "../../assets/trendskart/categories/sandal.jpg";
// import perfumeImg from "../assets/trendskart/categories/perfume.png";
// import specsImg from "../assets/trendskart/categories/spec.png";
// import watchImg from "../assets/trendskart/categories/smartwatch.png";
// import airpodImg from "../assets/trendskart/categories/airpods.png";
// import airbudsImg from "../assets/trendskart/categories/connected-to-phone.png";
import headsetImg from "../../assets/trendskart/categories/headphone.png";
// import earphonesImg from "../assets/trendskart/categories/handsfree.png";
// import gadgetsImg from "../assets/trendskart/categories/gadgets.png";

// Category data
const categories = [
  { name: "Sneakers", img: sneakersImg },
  { name: "Chappals", img: chappalsImg },
//   { name: "Perfume", img: perfumeImg },
//   { name: "Specs", img: specsImg },
//   { name: "Watch", img: watchImg },
//   { name: "Airpod", img: airpodImg },
//   { name: "Airbuds", img: airbudsImg },
  { name: "Headset", img: headsetImg },
//   { name: "Earphones", img: earphonesImg },
//   { name: "Gadgets", img: gadgetsImg },
];

// Component
const CategorySection = () => {
  return (
    <div className="bg-white p-4">
      <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white  rounded-lg min-w-[100px] h-24 p-2 hover:shadow-lg transition duration-200"
          >
            <img
              src={category.img}
              alt={category.name}
              className="w-12 h-12 object-contain"
            />
            <span className="text-xs font-medium text-gray-700 mt-1">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
