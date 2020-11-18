CREATE DATABASE DATOS_COVID;
USE DATOS_COVID;


CREATE TABLE DATOS_USUARIOS(
    id_DUsuario INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    sexo VARCHAR(2),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE DATOS_USUARIOS;
INSERT INTO DATOS_USUARIOS(nombre,sexo)VALUES('Mi nombre', 'f');
SELECT * FROM DATOS_USUARIOS;

INSERT INTO `test` (`nombre`, `fecha`, `residencia`, `pregunta1`, `pregunta2`, `pregunta3`, `pregunta4`, `pregunta5`, `pregunta6`, `pregunta7`, `pregunta8`, `pregunta9`, `pregunta10`) VALUES ('', '', '', '', '', '', '', '', '', '', '', '', '')