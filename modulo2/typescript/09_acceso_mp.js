"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAduana = void 0;
var RegistroAduana = /** @class */ (function () {
    function RegistroAduana(oficial, codigo, zona) {
        this.oficial = oficial;
        this.codigoSeguridad = codigo;
        this.zona = zona;
    }
    RegistroAduana.prototype.validarEntrada = function () {
        console.log("Oficial ".concat(this.oficial, " validando acceso con c\u00F3digo oculto."));
        this.verificarCodigo(this.codigoSeguridad);
    };
    RegistroAduana.prototype.verificarCodigo = function (cod) {
        if (cod === "1234") {
            console.log("Acceso Concedido.");
        }
        else {
            console.log("Acceso Denegado.");
        }
    };
    return RegistroAduana;
}());
exports.RegistroAduana = RegistroAduana;
