// CONTROL DE PUERTOS MARITIMOS

class EmpleadoPortuario {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    trabajar() {
        console.log("Empleado portuario realizando tareas en el muelle");
    }

    calcularDescanso() {
        return this.salario * 0.15; // 15% de su salario como beneficio de descanso
    }

    horasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 2; // pago doble por horas extra
    }
}

class Capitan extends EmpleadoPortuario {
    calcularDescanso() {
        return this.salario * 0.20; // los capitanes ganan mas descanso por responsabilidad
    }

    horasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 3; // pago triple por horas extra
    }
}

class OperadorGrua extends EmpleadoPortuario {
    calcularDescanso() {
        return this.salario * 0.10; // menos descanso por turno rotativo
    }
}

const capitanPedro = new Capitan('Pedro', 2000);
const operadorJuan = new OperadorGrua('Juan', 1200);


capitanPedro.trabajar();
operadorJuan.trabajar();


console.log("Descanso de Pedro (Capitan):", capitanPedro.calcularDescanso());
console.log("Descanso de Juan (Operador de Grua):", operadorJuan.calcularDescanso());
console.log("Pago horas extra de Pedro:", capitanPedro.horasExtra(5)); 
console.log("Pago horas extra de Juan:", operadorJuan.horasExtra(4));
