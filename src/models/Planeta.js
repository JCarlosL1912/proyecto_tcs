module.exports = class Planeta {
    constructor(planet) {
        this.nombre = planet.name;
        this.periodo_rotacion = planet.rotation_period;
        this.periodo_orbita = planet.orbital_period;
        this.diametro = planet.diameter;
        this.clima = planet.climate;
        this.gravedad = planet.gravity;
        this.terreno = planet.terrain;
        this.humedad = planet.surface_water;
        this.poblacion = planet.population;
        this.residentes = planet.residents;
        this.peliculas = planet.films;
        this.creado = planet.created;
        this.editado = planet.edited;
        this.enlace = planet.link;
    }
}