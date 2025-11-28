function saludar(nombre?: string): string {
    return `Hola ${nombre}`;
} 

console.log(saludar('Francisco'));

const sumarNumeros = (a:number, b:number):number => {
    return a + b;
}
console.log(sumarNumeros(5,5)); 

function saludarBienvenidaMensaje(): void {
    console.log('Hola');
    console.log('Bienvenido a Typescript');
}

saludarBienvenidaMensaje();

function calcularAreaCirculo(radio: number): number {
    return Math.PI * radio * radio;
}

function mostrarAreaCirculo(radio: number): void {
    console.log(Math.PI * radio * radio);
}

console.log(calcularAreaCirculo(5));
mostrarAreaCirculo(7);