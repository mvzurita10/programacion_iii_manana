console.log("=== SISTEMA DE ASIGNACIÓN DE MUELLES ===");

try {
    let muelle = "Muelle 5";
    let estadoMuelle = "En Reparación";

    console.log(`Intentando asignar buque al ${muelle}...`);

    if (estadoMuelle === "En Reparación") {
        throw new Error("El muelle está inoperativo por mantenimiento.");
    }

    console.log("Asignación exitosa."); 

} catch (error) {
    console.error("¡ERROR CRÍTICO!: " + error.message);

} finally {
    console.log("Fin del proceso de asignación.");
}