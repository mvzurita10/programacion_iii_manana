"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _09_acceso_mp_1 = require("./09_acceso_mp");
var registro = new _09_acceso_mp_1.RegistroAduana("Teniente Dan", "1234", "Zona Norte");
console.log("Oficial a cargo: ".concat(registro.oficial));
registro.validarEntrada();
