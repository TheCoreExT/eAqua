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

router.get('/', function(req, res, next) {

    var pagos = [];

    
  
    connection.query(' SELECT a.nombre as nombre, p.pago_alumno_id as pago_id, DATE_FORMAT(p.fecha, "%W %d-%M-%Y") as fecha, p.monto as monto FROM alumno a, pago_alumno p where p.alumno_id = a.alumno_id ORDER BY p.fecha DESC', function(err, rows, fields) {
      if(!err) {      
  
       for (var r of rows) {
        var pago = {
          pago_id: 0,
          nombre: "",
          fecha: "",
          monto: ""
        }
        
        pago.pago_id = r.pago_id;
        pago.nombre = r.nombre;
        pago.fecha = r.fecha;
        pago.monto = r.monto;
    
        pagos.push(pago);
       }
      }
      else {
        console.log('Error while performind Query');
      }
  
      res.json(pagos);
    });
  });
  

module.exports = router;