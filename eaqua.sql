DROP DATABASE IF EXISTS eaqua;
CREATE DATABASE eaqua;
USE eaqua;

CREATE TABLE alumno (
    alumno_id INT NOT NULL auto_increment PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    -- password VARCHAR(100) NOT NULL,
    edad INT NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    genero VARCHAR(20) NOT NULL,
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
    alumno_id INT NOT NULL REFERENCES alumno(alumno_id)  on delete cascade,
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

-- INSERT INTO instructor (nombre, telefono, correo, clabe) VALUES ('Alan Gei', '7-00-00-00', 'alan@mail.com', 'abdhfadhlshfljsah');
-- INSERT INTO instructor (nombre, telefono, correo, clabe) VALUES ('Diego Gei', '7-00-00-00', 'diego@mail.com', 'abdhfadhlshfljsah');
-- INSERT INTO instructor (nombre, telefono, correo, clabe) VALUES ('Jonathan Gei', '7-00-00-00', 'jonathan@mail.com', 'abdhfadhlshfljsah');



CREATE TABLE pago_instructor (
    pago_instructor_id INT NOT NULL  PRIMARY KEY auto_increment,
    instructor_id INT NOT NULL REFERENCES instructor(instructor_id) on delete cascade,
    fecha DATE NOT NULL,
    monto NUMERIC(10,2) NOT NULL
);

CREATE TABLE clase (
    clase_id INT NOT NULL auto_increment PRIMARY KEY,
    dia VARCHAR(30) NOT NULL,
    hora_inicial TIME NOT NULL,
    hora_final TIME NOT NULL,
    instructor_id INT NOT NULL REFERENCES instructor(instructor_id) on delete cascade
);

CREATE TABLE clase_alumno (
    clase_id INT NOT NULL REFERENCES clase(clase_id) on delete cascade,
    alumno_id INT NOT NULL REFERENCES alumno(alumno_id) on delete cascade,
    PRIMARY KEY (clase_id, alumno_id)
);

CREATE TABLE admin (
    admin_id INT NOT NULL auto_increment PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL
);