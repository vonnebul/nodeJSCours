var fs = require("fs")
// dépendance api express
var express = require('express');
var bodyParser = require("body-parser");
// serveur html
var app= express();
// utiliser le module de parsing
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000);

app.get('/', function(req, res) {
    res.sendFile( __dirname  + '/page.html');
  });
   
app.post('/post.html', function(req, res) {
    var p1 = req.body.p1; 
    console.log("p1=" + p1);
    if(p1 == "test"){
      fs.readFile('./victoire.html','utf-8',function(error, content){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(content);
      })
    }
    else{
      fs.readFile('./page.html','utf-8',function(error, content){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(content);
      })
    }
});