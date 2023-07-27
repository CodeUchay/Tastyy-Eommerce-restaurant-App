import { createContext, useState } from 'react';
import { food } from "./data/data";

const CartContext = createContext();
    
export function CartProvider({ children }) {
  const [items, setItems] = useState([]); //items contains a list of ids

  const addToCart = (id) => {
    setItems((prevState) => [...prevState, { id }]);
  };

  const removeFromCart = (id) => {
    setItems((prevState) => prevState.filter(item => item.id !== id));
  };

  const getCartItemDetails = () => {

    

   return items.map(item => {
      const { id } = item;
      const cartItem = food.find(item => item.id === id);
      // setNewItems((prevState) => [...prevState, { cartItem }]);
      // localStorage.setItem("cartitemsids", NewItems);
      return {
        id: id,
        name: cartItem.name,
        category: cartItem.category,
        image: cartItem.image,
        price: cartItem.price,
      };
    });
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, getCartItemDetails }}>{children}</CartContext.Provider>
  );
}

export default CartContext;
