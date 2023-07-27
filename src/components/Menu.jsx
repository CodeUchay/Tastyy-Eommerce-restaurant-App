import React, { useState, useEffect } from "react";
import { food,  } from "../data/data.js";
import FoodCard from "../components/FoodCard.jsx";

function Menu() {
  //   console.log(food);
  const [foods, setFoods] = useState(food);

  return (
    <div class="container mt-24 lg:mt-12 mx-auto p-5 ">
    <div className="px-6 lg:mx-5 lg:mt-6">
      {/*Header*/}
      <div className="flex justify-between items-center">
      <h1 className="font-bold text-2xl lg:text-3xl text-left">
          Latest <span className="text-orange-500">Menu</span>
        </h1>
        <div className="flex justify-center items-center p-1 cursor-pointer hover:shadow-sm text-orange-500">
        <div className="">View All</div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          </div>
      </div>
      <hr className="my-6"></hr>
      {/* Menu container*/}
      <div className="bg-white rounded p-6 lg:p-0">
      {/* Display foods */}
      <div className="grid grid-cols lg:grid-cols-3 lg:m-5 lg:p-8 gap-6 bg-transparent rounded-2xl">
        {foods.slice(-3).map((item, index) => (
          <FoodCard key={index} item={item} />
        ))}
      </div>
      </div>
    </div>
    </div>
  );
}

export default Menu;
