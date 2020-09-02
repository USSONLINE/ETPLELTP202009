// reading file in asynchronous way
var fs = require('fs')
console.log("this printed before file reading");
fs.readFile('input.txt', 'utf8', function(error, data) {
    console.log(data);
});
console.log('this printed after file reading');