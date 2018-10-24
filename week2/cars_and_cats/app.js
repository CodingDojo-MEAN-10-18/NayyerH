var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, res){

    console.log('client request URL: ', request.url);

    let file;
    let route;
    let type;

    switch (request.url) {
      case "/cars":
        file = 'cars.html';
        route = 'views';
        type = "text/html";
        break;
      case "/cats":
        file = 'cats.html';
        route = 'views';
        type = "text/html";
        break;
      case "/cars/new":
        file = 'newcar.html'
        route = 'views';
        type = "text/html";
        break;
      case "/stylesheets/style.css":
        file = "style.css";
        route = "stylesheets";
        type = "text/css";
        break;
      case "/images/car1.jpg":
        file = "car1.jpg";
        route = "images";
        type = "image/jpg";
        break;
      case "/images/car2.jpg":
        file = "car2.jpg";
        route = "images";
        type = "image/jpg";
        break;
      case "/images/car3.jpg":
        file = "car3.jpg";
        route = "images";
        type = "image/jpg";
        break;
      case "/images/cat1.png":
        file = "cat1.png";
        route = "images";
        type = "image/png";
        break;
      case "/images/cat2.png":
        file = "cat2.png";
        route = "images";
        type = "image/png";
        break;
      case "/images/cat3.png":
        file = "cat3.png";
        route = "images";
        type = "image/png";
        break;
      default:
        file = null;
        break;
    }

    if (route == "images"){
        fs.readFile(`${route}/${file}`, function(err, contents){
            if (err) { console.log(err); }
            res.writeHead(200, {'Content-Type': `${type}`});
            res.write(contents);
            res.end();
            });
    }
    else if (file !== null) {
        fs.readFile(`./${route}/${file}`, 'utf8', function(err, contents){
        if (err) { console.log(err); }
        res.writeHead(200, {'Content-Type': `${type}`});
        res.write(contents);
        res.end();
        });
    } else { 
        res.writeHead(404);
        res.end("File not found!");
    }

});

server.listen(8000);
