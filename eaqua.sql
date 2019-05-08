CREATE TABLE alumno (
    alumno_id INT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    correo VARCHAR(30) NOT NULL,
    estatura NUMERIC(2,2) NOT NULL,
    peso NUMERIC(3,2) NOT NULL,
    seguro VARCHAR(30) NOT NULL,
    tipo_sangre VARCHAR(10) NOT NULL,
    alergias VARCHAR(100) NOT NULL,
    otro_padecimiento VARCHAR(100) NOT NULL
 );