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

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <CartContainer>
      <h2>Shopping Cart</h2>
      {cartItems && cartItems.map((item) => (
        <CartItem key={item && item.id}>
          <ItemDetails>
            <ItemTitle>{item && item.title}</ItemTitle>
            <ItemPrice>${item && item.price}</ItemPrice>
          </ItemDetails>
          <ActionButtons>
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
