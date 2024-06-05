// script.js

import Huesped from './huesped.js';
import Reserva from './reserva.js';
import Habitacion from './habitacion.js';
import ServicioAdicional from './servicioAdicional.js';
import Factura from './factura.js';

const huespedes = [];
const habitaciones = [];
for (let i = 1; i <= 100; i++) {
    habitaciones.push(new Habitacion(i, i.toString(), 100));
}
const reservas = [];

// Función para mostrar alertas personalizadas
function mostrarAlerta(mensaje, tipo) {
    const alertaDiv = document.createElement('div');
    alertaDiv.className = `alerta ${tipo}`;
    alertaDiv.innerHTML = `
        <img src="${tipo === 'error' ? '../img/error.png' : '../img/icono_visto.jpg'}" alt="${tipo}">
        <p>${mensaje}</p>
    `;
    document.body.appendChild(alertaDiv);

    setTimeout(() => {
        alertaDiv.remove();
    }, 3000);
}

// Función para mostrar la factura
function mostrarFactura(huesped, habitacion, fechaCheckIn, fechaCheckOut, servicioAdicional) {
    const facturaSection = document.getElementById('factura');
    const facturaDetalles = document.getElementById('facturaDetalles');
    const dias = (new Date(fechaCheckOut) - new Date(fechaCheckIn)) / (1000 * 60 * 60 * 24);
    const total = dias * 100;

    facturaDetalles.innerHTML = `
        <p>Nombre: ${huesped.nombre} ${huesped.apellido}</p>
        <p>Habitación: ${habitacion.numero}</p>
        <p>Fecha de Ingreso: ${fechaCheckIn}</p>
        <p>Fecha de Salida: ${fechaCheckOut}</p>
        <p>Servicio Adicional: ${servicioAdicional}</p>
        <p>Total a Pagar: $${total}</p>
    `;
    facturaSection.classList.remove('hidden');
}

// Registrar evento para el formulario de huésped
document.getElementById('huespedForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const docIdentificacion = document.getElementById('docIdentificacion').value;

    const huesped = new Huesped(huespedes.length + 1, nombre, apellido, direccion, telefono, email, docIdentificacion);
    huesped.registrar();
    huespedes.push(huesped);

    mostrarAlerta('Huésped registrado exitosamente', 'exito');
    e.target.reset();
});

// Registrar evento para el formulario de reserva
document.getElementById('reservaForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const fechaReserva = document.getElementById('fechaReserva').value;
    const fechaCheckIn = document.getElementById('fechaCheckIn').value;
    const fechaCheckOut = document.getElementById('fechaCheckOut').value;
    const habitacionNumero = parseInt(document.getElementById('habitacionNumero').value);
    const servicioAdicional = document.getElementById('servicioAdicional').value;

    const huesped = huespedes[huespedes.length - 1];  // Último huésped registrado
    const habitacion = habitaciones.find(h => h.numero == habitacionNumero);

    if (huesped && habitacion) {
        const reserva = new Reserva(reservas.length + 1, fechaReserva, fechaCheckIn, fechaCheckOut, huesped, habitacion, servicioAdicional);
        reserva.crearReserva();
        reservas.push(reserva);

        mostrarFactura(huesped, habitacion, fechaCheckIn, fechaCheckOut, servicioAdicional);
        mostrarAlerta('Reserva creada exitosamente', 'exito');
        e.target.reset();
    } else {
        if (!huesped) {
            console.error('Error: Huésped no encontrado. Lista de huéspedes:', huespedes);
        }
        if (!habitacion) {
            console.error('Error: Habitación no encontrada. Número ingresado:', habitacionNumero);
        }
        mostrarAlerta('Huésped o habitación no encontrados', 'error');
    }
});
