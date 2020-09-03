var express = require("express");
var fs = require("fs");
var mongoClient = require('mongodb').MongoClient;
var app = express();
var port = 8080;
var allstudents;
var filteredstudents = [];
var url = "mongodb://127.0.0.1:27017";
var dbName = "sample";
var db;
var alldbstudents= [];
var filteredDbstudents = [];

fs.readFile("abcd.json", (err, data) => {
    if (err) {
        throw err;
    }
    allstudents = JSON.parse(data);
});

mongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.log(err);
    }
    db = client.db(dbName);
    console.log("connected to mongo db:", url);
    console.log("database:", dbName);
    var cursor = db.collection("students").find();
    cursor.each(function (err, doc) {
        if (err) {
            console.log(err);
        }
        if (doc) {
            alldbstudents.push(doc);
        }
    });
});

app.listen(port, () => {
    console.log("server is up and running on port ", port);
});

app.get(("/abcd"), (req, res) => {

    res.header("Content-Type", 'application/json');

    var query = req.query;
    var fetchMode = query.fetchMode;

    if (query && fetchMode) {
        if (fetchMode === "file") {
            var loc = query.loc;
            if (query && loc) {
                filterJobsByStatus(loc, fetchMode);
                res.json(filteredstudents);
                filteredstudents = [];
            } else {
                res.json(allstudents);
            }
        }
        if (fetchMode === "db") {
            var loc = query.loc;
            if (query && loc) {
                filterJobsByStatus(loc, fetchMode);
                res.json(filteredDbstudents);   
                filteredDbstudents = [];
            } else {
                res.json(alldbstudents);
            }
        } 
    }
});

function filterJobsByStatus(loc, fetchMode) {
    if (fetchMode === "file") {
        for (var i = 0; i < allstudents.student.length; i++) {
            var element = allstudents.student[i];
            if (element) {
                if (element.Location === loc) {
                    filteredstudents.push(element);
                }
            }
        }
    }
    if (fetchMode === "db") {
        var cursor = db.collection("students").find({ "Location": loc });
        cursor.each(function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                if (doc) {
                    filteredDbstudents.push(doc);
                }
            }
        });
    }
}