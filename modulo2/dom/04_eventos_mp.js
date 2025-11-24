let ultimoRegistro = null;

document.getElementById('btnRegistrar').addEventListener('click', () => {
    ultimoRegistro = document.createElement('p');
    const fecha = new Date().toLocaleTimeString();
    ultimoRegistro.textContent = `[${fecha}] Buque de carga "Neptuno" ha atracado en el Muelle 4.`;
    ultimoRegistro.style.color = "navy";
    ultimoRegistro.style.fontWeight = "bold";
    
    document.getElementById('contenedor-bitacora').appendChild(ultimoRegistro);
});


document.getElementById('btnZarpar').addEventListener('click', () => {
    if (ultimoRegistro) {
        ultimoRegistro.remove();
        ultimoRegistro = null; 
        alert("El buque ha zarpado exitosamente.");
    } else {
        alert("No hay buques recientes para registrar zarpe.");
    }
});