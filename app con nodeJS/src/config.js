//configurar variables de entorno del puerto del servidor de forma correcta

export const PORT = process.env.PORT || 3000;

//configurar variables de entorno de la BBDD de forma correcta
//con process.env.variable pregunta si hay alguna variable asignada y si no le ponemos la nuestra
//port aquí es el puerto de la base de datos diferente al puerto de despliegue

export const host = process.env.host || 'localhost';
export const database = process.env.database || 'nodelogin';
export const user = process.env.user || 'root';
export const password = process.env.user || '';
export const dbport = process.env.dbport || 3306;