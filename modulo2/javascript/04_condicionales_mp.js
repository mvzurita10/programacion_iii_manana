let caladoBuque = 14.5; 
let mensaje = "";

if (caladoBuque >= 15) {
    mensaje = "Asignar a Zona de Aguas Profundas (Buques Post-Panamax).";
} else if (caladoBuque >= 10) {
    mensaje = "Asignar a Muelle Estándar (Buques de Carga General).";
} else if (caladoBuque >= 5) {
    mensaje = "Asignar a Muelle Costero (Embarcaciones Pesqueras).";
} else {
    mensaje = "Error: Calado insuficiente para operación comercial.";
}

console.log(`Buque con calado de ${caladoBuque}m:`);
console.log(mensaje);