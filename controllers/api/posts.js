var router = require('express').Router()
var Post = require('../../models/post')

router.get('/', function (req, res, next) {  
  Post.find()
  .sort('-date')
  .exec(function (err, posts) {
    if (err) { return next(err) }
    res.json(posts)
  })
})

router.post('/', function (req, res, next) {
  var post = new Post({body: req.body.body})
  post.username = "vishivish18" // req.auth.username not working, undfined as of now
  post.save(function (err, post) {
    if (err) { return next(err) }
    res.status(201).json(post)
  })
})

module.exports = router