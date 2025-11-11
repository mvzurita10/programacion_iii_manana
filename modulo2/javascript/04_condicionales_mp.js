// CONTROL DE PUERTOS MARITIMOS

let temperaturaAgua = 35;

if (temperaturaAgua > 30) {
    console.log("Alerta: Temperatura del agua alta, riesgo para embarcaciones.");
}

let codigoAcceso = "muelle123";
if (codigoAcceso === "muelleAutorizado") {
    console.log("Embarcacion autorizada para atracar en el muelle.");
} else {
    console.log("Acceso denegado: embarcacion sin permiso."); 
}


let nivelMarea = 7;
if (nivelMarea >= 9) {
    console.log("Marea alta: suspender operaciones.");
} else if (nivelMarea >= 6) {
    console.log("Marea estable: operaciones normales.");
} else {
    console.log("Marea baja: precaucion al maniobrar.");
}


let edadCapitan = 20;
let tienePermisoNavegacion = true;

if (edadCapitan >= 18) {
    if (tienePermisoNavegacion) {
        console.log("Autorizado para zarpar.");
    } else {
        console.log("Falta permiso de navegacion.");
    }
} else {
    console.log("El capitan es menor de edad, no puede zarpar.");
}


let dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Inicio de operaciones portuarias de la semana.");
        break;
    case "viernes":
        console.log("Ultimo dia laboral en el puerto.");
        break;
    default:
        console.log("Dia normal en el puerto.");
}


let muelleA = 10; 
let muelleB = 1;
let muelleC = 15;
let mayorCapacidad;

if (muelleA > muelleB) {
    mayorCapacidad = muelleA;
}
if (muelleC > mayorCapacidad) {
    mayorCapacidad = muelleC;
}
console.log("El muelle con mayor capacidad es:", mayorCapacidad); 
