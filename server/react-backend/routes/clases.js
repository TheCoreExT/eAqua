
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


  connection.query('SELECT c.dia as dia, c.hora as hora, i.nombre as instructor_nombre FROM  instructor i,  clase c WHERE  i.instructor_id = c.instructor_id ', function(err, rows, fields) {

    console.log("llamada clase");

    if(!err) {      

     for (var r of rows) {
        var clase = {
          dia: "",
          hora: "",
          instructor_nombre: ""
        }

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


module.exports = router;
