class Habitacion {
    constructor(id, numero, precio, tipo) {
        this.id = id;
        this.numero = numero;
        this.precio = precio;
        this.tipo = tipo;
        this.reservas = [];
    }

    generarFactura(reserva) {
        let factura = new Factura(reserva);
        factura.generarFactura();
    }

    estaDisponible(fechaInicio, fechaFin) {
        for (let reserva of this.reservas) {
            if (reserva.getFechaInicio() < fechaFin && reserva.getFechaFin() > fechaInicio) {
                return false;
            }
        }
        return true;
    }

    agregarReserva(reserva) {
        this.reservas.push(reserva);
    }

    // Getters y setters
    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getNumero() {
        return this.numero;
    }

    setNumero(numero) {
        this.numero = numero;
    }

    getPrecio() {
        return this.precio;
    }

    setPrecio(precio) {
        this.precio = precio;
    }

    getTipo() {
        return this.tipo;
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }

    getReservas() {
        return this.reservas;
    }

    setReservas(reservas) {
        this.reservas = reservas;
    }
}
