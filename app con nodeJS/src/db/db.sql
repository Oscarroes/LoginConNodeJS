-- instrucciones
CREATE DATABASE IF NOT EXISTS nodelogin;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

--Usamos el req y el res para comunicarnos, los datos nos van a venir del login,
--los va a escribir en el cliente el usuario y los vamos a guardar en la base de datos con un INSERT
--y podemos consultarlos haciendo un SELECT * FROM nombre de la tabla