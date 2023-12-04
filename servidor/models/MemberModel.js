// models/BaseModel.js
const db = require('../utils/db');

class BaseModel {
    crearBase = async (datosBase) => {
        const { nombre } = datosBase;
        const query = 'INSERT INTO bases (nombre) VALUES (?)';
        const resultado = await db.query(query, [nombre]);
        return resultado.insertId;
    };

    obtenerBasePorId = async (idBase) => {
        const query = 'SELECT * FROM bases WHERE base_id = ?';
        const resultado = await db.query(query, [idBase]);
        return resultado[0];
    };

    actualizarBase = async (idBase, datosBase) => {
        const { nombre } = datosBase;
        const query = 'UPDATE bases SET nombre = ? WHERE base_id = ?';
        const resultado = await db.query(query, [nombre, idBase]);
        return resultado.affectedRows > 0;
    };

    eliminarBase = async (idBase) => {
        const query = 'DELETE FROM bases WHERE base_id = ?';
        const resultado = await db.query(query, [idBase]);
        return resultado.affectedRows > 0;
    };
}

module.exports = new BaseModel();
