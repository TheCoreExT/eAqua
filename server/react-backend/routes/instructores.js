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

router.post('/eliminarInstructor', function(req, res, next){

  var instructor_id = req.body.instructor_id;

  var query = "DELETE FROM instructor WHERE instructor_id=" + instructor_id;
  connection.query(query, function(err) {
    console.log(query);

    if(err)
      console.log(err)
    else
      console.log("Instructor eliminado")
  });
    res.redirect('/instructores');
    

});

router.post('/', function(req, res, next){
  var instructor ={
    nombre: "",
    telefono: "",
    correo: "",
    clabe: ""
  }

  instructor.nombre = req.body.nombre;
  instructor.telefono = req.body.telefono;
  instructor.correo = req.body.correo;
  instructor.clabe = req.body.clabe;

  var query = 'insert into instructor(nombre, telefono, correo, clabe) values(';

  query += "'" + instructor.nombre + "', '" + instructor.telefono + "', '" + instructor.correo + "','" + instructor.clabe + "')";

  connection.query(query, function(err){
    if(err)
      console.log(err)
    else
      console.log('Instructor insertado')
  });

  res.redirect('/instructores');
})

router.get('/', function(req, res, next) {

  
  var instructorArray = [];

  connection.query('SELECT * FROM instructor', function(err, rows, fields) {

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
    res.json(instructorArray);
  });
});



module.exports = router;
