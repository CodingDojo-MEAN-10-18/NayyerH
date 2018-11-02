const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');

app.set('views', path.join(__dirname, './views'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));


app.use(flash());

app.use(session({
    secret: 'SuperSecretCode',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}));


mongoose.connect('mongodb://localhost/cat',{ useNewUrlParser: true });



var catSchema = new mongoose.Schema({
    breed :{
     type :String,
     required : [true, 'breed is required'],
     trim : true,

    },
    color : {
        type: String,
        required : [true,' color is required'],
        trim: true
    },
    eyeColor: String,
    age : Number,
    isPet:Boolean

})
Cat = mongoose.model('Cat',catSchema);




app.get('/cats',(req,res)=>{
      Cat.find({}) 
        .then(cats=> res.render('cats/index',{cats:cats})) 
        .catch(console.log);
        
});


app.get('/cats/new',(req,res)=>{
    res.render('cats/new');
});



app.get('/cats/:id',(req,res)=>{
      console.log(req.params.id)
    Cat.findById(req.params.id,(err,cat)=> 
    {
       console.log(cat)  
       res.render('cats/your_cat',{cat:cat});
    });
    
   
});

app.get('/cats/edit/:id',(req,res)=>{
   Cat.findById(req.params.id,(err,cat)=> 
    {
       console.log(cat)  
       res.render('cats/edit',{cat:cat});
    });
});

app.post('/cats/:id',(req,res)=>{
      console.log(req.params.id)
    Cat.findByIdAndUpdate(req.params.id,req.body,(err,cat)=> 
    {
       console.log(cat)  
       res.redirect('/cats');
    });
    
   
});

app.get('/cats/destroy/:id',(req,res)=>{
      console.log(req.params.id)
    Cat.findByIdAndDelete(req.params.id,(err,cat)=> 
    {
       console.log(cat)  
       res.redirect('/cats');
    });
    
   
});

app.post('/cats',(req,res)=>{
    Cat.create(req.body)
    .then(cat => {console.log(cat)
        res.redirect('/cats')})
    .catch(error => {
        const errors = Object.keys(error.errors)
        .map(key =>error.errors[key].message)
        res.render('cats/new',{errors})
    })
})



app.listen(8000,()=> console.log('listening ....'));


