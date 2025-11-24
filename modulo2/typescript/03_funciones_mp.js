function registrarArribo(nombreBuque, muelle) {
    return "El buque \"".concat(nombreBuque, "\" ha atracado en el Muelle ").concat(muelle, ".");
}
function calcularTarifa(horas, precioPorHora) {
    return horas * precioPorHora;
}
function emitirAlertaClimatica() {
    console.log("ALERTA: Vientos fuertes en la bahía. Suspender maniobras.");
}
console.log(registrarArribo("Ever Given", 4));
console.log("Total a pagar por amarre: $".concat(calcularTarifa(24, 150)));
emitirAlertaClimatica();
