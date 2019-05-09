CREATE TABLE alumno (
    alumno_id INT NOT NULL auto_increment PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    correo VARCHAR(30) NOT NULL,
    estatura NUMERIC(10,2) NOT NULL,
    peso NUMERIC(10,2) NOT NULL,
    seguro VARCHAR(30) NOT NULL,
    tipo_sangre VARCHAR(10) NOT NULL,
    alergias VARCHAR(100) NOT NULL,
    otro_padecimiento VARCHAR(100) NOT NULL
);

CREATE TABLE pago_alumno (
    pago_alumno_id INT NOT NULL  PRIMARY KEY auto_increment,
    alumno_id INT NOT NULL REFERENCES alumno(alumno_id),
    fecha DATE NOT NULL,
    monto NUMERIC(10,2) NOT NULL
);

CREATE TABLE instructor (
    instructor_id INT NOT NULL  PRIMARY KEY auto_increment,
    nombre VARCHAR(50) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    correo VARCHAR(30) NOT NULL,
    clabe VARCHAR(30) NOT NULL
);

INSERT INTO instructor (nombre, telefono, correo, clabe) VALUES ('Alan Gei', '7-00-00-00', 'alan@mail.com', 'abdhfadhlshfljsah');

CREATE TABLE pago_instructor (
    pago_instructor_id INT NOT NULL  PRIMARY KEY auto_increment,
    instructor_id INT NOT NULL REFERENCES instructor(instructor_id),
    fecha DATE NOT NULL,
    monto NUMERIC(10,2) NOT NULL
);

CREATE TABLE clase (
    clase_id INT NOT NULL auto_increment PRIMARY KEY,
    dia VARCHAR(30) NOT NULL,
    hora TIME NOT NULL,
    instructor_id INT NOT NULL REFERENCES instructor(instructor_id)
);

CREATE TABLE clase_alumno (
    clase_id INT NOT NULL REFERENCES clase(clase_id),
    alumno_id INT NOT NULL REFERENCES alumno(alumno_id),
    PRIMARY KEY (clase_id, alumno_id)
);