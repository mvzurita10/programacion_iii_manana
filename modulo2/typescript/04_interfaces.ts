interface Usuario {
    id: number;
    nombre: string;
    correo?: string;
}

const usuario1: Usuario = {
    id: 1,
    nombre: 'Mikaela Zurita'
}

const usuario2: Usuario = {
    id: 2,
    nombre: 'Josue Merino',
    correo: 'josue.merino@example.com'
}

console.log(usuario1);
console.log(usuario1.id);
console.log(usuario1.nombre);
console.log(usuario1.correo);
console.log(usuario2);
console.log(usuario2.id);
console.log(usuario2.nombre);
console.log(usuario2.correo);