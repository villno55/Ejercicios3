const prompt = require("prompt-sync")();


function contarPalabras(texto) {
  let partes = texto.trim().split(" ");
  let cantidad = 0;
  for (let palabra of partes) {
    if (palabra !== "") cantidad++;
  }
  return cantidad;
}

let texto = prompt("Escribi una frase: ");
console.log("Cantidad de palabras:", contarPalabras(texto));
