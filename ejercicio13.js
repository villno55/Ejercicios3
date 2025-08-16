const prompt = require("prompt-sync")();


function crearAlumno(nombre, notas) {
  return {
    nombre: nombre,
    notas: notas,
    promedio: function() {
      let suma = 0;
      for (let nota of this.notas) {
        suma += nota;
      }
      return suma / this.notas.length;
    }
  };
}

let nombre = prompt("Nombre del alumno: ");
let entrada = prompt("Notas separadas por coma: ");
let notas = entrada.split(",").map(n => parseFloat(n));
let alumno = crearAlumno(nombre, notas);
console.log(alumno.nombre,"-> promedio:", alumno.promedio());
