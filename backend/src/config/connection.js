import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config();

const connection = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER ||'root',
    port: process.env.DB_PORT ||3306,
    password: process.env.DB_PASS ||'1234',
    database: process.env.DB_NAME ||'TrabalhoDB'
})

console.log('Subiu o Backend');
export default connection;