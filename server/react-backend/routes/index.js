var express = require('express');
var router = express.Router();

var mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27018/test";
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
  //res.json(results);
});

module.exports = router;
