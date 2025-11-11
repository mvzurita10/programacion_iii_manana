// CONTROL DE PUERTOS MARITIMOS

class Barco {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    zarpar() {
        console.log(`El ${this.tipo} "${this.nombre}" ha zarpado del puerto.`);
    }

    navegar() {
        console.log(`El ${this.tipo} "${this.nombre}" esta navegando hacia alta mar.`);
    }

    atracar() {
        console.log(`El ${this.tipo} "${this.nombre}" ha atracado nuevamente en el puerto.`);
    }
}

const miBarco = new Barco('Mar del Sol', 'Buque de carga');

miBarco.zarpar();
miBarco.navegar();
miBarco.atracar();

console.log("Nombre del barco:", miBarco.nombre);
console.log("Tipo de barco:", miBarco.tipo);
