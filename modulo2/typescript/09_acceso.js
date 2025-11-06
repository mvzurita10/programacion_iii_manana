"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(titulo) {
        this.idGeneric = '991828982988';
        this.titulo = titulo;
    }
    Libro.prototype.generarGota = function () {
        this.cota = (new Date()).toISOString;
    };
    Libro.prototype.getCota = function () {
        return this.cota;
    };
    Libro.prototype.getAtributes = function () {
        return {
            titulo: this.titulo,
            cota: this.cota,
            id: this.idGeneric
        };
    };
    return Libro;
}());
exports.Libro = Libro;
