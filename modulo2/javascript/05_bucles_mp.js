// CONTROL DE PUERTOS MARITIMOS

console.log("Bucle for: Registro de embarcaciones");
for (let barco = 1; barco <= 10; barco++) {
    console.log("Embarcacion numero", barco, "ha ingresado al puerto.");
}

// Calculo del total de embarcaciones registradas
let totalBarcos = 0;
for (let barco = 1; barco <= 10; barco++) {
    totalBarcos += barco;
}
console.log("Total de embarcaciones registradas:", totalBarcos);

// Mostrar nombre de un puerto letra por letra
let nombrePuerto = "PuertoManta";
for (let i = 0; i < nombrePuerto.length; i++) {
    console.log("Letra del nombre del puerto:", nombrePuerto[i]);
}

// Mostrar el cuadrado de un numero como ejemplo de capacidad del muelle
for (let muelle = 1; muelle <= 10; muelle++) {
    console.log("Capacidad cuadrada del muelle", muelle, "es", muelle ** 2, "toneladas.");
}

console.log("Bucle while: Control de muelles activos");
let muelle = 1;
while (muelle <= 6) {
    console.log("Muelle", muelle, "operativo y en funcionamiento.");
    muelle++;
}

// Arreglo con cantidades de carga descargada en cada muelle
let cargas = [120, 340, 280, 500, 620];
let indice = 1;
while (indice < cargas.length) {
    console.log("En el muelle", indice, "se descargaron", cargas[indice], "toneladas.");
    indice++;
}

// Verificar si el numero de embarcaciones es par (para organizar los turnos de atraque)
let numeroBarco = 1;
while (numeroBarco <= 20) {
    if (numeroBarco % 2 == 0)
        console.log("Barco numero", numeroBarco, "atraca en el turno par.");
    numeroBarco++;
}

// Conteo regresivo para cierre de operaciones portuarias
let operacionesRestantes = 5;
do {
    console.log("Cerrando operaciones del muelle", operacionesRestantes);
    operacionesRestantes--;
} while (operacionesRestantes != 0);

// Calcular tarifas portuarias por cada embarcacion
let tarifa = 1;
while (tarifa <= 10) {
    console.log("Embarcacion", tarifa, "paga tarifa:", tarifa * 5, "USD por tonelada.");
    tarifa++;
}

// Buscar el muelle con mayor carga descargada
let cargas2 = [120, 340, 280, 500, 620];
let indice2 = 0;
let mayorCarga = 0;

while (indice2 < cargas2.length) {
    if (cargas2[indice2] > mayorCarga) {
        mayorCarga = cargas2[indice2];
    }
    indice2++;
}
console.log("El muelle con mayor carga descargada tuvo:", mayorCarga, "toneladas.");
