const prompt = require("prompt-sync")();

let cuentas = [];
let numCuenta = 1;

function crearCuenta() {
  let anio = new Date().getFullYear();
  let codigo = anio + "-" + numCuenta;
  numCuenta++;

  let cuenta = {
    codigo: codigo,
    saldo: 0
  };

  cuentas.push(cuenta);
  return cuenta;
}

function consigna(cod, plata) {
  for (let c of cuentas) {
    if (c.codigo === cod) {
      c.saldo = c.saldo + plata;
    }
  }
}

function retira(cod, plata) {
  for (let c of cuentas) {
    if (c.codigo === cod && c.saldo >= plata) {
      c.saldo = c.saldo - plata;
    }
  }
}

function verCuenta(cod) {
  for (let c of cuentas) {
    if (c.codigo === cod) {
      return c;
    }
  }
  return "no existe";
}

function verTodo() {
  return cuentas;
}

// uso
let c1 = crearCuenta();
console.log("Se creó cuenta:", c1);

let monto = parseInt(prompt("Cuánto mete a la cuenta?: "));
consignar(c1.codigo, monto);

let saca = parseInt(prompt("Cuánto saca?: "));
retirar(c1.codigo, saca);

console.log("Cuenta finalb:", verCuenta(c1.codigo));


