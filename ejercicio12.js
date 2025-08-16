const prompt = require("prompt-sync")();


function manejarProductos() {
  let precios = new Map();
  let historial = [];

  function agregarProducto(nombre, precio) {
    precios.set(nombre, precio);
    historial.push(nombre);
  }

  let cantidad = parseInt(prompt("¿Cuántos productos queres ingresar?: "));
  for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Nombre del producto: ");
    let precio = parseInt(prompt("Precio del producto: "));
    agregarProducto(nombre, precio);
  }

  let productosUnicos = new Set(historial);

  return { productosUnicos, precios, historial };
}

console.log(manejarProductos());
