console.log("Bucle for")
for (let i = 1; i <=10; i++){
    console.log("numero", i);
}

suma=0;
for (let i = 1; i <=10; i++){
    suma+=i;
}
console.log("sumatoria indices:", suma);

let nombre="mikaela";
for (let i=0; i <nombre.length; i++){
    console.log(nombre[i]); 
}

for (let i = 1; i <= 10; i++){
    console.log("cuadrado de", i, "es", i**2);
}

console.log("Bucle while");
let i=1;
while (i <=6){
    console.log("numero", i);
    i++;
}

let miArreglo=[-2,3,1,2,3];
let indice=1;
while(indice<miArreglo.length){
    console.log("valor", indice, "es", miArreglo[indice]);
    indice++;
}

let numero=1;
while (numero<=100){
    if (numero % 2 ==0)
    console.log("Numero", numero, "es par");
    numero++;
}

let x=5;
do {
    console.log(x, "es", x);
    x--;
} while (x!=0); 

let mult=1;
while(mult<=10){
    console.log("+5=", mult*5);
    mult++;
}

let miArreglo2=[-2,3,1,2,3];
let indice2=0;
let mayor=0;
while(indice2<miArreglo2.length){
    if (miArreglo2[indice2]>mayor){
        mayor=miArreglo2[indice2];
    }
    indice2++;
}
console.log(mayor); 