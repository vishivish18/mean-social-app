var express = require('express');
var Post = require('./models/post')
var bodyParser = require('body-parser');
var app = express();
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