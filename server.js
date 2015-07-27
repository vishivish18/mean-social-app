var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jwt = require('jwt-simple')
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//app.use(require('body-parser').json)

var secretkey = "supersecretkey"

app.post('/session', function(req,res){
var username = req.body.username
console.log(username);

var token = jwt.encode({username:username},secretkey)
res.json(token)
})

app.get('/user',function(req,res){
var token = req.headers['x-auth']
var user = jwt.decode(token,secretkey)
res.json(user)
})   

app.listen(3000)

