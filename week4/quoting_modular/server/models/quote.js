var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Qoutes',{useNewUrlParser:true});
//create mongoose schema:
var UserQuoteSchema = new mongoose.Schema({
  name:  {  type: String,
            required: true,
            minlength: 2},
  quote: {  type: String, 
            required: true},
}, 
    {timestamps: true });

//store schema:


mongoose.model('UserQuote', UserQuoteSchema);
var UserQuote = mongoose.model('UserQuote');

exports.UserQuote = UserQuote;