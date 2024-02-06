import mysql from 'mysql2'

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"shakti@1999",
    database:"social"
}) 