import express from 'express';
import ejs from 'ejs'; //no es necesario importarlo porque lo trae express por defecto
import {PORT} from './config.js' //Iimportamos la variable PORT desde config
import { pool } from '../src/db/db.js';

//Hay que instalarlo con npm i ejs, pero el import es opcional

//con estos podemos mostrar la ruta absoluta en la que nos encontramos
import {dirname, join} from 'path'; //con las llaves elijo la parte del moduloq ue quiero coger, si no pues coges el modulo entero
import { fileURLToPath } from 'url';

//IMPORTANTE: importar nuestro enrutador con ruta archivo y su extensión porque es un módulo creado por nosotros
//import {router} from './routes/routes.js';
//Se puede importar también poniendole un alias o nombre, es muy típico llamarlo indexRoutes
import indexRoutes from './routes/routes.js';

//El nombre de variable __nombre es para identificar que la variable es privada
//Cuidado con el sistema operativo, porque Windows usa \ y Linux usa /
const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname); //con esto vemos la ruta donde nos encontramos por consola

const app = express();
// const port = 3000;

//iniciar servidor y lo almaceno en app
app.listen(PORT);
console.log('El servidor está escuchando por el puerto ' + PORT);

//CONFIGURACIONES ---------------------------------------------------------------------

//Configurar el motor de plantillas
app.set('view engine', 'ejs');
//ojo con la ruta, porque depende del SO va a ser de una manera u otra, esto lo solucionamos con JOIN
//join mira que SO está trabajando y pone \ o / según corresponda
app.set('views', join(__dirname, 'views'));

//USAR ENRUTADOR:
app.use(indexRoutes);

//usar la carpeta Public con los estilos en las views
app.use(express.static(join(__dirname, 'public')));

console.log(join(__dirname, 'views'));

//conexion base de datos para registro:

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ruta para registrar un usuario
app.post('/register', async (req, res) => {
    const { email, username, password } = req.body;

    try {
        const result = await pool.query('INSERT INTO usuarios (email, username, password) VALUES (?, ?, ?)', [email, username, password]);
        console.log('Usuario registrado con éxito');
        res.sendStatus(200); // Enviar estado OK al cliente
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.sendStatus(500); // Enviar estado de error al cliente
    }
});

// Ruta para iniciar sesión
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM usuarios WHERE username = ? AND password = ?', [username, password]);

        if (result[0].length > 0) {
            // Usuario y contraseña coinciden, enviar respuesta de éxito
            res.status(200).send('Conectado');
        } else {
            // Usuario y contraseña no coinciden, enviar respuesta de error
            res.status(401).send('Usuario no registrado');
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).send('Error de servidor');
    }
});


