const express = require('express'),
        router = express.Router();

        router.get('/', (req,res) => {
            res.render('pages/index');
        });

        router.get('/allproduct', (req,res) => {
            res.render('pages/All Product row page');
        });

        router.get('/faq', (req,res) => {
            res.render('pages/faq');
        });

        router.get('/howtoorder', (req,res) => {
            res.render('pages/MdfOrder');
        });

        router.get('/complain', (req,res) => {
            res.render('pages/Complain');
        });

        router.get('/dropseller', (req,res) => {
            res.render('pages/Dropseller');
        });

        router.get('/privacypolicy', (req,res) => {
            res.render('pages/Privacy & Policy');
        });

        router.get('/trackorder', (req,res) => {
            res.render('pages/Trackform');
        });

        router.get('/cart', (req,res) => {
            res.render('pages/Cart');
       });

       router.get('/wishlist', (req,res) => {
            res.render('pages/Wishlist');
        });

        router.get('/paymentconfirm', (req,res) => {
            res.render('pages/paymentconfirm');
       });

       router.get('/terms', (req,res) => {
            res.render('pages/Terms');
        });

        router.get('/receipt', (req,res) => {
            res.render('pages/Receipt');
        });

        router.get('/status', (req,res) => {
            res.render('pages/status');
        });

    module.exports = router;