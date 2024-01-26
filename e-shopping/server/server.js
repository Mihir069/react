const express = require('express');
const cors = require('cors');
const server = express();

server.use(express.json());
server.use(cors());

const cart = [];
 
const Products = require('./data/products.json');

server.get('/products', (req, res) => {
    res.json(Products);
});
server.post('/update-cart', (req,res) => {
    const {item} = req.body;
    console.log('item recvived',item)
    const addProduct = Products.find((Product)=>Product.id === item.id);
    cart.push(addProduct);
    return res.json(cart);
});

server.delete('/delete-cart/:id', (req,res)=> {
    const {itemId} = req.params.id;
    console.log('Delete the item',itemId)
    const updatedCart = cartItems.filter((item) => item.id !== itemId); 
    cart = updatedCart
    console.log('updated',cart)
    return res.json(cart);
});

server.delete('/delete-all', (req,res) => {
    cart = [];
    return res.json([]);
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
