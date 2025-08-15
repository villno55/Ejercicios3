function generarClave() {
    let letrasMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letrasMinus = "abcdefghijklmnopqrstuvwxyz";
    let numeros = "0123456789";
    let simbolos = "@#$%&()=?¿*+[]{}";

    function obtenerAleatorio(cadena, cantidad) {
        let resultado = "";
        for (let i = 0; i < cantidad; i++) {
            let indice = Math.floor(Math.random() * cadena.length);
            resultado += cadena[indice];
        }
        return resultado;
    }

    let clave = obtenerAleatorio(letrasMayus, 2) +
                obtenerAleatorio(letrasMinus, 2) +
                obtenerAleatorio(numeros, 2) +
                obtenerAleatorio(simbolos, 2);

    return clave;
}

console.log(generarClave());
