
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


/* GET users listing. */
router.get('/', function(req, res, next) {

  
  var instructorArray = [];

  var counter = 1;

  connection.query('SELECT * FROM instructor', function(err, rows, fields) {
    // console.log(rows);
    console.log("llamada");
    counter = counter + 1;
    if(!err) {      
      //res.json([{id: 1, name: 'Alan'}]);
     for (var r of rows) {
        var instructor = {
          id: 0,
          nombre: ""
        }
        // console.log("r.nombre" + r.nombre);
        instructor.id = r.instructor_id;
        instructor.nombre = r.nombre;
        instructorArray.push(instructor);
     }
    }
    else {
      console.log('Error while performind Query');
    }
    // console.log("Array: " + instructorArray[0].nombre);
    res.json(instructorArray);
  });

  // res.json([{
  //   id: 1,
  //   name: rows[0].nombre
  //   }, {
  //   id: 2,
  //   name: "D0loresH4ze"
  // }]);
});


module.exports = router;
