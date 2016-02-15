var express = require('express');
var app = express();

var monte = {name: 'monte', id: 0, age: 93, gender: 'male'};
var smokey = {name: 'smokey', id: 1, age: 17, gender: 'male'};

var bears = [monte, smokey];

app.get('/api/bears', function(req, res){
  res.json(bears);
});


app.listen(3000, function(){
  console.log('the server is up and running..')
});