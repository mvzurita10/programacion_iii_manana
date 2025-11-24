
const titulo = document.getElementById('titulo');
console.log("Encabezado principal:", titulo.textContent);

const notas = document.getElementsByClassName('nota');
Array.from(notas).forEach(nota => console.log("Nota:", nota.textContent));

const zonas = document.getElementsByClassName('item');
console.log("Zonas Operativas");
Array.from(zonas).forEach((zona, index) => {
    console.log(`Zona ${index + 1}: ${zona.textContent}`);
});