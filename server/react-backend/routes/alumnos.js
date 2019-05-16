
// Asi se corre el servidor de express
// PORT=3001 node bin/www
//set PORT=3001 && node bin/www
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'jolans',
  password: '1234',
  database: 'eaqua'
})

connection.connect();



router.post('/', function(req, res, next) {
  var alumno = {
    nombre : "",
    password : " ", // Solo cuando haya login habra una contrasena
    telefono: "",
    correo: "",
    estatura: 0,
    peso: 0,
    seguro: "",
    tipo_sangre: "",
    alergias: "",
    otro_padecimiento: ""
  }
  alumno.nombre = req.body.nombre;
  alumno.telefono = req.body.telefono;
  alumno.correo = req.body.correo;
  alumno.estatura = req.body.estatura;
  alumno.peso = req.body.peso;
  alumno.seguro = req.body.seguro;
  alumno.tipo_sangre = req.body.tipo_sangre;
  alumno.otro_padecimiento = req.body.otro_padecimiento;
  //res.send('Alumno creado: "' + req.body.nombre + '".');
  console.log(alumno.nombre);

  var query = 'INSERT INTO alumno(nombre, password, telefono, correo, estatura, peso, seguro, tipo_sangre, alergias, otro_padecimiento) VALUES (';
  query += "'" + alumno.nombre + "'," + "' ','" + alumno.telefono + "','" + alumno.correo + "'," + alumno.estatura + "," + alumno.peso + ",'" + alumno.seguro + "','" + alumno.tipo_sangre + "','" + alumno.alergias + "','"+ alumno.otro_padecimiento + "');"
  console.log("query: " + query);
  connection.query(query, function(err) {
    console.log('Insertando nuevo alumno...')
    if (err)
      console.log(err)
    else
      console.log('Alumno insertado')
  });

  res.redirect('/alumnos');
});

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
