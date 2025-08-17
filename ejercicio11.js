const prompt = require("prompt-sync")();


function buscarCapital(pais) {
  let listaPaises = new Map([
    ["China","pekin"],
    ["honduras","tegucigalpa"],
    ["rusia","moscu"],
    ["japon","tokio"],
    ["Perú","Lima"],
    ["brazil","brasilia"],
    ["portugal","lisboa"],
    ["India","new delhi"],
    ["Alemania","Berlín"],
    ["canada","toronto"]
  ]);
  return listaPaises.get(pais) || "País no registrado";
}

let pais = prompt("Escriba un país: ");
console.log("Capital: ", buscarCapital(pais));

