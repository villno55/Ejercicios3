const prompt = require("prompt-sync")();


function invertir(lista) {
  let invertida = [];
  for (let i = lista.length - 1; i >= 0; i--) {
    invertida.push(lista[i]);
  }
  return invertida;
}

let entrada = prompt("Ingresa números separados por coma: ");
let lista = entrada.split(",").map(n => parseInt(n));
console.log("Invertida:", invertir(lista));
