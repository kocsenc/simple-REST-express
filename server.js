var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: false})); // to support URL-encoded bodies

var fs = require('fs');

function getFileContents(callback) {
  var filename = '/users.json';
  fs.readFile
}

// GET
app.get('/users', function (req, res) {
   fs.readFile( __dirname + '/users.json', 'utf8', function (err, data) {
       res.end( data );
   });
});

// GET with :id
app.get('/users/:id', function (req, res) {
  fs.readFile( __dirname + '/users.json', 'utf8', function(_err, data){
    users = JSON.parse( data );
    var user = users["user" + req.params.id] 
    res.end( JSON.stringify(user));
  });
});

// POST
app.post('/users', function (req, res){
  console.log(req.body);
  var requestBody = req.body;
  requestBody.MESSAGE = "";
  res.end('You have *fake added* this user:\n' + JSON.stringify(requestBody));
});

// DELETE


var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at localhost:%s', port);
});
