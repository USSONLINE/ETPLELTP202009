var express = require("express");
var app = express();
var port = 8080;
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });


app.listen(port, () => {
    console.log("server is up and running on port ", port);
});

app.get('/form', function (req, res) {
    var html='';
    html +="<body>";
    html += "<form action='/printdata'  method='post' name='form1'>";
    html += "Name:</p><input type= 'text' name='name'>";
    html += "<br>";
    html += "Location:</p><input type= 'text' name='location'>";
    html += "<br>";
    html += "<input type='submit' value='submit'>";
    html += "<INPUT type='reset'  value='reset'>";
    html += "</form>";
    html += "</body>";
    res.send(html);
  });


  app.post('/printdata', urlencodedParser, function (req, res){
     var a = "";
     a += "Your name is : "+req.body.name;
     a += " Your location is : "+req.body.location;
     res.send(a);
    }); 