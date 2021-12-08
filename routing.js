var http = require ( "http" );
var express = require ( "express" );
var app = express();

app.get( "/" , function (req,res){
    res.writeHead( 200 , { "Content-Type" : "text/html" });
    res.end( "<h1>Page d'accueil</h1>" );
})

.get( "/page/:numPage/" , function (req, res) {
    var page = req.params.numPage;
    page = parseInt(page);
    valide = Number.isInteger(page)
    console.log(valide);
    if(valide){
        res.writeHead(200 , { "Content-Type" : "text/html" });
        res.end( "<h1>Page numero "+ page +"</h1>" );
    }
    if(!valide){
        res.writeHead( 404 , { "Content-Type" : "text/html" });
        res.end( "<h1>Pas touche aux variables !!</h1>" );
    }

})

app.listen( 3000 );