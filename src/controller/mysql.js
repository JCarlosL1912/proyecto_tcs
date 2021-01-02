const mysql = require('mysql');

module.exports = class Conexion{
    constructor() {
        this.conexion = mysql.createConnection({
            host: "3.139.106.169",
            user: "carlos",
            port: 3306,
            password: "admin",
            database: 'tcs'
        });
        this.conexion.connect((err) => {
            if (err) throw err;
            console.log("Connected!");
        });
    }

    getConexion() {
        return this.conexion;
    }
}