// models/FlightModel.js
const db = require('../utils/db');

class FlightModel {
    crearVuelo = async (datosVuelo) => {
        const { numero_vuelo, origen, destino, hora_salida, duracion_horas, avion_id, piloto_id, miembro_id } = datosVuelo;
        const query = 'INSERT INTO vuelos (numero_vuelo, origen, destino, hora_salida, duracion_horas, avion_id, piloto_id, miembro_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const resultado = await db.query(query, [numero_vuelo, origen, destino, hora_salida, duracion_horas, avion_id, piloto_id, miembro_id]);
        return resultado.insertId;
    };

    obtenerVueloPorId = async (idVuelo) => {
        const query = 'SELECT * FROM vuelos WHERE vuelo_id = ?';
        const resultado = await db.query(query, [idVuelo]);
        return resultado[0];
    };

    actualizarVuelo = async (idVuelo, datosVuelo) => {
        const { numero_vuelo, origen, destino, hora_salida, duracion_horas, avion_id, piloto_id, miembro_id } = datosVuelo;
        const query = 'UPDATE vuelos SET numero_vuelo = ?, origen = ?, destino = ?, hora_salida = ?, duracion_horas = ?, avion_id = ?, piloto_id = ?, miembro_id = ? WHERE vuelo_id = ?';
        const resultado = await db.query(query, [numero_vuelo, origen, destino, hora_salida, duracion_horas, avion_id, piloto_id, miembro_id, idVuelo]);
        return resultado.affectedRows > 0;
    };

    eliminarVuelo = async (idVuelo) => {
        const query = 'DELETE FROM vuelos WHERE vuelo_id = ?';
        const resultado = await db.query(query, [idVuelo]);
        return resultado.affectedRows > 0;
    };
}

module.exports = new FlightModel();
