// init project
var path = require('path');
const accepts = require('accepts');
var express = require('express');
const eua = require('express-useragent');
var app = express();


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(eua.express());

// routing
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
  let headers = accepts(req);
  res.json({
    "ipaddress": req.ip,
    "language": headers.languages()[0],
    "software": req.uesragent && req.useragent.source ? req.useragent.source.match(/\(([^)]+)\)/)[1] : ""
  }).end();
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
