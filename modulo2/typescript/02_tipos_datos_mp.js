var matriculaBuque = "IMO-9876543";
var tonelajeCarga = 4500.50;
var estaEnMuelle = true;
var tipoCarga = "Contenedores Refrigerados";
if (tonelajeCarga > 3000 && estaEnMuelle) {
    console.log("El buque ".concat(matriculaBuque, " requiere gr\u00FAa p\u00F3rtico pesada."));
}
else {
    console.log("El buque ".concat(matriculaBuque, " puede usar gr\u00FAa est\u00E1ndar."));
}
var destinos = ['Rotterdam', 'Shanghai', 'Panamá', 'Hamburgo'];
console.log("Próximos destinos:");
for (var i = 0; i < destinos.length; i++) {
    console.log("- ".concat(destinos[i]));
}
