//load the http module
var http = require("http");
//declaring the date variable
var date;
var port = 8080;

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":'text/html'});
    date = new Date();
    res.write("Current Date and Time : "+date);
    res.end();
}).listen(port);