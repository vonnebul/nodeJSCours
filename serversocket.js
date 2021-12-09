var http = require("http");
var fs = require ("fs");

var server = http.createServer(function(req,res){
    fs.readFile("./chat.html", 'utf-8', function(error, content){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    })
})

// chargement de socket.io
var io = require("socket.io")(server);

// notation utilisateur sur la console
io.sockets.on( 'connection' , function (socket) {
    console.log( 'Un client est connecté !' );
    socket.broadcast.emit("newClient");

    var rep = false;

    socket.on("rep", function(res){
        console.log("La réponse de l'utilisateur est : " + res);
        rep = res;
    })

    console.log("la variable réponse est désormais = "+ rep)

    setInterval(() => {
        socket.emit( "question" , "test ?" );
    }, 20000 );
});

server.listen(3000);