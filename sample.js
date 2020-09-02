var http = require("http");
http.createServer(function(request,response){
	response.writeHead(200,{'content-Type':'text/plain'});
	response.end('hello world,welcome to node\n');
	}).listen(3000);
	
console.log('server running at http://localhost:3000/');