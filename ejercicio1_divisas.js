const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para convertir dólares a euros
function convertirUSDToEUR(dolares) {
    return dolares * 0.92;
}

// Función para convertir dólares a yenes
function convertirUSDToJPY(dolares) {
    return dolares * 155.50;
}

// Función para mostrar el ticket
function mostrarTicketDivisas(dolares, euros, yenes) {
    console.log("\n====================================");
    console.log("       CONVERSOR DE DIVISAS");
    console.log("====================================");
    console.log(`Dólares USD : $${dolares.toFixed(2)}`);
    console.log(`Euros EUR   : €${euros.toFixed(2)}`);
    console.log(`Yenes JPY   : ¥${yenes.toFixed(2)}`);
    console.log("====================================");
}

// Flujo principal
rl.question("Ingrese la cantidad en dólares (USD): ", function(respuesta) {

    const dolares = parseFloat(respuesta);

    if (isNaN(dolares) || dolares < 0) {
        console.log("Error: ingrese una cantidad válida.");
        rl.close();
        return;
    }

    const euros = convertirUSDToEUR(dolares);
    const yenes = convertirUSDToJPY(dolares);

    mostrarTicketDivisas(dolares, euros, yenes);

    rl.close();
});