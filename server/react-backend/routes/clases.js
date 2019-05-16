
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



router.get('/', function(req, res, next) {

  
  var clases = [];


  connection.query('SELECT c.dia as dia, c.hora as hora, a.nombre as alumno_nombre, i.nombre as instructor_nombre FROM alumno a, instructor i,  clase c, clase_alumno ca WHERE a.alumno_id = ca.alumno_id AND i.instructor_id = c.instructor_id AND ca.clase_id = c.clase_id', function(err, rows, fields) {

    console.log("llamada clase");

    if(!err) {      

     for (var r of rows) {
        var clase = {
          dia: "",
          hora: "",
          alumno_nombre: "",
          instructor_nombre: ""
        }

        clase.dia = r.dia;
        clase.hora = r.hora;
        clase.alumno_nombre = r.alumno_nombre;
        clase.instructor_nombre = r.instructor_nombre;
        clases.push(clase);
     }
    }
    else {
      console.log('Error while performind Query');
    }

    res.json(clases);
  });

});


module.exports = router;
