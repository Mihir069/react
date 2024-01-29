import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isItemInCart,setIsItemIncart] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/get-cart')
      .then((res)=>res.json())
      .then((data)=>{
        setCartItems(data)
        const itemInCart = {};
        data.forEach((item)=>{
          itemInCart[item.id] = true;
        });
        setIsItemIncart(itemInCart)
      })
  },[]);
  const addToCart = (item) => {
    console.log("Item to add",item)
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
        setIsItemIncart((prevCart)=>({...prevCart,[item.id]:true}))
        console.log(data)
      })
      .catch(error => console.error("Error adding to cart:", error));
  };

  const removeFromCart = (itemId) => {
    fetch(`http://localhost:3001/delete-cart/${itemId}`,{
      method:'DELETE'
    })
    .then((res)=>res.json())
    .then((data)=>{
      setCartItems(data)
      setIsItemIncart((prevCart)=>({...prevCart,[itemId]:false}))
      console.log(data);
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
      setCartItems([])
      setIsItemIncart({});
    })
    // setCartItems([]);
  };
  const increament = (item) => {
  
    const product = { ...item, quantity: item.quantity + 1 };
    fetch(`http://localhost:3001/update-cart`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({product }),
    })
        .then((res) => res.json())
        .then((data) => {
          console.log('increament')
          setCartItems(data)
        })
  };
  const decreament = (item) => {
    if(item.quantity === 1){
      return;
    }
    const product = { ...item, quantity: item.quantity - 1 };
      fetch(`http://localhost:3001/update-cart`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ product}),
      })
        .then((res) => res.json())
        .then((data) =>{
          console.log('decreament')
          setCartItems(data)
          
        })
  };
  return (
    <CartContext.Provider value={{isItemInCart, cartItems, addToCart, removeFromCart, clearCart, increament, decreament }}>
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
