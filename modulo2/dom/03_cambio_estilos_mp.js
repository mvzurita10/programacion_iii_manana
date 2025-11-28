const btnNormal = document.getElementById('btnNormal');
const btnAlerta = document.getElementById('btnAlerta');
const cajaEstado = document.getElementById('alerta');


btnNormal.addEventListener('click', () => {
    document.body.style.backgroundColor = "#e0f7fa"; 
    document.body.style.color = "#006064";
    cajaEstado.textContent = "Estado actual: Operaciones Normales (Mar en calma)";
    cajaEstado.style.backgroundColor = "#b2ebf2";
    cajaEstado.style.borderColor = "#00bcd4";
});


btnAlerta.addEventListener('click', () => {
    document.body.style.backgroundColor = "#37474f"; 
    document.body.style.color = "#ffffff";
    cajaEstado.textContent = "ALERTA: Tormenta eléctrica. Suspender operaciones de grúa.";
    cajaEstado.style.backgroundColor = "#d32f2f"; 
    cajaEstado.style.borderColor = "#ffcdd2";
});