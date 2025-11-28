try{
    console.log(variableNoDeclarada);
}catch(error){
    console.error("mensaje de error:", error.message);
} 

try {
    console.log("Intentando abrir el archivo ...");
    throw new Error("Archivo No encontrado");
} catch (error) {
    console.error("mensaje de error:", error.message);
} finally {
    console.log("Finalizando intento de abrir archivo");
}

