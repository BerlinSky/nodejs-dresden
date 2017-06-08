var express = require('express')
var app = express()

var fs = require('fs')
var path = require('path');

var bodyParser = require('body-parser');
var appRouter = require('./app-router')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use('/scripts', express.static(path.join(__dirname, 'public', 'dist')))
app.use('/styles', express.static(path.join(__dirname, 'public', 'dist')))
app.use('/images', express.static(path.join(__dirname, 'public', 'images')))
app.use('/fonts', express.static(path.join(__dirname, 'public', 'fonts')))

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', appRouter)

var server = app.listen(4000, function() {
  console.log('Server is running at http://localhost:' + server.address().port)
})

