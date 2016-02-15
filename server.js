var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser());

var monte = {name: 'monte', id: 0, age: 93, gender: 'male'};
var smokey = {name: 'smokey', id: 1, age: 17, gender: 'male'};


var bears = [monte, smokey];

app.get('/api/bears', function(req, res){
  res.json(bears);
});
 
app.get('/api/bear/:id', function(req, res){

  var id = req.params.id;

  var rightBear = {title: "no beer found... "}

  bears.forEach(function(b){
    if(b.id.toString() === id.toString()){
      rightBear = b;
    }
  })

  res.json(rightBear);

});

app.post('/api/bear', function(req, res){
  var newBear = {};

  console.log('about to create  a new bear');

  newBear.name = req.body.name;
  newBear.age = req.body.age;
  newBear.gender = req.body.gender;
  newBear.id = new Date().getTime();

  console.log('pushing: ', newBear);

  bears.push(newBear);

  res.json(bears);
});


app.listen(3000, function(){
  console.log('the server is up and running..')
});