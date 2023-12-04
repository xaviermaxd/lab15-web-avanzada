// models/PilotModel.js
const db = require('../utils/db');

class PilotModel {
    crearPiloto = async (datosPiloto) => {
        const { codigo, nombre, horas_vuelo, base_id } = datosPiloto;
        const query = 'INSERT INTO pilotos (codigo, nombre, horas_vuelo, base_id) VALUES (?, ?, ?, ?)';
        const resultado = await db.query(query, [codigo, nombre, horas_vuelo, base_id]);
        return resultado.insertId;
    };

    obtenerPilotoPorId = async (idPiloto) => {
        const query = 'SELECT * FROM pilotos WHERE piloto_id = ?';
        const resultado = await db.query(query, [idPiloto]);
        return resultado[0];
    };

    actualizarPiloto = async (idPiloto, datosPiloto) => {
        const { codigo, nombre, horas_vuelo, base_id } = datosPiloto;
        const query = 'UPDATE pilotos SET codigo = ?, nombre = ?, horas_vuelo = ?, base_id = ? WHERE piloto_id = ?';
        const resultado = await db.query(query, [codigo, nombre, horas_vuelo, base_id, idPiloto]);
        return resultado.affectedRows > 0;
    };

    eliminarPiloto = async (idPiloto) => {
        const query = 'DELETE FROM pilotos WHERE piloto_id = ?';
        const resultado = await db.query(query, [idPiloto]);
        return resultado.affectedRows > 0;
    };
}

module.exports = new PilotModel();
