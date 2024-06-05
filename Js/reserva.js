// reserva.js

class Reserva {
    constructor(id, fechaReserva, fechaCheckIn, fechaCheckOut, huesped, habitacion, servicioAdicional) {
        this.id = id;
        this.fechaReserva = fechaReserva;
        this.fechaCheckIn = fechaCheckIn;
        this.fechaCheckOut = fechaCheckOut;
        this.huesped = huesped;
        this.habitacion = habitacion;
        this.servicioAdicional = servicioAdicional;
    }

    crearReserva() {
        console.log(`Reserva creada para ${this.huesped.nombre} ${this.huesped.apellido} en la habitación ${this.habitacion.numero}.`);
    }
}

export default Reserva;
