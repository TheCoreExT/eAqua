
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

  connection.query('SELECT * FROM instructor', function(err, rows, fields) {
    // console.log(rows);
    console.log("llamada instructores");
    if(!err) {      
     for (var r of rows) {
        var instructor = {
          id: 0,
          nombre: "",
          telefono: "",
          correo: "",
          clabe: ""
        }
        // console.log("r.nombre" + r.nombre);
        instructor.id = r.instructor_id;
        instructor.nombre = r.nombre;
        instructor.telefono = r.telefono;
        instructor.correo = r.correo;
        instructor.clabe = r.clabe;
        instructorArray.push(instructor);
     }
    }
    else {
      console.log('Error while performind Query');
    }
    // console.log("Array: " + instructorArray[0].nombre);
    res.json(instructorArray);
  });
});



module.exports = router;
