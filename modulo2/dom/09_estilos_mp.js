const contenedor = document.body; 
const botonTema = document.getElementById('btnTema');
const botonEmergencia = document.getElementById('btnEmergencia');
const panel = document.querySelector('.panel-control');
const textoEstado = document.getElementById('textoEstado');

botonTema.addEventListener('click', () => {
    contenedor.classList.toggle('modo-nocturno');

    if (contenedor.classList.contains('modo-nocturno')) {
        botonTema.textContent = "Cambiar a Modo Diurno";
        console.log("Sistema: Activado modo nocturno para visibilidad reducida.");
    } else {
        botonTema.textContent = "Cambiar a Modo Nocturno";
        console.log("Sistema: Activado modo diurno.");
    }
});


botonEmergencia.addEventListener('click', () => {
    const esEmergencia = panel.classList.toggle('alerta-activa');

    if (esEmergencia) {
        textoEstado.textContent = "ALERTA DE COLISIÓN";
        textoEstado.style.color = "red";
        textoEstado.style.fontWeight = "bold";
    } else {
        textoEstado.textContent = "Operativo";
        textoEstado.style.color = ""; 
        textoEstado.style.fontWeight = "normal";
    }
});