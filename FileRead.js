var fs = require('fs');

var rawdata = fs.readFileSync('Employee.json');
var employee = JSON.parse(rawdata);
console.log(employee);