let barcosEnEspera = ["MSC Gloria", "Evergreen", "Maersk Alabama"];

console.log("=== COLA DE ESPERA ===");


barcosEnEspera.push("Hapag-Lloyd Express");


for (let i = 0; i < barcosEnEspera.length; i++) {
    console.log(`Turno ${i + 1}: ${barcosEnEspera[i]}`);
}

let barcoEntrante = barcosEnEspera.shift();
console.log(`\nEl buque ${barcoEntrante} ha ingresado a muelle.`);
console.log("Nueva cola de espera:", barcosEnEspera);