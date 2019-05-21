
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

router.post('/eliminarClase', function(req, res, next){

  var clase_id = req.body.clase_id;

  var query = "DELETE FROM clase WHERE clase_id=" + clase_id;
  connection.query(query, function(err) {
    console.log(query);

    if(err)
      console.log(err)
    else
      console.log("Clase eliminada")
  });
    res.redirect('/clases');
    

});

router.post('/', function(req, res, next){
  var clase ={
    dia: "",
    hora: "",
    instructor_id: ""
  }
  clase.dia = req.body.dia;
  clase.hora = req.body.hora;
  clase.instructor_id = req.body.instructor_id;

  var query = 'insert into clase(dia, hora, instructor_id) values(';

  query += "'" + clase.dia + "', '" + clase.hora + "'," + clase.instructor_id  + ")";

  connection.query(query, function(err){
    if(err)
      console.log(err)
    else
      console.log('Clase insertada')
  });

  res.redirect('/clases');
})


router.get('/', function(req, res, next) {

  var clases = [];

  connection.query('SELECT c.clase_id as clase_id, c.dia as dia, c.hora as hora, i.nombre as instructor_nombre FROM  instructor i,  clase c WHERE  i.instructor_id = c.instructor_id ', function(err, rows, fields) {
    console.log("llamada clase");
    if(!err) {      

     for (var r of rows) {
        var clase = {
          id: 0,
          dia: "",
          hora: "",
          instructor_nombre: ""
        }
        clase.id = r.clase_id;
        clase.dia = r.dia;
        clase.hora = r.hora;
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

router.get('/infoClase:id', function(req, res, nex) {
  console.log('llamada infoClase');
  let id =req.path.replace('/infoClase','');

  var query = "SELECT  c.clase_id as clase_id, c.dia as dia, c.hora as hora, i.nombre as instructor_nombre FROM  instructor i,  clase c WHERE  i.instructor_id = c.instructor_id AND c.clase_id = " + id;

  // var query2 = "SELECT a.alumno_id as alumno_id, a.nombre as alumno_nombre, a.correo as alumno_correo, a.telefono as alumno_telefono  FROM  alumno a, clase_alumno c where a.alumno_id = c.alumno_id and c.clase_id = " + id;

   var data = {
     clase_id: 0,
     dia: "",
     hora: "",
     instructor: ""
   };

  connection.query(query, function(err, rows, fields) {
    if(!err) {      

    for (var r of rows) {
      data.clase_id = r.clase_id;
        data.dia = r.dia;
        data.hora = r.hora;
       data.instructor= r.instructor_nombre;

     }
    }
   else {
     console.log('Error while performind Query');
    }
    res.json(data);
  });

});

router.post('/addAlumnotoClase', function(req, res, next){
  var clase ={
    dia: "",
    hora: "",
    instructor_id: ""
  }
  clase.dia = req.body.dia;
  clase.hora = req.body.hora;
  clase.instructor_id = req.body.instructor_id;

  var query = 'insert into clase(dia, hora, instructor_id) values(';

  query += "'" + clase.dia + "', '" + clase.hora + "'," + clase.instructor_id  + ")";

  connection.query(query, function(err){
    if(err)
      console.log(err)
    else
      console.log('Clase insertada')
  });

  res.redirect('/clases');
});


router.get('/ClasesDeAlumno:id', function(req, res, nex) {
  console.log('llamada infoClase');
  let id =req.path.replace('/ClasesDeAlumno','');

  var query = "SELECT   c.dia as dia, c.hora as hora, i.nombre as instructor_nombre FROM  instructor i,  clase c, clase_alumno ca WHERE  i.instructor_id = c.instructor_id AND c.clase_id = ca.clase_id AND ca.alumno_id = " + id;

  // var query2 = "SELECT a.alumno_id as alumno_id, a.nombre as alumno_nombre, a.correo as alumno_correo, a.telefono as alumno_telefono  FROM  alumno a, clase_alumno c where a.alumno_id = c.alumno_id and c.clase_id = " + id;

   var clases = [];

  connection.query(query, function(err, rows, fields) {
    if(!err) {      

    for (var r of rows) {
      var clase = {
        dia: 0,
        hora: "",
        instructor: ""
      };
      clase.dia = r.dia;
      clase.hora = r.hora;
      clase.instructor= r.instructor_nombre;
      clases.push(clase);
     }
    }
   else {
     console.log(err);
    }
    res.json(clases);
  });

});

module.exports = router;
