
// Asi se corre el servidor de express
// PORT=3001 node bin/www
//set PORT=3001 && node bin/www
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
    console.log( rows);
  else
    console.log('Error while performind Query');
  
    //console.log(rows[0].nombre)
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([{id: 1, name:'Joe'}]);
  // res.json([{
  //   id: 1,
  //   name: rows[0].nombre
  //   }, {
  //   id: 2,
  //   name: "D0loresH4ze"
  // }]);
});


module.exports = router;
