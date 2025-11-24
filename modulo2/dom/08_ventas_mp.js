const formulario = document.getElementById('formulario');
const lista = document.getElementById('listaFacturas');

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const nombre = document.getElementById('nombreBuque').value.trim();
    const servicio = document.getElementById('servicio').value.trim();
    const costo = parseFloat(document.getElementById('costo').value);

    if (nombre && servicio && !isNaN(costo)) {
        const factura = {
            id: Date.now(),
            buque: nombre,
            desc: servicio,
            total: costo
        };

        const li = document.createElement('li');
        li.textContent = `Buque: ${factura.buque} | Servicio: ${factura.desc} | Total: $${factura.total.toFixed(2)}`;
        lista.appendChild(li);

        formulario.reset();
        alert("Servicio facturado correctamente.");
    }
});