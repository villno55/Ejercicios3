
const prompt = require("prompt-sync")();


function quitarRepetidos(lista) {
  let resultado = [];
  for (let num of lista) {
    if (!resultado.includes(num)) {
      resultado.push(num);
    }
  }
  return resultado;
}

let entrada = prompt("Ingrese números separados por coma: ");
let lista = entrada.split(",").map(n => parseInt(n));
console.log("Sin duplicados:", quitarRepetidos(lista));
