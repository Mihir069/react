import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useCart } from "./cartContext";

const ShopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
`;

const Item = styled.div`
  width: 48%;
  box-sizing: border-box;
`;

const ItemImage = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 10px #b2b2b2;
`;


const ItemDetails = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px #b2b2b2;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const Price = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  border: 2px solid #000000;
  color: #000000;
  background-color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

const ContinueShoppingButton = styled(Button)`
  background-color: #dcdcdc;
  border-color: #dcdcdc;
  color: #000000;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { addToCart } = useCart();


  useEffect(()=>{
    fetch('http://localhost:3001/products')
      .then((res)=>(res.json()))
      .then((data)=>{
        const product = data.find((item) => item.id === id);
      setProduct(product)
      })
  },[id])


  const handleAddToCart = () => {
    addToCart(product);
  };

  if(product === null) return<h1>No item to show</h1>;
  return (
    <ShopContainer>
      <Item>
        <ItemImage src={product.img} alt={product.title} />
      </Item>
      <ItemDetails>
        <Title>{product.title}</Title>
        <Description>{product.discription}</Description>
        <Price>${product.price}</Price>
        <ButtonContainer>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
          <Link to="/">
            <ContinueShoppingButton>Continue Shopping</ContinueShoppingButton>
          </Link>
        </ButtonContainer>
      </ItemDetails>
    </ShopContainer>
  );
};

export default ProductDetails;
