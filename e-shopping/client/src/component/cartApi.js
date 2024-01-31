import { useEffect, useState } from "react";


const   CartApi = () =>{
    const [cartItems,setCartItems] = useState([]);
    const [isItemInCart,setIsItemIncart] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:3001/get-cart`)
            .then((res)=>res.json())
            .then((data)=>{
                setCartItems(data);
                const itemInCart = {};
                data.forEach((item)=>{
                    itemInCart[item.id] = true;
                });
                setIsItemIncart(itemInCart);
            })
            .catch((error)=>{
                console.error('Error in cart :',error)
            })
    },[])
}
export default CartApi;