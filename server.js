var express = require('express')
var app = express()

var fs = require('fs')
var path = require('path');

var bodyParser = require('body-parser');
var _ = require('lodash');

var helpers = require('./helpers')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/scripts', express.static(path.join(__dirname, 'public', 'scripts')))
app.use('/styles', express.static(path.join(__dirname, 'public', 'styles')))
app.use('/photos', express.static(path.join(__dirname, 'images')))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  var users = []
  var dir = path.join(__dirname, 'data', 'users');
  fs.readdir(dir, function (err, files) {
    if (err) throw err

    files.forEach(function (file) {
      fs.readFile(path.join(__dirname, 'data', 'users', file), {encoding: 'utf8'}, function (err, data) {
        if (err) throw err

        var user = JSON.parse(data)
        user.name.full = _.startCase(user.name.first + ' ' + user.name.last)
        users.push(user)
        if (users.length === files.length)  {
          res.render('index', {users: users})
        }
      })
    })
  })
})

// File downloading
app.get('*.json', function (req, res) {
  res.download('./data/users/' + req.path, 'data-user.json')
})

// Rendering JSON data
app.get('/data/:username', function (req, res) {
  var username = req.params.username
  var user = helpers.getUser(username)
  res.json(user)
})

app.get('/error/:username', function (req, res) {
  res.status(404).send('No user named ' + req.params.username + ' found')
})

var userRouter = require('./user-router')
app.use('/:username', userRouter)

var server = app.listen(4000, function() {
  console.log('Server is running at http://localhost:' + server.address().port)
})

