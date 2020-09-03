var http = require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'})
    res.write("hello world11")
    res.end()

}).listen(8082)
