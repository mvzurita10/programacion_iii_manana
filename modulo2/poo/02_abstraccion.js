class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    mayorEdad(){
        if(edad >= 18){
            console.log("es mayor de edad");
        } else {
            console.log("es menor de edad");
        }
    }
    mostrar(){
        console.log(this.nombre, this.edad);
    }
}

const josue = new Persona('Josue', 17);
josue.mostrar();
josue.mayorEdad();  