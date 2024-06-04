// reserva.js
import Personal from './Personal.js';
import Huesped from './Huesped.js';
import Habitacion from './Habitacion.js';
import Factura from './Factura.js';

const Reserva = {
    // Método para realizar una reserva
    hacerReserva: function(nombrePersonal, apellidoPersonal, documentoIdentidadPersonal, turnoPersonal,
        nombreHuesped, apellidoHuesped, documentoIdentidadHuesped, cantidadPersonasHuesped,
        numeroPisoHabitacion, numeroHabitacion, diaIngreso, diaSalida) {

        // Establecer datos del personal
        Personal.setPersonal(nombrePersonal, apellidoPersonal, documentoIdentidadPersonal, turnoPersonal);

        // Establecer datos del huésped
        Huesped.setHuesped(nombreHuesped, apellidoHuesped, documentoIdentidadHuesped, cantidadPersonasHuesped);

        // Establecer datos de la habitación
        Habitacion.setHabitacion(numeroPisoHabitacion, numeroHabitacion);

        // Generar factura
        Factura.generarFactura(Huesped, diaIngreso, diaSalida);
    },
};

export default Reserva;
