let servicios = [
    { nombre: "Amarre", costo: 300 },
    { nombre: "Conexión Eléctrica", costo: 150 },
    { nombre: "Suministro de Agua", costo: 100 },
    { nombre: "Descarga de Contenedores", costo: 1200 }
];

console.log("=== LISTA DE SERVICIOS REALIZADOS ===");
let costoTotal = 0;

for (let i = 0; i < servicios.length; i++) {
    console.log(`${i + 1}. ${servicios[i].nombre} - $${servicios[i].costo}`);
    costoTotal += servicios[i].costo;
}

console.log("-----------------------------------");
console.log("Costo Total de Operación: $" + costoTotal);