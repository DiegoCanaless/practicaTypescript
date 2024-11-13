class Pelicula {
    nombre?: string;
    protagonistas?: string[];
    actores?: string[];

    proyectarEnCine(){
        console.log(`La pelicula ${this.nombre} esta siendo proyectada`)
    }

    constructor(nombre: string, protagonistas: string[], actores: string[]){
        this.nombre = nombre,
        this.protagonistas = protagonistas,
        this.actores = actores
    }
}

const pelicula = new Pelicula('Barbie', ['Barbie','Ken'], ['Margot Robbie', 'Ryan Gosling'])
const pelicula2 = new Pelicula('Oppenheimer',['Oppenheimer', 'Jean Tatlock'], ['Cillian Murphy', 'Florence Pugh'])

pelicula.proyectarEnCine()
console.log(pelicula2)
