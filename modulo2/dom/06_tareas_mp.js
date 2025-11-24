const boton = document.getElementById('btnAgregar');

boton.addEventListener('click', () => {
    const input = document.getElementById('tareaInput');
    const texto = input.value;

    if (texto.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = "⚓ " + texto; 
        
        li.addEventListener('click', () => {
            li.style.textDecoration = "line-through";
            li.style.color = "gray";
        });

        document.getElementById('listaTareas').appendChild(li);
        input.value = ""; 
    } else {
        alert("Por favor ingrese una descripción de la tarea.");
    }
});