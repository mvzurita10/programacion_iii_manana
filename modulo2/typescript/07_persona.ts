export class Persona {
    nombre: string;
    edad: number
    constructor(
        nombre: string, 
        edad: number
    ) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(): void {
        console.log(
            `Hola, soy ${this.nombre} y tengo ${this.edad} años.`)
    }
} 