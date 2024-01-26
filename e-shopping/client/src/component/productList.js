import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCart } from "./cartContext";

const ShopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Item = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  text-align: center;
  width: 300px;
  height: auto;
  box-sizing: border-box;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e6e6e6;
    transform: scale(1.05);
  }
`;

const ItemImage = styled.img`
  margin-bottom: 10px;
  height: 150px;
`;

const Button = styled.button`
  padding: 9px 22px;
  font-size: 16px;
  border: 2px solid #000000;
  color: #000000;
  background-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

const ItemViewContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ItemView = styled.div`
  border: 1px solid #ddd;
  padding: 50px;
  margin: 50px;
  text-align: center;
  width: 300px;
  height: fit-content;
  box-sizing: border-box;
  background-color: #ffffff;
`;


const ProductList = () => {
  const [storeState, setStoreState] = useState([]);
  const [viewItem, setViewItem] = useState(false);
  const { addToCart } = useCart();

  const getProductList = () => {
    fetch('http://localhost:3001/products')
        .then((res)=>res.json())
        .then((json)=>setStoreState(json))
  };

  useEffect(() => {
    getProductList();
  }, []);

  const handleClick = (item) => {
    setViewItem(item);
  };

  const handleAddToCart = () => {
    addToCart(viewItem);
    setViewItem(false);
  };

  return (
    <>
      <ShopContainer>
        {storeState.map((item) => (
          <Item key={item.id}>
            <Link to={`/product-detail/${item.id}`}>
              <ItemImage src={item.img} alt={item.title} width="150px" />
            </Link>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <Link to="/">
              <Button onClick={() => handleClick(item)}>View Details</Button>
            </Link>
          </Item>
        ))}
      </ShopContainer>

      {viewItem && (
        <ItemViewContainer>
          <ItemView>
            <h2>{viewItem.title}</h2>
            <ItemImage src={viewItem.img} alt={viewItem.title} width="150px" />
            <Button onClick={() => setViewItem(false)}>Continue Shopping</Button>
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          </ItemView>
        </ItemViewContainer>
      )}
    </>
  );
};

export default ProductList;
