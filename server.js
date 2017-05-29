var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('Hi, there!!')
})

app.get('/service', function(req, res) {
  res.send('This is the service page')
})

var server = app.listen(4000, function() {
  console.log('Server is running at http://localhost:' + server.address().port)
})