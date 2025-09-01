const prompt = require("prompt-sync")();

let cuentas = [];
let numCuenta = 1;

function crearCuenta() {
    let anio = new Date().getFullYear();
    let codigo = `${anio}-${numCuenta}`;
    let fecha = new Date().toLocaleDateString();
    numCuenta++;

    let cuenta = { codigo, fecha, saldo: 0 };
    cuentas.push(cuenta);
    console.log("Cuenta creada:", cuenta);
}

function consignar(cod, monto) {
    let cuenta = cuentas.find(c => c.codigo === cod);
    if (!cuenta) {
        console.log("La cuenta no existe");
        return;
    }
    cuenta.saldo += monto;
    console.log(`Se consignaron $${monto} en la cuenta ${cod}. Saldo actual: $${cuenta.saldo}`);
}

function retirar(cod, monto) {
    let cuenta = cuentas.find(c => c.codigo === cod);
    if (!cuenta) {
        console.log("La cuenta no existe");
        return;
    }
    if (cuenta.saldo < monto) {
        console.log("Saldo insuficiente");
        return;
    }
    cuenta.saldo -= monto;
    console.log(`Se retiraron $${monto} de la cuenta ${cod}. Saldo actual: $${cuenta.saldo}`);
}

function verCuenta(cod) {
    let cuenta = cuentas.find(c => c.codigo === cod);
    if (!cuenta) {
        console.log("La cuenta no existe");
        return;
    }
    console.log("Datos de la cuenta:", cuenta);
}

function verTodo() {
    if (cuentas.length === 0) {
        console.log("Ninguna cuenta registrada");
        return;
    }
    console.log("Listado de cuentas:");
    cuentas.forEach(c => console.log(c));
}

function menu() {
    let opcion;
    do {
        console.log(`
MENÚ BANCO ADSO
1. Crear Cuenta
2. Consignar Cuenta
3. Retirar Cuenta
4. Consultar Cuenta Por Código
6. Listar Cuentas
7. Salir
        `);
        opcion = prompt("Ingresa Opción (1-7): ");

        switch (opcion) {
            case "1":
                crearCuenta();
                break;
            case "2":
                let codC = prompt("Ingresa el código de la cuenta: ");
                let montoC = parseFloat(prompt("Ingresa el valor a consignar: "));
                consignar(codC, montoC);
                break;
            case "3":
                let codR = prompt("Ingresa el código de la cuenta: ");
                let montoR = parseFloat(prompt("Ingresa el valor a retirar: "));
                retirar(codR, montoR);
                break;
            case "4":
                let codV = prompt("Ingresa el código de la cuenta: ");
                verCuenta(codV);
                break;
            case "6":
                verTodo();
                break;
            case "7":
                console.log("Saliendo del sistema...");
                break;
            default:
                console.log("Opción no válida");
        }

    } while (opcion !== "7");
}

menu();
