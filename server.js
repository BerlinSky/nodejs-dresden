var express = require('express')
var app = express()

var fs = require('fs')
var path = require('path');

var users = []

fs.readFile(path.resolve(__dirname, './data/users.json'), {encoding: 'utf8'}, function(err, data) {
  if (err) throw err

  JSON.parse(data).forEach(function(user) {
    user.name.full = user.name.first + ' ' + user.name.last
    users.push(user)
  })
})

app.get('/', function(req, res) {
  var buffer = ''

  users.forEach(function(user) {
    buffer += `<a href="/${user.username}">${user.name.full}</a><br>`
  })

  res.send(buffer)
})

app.get('/:username', function(req, res) {
  var username = req.params.username;
  res.send(username);
})

app.get('/service', function(req, res) {
  res.send('This is the service page')
})

var server = app.listen(4000, function() {
  console.log('Server is running at http://localhost:' + server.address().port)
})

