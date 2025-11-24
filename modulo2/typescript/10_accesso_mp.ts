import { RegistroAduana } from "./09_acceso_mp";

const registro = new RegistroAduana("Teniente Dan", "1234", "Zona Norte");

console.log(`Oficial a cargo: ${registro.oficial}`);


registro.validarEntrada(); 