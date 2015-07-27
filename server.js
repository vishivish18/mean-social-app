var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jwt = require('jwt-simple')
var _ = require('lodash')
var bcrypt =require('bcrypt')


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//app.use(require('body-parser').json)


var users = [{username:'vishivish18',password:'$2a$10$xHr5GHJlavPXGJrw0EvGG.ZGQdju3s7boiViovILkg8YGUGBaz13m'}]
var secretkey = "supersecretkey"

function findUserByUsername(username){
	return _.find(users,{username:username})
}

function validateUser(user,password,cb){

	return bcrypt.compare(password,user.password,cb)


}


app.post('/session', function(req,res){
var user = findUserByUsername(req.body.username)
	validateUser(user, req.body.password, function(err,valid){
		if(err || !valid) {return res.send(401)}
			var token = jwt.encode({username: user.username},secretkey)
			res.json(token+" "+" User is authenticated")


	})
})

app.get('/user',function(req,res){
var token = req.headers['x-auth']
var user = jwt.decode(token,secretkey)
res.json(user)
})   

app.listen(3000)

