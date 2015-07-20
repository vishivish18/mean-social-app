var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

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