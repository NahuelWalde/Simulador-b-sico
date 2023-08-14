alert("Hola")

let totalGastado = 0;
const gastos = [];

function agregarGasto(nombre, cantidad) {
    gastos.push({ nombre, cantidad });
    totalGastado += cantidad;
}

function mostrarGastos() {
    alert("Lista de gastos:");
    for (let gasto of gastos) {
        alert(`${gasto.nombre}: $${gasto.cantidad}`);
    }
    alert(`Total gastado: $${totalGastado}`);
}

alert("Bienvenido al Simulador de Gastos");

while (true) {
    let opcion = prompt("¿Qué deseas hacer?\n1. Agregar gasto\n2. Mostrar gastos\n3. Salir");

    switch (opcion) {
        case "1":
            let nombreGasto = prompt("Ingresa el nombre del gasto:");
            let cantidadGasto = parseFloat(prompt("Ingresa la cantidad del gasto:"));
            agregarGasto(nombreGasto, cantidadGasto);
            break;
        case "2":
            mostrarGastos();
            break;
        case "3":
            alert("Gracias por usar el Simulador de Gastos. ¡Hasta luego!");
        default:
            alert("Opción inválida. Por favor, elige una opción válida.");
    }
}