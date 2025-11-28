"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _07_persona_mp_1 = require("./07_persona_mp");
var capitan1 = new _07_persona_mp_1.Capitan("Juan Pérez", "LIC-INT-2025", 5000);
var capitan2 = new _07_persona_mp_1.Capitan("Sarah Connor", "LIC-USA-9988", 8200);
console.log("=== REGISTRO DE CAPITANES EN PUERTO ===");
capitan1.mostrarCredencial();
capitan2.mostrarCredencial();
