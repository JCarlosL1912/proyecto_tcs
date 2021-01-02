const Persona = require('../models/Persona');
const axios = require('axios');
const Conexion = require('../controller/mysql');

const con = new Conexion();

const getViaje = async (req, res) => {
    con.getConexion().query("SELECT * FROM viaje_realizado", (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
    });
};

const setViaje = async (req, res) => {
    
};

module.exports = {
    getViaje: getViaje,
    setViaje: setViaje
};