var express = require('express')
var app = express()

var fs = require('fs')
var path = require('path');

var bodyParser = require('body-parser');
var _ = require('lodash');

var helpers = require('./helpers')

// var users = []

// fs.readFile(path.resolve(__dirname, './data/users.json'), {encoding: 'utf8'}, function(err, data) {
//   if (err) throw err

//   JSON.parse(data).forEach(function(user) {
//     user.name.full = user.name.first + ' ' + user.name.last
//     users.push(user)
//   })
// })

// function getUserFilePath(username) {
//   return path.join(__dirname, 'data', 'users', username) + '.json';
// }

// function getUser(username) {
//   var user = JSON.parse(fs.readFileSync(getUserFilePath(username), { encoding: 'utf8'}))
//   user.name.full = _.startCase(user.name.first + ' ' + user.name.last);
//   _.keys(user.location).forEach(function([key]) {
//     user.location[key] = _.startCase(user.location[key])
//   })
//   return user;
// }

// function saveUser (username, data) {
//   var fp = getUserFilePath(username)
//   fs.unlinkSync(fp) // delete the file
//   fs.writeFileSync(fp, JSON.stringify(data, null, 2), {encoding: 'utf8'})
// }

// function verifyUser (req, res, next) {
//   var fp = getUserFilePath(req.params.username)

//   fs.exists(fp, function (yes) {
//     if (yes) {
//       next()
//     } else {
//       res.redirect('/error/' + req.params.username)
//     }
//   })
// }

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

// app.get('/:username', verifyUser, function (req, res) {
//   var username = req.params.username
//   var user = helpers.getUser(username)
//   res.render('user', {
//     user: user,
//     address: user.location
//   })
// })

// app.put('/:username', function (req, res) {
//   var username = req.params.username
//   var user = helpers.getUser(username)
//   user.location = req.body
//   saveUser(username, user)
//   res.end()
// })

// app.delete('/:username', function (req, res) {
//   var fp = getUserFilePath(req.params.username)
//   fs.unlinkSync(fp) // delete the file
//   res.sendStatus(200)
// })

var server = app.listen(4000, function() {
  console.log('Server is running at http://localhost:' + server.address().port)
})

