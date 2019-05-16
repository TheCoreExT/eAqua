
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

  
  var alumnos = [];


  connection.query('SELECT * FROM alumno', function(err, rows, fields) {

    console.log("llamada alumnos");

    if(!err) {      

     for (var r of rows) {
        var alumno = {
          id: 0,
          nombre: ""
        }

        alumno.id = r.alumno_id;
        alumno.nombre = r.nombre;
        alumnos.push(alumno);
     }
    }
    else {
      console.log('Error while performind Query');
    }

    res.json(alumnos);
  });

});


module.exports = router;
