const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para calcular el costo base
function calcularCostoBase(pesoKg, distanciaKm) {
    return (pesoKg * 2.50) + (distanciaKm * 0.15);
}

// Función para calcular el seguro
function calcularSeguroEnvio(costoBase) {
    return costoBase * 0.05;
}

// Función para calcular el total
function calcularTotalEnvio(costoBase, seguro) {
    return costoBase + seguro;
}

// Función para mostrar la guía
function mostrarGuiaEnvio(peso, distancia, base, seguro, total) {
    console.log("\n====================================");
    console.log("        GUÍA DE ENVÍO EXPRESS");
    console.log("====================================");
    console.log(`Peso del paquete : ${peso.toFixed(2)} kg`);
    console.log(`Distancia        : ${distancia.toFixed(2)} km`);
    console.log("------------------------------------");
    console.log(`Costo base       : $${base.toFixed(2)}`);
    console.log(`Seguro 5%        : $${seguro.toFixed(2)}`);
    console.log("------------------------------------");
    console.log(`TOTAL DEL ENVÍO  : $${total.toFixed(2)}`);
    console.log("====================================");
}

// Flujo principal: primero solicita el peso
rl.question("Ingrese el peso del paquete en kg: ", function(respuestaPeso) {

    const peso = parseFloat(respuestaPeso);

    if (isNaN(peso) || peso < 0) {
        console.log("Error: ingrese un peso válido.");
        rl.close();
        return;
    }

    // Luego solicita la distancia
    rl.question("Ingrese la distancia en km: ", function(respuestaDistancia) {

        const distancia = parseFloat(respuestaDistancia);

        if (isNaN(distancia) || distancia < 0) {
            console.log("Error: ingrese una distancia válida.");
            rl.close();
            return;
        }

        const base = calcularCostoBase(peso, distancia);
        const seguro = calcularSeguroEnvio(base);
        const total = calcularTotalEnvio(base, seguro);

        mostrarGuiaEnvio(peso, distancia, base, seguro, total);

        rl.close();
    });
});