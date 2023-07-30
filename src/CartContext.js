import { createContext, useState, useEffect } from 'react';
import { food } from "./data/data";

const CartContext = createContext();
    
export function CartProvider({ children }) {
  const [items, setItems] = useState([]); //items contains a list of ids
  const oldCartData = localStorage.getItem('oldcart');

  // Get items from storage on reload
  useEffect(()=> {
    if(oldCartData){
      setItems(JSON.parse(oldCartData));
    }
  },[])

  const addToCart = (id) => {
    setItems((prevState) => [...prevState, { id }]);
    //const oldCart = localStorage.getItem('oldcart');
    const updatedCart = oldCartData ? [...JSON.parse(oldCartData), { id }] : [{ id }];
    localStorage.setItem('oldcart', JSON.stringify(updatedCart));
  };
  

  const removeFromCart = (id) => {
    setItems((prevState) => prevState.filter(item => item.id !== id));
  
   // const oldCart = localStorage.getItem('oldcart');
    if (oldCartData) {
      const updatedCart = JSON.parse(oldCartData).filter(item => item.id !== id);
      localStorage.setItem('oldcart', JSON.stringify(updatedCart));
    }
  };

  const getCartItemDetails = () => {
    if (oldCartData) {
      // If the "oldcart" item exists in localStorage, return the parsed array
      const oldStorageCartItems = JSON.parse(oldCartData);
      const cartItems = oldStorageCartItems.map(item => {
        const { id } = item;
        const cartItem = food.find(item => item.id === id);
        return {
          id: id,
          name: cartItem.name,
          category: cartItem.category,
          image: cartItem.image,
          price: cartItem.price,
        };
      }); 
      return cartItems;
    } else {
      // If the "oldcart" item doesn't exist, fetch cart item details from the "food" array
      const cartItems = items.map(item => {
        const { id } = item;
        const cartItem = food.find(item => item.id === id);
  
        return {
          id: id,
          name: cartItem.name,
          category: cartItem.category,
          image: cartItem.image,
          price: cartItem.price,
        };
      });
  
      // Store the cartItems array as JSON in the "oldcart" item of localStorage
      localStorage.setItem('oldcart', JSON.stringify(cartItems));
  
      return cartItems; // Return the cart items array
    }
  };
  

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, getCartItemDetails }}>{children}</CartContext.Provider>
  );
}

export default CartContext;
