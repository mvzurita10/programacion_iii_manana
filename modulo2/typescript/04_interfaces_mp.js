var buque1 = {
    nombre: "MSC Gulsun",
    bandera: "Panamá",
    eslora: 400,
    reportarEstado: function () {
        console.log("El buque ".concat(this.nombre, " (").concat(this.bandera, ") est\u00E1 operativo."));
    }
};
buque1.reportarEstado();
