// CONTROL DE PUERTOS MARITIMOS

class Barco {
    constructor(nombre, tonelaje) {
        this.nombre = nombre;
        this.tonelaje = tonelaje; // en toneladas
    }

    autorizadoZarpar() {
        if (this.tonelaje >= 500) {
            console.log(`El barco "${this.nombre}" esta autorizado a zarpar (tonelaje: ${this.tonelaje} t).`);
        } else {
            console.log(`El barco "${this.nombre}" NO esta autorizado a zarpar (tonelaje insuficiente: ${this.tonelaje} t).`);
        }
    }

    mostrarInfo() {
        console.log(`Nombre del barco: ${this.nombre} | Tonelaje: ${this.tonelaje} toneladas`);
    }
}

const barco1 = new Barco('Mar Azul', 450);


barco1.mostrarInfo();
barco1.autorizadoZarpar();
