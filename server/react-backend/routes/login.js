var express = require('express');
var router = express.Router();
var mysql = require('mysql')
// var session = require('express-session');
// var bodyParser = require('body-parser');
// var path = require('path');

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
    
	if (username && password) {
		connection.query('SELECT * FROM admin WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/');
			} else {
				response.send();
				response.redirect('/');
			}			
			response.end();
		});
	} else {
		response.end();
	}
});

router.post('/logout', function(request, response) {
	
	request.session.loggedin = false;
	request.session.username = "";
	response.redirect('/');
			
});


router.get('/', function(request, response) {
    var loggedin = false;
	if (request.session.loggedin) {
        loggedin = true;
		response.json(loggedin);
	} else {
		response.json(loggedin);
	}
	response.end();
});

module.exports = router;