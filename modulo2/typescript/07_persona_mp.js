"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Capitan = void 0;
var Capitan = /** @class */ (function () {
    function Capitan(nombre, licencia, horas) {
        this.nombre = nombre;
        this.licencia = licencia;
        this.horasNavegacion = horas;
    }
    Capitan.prototype.mostrarCredencial = function () {
        console.log("Capit\u00E1n: ".concat(this.nombre, " | Licencia: ").concat(this.licencia, " | Exp: ").concat(this.horasNavegacion, " horas."));
    };
    return Capitan;
}());
exports.Capitan = Capitan;
