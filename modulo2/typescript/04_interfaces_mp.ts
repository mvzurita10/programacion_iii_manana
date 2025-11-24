interface Buque {
    nombre: string;
    bandera: string;
    eslora: number; 
    reportarEstado(): void;
}

const buque1: Buque = {
    nombre: "MSC Gulsun",
    bandera: "Panamá",
    eslora: 400,
    reportarEstado: function() {
        console.log(`El buque ${this.nombre} (${this.bandera}) está operativo.`);
    }
};

buque1.reportarEstado();