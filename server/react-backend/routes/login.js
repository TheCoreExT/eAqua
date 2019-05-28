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

  request.session.username = '';
  request.session.password = '';

  connection.query('SELECT * from admin WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
    if(error){
      console.log(error);
    }
    else{
		if (results.length > 0){
			for (var r of results){
				request.session.username = r.username;
				request.session.password = r.password;
				if(r.username && r.password)
				  response.redirect('http://165.22.140.214:3000/home');
		}
		}else{

			response.redirect('http://165.22.140.214:3000/');  
		}
		console.log("login de routes:" + request.session.username);
    }
  });
});

router.post('/logout', function(request, response) {
		delete request.session.username;
		delete request.session.password;

    	response.redirect('http://165.22.140.214:3000/');
          
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