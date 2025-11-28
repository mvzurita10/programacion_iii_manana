import { Capitan } from "./07_persona_mp";

const capitan1 = new Capitan("Juan Pérez", "LIC-INT-2025", 5000);
const capitan2 = new Capitan("Sarah Connor", "LIC-USA-9988", 8200);

console.log("=== REGISTRO DE CAPITANES EN PUERTO ===");
capitan1.mostrarCredencial();
capitan2.mostrarCredencial(); 