const express = require('express');
const cors = require('cors');
const server = express();

server.use(express.json());
server.use(cors());

let cart = [];
 
const Products = require('./data/products.json');

server.get('/products', (req, res) => {
    res.json(Products);
});
server.get('/get-cart',(req,res)=>{
    res.json(cart);
})
server.post('/update-cart', (req,res) => {
    const {item} = req.body;
    const addProduct = Products.find((Product)=>Product.id === item.id);
    cart.push(addProduct);
    return res.json(cart);
});



server.put('/update-cart', (req,res)=>{
    const { itemId, action } = req.body;

    const currentItemIndex = cart.findIndex((cartItem) => cartItem.id === itemId);
    if (currentItemIndex !== -1) {
        if (action === 'increment') {
            cart[currentItemIndex].quantity += 1;
            console.log(cart[currentItemIndex].price)
        } else if (action === 'decrement' && cart[currentItemIndex].quantity > 1) {
            cart[currentItemIndex].quantity -= 1;
        }

        return res.json(cart);
    }
});

server.delete('/delete-cart/:id', (req, res) => {
    const itemId = req.params.id;
    console.log('Delete the item', itemId);
    const updatedCart = [];
    cart.forEach((item)=>{
        if(item.id !== itemId){
            updatedCart.push(item)
        }
    });
    cart = updatedCart;

    console.log('updated', cart);
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
