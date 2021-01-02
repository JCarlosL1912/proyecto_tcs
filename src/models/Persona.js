module.exports = class Persona {
    constructor(people) {
        this.fecha_nacimiento = people.birth_year;
        this.color_ojos = people.eye_color;
        this.peliculas = people.films;
        this.genero = people.gender;
        this.color_cabello = people.hair_color;
        this.altura = people.height;
        this.planeta = people.homeworld;
        this.peso = people.mass;
        this.nombre = people.name;
        this.color_piel = people.skin_color;
        this.creado = people.created;
        this.editado = people.edited;
        this.especies = people.species;
        this.naves = people.starships;
        this.enlace = people.url;
        this.vehiculos = people.vehicles;
    }
}