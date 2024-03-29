//traemos el metodo Router para que nos enrute de las herramientas de express
import {Router} from 'express';
//Importamos los callbacks de controllers, para bajar de carpeta usamos ../ para subir ./
import{home, login, registro, crud, pruebacon} from '../controllers/controllers.js';

//Usamos el metodo router inicializado en una constante
const router = Router();

//CREAR RUTAS: Nos las llevamos a Routes

//con el GET hacemos llamada al navegador, traemos datos del navegador
//con el metodo SEND estamos enviando texto plano, no es HTML, es como un document. del JS
//con RENDER vamos a renderizar un archivo de la carpeta Views
//Nuestras rutas /nombre_ruta se conocen como ENDPOINTS,
// las llamadas a las rutas: (req,res)  => res.render('login')); se conocen como CALLBACKS

//Nos vamos a llevar las partes del CALLBACK a la carpeta controllers y las traemos como parámetro
router.get('/', home);
router.get('/login', login);
router.get('/registro', registro);
router.get('/crud', crud);

//RUTA DE PRUEBA DE CONEXION:
//este no está funcionando porque post es para enviar datos nosotros no para traerlos!!
// router.post('/pruebacon', pruebacon);

//este funciona y te da el resultado tanto en el Thunder como en el navegador
router.get('/pruebacon', pruebacon);

//de esta manera exportamos la constante router para poder usarla en otros archivos de la app
export default router;