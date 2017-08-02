// init project
var path = require('path');
const bodyParser = require('body-parser');
var express = require('express');
var app = express();


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
