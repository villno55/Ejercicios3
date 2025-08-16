const prompt = require("prompt-sync")();


function buscarPosicion(lista, valor) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === valor) return i;
  }
  return -1;
}

let entrada = prompt("Ingrese elementos separados por coma: ");
let lista = entrada.split(",");
let valor = prompt("¿Qué valor desea buscar?: ");
console.log("Posición:", buscarPosicion(lista, valor));
