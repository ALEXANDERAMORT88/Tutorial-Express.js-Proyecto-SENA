// Ejemplo de uso de JavaScript 
const nombre = "Alexander";

function saludar(nombre) {
    return `Hola, ${nombre}`;
};

console.log(saludar(nombre));



// Creando servidor con Express.js

const express = require('express');
const app = express();

// Ruta de prueba 
app.get('/', (req, res) => {
    res.end('¡Hola mundo con Express');
});

// El servidor queda escuchando
app.listen(3000, () => {
    console.log("Serrvidor corriendo en http://localhost:3000");
});
