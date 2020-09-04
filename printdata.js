var express = require("express");
var fs = require("fs");
var mongoClient = require('mongodb').MongoClient;
var app = express();
var port = 8080;
var url = "mongodb://127.0.0.1:27017";
var dbName = "sample";
var db;
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

mongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.log(err);
    }
    db = client.db(dbName);
    console.log("connected to mongo db:", url);
    console.log("database:", dbName);
});

app.listen(port, () => {
    console.log("server is up and running on port ", port);
});

app.get('/form1', function (req, res) {
    var html='';
    html +="<body>";
    html += "<form action='/printdata1'  method='post' name='form1'>";
    html += "HTno:</p><input type= 'number' name='num'>";
    html += "<br>";
    html += "<input type='submit' value='submit'>";
    html += "<INPUT type='reset'  value='reset'>";
    html += "</form>";
    html += "</body>";
    res.send(html);
});

app.post('/printdata1', urlencodedParser, function (req, res){
    mongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sample");
        var query = { HTno : JSON.parse(req.body.num) };
        dbo.collection("marks").find(query).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
        });
    });
});