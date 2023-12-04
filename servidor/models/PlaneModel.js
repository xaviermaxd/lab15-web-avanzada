// models/PlaneModel.js
const db = require('../utils/db');

class PlaneModel {
    crearAvion = async (datosAvion) => {
        const { codigo, tipo, base_id, ultima_mantenimiento } = datosAvion;
        const query = 'INSERT INTO aviones (codigo, tipo, base_id, ultima_mantenimiento) VALUES (?, ?, ?, ?)';
        const resultado = await db.query(query, [codigo, tipo, base_id, ultima_mantenimiento]);
        return resultado.insertId;
    };

    obtenerAvionPorId = async (idAvion) => {
        const query = 'SELECT * FROM aviones WHERE avion_id = ?';
        const resultado = await db.query(query, [idAvion]);
        return resultado[0];
    };

    actualizarAvion = async (idAvion, datosAvion) => {
        const { codigo, tipo, base_id, ultima_mantenimiento } = datosAvion;
        const query = 'UPDATE aviones SET codigo = ?, tipo = ?, base_id = ?, ultima_mantenimiento = ? WHERE avion_id = ?';
        const resultado = await db.query(query, [codigo, tipo, base_id, ultima_mantenimiento, idAvion]);
        return resultado.affectedRows > 0;
    };

    eliminarAvion = async (idAvion) => {
        const query = 'DELETE FROM aviones WHERE avion_id = ?';
        const resultado = await db.query(query, [idAvion]);
        return resultado.affectedRows > 0;
    };
}

module.exports = new PlaneModel();
