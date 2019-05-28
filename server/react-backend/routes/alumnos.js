
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

// Post methods --------------

router.post('/', function(req, res, next) {
  var alumno = {
    nombre : "",
    edad : " ", // Solo cuando haya login habra una contrasena
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
  alumno.nombre = req.body.nombre;
  alumno.edad = req.body.edad;
  alumno.telefono = req.body.telefono;
  alumno.genero = req.body.genero;
  alumno.correo = req.body.correo;
  alumno.estatura = req.body.estatura;
  alumno.peso = req.body.peso;
  alumno.seguro = req.body.seguro;
  alumno.tipo_sangre = req.body.tipo_sangre;
  alumno.alergias = req.body.alergias;
  alumno.otro_padecimiento = req.body.otro_padecimiento;
  //res.send('Alumno creado: "' + req.body.nombre + '".');

  var values = "(nombre, edad, telefono, genero, correo, estatura, peso, seguro, tipo_sangre, alergias, otro_padecimiento)"
  var query = "insert into alumno"+values+"values('"+alumno.nombre+"',"+alumno.edad+",'"+alumno.telefono+"','"+alumno.genero+"','"+alumno.correo+"',"+alumno.estatura+","+alumno.peso+",'"+alumno.seguro+"','"+alumno.tipo_sangre+"','"+alumno.alergias+"','"+alumno.otro_padecimiento+"')"

  connection.query(query, function(err) {

    if (err)
      console.log(err)
  });

  res.redirect('https://eaqua.netlify.com/alumnos');
});

router.post('/eliminarAlumno', function(req, res, next){

  var alumno_id = req.body.alumno_id;

  var query = "DELETE FROM alumno WHERE alumno_id=" + alumno_id;
  connection.query(query, function(err) {
    if(err)
      console.log(err)
  });
    res.redirect('https://eaqua.netlify.com/alumnos');
});

router.post('/editAlumno:id', function(req, res, next) {
  var alumno_id = req.path.replace('/editAlumno', '');
  var alumno = {
    nombre : "",
    edad : " ", // Solo cuando haya login habra una contrasena
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
  alumno.nombre = req.body.nombre;
  alumno.edad = req.body.edad;
  alumno.telefono = req.body.telefono;
  alumno.genero = req.body.genero;
  alumno.correo = req.body.correo;
  alumno.estatura = req.body.estatura;
  alumno.peso = req.body.peso;
  alumno.seguro = req.body.seguro;
  alumno.tipo_sangre = req.body.tipo_sangre;
  alumno.alergias = req.body.alergias;
  alumno.otro_padecimiento = req.body.otro_padecimiento;
  //res.send('Alumno creado: "' + req.body.nombre + '".');


  var query = "update alumno set nombre='"+alumno.nombre+"',edad="+alumno.edad+",telefono='"+alumno.telefono+"', genero='"+alumno.genero+"',correo='"+alumno.correo+"',estatura="+alumno.estatura+",peso="+alumno.peso+",seguro='"+alumno.seguro+"',tipo_sangre='"+alumno.tipo_sangre+"',alergias='"+alumno.alergias+"',otro_padecimiento='"+alumno.otro_padecimiento+"' where alumno_id="+alumno_id;

  connection.query(query, function(err) {

    if (err)
      console.log(err)
  });

  res.redirect('https://eaqua.netlify.com/alumnos');
});

router.post('/AddAlumno2Clase:id', function(req, res, next){
  var clase_id = req.path.replace('/AddAlumno2Clase', '');
  var alumno_id = req.body.params;

  var query = "insert into clase_alumno values(" + clase_id +", " + alumno_id+")";
  connection.query(query, function(err) {
    if(err)
      console.log(err)
  });
    res.redirect('https://eaqua.netlify.com/clases/' + clase_id);
});

router.post('/eliminarAlumnoFromClase:id', function(req, res, next){
  var clase_id = req.path.replace('/eliminarAlumnoFromClase', '');
  var alumno_id = req.body.alumno_id;

  var query = "delete from clase_alumno where alumno_id = " + alumno_id + " and clase_id =" + clase_id;
  connection.query(query, function(err) {
    if(err)
      console.log(err)
  });
    res.redirect('https://eaqua.netlify.com/clases/'+clase_id );
});

router.post('/addPago:id', function(req, res, next){
  var id =  req.path.replace('/addPago', '');

  var pago ={
    fecha: "",
    monto: ""
  }

  pago.fecha = req.body.fecha;
  pago.monto = req.body.monto;

  var query = 'insert into pago_alumno(alumno_id, fecha, monto) values(';

  query += id + ", '" + pago.fecha + "', '" + pago.monto + "')";

  connection.query(query, function(err){
    if(err)
      console.log(err)
  });

  res.redirect('https://eaqua.netlify.com/pagosAlumno/'+id);
})

// Get methods --------------

router.get('/', function(req, res, next) {

  var alumnos = [];

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
});

router.get('/infoAlumno:id', function(req, res, nex) {
  let id =req.path.replace('/infoAlumno','');

  var query = "SELECT * FROM alumno WHERE alumno_id = " + id;

  var data = {
    nua: 0,
    nombre : "",
    edad : "", // Solo cuando haya login habra una contrasena
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

  connection.query(query, function(err, rows, fields) {
    if(!err) {      
    for (var r of rows) {
        data.nua = r.alumno_id;
        data.nombre = r.nombre;
        data.edad = r.edad;
        data.telefono = r.telefono;
        data.genero = r.genero;
        data.correo = r.correo;
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
  let id =req.path.replace('/Nalumnos','');

  var query =
    "SELECT COUNT(alumno_id) as n FROM clase_alumno WHERE clase_id = " + id;
  var n = "";

  connection.query(query, function(err, rows, fields) {

    if(!err) {      
    for (var r of rows) {
        n = r.n;
     }
    }
    res.json(n);
  });
  
  
});

router.get('/AlumnosClase:id', function(req, res, nex) {

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
    res.json(alumnos_clase);
  });
  
  
});

router.get('/pagos:id', function(req, res, nex){
  let id = req.path.replace('/pagos', '');

  var query = "select pago_alumno_id, DATE_FORMAT(fecha, \"%W %d-%M-%Y\") as fecha, monto  from pago_alumno where alumno_id = "+ id +" ORDER BY fecha DESC";

  var pagos = [];

  connection.query(query, function(err, rows, fields) {
    if(!err) {      
      for (var r of rows) {
        
        var pago = {
          pago_id: 0,
          fecha: "",
          monto: ""
        }

        pago.pago_id = r.pago_alumno_id;
        pago.fecha = r.fecha;
        pago.monto = r.monto;
        pagos.push(pago);
      }
    }
    res.json(pagos);
  });
  
});

module.exports = router;
