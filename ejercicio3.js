const prompt = require("prompt-sync")();


function contarPares(lista) {
  let pares = 0;
  for (let num of lista) {
    if (num % 2 === 0) pares++;
  }
  return pares;
}

let entrada = prompt("Escribi números separados por coma: ");
let lista = entrada.split(",").map(n => parseInt(n));
console.log("Cantidad de pares:", contarPares(lista));
