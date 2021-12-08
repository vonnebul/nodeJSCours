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
io.sockets.on('connection', (socket)=>{
    console.log('un client est connecté');
})

server.listen(3000);