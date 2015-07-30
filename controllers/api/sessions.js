var router = require('express').Router()
var User = require('../../models/user')
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var config = require ('../../config')


router.post('/', function(req,res,next){
  console.log(req.body.username);
  
  User.findOne({username: req.body.username})
  .select('password')
  .exec(function(err,user){
    //it gets a user instance which does not have a username property . Why ?
    if(err) {return next(err)}
    if(!user) { console.log('rejected first')/*return res.send(401)*/ }
    
    bcrypt.compare(req.body.password,user.password, function(err,valid){
      if(err){ console.log('rejected second') /*return next(err)*/}
      if(!valid){console.log('rejected third') /*return res.send(401)*/}
      //var test = {username:user.username};
      //console.log(user.username);
      var token = jwt.encode({username:req.body.username},config.secret)
      res.json(token)

    })

  })
})



module.exports = router










