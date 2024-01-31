import { useEffect, useState } from "react";


const   CartApi = () =>{
    const [cartItems,setCartItems] = useState([]);
    const [isItemInCart,setIsItemInCart] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:3001/get-cart`)
            .then((res)=>res.json())
            .then((data)=>{
                setCartItems(data);
                const itemInCart = {};
                data.forEach((item)=>{
                    itemInCart[item.id] = true;
                });
                setIsItemInCart(itemInCart);
            })
            .catch((error)=>{
                console.error('Error in cart :',error)
            })
    },[]);

    const updateCart = (url, method, body) => {
        return fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })
          .then((res) => res.json())
          .then((data) => {
            setCartItems(data);
            return data;
        })
        .catch((error) => console.error('Error updating cart:', error));
    };
    const addToCart = (item) => {
        return updateCart('http://localhost:3001/update-cart', 'POST', { item })
          .then((data) => {
            setIsItemInCart((prevCart) => ({ ...prevCart, [item.id]: true }));
            return data;
        });
    };
    const removeFromCart = (itemId) => {
        return updateCart(`http://localhost:3001/delete-cart/${itemId}`, 'DELETE')
          .then((data) => {
            setIsItemInCart((prevCart) => ({ ...prevCart, [itemId]: false }));
            return data;
        });
    };
    const clearCart = () => {
        return updateCart('http://localhost:3001/delete-all', 'DELETE')
          .then(() => {
            setIsItemInCart({});
        });
    };
    const increment = (item) => {
        const product = { ...item, quantity: item.quantity + 1 };
        return updateCart('http://localhost:3001/update-cart', 'PUT', { product });
    };
    return {cartItems,isItemInCart,addToCart,removeFromCart,clearCart,increment};
}
export default CartApi;