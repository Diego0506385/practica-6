const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para calcular el costo del consumo
function calcularCostoConsumo(kwh) {
    return kwh * 0.18;
}

// Función para calcular la tasa de servicios
function calcularTasaServicios(subtotal) {
    return subtotal * 0.08;
}

// Función para calcular el total
function calcularTotalFactura(subtotal, tasa) {
    return subtotal + tasa;
}

// Función para imprimir la factura
function imprimirFacturaLuz(kwh, subtotal, tasa, total) {
    console.log("\n====================================");
    console.log("        FACTURA DE ENERGÍA");
    console.log("====================================");
    console.log(`Consumo          : ${kwh.toFixed(2)} kWh`);
    console.log(`Costo consumo    : $${subtotal.toFixed(2)}`);
    console.log(`Tasa servicios 8%: $${tasa.toFixed(2)}`);
    console.log("------------------------------------");
    console.log(`TOTAL A PAGAR    : $${total.toFixed(2)}`);
    console.log("====================================");
}

// Flujo principal
rl.question("Ingrese los kWh consumidos en el mes: ", function(respuesta) {

    const kwh = parseFloat(respuesta);

    if (isNaN(kwh) || kwh < 0) {
        console.log("Error: ingrese una cantidad válida.");
        rl.close();
        return;
    }

    const subtotal = calcularCostoConsumo(kwh);
    const tasa = calcularTasaServicios(subtotal);
    const total = calcularTotalFactura(subtotal, tasa);

    imprimirFacturaLuz(kwh, subtotal, tasa, total);

    rl.close();
});