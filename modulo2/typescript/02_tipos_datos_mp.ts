let matriculaBuqueID: string = "IMO-9876543";
let tonelajeCarga: number = 4500.50;
let estaEnMuelle: boolean = true;  
let tipoCarga: any = "Contenedores Refrigerados"; 


if (tonelajeCarga > 3000 && estaEnMuelle) {
    console.log(`El buque ${matriculaBuqueID} requiere grúa pórtico pesada.`);
} else {
    console.log(`El buque ${matriculaBuqueID} puede usar grúa estándar.`);
}

let destinos: string[] = ['Rotterdam', 'Shanghai', 'Panamá', 'Hamburgo'];
console.log("Próximos destinos:");
for (let i = 0; i < destinos.length; i++) {
    console.log(`- ${destinos[i]}`);
}