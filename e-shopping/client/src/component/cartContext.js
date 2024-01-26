import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

  },[]);


  const addToCart = (item) => {
    fetch('http://localhost:3001/update-cart',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
      },
      data:{
        item
      }
    })
      .then((res)=>res.json())
      .then((data)=>{
        setCartItems(data)
        console.log(data)
      })
  };

  const removeFromCart = (itemId) => {


    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("error!!!!");
  }
  return context;
};
