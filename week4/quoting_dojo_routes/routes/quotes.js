const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const {UserQuote } = require('../models/quotes')





router.post('/', function (request, response){
  UserQuote.create(request.body, function(err) {
      response.redirect('/quotes');
    })


})
router.get('/',function(request,response){
  UserQuote.find({}, function(err, quotes) {
   if (err) { console.log(err); }
   response.render('quotes', { quotes: quotes });

    })
})

module.exports = router;