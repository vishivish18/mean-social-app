var mongoose= require('mongoose')
mongoose.connect('mongodb://localhost/auth/demo')

var user = mongoose.Schema({
	username : String,
	password : String	
})

module.exports = mongoose.model('User',user)

