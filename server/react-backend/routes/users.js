
// Asi se corre el servidor de express
// PORT=3001 node bin/www
var express = require('express');
var router = express.Router();


var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'jolans',
  password: '1234',
  database: 'eaqua'
})


connection.connect();


connection.query('SELECT * FROM instructor', function(err, rows, fields) {
  if(!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performind Query');
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    name: "samsepi0l"
  }, {
    id: 2,
    name: "D0loresH4ze"
  }]);
});


module.exports = router;
