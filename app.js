var express = require('express');
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/test', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api



var Post = require('./models/post')
var bodyParser = require('body-parser');
var app = express();
app.use('/api/route', router);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(require('./auth'))
app.use('/api/posts',require('./controllers/api/posts'))
app.use('/api/users',require('./controllers/api/users'))
app.use('/api/sessions',require('./controllers/api/sessions'))
app.use('/',require('./controllers/static'))

var port = process.env.PORT || 3000
var server = app.listen(port, function () {
  console.log('App listening at the ',port);
});

require('./websockets').connect(server)