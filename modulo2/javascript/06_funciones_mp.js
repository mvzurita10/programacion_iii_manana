// CONTROL DE PUERTOS MARITIMOS

console.log("Funciones en el Control de Puertos Maritimos");

function registrarBarco() {
    console.log("Barco registrado exitosamente en el sistema portuario.");
}

registrarBarco(); 

console.log("Funcion con parametros y retorno");
function calcularTarifa(toneladas, tarifaPorTonelada) {
    return toneladas * tarifaPorTonelada;
}

let tarifaTotal = calcularTarifa(200, 5);
console.log("La tarifa portuaria total es:", tarifaTotal, "USD");

console.log("Funcion flecha");
const diferenciaCarga = (cargaEntrada, cargaSalida) => {
    return cargaEntrada - cargaSalida;
}

let diferencia = diferenciaCarga(500, 320);
console.log("Diferencia de carga en muelle:", diferencia, "toneladas");

console.log("Funcion de retorno directo");
const capacidadRestante = cargaActual => 1000 - cargaActual;
console.log("📦 Capacidad restante del muelle:", capacidadRestante(750), "toneladas");

console.log("Funcion con parametros por defecto");
const saludarCapitan = (nombreCapitan, saludo = "Bienvenido al puerto") => {
    return saludo + ", Capitan " + nombreCapitan;
}

let mensaje1 = saludarCapitan("Mikaela");
let mensaje2 = saludarCapitan("Josue", "Buenos dias y buenos vientos");
console.log(mensaje1);
console.log(mensaje2);

console.log("Funcion para calcular el area del muelle");
function areaMuelle(longitud, ancho) {
    let area = longitud * ancho;
    return area;
}

let longitud = 120;
let ancho = 30;
console.log("El area del muelle es:", areaMuelle(longitud, ancho), "metros cuadrados.");
