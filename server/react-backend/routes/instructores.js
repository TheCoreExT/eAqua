
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


/* GET users listing. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD:server/react-backend/routes/users.js
=======

  
>>>>>>> 39091e91ce2eada8df3b2d843068fc78250307df:server/react-backend/routes/instructores.js
  var instructorArray = [];

  connection.query('SELECT * FROM instructor', function(err, rows, fields) {
<<<<<<< HEAD:server/react-backend/routes/users.js
=======
    // console.log(rows);
    console.log("llamada instructores");
    counter = counter + 1;
>>>>>>> 39091e91ce2eada8df3b2d843068fc78250307df:server/react-backend/routes/instructores.js
    if(!err) {      
     for (var r of rows) {
        var instructor = {
          id: 0,
          nombre: "",
          telefono: "",
          correo: "",
          clabe: ""
        }
        // console.log("r.nombre" + r.nombre);
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
    // console.log("Array: " + instructorArray[0].nombre);
    res.json(instructorArray);
  });
});



module.exports = router;
