console.log("Objetos");
let persona = {
    nombre: "Miky",
    edad: 22,
    ciudad: "Quito"
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.ciudad);
console.log(persona["edad"]); 
console.log("Modificacion de una clave del objeto");
persona.nombre="Valentina";
console.log(persona);
console.log("Incluir clave del objeto");
persona.direccion="Av.Eloy Alfaro";
console.log(persona); 
console.log("Eliminar clave del objeto");
delete persona.direccion;
console.log(persona);

console.log("Recorrer un objeto");
for (let clave in persona){
    console.log(clave); 
}

console.log("Mostrar claves con Object.keys");
console.log(Object.keys(persona));
console.log("Mostrar valores con Object.values");
console.log(Object.values(persona)); 
console.log("Objetos anidados");
let estudiante = {
    nombre: "Josue",
    apellido: "Merino",
    contacto: {
        correo: "josue.merino@example.com",
        telefono: "24681082",
        celular: "0987654321"
    },
    materias: [
        {
            nombre: "Programacion III",
            calificacion: 10
        },
        {
            nombre: "Base de Datos",
            calificacion: 10
        },
    ]
};
console.log("Estudiante:", estudiante); 