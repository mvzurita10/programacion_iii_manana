export class Barco {
    protected nombre: string;
    protected capacidad: number;

    constructor(nombre: string, capacidad: number) {
        this.nombre = nombre;
        this.capacidad = capacidad;
    }

    navegar(): void {
        console.log(`El barco ${this.nombre} está navegando en alta mar.`);
    }
}

export class BarcoPesquero extends Barco {
    tipoRed: string;

    constructor(nombre: string, capacidad: number, tipoRed: string) {
        super(nombre, capacidad); 
        this.tipoRed = tipoRed;
    }

    pescar(): void {
        console.log(`${this.nombre} está lanzando la red tipo ${this.tipoRed}.`);
    }
}