const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const {UserQuote } = require('../models/quote');
const quotes = require('../controllers/quotes');





router.post('/', function (request, response){
   quotes.create(request, response);


})

router.get('/',function(request,response){
   quotes.index(request, response);
})

module.exports = router;