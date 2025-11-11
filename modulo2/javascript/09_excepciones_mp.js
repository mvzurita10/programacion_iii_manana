// CONTROL DE PUERTOS MARITIMOS - Manejo de errores en programación

try {
    console.log(barcoNoRegistrado);
} catch (error) {
    console.error("Error en el sistema del puerto:", error.message);
}

try {
    console.log("Intentando acceder al registro del barco en el sistema del puerto...");
    throw new Error("Registro del barco no encontrado en la base de datos del puerto");
} catch (error) {
    console.error("Mensaje de error:", error.message);
} finally {
    console.log("Finalizando intento de acceso al registro del barco.");
}
