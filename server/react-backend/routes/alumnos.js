
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

router.post('/eliminarAlumno', function(req, res, next){

  var alumno_id = req.body.alumno_id;

  var query = "DELETE FROM alumno WHERE alumno_id=" + alumno_id;
  connection.query(query, function(err) {
    console.log(query);

    if(err)
      console.log(err)
    else
      console.log("Alumno eliminado")
  });
    res.redirect('/alumnos');
    // res.send("eliminar alumnos");
});


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


  var query = 'INSERT INTO alumno(nombre, password, telefono, correo, estatura, peso, seguro, tipo_sangre, alergias, otro_padecimiento) VALUES (';
  query += "'" + alumno.nombre + "'," + "' ','" + alumno.telefono + "','" + alumno.correo + "'," + alumno.estatura + "," + alumno.peso + ",'" + alumno.seguro + "','" + alumno.tipo_sangre + "','" + alumno.alergias + "','"+ alumno.otro_padecimiento + "');"


  connection.query(query, function(err) {

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

        alumno.id = r.alumno_id;
        alumno.nombre = r.nombre;
        alumno.password = r.password; // Cambiar cuando se haga el login
        alumno.telefono = r.telefono;
        alumno.correo = r.correo;
        alumno.estatura = r.estatura;
        alumno.peso = r.peso;
        alumno.seguro = r.seguro;
        alumno.tipo_sangre = r.tipo_sangre;
        alumno.alergias = r.alergias;
        alumno.otro_padecimiento = r.otro_padecimiento;
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
