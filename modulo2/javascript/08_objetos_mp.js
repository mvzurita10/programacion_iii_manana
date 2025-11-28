let buque = {
    nombre: "Santa Maria",
    bandera: "Panamá",
    carga: ["Trigo", "Maíz"],
    tonelaje: 45000,
    capitan: "Roberto Díaz"
};

console.log("=== MANIFIESTO DEL BUQUE ===");
console.log("Nombre:", buque.nombre);
console.log("Bandera:", buque.bandera);
console.log("Carga:", buque.carga);


buque.tonelaje = 42000; 
buque.estado = "Atracado"; 

console.log("Estado actual:", buque.estado);
console.log("Tonelaje actual:", buque.tonelaje);