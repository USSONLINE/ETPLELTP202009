var port = require('http')
port.createServer(function(req, res) {
    res.writeHead(200, { "content-type": "text/html" })
    res.end("It is a Nodejs to see whether it is connected to the port  program!!!")
}).listen(9000);