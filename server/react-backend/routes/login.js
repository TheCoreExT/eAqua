var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'jolans',
  password: '1234',
  database: 'eaqua'
})


var logged = false;  

// ----------------------- LOGIN

router.post('/', function(req, res) {
  
  var username = req.body.username;
  var password = req.body.password;


  connection.query('SELECT * from admin WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
    if(error){
      console.log(error);
    }
    else{
		if (results.length > 0){
          logged = true;
				  res.redirect('http://165.22.140.214:3000/home');
      }
      else{
        res.redirect('http://165.22.140.214:3000/');
      }
  
    }
  });
});

router.post('/logout', function(req, res) {

      logged = false;
    	res.redirect('http://165.22.140.214:3000/');
          
});

// -------------------------------------------------------------------------- ALUMNOS

// Post methods --------------

router.post('/alumnos', function(req, res, next) {
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

  res.redirect('/alumnos');
});

router.post('/eliminarAlumno', function(req, res, next){

  var alumno_id = req.body.alumno_id;

  var query = "DELETE FROM alumno WHERE alumno_id=" + alumno_id;
  connection.query(query, function(err) {
    if(err)
      console.log(err)
  });
    res.redirect('http://165.22.140.214:3000/alumnos');
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

  res.redirect('http://165.22.140.214:3000/alumnos');
});

router.post('/AddAlumno2Clase:id', function(req, res, next){
  var clase_id = req.path.replace('/AddAlumno2Clase', '');
  var alumno_id = req.body.params;

  var query = "insert into clase_alumno values(" + clase_id +", " + alumno_id+")";
  connection.query(query, function(err) {
    if(err)
      console.log(err)
  });
    res.redirect('http://165.22.140.214:3000/clases/' + clase_id);
});

router.post('/eliminarAlumnoFromClase:id', function(req, res, next){
  var clase_id = req.path.replace('/eliminarAlumnoFromClase', '');
  var alumno_id = req.body.alumno_id;

  var query = "delete from clase_alumno where alumno_id = " + alumno_id + " and clase_id =" + clase_id;
  connection.query(query, function(err) {
    if(err)
      console.log(err)
  });
    res.redirect('http://165.22.140.214:3000/clases/'+clase_id );
});

router.post('/alumnosAddPago:id', function(req, res, next){
  var id =  req.path.replace('/alumnosAddPago', '');

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

  res.redirect('http://165.22.140.214:3000/pagosAlumno/'+id);
})

// Get methods --------------

router.get('/alumnos', function(req, res, next) {
  var alumnos = [];
  if(logged){
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
    res.json(alumnos);
});

router.get('/infoAlumno:id',  function(req, res, nex) {
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
  if(logged){
    connection.query(query, function(err, rows, fields) {

      if(!err) {      
      for (var r of rows) {
          n = r.n;
       }
      }
      res.json(n);
    });
  }
  else
    res.json(n);
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

router.get('/alumnosPagos:id',  function(req, res, nex){
  let id = req.path.replace('/alumnosPagos', '');

  var query = "select pago_alumno_id, DATE_FORMAT(fecha, \"%W %d-%M-%Y\") as fecha, monto  from pago_alumno where alumno_id = "+ id +" ORDER BY fecha DESC";

  var pagos = [];

  if(logged){
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
  }
  else{
    res.json(pagos);
  }
  
});

// -------------------------------------------------------------------------- INSTRUCTORES


router.post('/editarInstructor', function(req, res, next){

  var instructor_id = req.body.instructor_id;

  var query = "DELETE FROM instructor WHERE instructor_id=" + instructor_id;
  connection.query(query, function(err) {
    console.log(query);

    if(err)
      console.log(err)
  });
    res.redirect('http://165.22.140.214:3000/instructores');
});

router.post('/eliminarInstructor', function(req, res, next){

  var instructor_id = req.body.instructor_id;

  var query = "DELETE FROM instructor WHERE instructor_id=" + instructor_id;
  connection.query(query, function(err) {


    if(err)
      console.log(err)
    else
      console.log("Instructor eliminado")
  });
    res.redirect('http://165.22.140.214:3000/instructores');
});

router.post('/instructores', function(req, res, next){
  var instructor ={
    nombre: "",
    telefono: "",
    correo: "",
    clabe: ""
  }
  if(logged){
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
  }

  res.redirect('http://165.22.140.214:3000/instructores');
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

  res.redirect('http://165.22.140.214:3000/instructores');
})

router.post('/instructoresAddPago:id', function(req, res, next){
  let id = req.path.replace('/instructoresAddPago', '');

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

  res.redirect('http://165.22.140.214:3000/pagosInstructor/'+id);
})

// GET methods -------

router.get('/instructores', function(req, res, next) {
  // console.log("req de instructores" + req.session.username);
  
  var instructorArray = [];
if(logged){
  
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
}
else  
  res.json(instructorArray);
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

router.get('/instructorPagos:id', function(req, res, nex){
  let id = req.path.replace('/instructorPagos', '');

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