const express = require('express');
const router = express.Router();

//get product model
const product = require('../models/product');


module.exports = function Cart(oldCart){
    this.items = oldCart.items;
    this.totalQty = oldCart.totalQty;
    this.totalPrice = oldCart.totalPrice;

    this.add = function(item,id){
        const storedItem = this.items[id];
        if(!storedItem){
            storedItem = this.items[id] = {item: item, qty : 0, price : 0};
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.price;
    };

    this.generateArray = function(){
        const arr = [];
        for(var id in this.items){
            arr.push(this.items[id]);
        }
        return arr;
    }
};