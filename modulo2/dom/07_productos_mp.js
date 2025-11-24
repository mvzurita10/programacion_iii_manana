const contenedores = [
    { codigo: "MSKU-1029", tipo: "Electrónicos", peso: 20.5, destino: "Rotterdam", ubicacion: "Patio A-1" },
    { codigo: "HLCU-4588", tipo: "Refrigerado (Banano)", peso: 18.0, destino: "New York", ubicacion: "Patio B-Reefer" },
    { codigo: "CMAU-9921", tipo: "Textiles", peso: 15.2, destino: "Barcelona", ubicacion: "Patio A-2" },
    { codigo: "MSCU-3340", tipo: "Maquinaria Pesada", peso: 30.0, destino: "Shanghai", ubicacion: "Patio C-Heavy" }
];

const tabla = document.getElementById("cuerpoTabla");

contenedores.forEach(c => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${c.codigo}</td>
        <td>${c.tipo}</td>
        <td>${c.peso.toFixed(2)} t</td>
        <td>${c.destino}</td>
        <td>${c.ubicacion}</td>
    `;
    tabla.appendChild(fila);
});