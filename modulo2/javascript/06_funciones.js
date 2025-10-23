console.log("Funciones");
console.log("Forma clasica");
function saludar(){
    console.log("Hola desde una funcion clasica");
}

saludar(); 

console.log("Forma con parametros y retorno");
function sumar(a, b){
    return a + b;
}

let resultado = sumar(4,9);
console.log("La suma es:", resultado); 

console.log("Funcion flecha");
const resta = (a,b) => {
    return a - b;
}

let resultadoResta = resta(4,9);
console.log("La resta es:", resultadoResta); 

console.log("Funcion retorno directo");
const cuadrado = x => x*x;
console.log("El cuadrado de 5:", cuadrado(5));

console.log("Funcion con parametros por defecto");
const saludo = (nombre, saludo = "Hola") => {
    return saludo + " " + nombre;
}

let saludo1= saludo("Mikaela");
let saludo2= saludo("Josue", "Buenos dias");
console.log(saludo1); 
console.log(saludo2); 


function areaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    return area;
}

let base = 10;
let altura = 5;
console.log("El área del triángulo es:", areaTriangulo(base, altura));



