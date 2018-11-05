// All necessary requires, such as the Quote model.copy
const mongoose = require('mongoose');
const {UserQuote } = require('../models/quote');


module.exports = {
    index: function(req, res) {
    	UserQuote.find({}, function(err, quotes) {
            if (err) { console.log(err); }
            res.render('quotes', { quotes: quotes });

    })
     },
    create: function(req, res) {
    	UserQuote.create(req.body, function(err) {
             res.redirect('/quotes');
    })
    },
    destroy: function(req, res) {
    // find by id and delete and redirect to index...	
    }
}