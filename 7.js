var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type": "text/html"});
    res.end('welcome to edvenswatech');
});
server.listen(8082);