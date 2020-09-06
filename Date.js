var http=require('http');
var dt=require('./myfirstmodule');
http.createServer(function (req,res) {
    res.writeHead(200, {'content-Type':'tesxt/html'});
    res.write("The date and time is currently:"+dt.myDateTime());
    res.end();
}).listen(1234);
console.log('Date and Time Displayed');