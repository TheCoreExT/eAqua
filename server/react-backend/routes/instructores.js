// Asi se corre el servidor de express
// PORT=3001 node bin/www
//set PORT=3001 && node bin/www
var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'http://157.230.165.99',
  user: 'jolans',
  password: '1234',
  database: 'eaqua'
})

connection.connect();
// POST methods ------

router.post('/editarInstructor', function(req, res, next){

  var instructor_id = req.body.instructor_id;

  var query = "DELETE FROM instructor WHERE instructor_id=" + instructor_id;
  connection.query(query, function(err) {
    console.log(query);

    if(err)
      console.log(err)
  });
    res.redirect('/instructores');
});

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
  });

  res.redirect('/instructores');
})

router.post('/editInstructor:id', function(req, res, next){
  let id = req.path.replace('/editInstructor', '');

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

  var query = "update instructor set nombre='"+instructor.nombre+"',telefono='"+instructor.telefono+"',correo='"+instructor.correo+"',clabe='"+instructor.clabe+"' where instructor_id = "+id;

  connection.query(query, function(err){
    if(err)
      console.log(err)
  });

  res.redirect('/instructores');
})

router.post('/addPago:id', function(req, res, next){
  let id = req.path.replace('/addPago', '');

  var pago ={
    fecha: "",
    monto: ""
  }

  pago.fecha = req.body.fecha;
  pago.monto = req.body.monto;

  var query = 'insert into pago_instructor(instructor_id, fecha, monto) values(';

  query += id + ", '" + pago.fecha + "', '" + pago.monto + "')";

  connection.query(query, function(err){
    if(err)
      console.log(err)
  });

  res.redirect('/pagosInstructor/'+id);
})

// GET methods -------

router.get('/', function(req, res, next) {

  
  var instructorArray = [];

  connection.query('SELECT * FROM instructor', function(err, rows, fields) {

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
    res.json(instructorArray);
  });
});

router.get('/infoInstructor:id', function(req, res, nex){

  let id = req.path.replace('/infoInstructor', '');

  var query = "select * from instructor where instructor_id = "+ id;

  var data = {
    instructor_id: 0,
    nombre: "",
    telefono: "",
    correo: "",
    clabe:  ""
  }

  connection.query(query, function(err, rows, fields) {
    if(!err) {      
      for (var r of rows) {
        data.instructor_id = r.instructor_id;
        data.nombre = r.nombre;
        data.telefono = r.telefono;
        data.correo = r.correo;
        data.clabe = r.clabe;
      }
    }

    res.json(data);
  });
  
});

router.get('/clasesInstructor:id', function(req, res, nex){

  let id = req.path.replace('/clasesInstructor', '');

  var query = "select * from clase where instructor_id = "+ id;

  var clases = [];

  connection.query(query, function(err, rows, fields) {
    if(!err) {      
      for (var r of rows) {
        var dato = {
          clase_id: 0,
          dia: "",
          hora_inicial: "",
          hora_final: ""
        }

        dato.clase_id = r.clase_id;
        dato.dia = r.dia;
        dato.hora_inicial = r.hora_inicial;
        dato.hora_final = r.hora_final;
 
        clases.push(dato);
      }
    }

    res.json(clases);
  });
  
});

router.get('/pagos:id', function(req, res, nex){
  let id = req.path.replace('/pagos', '');

  var query = "select pago_instructor_id, DATE_FORMAT(fecha, \"%W %d-%M-%Y\") as fecha, monto from pago_instructor where instructor_id = "+ id + " ORDER BY fecha DESC";

  var pagos = [];

  connection.query(query, function(err, rows, fields) {
    if(!err) {      
      for (var r of rows) {
        var pago = {
          pago_id: 0,
          fecha: "",
          monto: ""
        }

        pago.pago_id = r.pago_instructor_id;
        pago.fecha = r.fecha;
        pago.monto = r.monto;
        pagos.push(pago);
      }
    }
    res.json(pagos);
  });
  
});


module.exports = router;
