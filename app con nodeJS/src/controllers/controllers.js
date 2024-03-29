import {pool} from '../db/db.js';
//aquí traemos las callbacks
//las vamos a almacenar en una constante para poder exportar y llamarlas en el resto de la app
//tenemos de esta forma separados los Endpoints de los Callbacks
//Los Callbacks nos devuelven como respuesta res. un renderizado del archivo ejs
//Lo que va después del archivo.ejs son las variables para enriquecer el archivo, pudiendo enlazarlos en el propio archivo
//home.ejs para llamarlas 
export const home = (req,res)  => res.render('home', {title: "Home"});
export const login = (req,res)  => res.render('login', {title: "Login"});
export const registro = (req,res)  => res.render('registro', {title: "Registro"});
export const crud = (req,res) => res.render('crud', {title: "Crud"});

export const pruebacon = async (req,res) => {
    // const [resultado] = await pool.query('SELECT 2+2 AS RESULTADO');
    const [consultaUsuarios] = await pool.query('SELECT * FROM users;');
    // res.json(resultado);
    res.json(consultaUsuarios);
    // res.send('ok'); si lo quieres por consola
    // console.log(resultado);
    console.log(consultaUsuarios);
}




