var http = require('http');
var dt = require('./GetDate.js')

http.createServer(function(req, res) {
    //res.writeHead(200, {'Content Type': 'text/html'});
    res.writeHead(200, {'Content-Type': 'text/html'});
    var currentDate = dt.getCurrentDate()+'';
    console.log(currentDate)
    res.end(currentDate);
    //res.end(dt.getCurrentDate()+'');
}).listen(8080);

