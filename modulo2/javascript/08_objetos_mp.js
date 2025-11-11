// CONTROL DE PUERTOS MARITIMOS

console.log("Objetos: Informacion de un Puerto");
let puerto = {
    nombre: "Puerto Manta",
    capacidad: 50, // numero de embarcaciones
    ubicacion: "Manabi"
};

console.log(puerto);
console.log(puerto.nombre);
console.log(puerto.ubicacion);
console.log(puerto["capacidad"]);

console.log("Modificacion de una clave del objeto");
puerto.nombre = "Puerto de Guayaquil";
console.log(puerto);

console.log("Incluir nueva clave al objeto");
puerto.tipoCarga = "Contenedores y Pesca";
console.log(puerto);

console.log("Eliminar una clave del objeto");
delete puerto.tipoCarga;
console.log(puerto);

console.log("Recorrer un objeto");
for (let clave in puerto) {
    console.log(clave);
}

console.log("Mostrar claves con Object.keys");
console.log(Object.keys(puerto));

console.log("Mostrar valores con Object.values");
console.log(Object.values(puerto));

console.log("Objetos anidados: Informacion de un Barco");
let barco = {
    nombre: "Santa Maria",
    tipo: "Pesquero",
    capitan: {
        nombre: "Carlos Herrera",
        licencia: "CAPT-0921",
        contacto: {
            correo: "carlos.herrera@puertomanta.ec",
            telefono: "052468108",
            radio: "CH-16"
        }
    },
    cargamentos: [
        {
            tipo: "Atun",
            pesoToneladas: 30
        },
        {
            tipo: "Camarones",
            pesoToneladas: 20
        }
    ]
};

console.log("Barco:", barco);
