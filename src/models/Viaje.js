const Persona = require('./Persona');
const Planeta = require('./Planeta');

module.exports = class Viaje {
    constructor(id, persona, planeta) {
        this.id_viaje = id;
        this.viajero = new Persona(persona);
        this.planeta = new Planeta(planeta);
    }
}