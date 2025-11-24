class EmpleadoPuerto {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    trabajar(): void {
        console.log(`${this.nombre} está realizando labores generales.`);
    }
}

class Estibador extends EmpleadoPuerto {
    trabajar(): void {
        console.log(`${this.nombre} está cargando contenedores manualmente.`);
    }
}

class OperadorGrua extends EmpleadoPuerto {
    trabajar(): void {
        console.log(`${this.nombre} está operando la grúa pórtico desde la cabina.`);
    }
}


const empleados: EmpleadoPuerto[] = [
    new EmpleadoPuerto("Supervisor"),
    new Estibador("Carlos"),
    new OperadorGrua("Ana")
];

console.log("=== TURNO DE TRABAJO ===");
empleados.forEach(empleado => {
    empleado.trabajar();
});