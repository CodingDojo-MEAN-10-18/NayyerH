var express = require('express');

var app = express();

  
app.use(express.static(__dirname + "/static"));
app.get('/', function(request, response) {
    response.render(cats);
});

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/", function (request, response){

    response.render('index');
})

app.get("/cats", function (request, response){
    

    response.render('cats');
})

app.get("/cuddles",function(request,response){
    let cat ={
        name : "cuddle",
        sleeping_spot : ["under the bed","at the edge of the bed"]
    }
    response.render('cat_info',{cat:cat})
})

app.get("/stokely",function(request,response){
    let cat ={
        name : "stokely",
        sleeping_spot : ["in the closet"," in a box"]
    }
    response.render('cat_info',{cat:cat})
})

app.get("/sterling",function(request,response){
    let cat ={
        name : "sterling",
        sleeping_spot : ["next to the window"," on a chair"]
    }
    response.render('cat_info',{cat:cat})
})


app.listen(8000,function(){
    console.log('listening on 8000');
})
