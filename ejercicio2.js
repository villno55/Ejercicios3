
function contarVocales(texto) {
  return (texto.match(/[aeiouáéíóú]/gi) || []).length; //Se usa g e i para q tenga encuentra tanto mayúsculas y minusculas
}

console.log(contarVocales("Hola Mundo"));

