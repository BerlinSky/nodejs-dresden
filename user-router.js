var express = require('express')
var helpers = require('./helpers')
var fs = require('fs')

var User = require('./db').User

var router = express.Router({
  mergeParams: true
})

// router.all('/', function (req, res, next) {
//   console.log(req.method, 'for', req.params.username)
//   next()
// })

router.use(function (req, res, next) {
  console.log(req.method, 'for', req.params.username, ' at ' + req.path)
  next()
})

// router.get('/', helpers.verifyUser, function (req, res) {
//   var username = req.params.username
//   var user = helpers.getUser(username)
//   res.render('user', {
//     user: user,
//     address: user.location
//   })
// })

router.get('/', function (req, res) {
  var username = req.params.username
  User.findOne({username: username}, function (err, user) {
    res.render('user', {
      user: user,
      address: user.location
    })
  })
})

// The default error handling is not invoked if a custom error handling method as above exists
router.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('The default error handling is invoked!')
})

router.get('/edit', function (req, res) {
  res.send('You want to edit ' + req.params.username + '???')
})

// router.put('/', function (req, res) {
//   var username = req.params.username
//   var user = helpers.getUser(username)
//   user.location = req.body
//   helpers.saveUser(username, user)
//   res.end()
// })

router.put('/', function (req, res) {
  var username = req.params.username

  User.findOneAndUpdate({username: username}, {location: req.body}, function (err, user) {
    res.end()
  })
})

// router.delete('/', function (req, res) {
//   var fp = helpers.getUserFilePath(req.params.username)
//   fs.unlinkSync(fp) // delete the file
//   res.sendStatus(200)
// })

router.delete('/', function (req, res) {
  User.findOneAndRemove({username: req.params.username}, function (err, user) {  
    res.end()
  });
})

module.exports = router
