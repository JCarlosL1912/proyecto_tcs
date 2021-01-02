const Viaje = require('../models/Viaje');
const Conexion = require('../controller/mysql');
const axios = require('axios');

const con = new Conexion();

const getViaje = (req, res) => {

    con.getConexion().query("SELECT * FROM viaje_realizado", (err, rows, fields) => {
        if (err) throw err;

        let resultado = rows;
        
        let response = resultado.map(async (row) => {
            
            let peopleResponse = await axios.get("https://swapi.py4e.com/api/people/"+row.id_persona);
            let planetResponse = await axios.get("https://swapi.py4e.com/api/planets/"+row.id_planeta);

            return new Viaje(row.id_viaje, peopleResponse, planetResponse);
        });

        res.send(response);
    });
};

const setViaje = (req, res) => {
    let stmt = "INSERT INTO viaje_realizado(id_persona, id_planeta) VALUES(?,?)";
    let params = [req.body.id_persona, req.body.id_planeta];
    con.getConexion().query(stmt, params, (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    });
};

module.exports = {
    getViaje: getViaje,
    setViaje: setViaje
};