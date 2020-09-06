var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Welcome to Node');
    response.end();
}).listen(8008);
console.log('Server Started');

 