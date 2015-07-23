var express = require('express');
var Post = require('./models/post')
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/', function(req,res){
	res.sendFile('layouts/posts.html', { root: __dirname });

})

app.get('/api/posts', function (req, res, next) {
  Post.find(function(err,posts){

  	if(err) {res.json([{error:"this is a error"}])}
  	res.json(posts);
  })
});

app.post('/api/posts',function(req,res,next){
var post = new Post({
	username : req.body.username,
	body : req.body.body

})
post.save(function (err,post){
	if(err) {return next(err)}
	res.json(201,post)

	})	
})

app.listen(3000, function () {
  console.log('App listening at ',3000);
});
