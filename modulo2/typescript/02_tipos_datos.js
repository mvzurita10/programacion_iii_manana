var edad = 30;
var nombre = "Ednan";
var activo = true;
var valor = 6;
if (edad > 18 && activo) {
    console.log('trabajador activo');
}
else {
    console.log('No trabaja');
}
var frutas = ['manzana', 'banana', 'naranja'];
for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
var Estado;
(function (Estado) {
    Estado[Estado["Pendiente"] = 0] = "Pendiente";
    Estado[Estado["Enviado"] = 1] = "Enviado";
    Estado[Estado["Entregado"] = 2] = "Entregado";
})(Estado || (Estado = {}));
console.log(Estado);
console.log(Estado.Entregado);
