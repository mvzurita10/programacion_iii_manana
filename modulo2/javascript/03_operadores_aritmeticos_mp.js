console.log("CONTROL DE PUERTOS MARÍTIMOS MV");
console.log("OPERADORES ARITMÉTICOS");


contenedoresBarco1 = 120;
contenedoresBarco2 = 80;


console.log("Suma: total de contenedores descargados");
totalContenedores = contenedoresBarco1 + contenedoresBarco2;
console.log("Resultado:", totalContenedores);

console.log("Resta: diferencia de carga entre barcos");
diferenciaCarga = contenedoresBarco1 - contenedoresBarco2;
console.log("Resultado:", diferenciaCarga);

console.log("Multiplicación: capacidad total en toneladas");
toneladasPorContenedor = 2; // cada contenedor pesa 2 toneladas
capacidadTotal = contenedoresBarco1 * toneladasPorContenedor;
console.log("Resultado:", capacidadTotal, "toneladas");

console.log("División: promedio de contenedores por barco");
promedio = totalContenedores / 2;
console.log("Resultado:", promedio);


console.log("Módulo: contenedores que no caben en el muelle");
espacioMuelle = 50;
resto = totalContenedores % espacioMuelle;
console.log("Resultado:", resto, "contenedores sin espacio");


console.log("Potencia: simulación de carga energética (ejemplo técnico)");
potencia = 2 ** 3; // 2 elevado a 3
console.log("Resultado:", potencia);

console.log("--------------------------------------------------");
console.log("OPERADORES DE COMPARACIÓN");


console.log("¿Tienen igual cantidad de contenedores?", contenedoresBarco1 == contenedoresBarco2);
console.log("¿Carga estrictamente igual?", contenedoresBarco1 === contenedoresBarco2);
console.log("¿Tienen diferente cantidad de contenedores?", contenedoresBarco1 != contenedoresBarco2);
console.log("¿Carga estrictamente diferente?", contenedoresBarco1 !== contenedoresBarco2);
console.log("¿Barco 1 tiene más carga que Barco 2?", contenedoresBarco1 > contenedoresBarco2);
console.log("¿Barco 1 tiene menos carga?", contenedoresBarco1 < contenedoresBarco2);
console.log("¿Barco 1 tiene igual o mayor carga?", contenedoresBarco1 >= contenedoresBarco2);
console.log("¿Barco 1 tiene igual o menor carga?", contenedoresBarco1 <= contenedoresBarco2);

console.log("--------------------------------------------------");
console.log("OPERADORES LÓGICOS");


permisoAtracar = true;
mareaAlta = false;

console.log("Y (&&): puede atracar si tiene permiso y la marea está baja");
console.log(permisoAtracar && !mareaAlta);

console.log("O (||): puede acercarse si tiene permiso o la marea está tranquila");
console.log(permisoAtracar || mareaAlta);

console.log("Negación (!): verificar si NO tiene permiso para atracar");
console.log(!permisoAtracar);
