// Importar las clases necesarias
import { Huesped } from '.js/Huesped.js';
import { Habitacion } from '.js/Habitacion.js';
import { Personal } from '.js/Personal.js';
import { Turno } from './Turno.js';
import { CheckinCheckout } from '.js/CheckinCheckout.js';
import { Factura } from '.js/Factura.js';
import { Reserva } from '.js/Reserva.js';

// Función para manejar el botón Siguiente
document.getElementById("btn-siguiente").addEventListener("click", function() {
    // Obtener los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const documento = document.getElementById("documento").value;
    const cantidad = document.getElementById("cantidad").value;

    // Crear una instancia de Huesped con los datos
    const huesped = new Huesped(nombre, apellido, documento, cantidad);

    // Realizar acciones adicionales si es necesario
});
