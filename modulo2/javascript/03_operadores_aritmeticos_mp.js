let costoUsoMuelle = 1500;
let costoRemolque = 500;
let tasaImpuesto = 0.15; 
let descuentoCorporativo = 0.10; 

let subtotal = costoUsoMuelle + costoRemolque;
let montoDescuento = subtotal * descuentoCorporativo;
let totalSinImpuesto = subtotal - montoDescuento;
let totalPagar = totalSinImpuesto + (totalSinImpuesto * tasaImpuesto);


let esFacturaAlta = totalPagar > 2000;

console.log("=== DESGLOSE DE FACTURACIÓN ===");
console.log("Subtotal:", subtotal);
console.log("Descuento aplicado:", montoDescuento);
console.log("Total a Pagar (con IVA):", totalPagar);
console.log("¿Es una facturación alta?", esFacturaAlta);