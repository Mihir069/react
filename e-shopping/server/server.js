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
    const addToProduct = Products.find((Product)=>Product.id === item);
    cart.push(addToProduct);
    return res.json(cart);
    console.log(cart)
});

// server.delete('/delete-cart/:id', ()=> {
//     return res.json(cart);
// });

// server.delete('/delete-all', () => {
//     cart = [];
//     return res.json([]);
// });

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
