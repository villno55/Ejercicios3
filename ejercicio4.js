const prompt = require("prompt-sync")();


function sumaYPromedio(lista) {
  let sum = 0;
  for (let num of lista) {
    sum += num;
  }
  let promedio = sum / lista.length;
  return { sum, promedio };
}

let entrada = prompt("Ingresa números separados por coma: ");
let lista = entrada.split(",").map(n => parseInt(n));
let resultado = sumaYPromedio(lista);
console.log("Suma:", resultado.suma, "Promedio:", resultado.promedio);
