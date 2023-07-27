import React, { useState, useEffect } from "react";
import { food,  } from "../data/data.js";
import FoodCard from "../components/FoodCard.jsx";

function Menu() {
  //   console.log(food);
  const [foods, setFoods] = useState(food);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      food.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      food.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className=" m-8 mt-24 pt-16 lg:p-16 ">
      <div className=" text-3xl font-bold text-center lg:text-4xl pb-5 border-b-2 border-red-500">
        <h1>
          Chef Kim's <span className="text-orange-500">Menu </span>{" "}
        </h1>
      </div>
      {/*container*/}
      <div className="bg-red-500 rounded mt-10 p-7">
      {/* Filter Row */}
      <div className="flex flex-col pt-6 lg:flex-row justify-between lg:mx-10 ">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-orange-500">Filter Type</p>
          <div className=" flex justfiy-between  flex-wrap g ">
            <button
              onClick={() => setFoods(food)}
              className="m-2 border-none shadow-sm shadow-wine-600 hover:bg-orange-600 duration-300 bg-orange-500 text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-2 border-none shadow-sm shadow-wine-600 hover:bg-orange-600 duration-300 bg-orange-500 text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-2 border-none shadow-sm shadow-wine-600 hover:bg-orange-600 duration-300 bg-orange-500 text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-2 border-none shadow-sm shadow-wine-600 hover:bg-orange-600 duration-300 bg-orange-500 text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-2 border-none shadow-sm shadow-wine-600 hover:bg-orange-600 duration-300 bg-orange-500 text-white"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-orange-500">Filter Price</p>
          <div className=" flex ">
            <button
              onClick={() => filterPrice("$")}
              className="m-2 border-none shadow-sm shadow-wine-600 hover:bg-orange-600 duration-300 bg-orange-500 text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-2 border-none shadow-sm shadow-wine-600 hover:bg-orange-600 duration-300 bg-orange-500 text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-2 border-none shadow-sm shadow-wine-600 hover:bg-orange-600 duration-300 bg-orange-500 text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-2 border-none shadow-sm shadow-wine-600 hover:bg-orange-600 duration-300 bg-orange-500 text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:m-5 lg:p-8 gap-6 pt-4 bg-transparent rounded-2xl">
        {foods.map((item, index) => (
          <FoodCard key={index} item={item} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default Menu;
