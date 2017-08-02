// init project
var path = require('path');
const bodyParser = require('body-parser');
const os = require('os');
var express = require('express');
var app = express();


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// routes
app.get('/api/whoami', (req, res) => {
  
  return {
    "ipaddress": req.ip,
    "language": ,
    "software": "Macintosh; Intel Mac OS X 10_12_6"}
  }
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
