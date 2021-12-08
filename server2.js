var fs = require("fs")
var express= require("express")
var app = express();
app.get( "/" , function (req,res){
    fs.readFile('./index.html','utf-8',function(error, content){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(content)
    })
    })
    .get( "/page2/" , function (req, res) {
        fs.readFile('./page2.html','utf-8',function(error, content){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(content)
        })
    })
    .get( "/page3/" , function (req, res) {
        fs.readFile('./page3.html','utf-8',function(error, content){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(content)
        })
    })
//middlewares d'express sont par exemple: 
    //cookie-parser => manipulation cookies
    //serve-static => envoie fichier contenues dans un dossier (ex: image)
    //csrf => protection faille csrf
    //...
app.use( function (req, res) {
    res.setHeader( 'Content-Type' , 'text/plain' );
    res.status( 404 ).send( 'erreur 404 ! Page introuvable !' );
    });
app.listen( 3000 );