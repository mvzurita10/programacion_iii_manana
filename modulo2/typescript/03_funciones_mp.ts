function registrarArribo(nombreBuque: string, muelle: number): string {
    return `El buque "${nombreBuque}" ha atracado en el Muelle ${muelle}.`;
}

function calcularTarifa(horas: number, precioPorHora: number): number {
    return horas * precioPorHora;
}

function emitirAlertaClimatica(): void {
    console.log("ALERTA: Vientos fuertes en la bahía. Suspender maniobras.");
}

console.log(registrarArribo("Ever Given", 4));
console.log(`Total a pagar por amarre: $${calcularTarifa(24, 150)}`);
emitirAlertaClimatica();