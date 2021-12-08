var http = require("http");
var express = require("express")
var server = http.createServer(function(req,res){ // req = request => visiteur (paramètres, naviguation page, etc..)
                                                  // res = response => serveur (renvoyer page web)
    res.writeHead(200, {"Content-Type":"text/html"}); // 200 ok, 404 page introuvable, 500 erreur interne 
    // Texte: text/plain
    // HTML: text/html
    // CSS: text/css
    // ...
    res.end("<style>strong{color: red;}</style>Hello <strong>everybody</strong>");
});
server.listen(8080);
