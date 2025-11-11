// CONTROL DE PUERTOS MARITIMOS

console.log("Registro y Control de Embarcaciones");

let barcos = [10, 5, 26, 9];

let listaLlegadas = new Array();
let listaPartidas = [];

console.log(listaLlegadas);
console.log(listaPartidas);

console.log("Acceso a los elementos del registro de barcos");
console.log("Primer barco en el registro:", barcos[0]);
console.log("Ultimo barco registrado:", barcos[3]);

console.log("Modificar registro de barcos");
barcos[0] = 100; // actualiza el numero del barco
console.log("Registro actualizado de barcos:", barcos);

console.log("Agregar embarcaciones al final del registro");
barcos.push(500); // llega un nuevo barco al puerto
console.log("Registro actualizado:", barcos);

console.log("Agregar embarcaciones al inicio del registro");
barcos.unshift(888); // barco prioritario entra primero al puerto
console.log("Registro actualizado:", barcos);

console.log("Eliminar la ultima embarcacion del registro");
barcos.pop(); // el ultimo barco zarpa
console.log("Registro tras salida:", barcos);

console.log("Eliminar la primera embarcacion del registro");
barcos.shift(); // el primer barco sale del muelle
console.log("Registro tras salida inicial:", barcos);

console.log("Iteracion con while: control de atraques");
let indice = 0;
while (indice < barcos.length) {
    console.log("Muelle", indice + 1, "atiende al barco con ID:", barcos[indice]);
    indice++;
}

console.log("Iteracion con for: revision de operaciones portuarias");
for (let i = 0; i < barcos.length; i++) {
    console.log("Barco con numero de registro:", barcos[i]);
}

console.log("Iteracion con for...of: reporte general de barcos");
for (let barco of barcos) {
    console.log("⛴️ Barco identificado con numero:", barco);
}

console.log("Iteracion con forEach: informe completo de operaciones");
barcos.forEach(function(valor, indice) {
    console.log("Muelle", indice + 1, "recibio al barco con ID:", valor);
});
