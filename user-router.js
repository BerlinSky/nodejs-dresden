var express = require('express')
var helpers = require('./helpers')
var fs = require('fs')

var User = require('./db').User

var router = express.Router({
  mergeParams: true
})

router.use(function (req, res, next) {
  console.log(req.method, 'for', req.params.username, ' at ' + req.path)
  next()
})

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

//   User.findOneAndUpdate({username: username}, {location: req.body}, function (err, user) {
//     res.end()
//   })
// })

router.put('/', function (req, res) {
  var username = req.params.username;

  User.findOne({username: username}, function (err, user) {
    if (err) console.error(err);

    user.name.full = req.body.name;
    user.location = req.body.location;

    user.save(function () {
      res.end();
    });
  });
});

router.delete('/', function (req, res) {
  User.findOneAndRemove({username: req.params.username}, function (err, user) {  
    res.end()
  });
})

module.exports = router
