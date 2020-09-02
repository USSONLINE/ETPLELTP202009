var fs = require('fs');
var http = require('http');
var url = require('url');

try {
    //var data = fs.readFileSync('inputHtml.html', 'utf8');
    //console.log(data);
    http.createServer(function (req, res) {
        var data = fs.readFileSync('inputHtml.html', 'utf8');
        res.end(data);
    }).listen(8778);
    
} catch(e) {
    console.log('Error:', e.stack);
}
