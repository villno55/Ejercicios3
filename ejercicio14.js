const prompt = require("prompt-sync")();

function elecciones() {
  const MAX_VOTANTES = 50;
  const CLAVE = "1509";

  let votos = {
    candidato1: 0,
    candidato2: 0,
    candidato3: 0,
    blanco: 0
  };

  let totalVotos = 0;

  while (totalVotos < MAX_VOTANTES) {
    console.log("\n MENU ELECTORAL ");
    console.log("1. Candidato Uno");
    console.log("2. Candidato Dos");
    console.log("3. Candidato Tres");
    console.log("4. voto en  Blanco");
    console.log("5. Cerrar elecciones");

    let opcion = parseInt(prompt("Ingrese su voto: "));

    if (opcion >= 1 && opcion <= 4) {
      if (opcion === 1) votos.candidato1++;
      if (opcion === 2) votos.candidato2++;
      if (opcion === 3) votos.candidato3++;
      if (opcion === 4) votos.blanco++;
      totalVotos++;
      console.log(`Voto registrado. Total votos: ${totalVotos}`);
    } else if (opcion === 5) {
      let clave = prompt("Ingrese la clave del presidente: ");
      if (clave === CLAVE) {
        console.log("Las elecciones fueron cerradas por el presidente.");
        break;
      } else {
        console.log("clave denegada. seguiimos con la votación.");
      }
    } else {
      console.log("Opción inválida, intente de nuevo.");
    }
  }


  console.log("\n RESULTADOS TOTALS");
  console.log("Número de personas que votaron: " + totalVotos);
  console.log("Candidato Uno: " + votos.candidato1);
  console.log("Candidato Dos: " + votos.candidato2);
  console.log("Candidato Tres: " + votos.candidato3);
  console.log("Votos en blanco: " + votos.blanco);
}

elecciones();
