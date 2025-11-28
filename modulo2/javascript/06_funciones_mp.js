function calcularCostoEstiba(cantidadContenedores, precioPorUnidad) {
    let total = cantidadContenedores * precioPorUnidad;
    return `El costo por mover ${cantidadContenedores} contenedores es: $${total}`;
}

let resultado = calcularCostoEstiba(50, 25.50); 
console.log(resultado);

let resultado2 = calcularCostoEstiba(10, 25.50);
console.log(resultado2);