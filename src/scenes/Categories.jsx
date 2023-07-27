import React from "react";
import { categories } from "../data/data.js";

function Categories() {
  console.log(categories);
  return (
    <div className="mx-6 my-10 py-16 lg:py-16 lg:mx-12">
      <div className=" text-3xl font-bold text-center lg:text-4xl pb-5 border-b-2 border-red-500">
        <h1>
          Food  <span className="text-orange-500">Categories </span>{" "}
        </h1>
      </div>
      <div className="mt-10 px-10 pt-6 md:py-5 md:px-16 bg-red-500 rounded">

          <h1 className="text-grey-600 font-bold text-xl text-center">
            Please  <span className="text-orange-500">Select</span> your favorite category!
          </h1>
        {/* Categories */}
        <div className="m-5 lg:m-10 lg:p-8 grid grid-cols-2 md:grid-cols-3 gap-6 py-6 ">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-wine-500 rounded-lg p-4 flex justify-between items-center hover:scale-105 duration-500 lg:flex-col lg:h-[200px] lg:justify-center lg:items-center"
            >
              <h2 className="font-bold sm:text-xl">{item.name}</h2>
              <img src={item.image} alt={item.name} className="w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
