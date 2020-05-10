var express = require('express');
var zdf = require("zdf");


var app = express();
app.use(express.static('public'));


app.get('/', function (req, res) {

  var url = req.query.uri.replace('https://','');
  zdf.getSources(url, function(resp){
    res.send(resp);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});