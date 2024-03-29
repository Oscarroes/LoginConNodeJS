//conexiones Createpool se usa para trabajar con promesas, de forma asíncrona
import {createPool} from 'mysql2/promise';
import {host, database, user, password, dbport} from '../config.js'

//Le pasamos los 5 valores para crear una base de datos
export const pool = createPool({
    host: host,
    database: database,
    user: user,
    password: password,
    dbport: dbport
});
