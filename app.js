var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/api/posts', function (req, res) {
  res.json([
  {
  	username : "vishalRanjan",
  	body : "this is from node"
  }
  ])
});

app.listen(3000, function () {
  console.log('App listening at ',3000);
});


app.post('/api/posts',function(req,res){
console.log('post received');
console.log(req.body.username);
console.log(req.body.body);
res.sendStatus(201);
})

