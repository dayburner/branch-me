var express = require('express');
var port = 5555;
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/alpha', function (req, res) {
  res.send('Alpha');
});

app.listen(port, function(){
  console.log('Server started at ', port);
});