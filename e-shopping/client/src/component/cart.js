import React from "react";
import styled from "styled-components";
import { useCart } from "./cartContext";

const CartContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CartItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h3`
  margin: 0;
`;

const ItemPrice = styled.p`
  margin: 0;
  color: #888;
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
`;

const RemoveButton = styled.button`
  margin-right: 10px;
  padding: 8px;
  background-color: #ff6961;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ClearButton = styled.button`
  padding: 8px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const QuantityButton = styled.button`
  margin-right: 10px;
  padding: 0px 10px 0 10px;;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const ItemQuantity = styled.div`
  margin: 0px;
`

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, increament, decreament } = useCart();


  return (
    <CartContainer>
      <h2>Shopping Cart</h2>
      {cartItems.map((item, index) => (
        <CartItem key={`${item.id}'_'${index}`}>
          <ItemDetails>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemPrice>${item.price && (item.price * item.quantity)}</ItemPrice>
            <ItemQuantity>Quantity: {item.quantity || 1}</ItemQuantity>
          </ItemDetails>
          <ActionButtons>
            <QuantityButton onClick={()=>decreament(item)}>-</QuantityButton>
            <QuantityButton onClick={() =>increament(item)}>+</QuantityButton>
            <RemoveButton onClick={() => removeFromCart(item.id)}>Remove</RemoveButton>
          </ActionButtons>
        </CartItem>
      ))}
      {cartItems.length > 0 && (
        <>
          <ClearButton onClick={clearCart}>Clear Cart</ClearButton>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
