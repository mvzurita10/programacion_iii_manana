class Empleado{
    constructor(nombre, salario){
        this.nombre = nombre;
        this.salario = salario;
    }
    trabajar(){
        console.log("empleado trabajando");
    }
    calcularVacaciones(){
        return this.salario * 0.15;
    }
    horasExtra(horas){
        return ((this.salario /30)/8) * horas * 2;
    }
}
class Programador extends Empleado{
    calcularVacaciones(){
        return this.salario * 0.20;
    }
    horasExtra(horas){
        return ((this.salario /30)/8) * horas * 3;
    }
}

class Diseñador extends Empleado{
    calcularVacaciones(){
        return this.salario * 0.10;
    }
}

const proPedro = new Programador('Pedro', 2000);
const disJuan = new Diseñador('Juan', 1200);
proPedro.trabajar();
disJuan.trabajar();
console.log(proPedro.calcularVacaciones());
console.log(disJuan.calcularVacaciones());
console.log(proPedro.horasExtra(5));
console.log(disJuan.horasExtra(4)); 