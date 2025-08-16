const prompt = require("prompt-sync")();


function crearPassword() {
  let letrasMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let letrasMinus = "abcdefghijklmnopqrstuvwxyz";
  let numeros = "0123456789";
  let simbolos = "@#$%&()=?¿*+[]{}";

  function escogerCaracter(lista) {
    let pos = Math.floor(Math.random() * lista.length);
    return lista[pos];
  }

  let clave = "";
  clave += escogerCaracter(letrasMayus);
  clave += escogerCaracter(letrasMayus);
  clave += escogerCaracter(letrasMinus);
  clave += escogerCaracter(letrasMinus);
  clave += escogerCaracter(numeros);
  clave += escogerCaracter(numeros);
  clave += escogerCaracter(simbolos);
  clave += escogerCaracter(simbolos);

  return clave;
}

console.log("Contraseña generada:", crearPassword());
