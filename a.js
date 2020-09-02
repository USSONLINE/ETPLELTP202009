var fs = require('fs');
fs.readFile('abcd.json',function(err, data) { 
        var jsonData = data;
        var jsonParsed = JSON.parse(jsonData);
        console.log(jsonParsed.student[0].Name + " " + jsonParsed.student[0].Location);
        console.log(jsonParsed.student[1].Name + " " + jsonParsed.student[1].Location);

});