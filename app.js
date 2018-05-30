var http = require('http');
var path = require('path');
var express = require('express');


var app = express();

app.use(express.static(path.resolve(__dirname,"public")));
app.set("views",path.resolve(__dirname,"views"));
app.set("view engine", "ejs");
app.get("/",function(req,res){
    res.render("index");
});

app.get('/armas',function(request,response){
    response.render("armas");
});

app.get('/clases',function(request,response){
    response.render("clases");
});

app.get('/boing',function(request,response){
    response.render("boing");
});

app.get('/victimas',function(request,response){
    var ips = [];
    var client_ip = request.connection.remoteAddress;
    if(ips.indexOf(client_ip) >= 0){
        response.render("boing");
        // Imprimir en consola la IP: console.log(client_ip);
    }
    else{
        response.render("victimas");
    }
});

app.use((request,response)=>response.status(404).render('404'));


http.createServer(app).listen(3000,() =>
console.log('La aplicacion Zomg Zombies! está corriendo en el puerto 3000')
);
