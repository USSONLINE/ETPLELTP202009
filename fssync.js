var fs = require('fs')
console.log("this printed before file reading");
var data = fs.readFileSync('input.txt', 'utf8');
console.log(data);
console.log('this printed after file reading');