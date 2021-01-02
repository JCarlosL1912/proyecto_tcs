module.exports = class Viaje {
    constructor(id, persona, planeta) {
        this.id_viaje = id;
        this.viajero = persona.nombre;
        this.planeta = planeta.nombre;
    }
}