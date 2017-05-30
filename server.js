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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/photos', express.static(path.join(__dirname, 'images')))

app.get('/', function(req, res) {
  res.render('index', { users: users });
})

// app.get('/favicon.ico', function(req, res) {
//   res.end('favicon.png')
// })

app.get('/:username', function(req, res) {
  var username = req.params.username;
  res.render('user', { username: username })
})

app.get('/service', function(req, res) {
  res.send('This is the service page')
})

var server = app.listen(4000, function() {
  console.log('Server is running at http://localhost:' + server.address().port)
})

