var router = require('express').Router()
var path = require('path')


router.get('/', function (req,res){


	res.sendFile(path.resolve('layouts/posts.html'));

})

module.exports = router;