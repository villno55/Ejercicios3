
function contarVocales(texto) {
  return (texto.match(/[aeiouáéíóú]/gi) || []).length;
}

console.log(contarVocales("Hola Mundo"));
