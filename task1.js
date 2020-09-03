var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
  //res.end('<html><body>Hello World!</body></html>');
}).listen(8080); 