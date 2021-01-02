const Persona = require('../models/Persona');
const Planeta = require('../models/Planeta');
const Viaje = require('../models/Viaje');
const axios = require('axios');
const Conexion = require('../controller/mysql');

const con = new Conexion();

const getViaje = async (req, res) => {
    let response = [];
    //  Lambda no soporta async/await
    //  let persona = await axios.get("https://swapi.py4e.com/api/people/1");

    //  Resolver promesas mediante callback
    con.getConexion().query("SELECT * FROM viaje_realizado", (err, rows, fields) => {
        if (err) throw err;
        rows.map(element => {
            axios.get("https://swapi.py4e.com/api/people/"+element.id_persona)
            .then(peopleResponse => {
                axios.get("https://swapi.py4e.com/api/planets/"+element.id_planeta)
                    .then(planetResponse => {
                        response.push(new Viaje(element.id_viaje, new Persona(peopleResponse), new Planeta(planetResponse)));
                    })
                    .cath(error => {
                        console.log(error);
                    })
            }).catch(error => {
                console.log(error);
            });
        });
    });

    res.send(response);
};

const setViaje = async (req, res) => {
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