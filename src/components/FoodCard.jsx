import React, { useContext, useState } from "react";
import CartContext from "../CartContext";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [addedItem, setAddedItem] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(item.id);
    setAddedItem(true);

    setTimeout(() => {
      setAddedItem(false);
    }, 1500);
  };
  const handleFoodClick = () => {
    navigate(`/menu/${item.id}`);
  };
  return (
    <div onClick={handleFoodClick} className="cursor-pointer rounded-2xl hover:shadow-ll shadow-red-100 hover:shadow-red-200  shadow-lg">
      {/* food container */}
      <div className="">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-[300px] object-cover rounded-lg"
        />
      </div>
      {/* Details of Food, Price and Cart */}
      <div className="flex p-2 flex-col gap-2 items-start">
        <h2 className="md:text-2xl lg:text-xl font-bold border-b border-b-gray-300">
          {item.name}
        </h2>
        <p className="text-xs">From:{"N2,999"}</p>
        <div className="flex gap-4 items-center">
          <button
            onClick={handleAddToCart}
            className="border-none bg-orange-400 rounded p-2 hover:bg-orange-500"
          >
            Add to Cart
          </button>
          {addedItem ? <h3 className="font-bold"> Added! </h3> : null}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
