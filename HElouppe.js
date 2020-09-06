var http = require('http');
var uc=require('upper-case');
http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write(uc.upperCase('Welcome to Node'));
    response.end();
    console.log("Server Started");
}).listen(1234);
