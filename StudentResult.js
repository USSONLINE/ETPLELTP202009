var express = require("express");
var app     = express();
var path    = require("path");
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "9542082190",
  database: "student"
});
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/StudentResult.html'));
});
app.post('/submit',function(req,res){

  var rollno=req.body.Rollno;
  var name=req.body.name;
  var marks=req.body.marks;
  var result=req.body.Result;
  res.write('Record Successfully Inserted');
con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO results (id,name, marks,Result) VALUES ('"+rollno+"','"+name+"', '"+marks+"','"+result+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
     res.end();
  });
  });
})
app.listen(3000);
console.log("Running at Port 3000");