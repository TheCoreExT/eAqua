
// Asi se corre el servidor de express
// PORT=3001 node bin/www
//set PORT=3001 && node bin/www
var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: '157.230.165.99',
  port: 3001,
  user: 'jolans',
  password: '1234',
  database: 'eaqua'
})

connection.connect();

// POST methods -----
router.post('/', function(req, res, next){
  var clase ={
    dia: "",
    hora_inicial: "",
    hora_final: "",
    instructor_id: ""
  }
  clase.dia = req.body.dia;
  clase.hora_inicial = req.body.hora_inicial;
  clase.hora_final = req.body.hora_final;
  clase.instructor_id = req.body.instructor_id;

  var query = 'insert into clase(dia, hora_inicial, hora_final, instructor_id) values(';
  query += "'"+clase.dia+"','"+clase.hora_inicial+"','"+clase.hora_final +"'," + clase.instructor_id  + ")";

  connection.query(query, function(err){
    if(err)
      console.log(err)
  });

  res.redirect('/clases');
})

router.post('/eliminarClase', function(req, res, next){

  var clase_id = req.body.clase_id;

  var query = "DELETE FROM clase WHERE clase_id=" + clase_id;
  connection.query(query, function(err) {
    if(err)
      console.log(err)
  });
    res.redirect('/clases');
    

});

router.post('/editClase:id', function(req, res, next){
  var id = req.path.replace('/editClase','');

  var clase ={
    dia: "",
    hora_inicial: "",
    hora_final: "",
    instructor_id: ""
  }
  clase.dia = req.body.dia;
  clase.hora_inicial = req.body.hora_inicial;
  clase.hora_final = req.body.hora_final;
  clase.instructor_id = req.body.instructor_id;

  var query = "update clase set dia='"+clase.dia+"', hora_inicial='"+clase.hora_inicial+"', hora_final='"+clase.hora_final+"',instructor_id="+clase.instructor_id+" where clase_id = "+ id;

  connection.query(query, function(err){
    if(err)
      console.log(err)
  });

  res.redirect('/clases');
})

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
  });

  res.redirect('/clases');
});

// GET methods ------------
router.get('/', function(req, res, next) {

  var clases = [];

  connection.query('SELECT c.clase_id as clase_id, c.dia as dia, c.hora_inicial as hora_inicial, c.hora_final as hora_final, i.nombre as instructor_nombre FROM  instructor i,  clase c WHERE  i.instructor_id = c.instructor_id ', function(err, rows, fields) {
    if(!err) {      

     for (var r of rows) {
        var clase = {
          id: 0,
          dia: "",
          hora_final: "",
          hora_inicial: "",
          instructor_nombre: ""
        }
        clase.id = r.clase_id;
        clase.dia = r.dia;
        clase.hora_inicial = r.hora_inicial;
        clase.hora_final = r.hora_final;
        clase.instructor_nombre = r.instructor_nombre;
        clases.push(clase);
     }
    }

    res.json(clases);
  });

});

router.get('/infoClase:id', function(req, res, nex) {

  let id =req.path.replace('/infoClase','');

  var query = "SELECT  c.clase_id as clase_id, c.dia as dia, c.hora_inicial as hora_inicial, c.hora_final as hora_final,  i.nombre as instructor_nombre FROM  instructor i,  clase c WHERE  i.instructor_id = c.instructor_id AND c.clase_id = " + id;

   var data = {
     clase_id: 0,
     dia: "",
     hora_inicial: "",
     hora_final: "",
     instructor: ""
   };

  connection.query(query, function(err, rows, fields) {
    if(!err) {      

    for (var r of rows) {
      data.clase_id = r.clase_id;
        data.dia = r.dia;
        data.hora_inicial = r.hora_inicial;
        data.hora_final = r.hora_final;
       data.instructor= r.instructor_nombre;

     }
    }
    res.json(data);
  });

});

router.get('/ClasesDeAlumno:id', function(req, res, nex) {
  let id =req.path.replace('/ClasesDeAlumno','');

  var query = "SELECT   c.dia as dia, c.hora_inicial as hora_inicial, c.hora_final as hora_final, i.nombre as instructor_nombre FROM  instructor i,  clase c, clase_alumno ca WHERE  i.instructor_id = c.instructor_id AND c.clase_id = ca.clase_id AND ca.alumno_id = " + id;

   var clases = [];

  connection.query(query, function(err, rows, fields) {
    if(!err) {      

    
    for (var r of rows) {
      var clase = {
        dia: 0,
        hora_final: "",
        hora_inicial: "",
        instructor: ""
      };
      clase.dia = r.dia;
      clase.hora_inicial = r.hora_inicial;
      clase.hora_final = r.hora_final;
      clase.instructor= r.instructor_nombre;
      clases.push(clase);
     }
    }
    res.json(clases);
  });

});

module.exports = router;
