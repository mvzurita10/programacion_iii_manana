function saludar(nombre) {
    return "Hola ".concat(nombre);
}
console.log(saludar('Francisco'));
var sumar = function (a, b) {
    return a + b;
};
console.log(sumar(5, 5));
function saludarDeNuevo() {
    console.log('Hola');
    console.log('Bienvenido a Typescript');
}
saludarDeNuevo();
function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}
function calcularAreaCirculoVoid(radio) {
    console.log(Math.PI * radio * radio);
}
console.log(calcularAreaCirculo(5));
calcularAreaCirculoVoid(7);
