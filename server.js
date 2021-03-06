var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  cors = require('cors'),
  path = require('path'),
  port = process.env.PORT || 3000,
  apiRoutes = require('./api_routes.js'),
  mongoose = require('mongoose'),
  databaseURL = "mongodb://localhost:27017/hots"

mongoose.connect(databaseURL, function(err){
  if(err){
    console.log(err)
  }
  console.log("connected to BADB")
})
 
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use('/api/v2', apiRoutes)
app.use(express.static(path.join(__dirname, './public')))
// http://localhost:3000/api/v1/cars
app.listen(port, function () {
  console.log('Server running on port: ', port)
})
