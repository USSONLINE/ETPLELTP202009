var dateTime = require('node-datetime');
var dt = dateTime.create();
var formatted = dt.format('m-d-y H:M:S');
console.log(formatted);