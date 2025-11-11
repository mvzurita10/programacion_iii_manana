// CONTROL DE PUERTOS MARITIMOS

class Embarcacion {
    constructor(nombre) {
        this.nombre = nombre;
    }

    emitirAlerta() {
        console.log("La embarcacion emite una señal estandar de puerto.");
    }
}

class BarcoMercante extends Embarcacion {}

const barcoCarga = new BarcoMercante('Comerciante del Mar');
const embarcacionGeneral = new Embarcacion('Nave Puerto Azul');

barcoCarga.emitirAlerta();
embarcacionGeneral.emitirAlerta();
