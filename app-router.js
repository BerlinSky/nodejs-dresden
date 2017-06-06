var express = require('express')
var fs = require('fs')

var router = express.Router({
  mergeParams: true
})

router.use(function (req, res, next) {
  console.log(req.method, ' at ' + req.path)
  next()
})

router.get('/', function (req, res) {
  res.render('index')
})

router.get('/news', function (req, res) {
  res.render('news')
})

router.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('The default error handling is invoked!')
})

module.exports = router
