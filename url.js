var http = require('http');
http.createServer(function(req,res)
{
    res.writeHead(200,{'Content':'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);