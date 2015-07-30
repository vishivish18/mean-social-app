var express = require('express');
var Post = require('./models/post')
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/api/posts',require('./controllers/api/posts'))
app.use('/',require('./controllers/static'))


app.listen(3000, function () {
  console.log('App listening at ',3000);
});
