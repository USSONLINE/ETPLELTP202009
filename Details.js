var http = require("http");
var fs = require('fs');
const PORT=3000; 
fs.readFile('./edvenswaemp.html', function (err, html)
	http.EmpDetails(function (context, callback)) {
		http.get("details.html", function(res) {
		var data = "";
		res.on('data', function (chunk) {
			data += chunk;
		});
		res.on("end", function() {
			console.log("DATA-------------------------------");
			console.log(data);
			callback(data);
		});
	}).on("error", function() {
		// callback(null);
	});
};listen(3000);
EmpDetails();