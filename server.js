var http = require("http")
var fs = require("fs")
var server = http.createServer(function(req,res){
    fs.readFile('./index.html','utf-8',function(error, content){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(content)
    })
})
server.listen(3000)