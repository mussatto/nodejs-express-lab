var express = require('express');

var app = express();

var port = 8080;

app.get('/hello', function(req, res){
  res.send('Hello World');
});

app.listen(port);


console.log('Listening on port ' + port);