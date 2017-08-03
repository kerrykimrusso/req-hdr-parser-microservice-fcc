// init project
var path = require('path');
const accept = require('accept');
var express = require('express');
var app = express();


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// routing
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
  res.json(accept.parseAll(req.headers));
  // return {
    // "ipaddress": req.ip,
    // "language": req.acceptLanguages(),
    // "software": "Macintosh; Intel Mac OS X 10_12_6"}
  // }
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
