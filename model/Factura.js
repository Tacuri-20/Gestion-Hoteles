// factura.js
import Huesped from './Huesped.js';
import CheckInOut from './CheckinCheckout.js';

const Factura = {
    // Método para generar la factura
    generarFactura: function(huesped, diaIngreso, diaSalida) {
        const fechaIngreso = CheckInOut.getFechaIngreso();
        const fechaSalida = CheckInOut.getFechaSalida();

        // Calcular el total de días de estancia
        const diasEstancia = (fechaSalida - fechaIngreso) / (1000 * 60 * 60 * 24);

        // Calcular el total a pagar
        const totalAPagar = diasEstancia * 100;

        // Generar la factura con los datos del huésped y el total a pagar
        console.log('Factura generada:');
        console.log('Nombre: ' + huesped.nombre + ' ' + huesped.apellido);
        console.log('Documento de Identidad: ' + huesped.documentoIdentidad);
        console.log('Fecha de ingreso: ' + diaIngreso);
        console.log('Fecha de salida: ' + diaSalida);
        console.log('Total a pagar: $' + totalAPagar);
    },
};

export default Factura;
