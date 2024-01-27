import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCart } from "./cartContext";

const ShopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductItem = styled.div`
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

const ProductImage = styled.img`
  margin-bottom: 10px;
  height: 150px;
`;

const ProductButton = styled.button`
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

const ModalContainer = styled.div`
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

const ProductDetailView = styled.div`
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
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(false);
  const { addToCart, isItemInCart } = useCart();

  const fetchProductList = () => {
    fetch('http://localhost:3001/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    if (!isItemInCart[selectedProduct.id]) {
      addToCart(selectedProduct);
      setSelectedProduct(false);
    }
  };

  return (
    <>
      <ShopContainer>
        {products.map((product) => (
          <ProductItem key={product.id}>
            <Link to={`/product-detail/${product.id}`}>
              <ProductImage src={product.img} alt={product.title} width="150px" />
            </Link>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link to="/">
              {selectedProduct && selectedProduct.id === product.id &&
               isItemInCart[product.id] ? (
                <ProductButton disabled>In Cart</ProductButton>
              ) : (
                <ProductButton onClick={() => handleProductClick(product)}>
                  {isItemInCart[product.id] ? "In Cart" : "View Details"}
                </ProductButton>
              )}
            </Link>
          </ProductItem>
        ))}
      </ShopContainer>

      {selectedProduct && (
        <ModalContainer>
          <ProductDetailView>
            <h2>{selectedProduct.title}</h2>
            <ProductImage src={selectedProduct.img} alt={selectedProduct.title} width="150px" />
            <ProductButton onClick={() => setSelectedProduct(false)}>Continue Shopping</ProductButton>
            <ProductButton onClick={handleAddToCart}>{isItemInCart[selectedProduct.id] ? "In Cart" : "Add to cart"}</ProductButton>
          </ProductDetailView>
        </ModalContainer>
      )}
    </>
  );
};

export default ProductList;
