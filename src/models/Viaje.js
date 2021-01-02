module.exports = class Viaje {
    constructor(persona, planeta) {
        this.viajero = persona.nombre;
        this.planeta = planeta.nombre;
    }
}