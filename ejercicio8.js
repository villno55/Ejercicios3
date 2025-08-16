const prompt = require("prompt-sync")();


function ponerEnMayusculas(lista) {
  let resultado = [];
  for (let nombre of lista) {
    resultado.push(nombre.toUpperCase());
  }
  return resultado;
}

let entrada = prompt("Ingrese nombres separados por coma: ");
let lista = entrada.split(",");
console.log("En mayúsculas:", ponerEnMayusculas(lista));
