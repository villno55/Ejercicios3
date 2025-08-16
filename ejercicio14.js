const prompt = require("prompt-sync")();

function simulacionVotos(maxPersonas) {
  let votos = { candidato1:0, candidato2:0, candidato3:0, blanco:0 };
  let total = 0;

  while (total < maxPersonas) {
    let opcion = Math.floor(Math.random()*4)+1;
    if (opcion===1) votos.candidato1++;
    else if (opcion===2) votos.candidato2++;
    else if (opcion===3) votos.candidato3++;
    else votos.blanco++;
    total++;
  }
  return { total, votos };
}

let personas = parseInt(prompt("¿Cuántas personas votan?: "));
console.log(simulacionVotos(personas));
