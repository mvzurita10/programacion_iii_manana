import { Contenedor } from "./05_interface_mp";

const carga1: Contenedor = {
    codigo: "MAEU-123456",
    peso: 22000,
    destino: "Callao"
};

const carga2: Contenedor = {
    codigo: "HLCU-987654",
    peso: 18000,
    refrigerado: true, 
    destino: "Barcelona"
};

console.log(`Carga 1: ${carga1.codigo} va hacia ${carga1.destino}`);
console.log(`Carga 2 (Refrigerada): ${carga2.codigo}`);