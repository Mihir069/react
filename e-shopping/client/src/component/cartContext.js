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
      body: JSON.stringify({
        item
      })
    })
      .then((res)=>res.json())
      .then((data)=>{
        setCartItems(data)
        console.log(data)
      })
  };

  const removeFromCart = (itemId) => {
    fetch(`http://localhost:3001/delete-cart/${itemId}`,{
      method:'DELETE'
    })
    .then((res)=>res.json())
    .then((data)=>{
      setCartItems(data)
    })
    // const updatedCart = cartItems.filter((item) => item.id !== itemId);
    // setCartItems(updatedCart);
  };

  const clearCart = () => {
    fetch('http://localhost:3001/delete-all',{
      method:'DELETE'
    })
    .then((res)=>res.json())
    .then((data)=>{
      setCartItems(data)
    })
    // setCartItems([]);
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
