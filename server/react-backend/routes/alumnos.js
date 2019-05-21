
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

router.get('/infoAlumno:id', function(req, res, nex) {
  console.log('llamada infoAlumno');
  let id =req.path.replace('/infoAlumno','');

  var query = "SELECT * FROM alumno WHERE alumno_id = " + id;



   var data = {
     nombre: "",
     nua: 0,
     telefono: "",
     correo: "",
     edad: 0,
     estatura: 0,
     peso: 0,
     seguro: "",
     tipo_sangre: "",
     alergias: "",
     otro_padecimiento: ""

   };

  connection.query(query, function(err, rows, fields) {
    if(!err) {      
    for (var r of rows) {
        data.nombre = r.nombre;
        data.nua = r.alumno_id;
        data.telefono = r.telefono;
        data.correo = r.correo;
        data.edad = r.edad;
        data.estatura = r.estatura;
        data.peso = r.peso;
        data.seguro = r.seguro;
        data.tipo_sangre = r.tipo_sangre;
        data.alergias = r.alergias;
        data.otro_padecimiento = r.otro_padecimiento;
     }
    }
   else {
     console.log('Error while performind Query');
    }

    res.json(data);
  });
  
  
});

router.get('/Nalumnos:id', function(req, res, nex) {
  console.log("Llamada Nalumnos")
  let id =req.path.replace('/Nalumnos','');

  var query = "SELECT COUNT(alumno_id) as n FROM clase_alumno WHERE clase_id = " + id;



   var n = "";

  connection.query(query, function(err, rows, fields) {

    if(!err) {      
    for (var r of rows) {
        n = r.n;
     }
    }
   else {
     console.log('Error while performind Query');
    }

    res.json(n);
  });
  
  
});

router.get('/AlumnosClase:id', function(req, res, nex) {
  console.log("Llamada AlumnosClase")
  let id =req.path.replace('/AlumnosClase','');

  var query = "SELECT a.alumno_id as alumno_id, a.nombre as nombre, a.correo as correo, a.telefono as telefono FROM clase_alumno c, alumno a WHERE a.alumno_id = c.alumno_id and clase_id = " + id;



  var alumnos_clase = [];

  connection.query(query, function(err, rows, fields) {

    if(!err) {      
    for (var r of rows) {
      var alumno = {
        alumno_id: "",
        nombre: "",
        correo: "",
        telefono:""
       };

        alumno.alumno_id = r.alumno_id;
        alumno.nombre = r.nombre;
        alumno.correo = r.correo;
        alumno.telefono = r.telefono;
        alumnos_clase.push(alumno);
     }
    }
   else {
     console.log('Error while performind Query');
    }

    res.json(alumnos_clase);
  });
  
  
});


router.post('/AddAlumno2Clase:id', function(req, res, next){

  var clase_id = req.path.replace('/AddAlumno2Clase', '');
  var alumno_id = req.body.params;
  console.log("llamada AddAlumno2Clase");

  var query = "insert into clase_alumno values(" + clase_id +", " + alumno_id+")";
  connection.query(query, function(err) {

    if(err)
      console.log(err)
    else{

    }
    
  });
    res.redirect('/clases/' + clase_id);
    // res.send("eliminar alumnos");
});

router.post('/eliminarAlumnoFromClase:id', function(req, res, next){

  var clase_id = req.path.replace('/eliminarAlumnoFromClase', '');
  var alumno_id = req.body.alumno_id;

  console.log("llamada eliminarAlumnoFromClase");

  var query = "delete from clase_alumno where alumno_id = " + alumno_id + " and clase_id =" + clase_id;
  connection.query(query, function(err) {
    console.log(query);
    if(err)
      console.log(err)
    else{

    }
    
  });
    res.redirect('/clases/'+clase_id );
    // res.send("eliminar alumnos");
});

module.exports = router;
