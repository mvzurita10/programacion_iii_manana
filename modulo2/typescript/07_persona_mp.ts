export class Capitan {
    nombre: string;
    licencia: string;
    horasNavegacion: number;

    constructor(nombre: string, licencia: string, horas: number) {
        this.nombre = nombre;
        this.licencia = licencia;
        this.horasNavegacion = horas;
    }

    mostrarCredencial(): void {
        console.log(`Capitán: ${this.nombre} | Licencia: ${this.licencia} | Exp: ${this.horasNavegacion} horas.`);
    }
}