class Factura {
    constructor(reserva) {
        this.id = ++Factura.contador;
        this.fechaEmision = new Date();
        this.reserva = reserva;
        this.montoTotal = this.calcularMontoTotal();
    }

    generarFactura() {
        console.log("Factura generada: ");
        console.log("ID: " + this.id);
        console.log("Fecha de emisión: " + this.fechaEmision);
        console.log("Monto total: " + this.montoTotal);
    }

    calcularMontoTotal() {
        let total = this.reserva.getHabitacion().getPrecio();
        this.reserva.getServiciosAdicionales().forEach(servicio => {
            total += servicio.getPrecio();
        });
        return total;
    }

    // Getters y setters
    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getFechaEmision() {
        return this.fechaEmision;
    }

    setFechaEmision(fechaEmision) {
        this.fechaEmision = fechaEmision;
    }

    getMontoTotal() {
        return this.montoTotal;
    }

    setMontoTotal(montoTotal) {
        this.montoTotal = montoTotal;
    }

    getReserva() {
        return this.reserva;
    }

    setReserva(reserva) {
        this.reserva = reserva;
    }
}

// Propiedad estática para el contador de instancias
Factura.contador = 0;
