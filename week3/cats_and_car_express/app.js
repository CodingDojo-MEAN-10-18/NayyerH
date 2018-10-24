var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));


app.get('/', function(request, response) {
    response.sendFile(index.html);
});
app.get('/cars.html', function(request, response) {
    response.sendFile(cars.html);
});
app.get('/cats.html', function(request, response) {
    response.sendFile(cats.html);
});
app.get('/form.html', function(request, response) {
    response.sendFile(newcar.html);
});


app.listen(8000, function() {
    console.log("Running in localhost at port 8000");
});
