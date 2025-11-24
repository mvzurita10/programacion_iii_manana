const zona = document.getElementById('zonaGrua');
const estado = document.getElementById('estadoGrua');

zona.addEventListener('mouseenter', () => {
    zona.style.backgroundColor = "#ff9800"; 
    zona.textContent = "GRÚA OPERANDO";
    estado.textContent = "Estado: Levantando Contenedor...";
});

zona.addEventListener('mouseleave', () => {
    zona.style.backgroundColor = "#78909c"; 
    zona.textContent = "ZONA DE CARGA";
    estado.textContent = "Estado: En espera";
});

zona.addEventListener('click', () => {
    zona.style.backgroundColor = "#4caf50"; 
    zona.textContent = "CARGA COMPLETADA";
    alert("¡Contenedor asegurado en el buque!");
});