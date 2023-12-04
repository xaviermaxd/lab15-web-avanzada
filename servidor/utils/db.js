// src/utils/db.js
const mysql = require('mysql');
const { promisify } = require('util');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'loaclhost',
    user: 'root',
    password: '',
    database: 'aeropuerto_db',
});

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('Database has too many connections.');
        }
        if (err.code === 'ECONNREFUSED') {
        console.error('Database connection was refused.');
        }
    }
    if (connection) connection.release();
    return;
});

pool.query = promisify(pool.query);

module.exports = pool;