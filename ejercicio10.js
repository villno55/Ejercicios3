const prompt = require("prompt-sync")();


function cambiarValor(lista, viejo, nuevo) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === viejo) {
      lista[i] = nuevo;
    }
  }
  return lista;
}

let entrada = prompt("Ingrese elementos separados por coma: ");
let lista = entrada.split(",");
let viejo = prompt("Valor a reemplazar: ");
let nuevo = prompt("Nuevo valor: ");
console.log("Resultado: ", cambiarValor(lista, viejo, nuevo));

