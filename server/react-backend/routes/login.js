var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'jolans',
  password: '1234',
  database: 'eaqua'
})

connection.connect();

router.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());
  

router.post('/', function(request, response) {
  
  var username = request.body.username;
  var password = request.body.password;


  connection.query('SELECT * from admin WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
    if(error){
      console.log(error);
    }
    else{
		if (results.length > 0){
			for (var r of results){
        if(r.username && r.password)
          request.session.loggedin = true;
				  response.redirect('http://165.22.140.214:3000/home');
		}
		}else{

			response.redirect('http://165.22.140.214:3000/');  
		}
    }
  });
});

router.post('/logout', function(request, response) {

    	response.redirect('http://165.22.140.214:3000/');
          
});


router.get('/alumnos', function(req, res, next) {

  var alumnos = [];
  if(req.session.loggedin){
    connection.query('SELECT * FROM alumno', function(err, rows, fields) {
    
      if(!err) {      
  
       for (var r of rows) {
        var alumno = {
          id: 0,
          nombre : "",
          edad : "", 
          telefono: "",
          genero: "",
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
        alumno.edad = r.edad;
        alumno.telefono = r.telefono;
        alumno.genero = r.genero;
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
  }
  else  
    res.end();
});

  
// router.get('/', function(request, response) {
//     var query = "select logged from admin where 
//   	if (request.session.loggedin) {
//           loggedin = true;
//   		response.json(loggedin);
//   	} else {
//   		response.json(loggedin);
//   	}
//   	response.end();
//   });

// router.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));



// router.post('/', function(request, response) {
// 	var username = request.body.username;
//     var password = request.body.password;
    
// 	if (username && password) {
// 		connection.query('SELECT * FROM admin WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
// 			if (results.length > 0) {
// 				request.session.loggedin = true;
// 				request.session.username = username;
// 				response.redirect('http://165.22.140.214:3000/');
// 			} else {
// 				response.send();
// 				response.redirect('http://165.22.140.214:3000/');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.end();
// 	}
// });

// router.post('/logout', function(request, response) {
	
// 	request.session.loggedin = false;
// 	request.session.username = "";
// 	response.redirect('http://165.22.140.214:3000/');
			
// });


// router.get('/', function(request, response) {
//     var log = {loggedin: false};
// 	if (request.session.loggedin === true) {
//         log.loggedin = true;
// 		response.json(log);
// 		response.redirect('/');
		
// 	} else {
// 		// log.loggedin = true;
// 		// response.json(log);
// 		response.redirect('/login');
// 	}
// 	//response.end();
// });

module.exports = router;