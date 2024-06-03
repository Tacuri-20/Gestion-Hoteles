class Reserva {
    constructor(id, fechaInicio, fechaFin, pagado, estado, huesped, habitacion) {
        this.id = id;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.pagado = pagado;
        this.estado = estado;
        this.huesped = huesped;
        this.habitacion = habitacion;
        this.serviciosAdicionales = [];
    }

    checkIn() {
        this.estado = "Checked In";
    }

    checkOut() {
        this.estado = "Checked Out";
        // Generar factura al hacer check-out
        let factura = new Factura(this);
        factura.generarFactura();
    }

    agregarServicio(servicio) {
        this.serviciosAdicionales.push(servicio);
    }

    // Getters y setters
    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getFechaInicio() {
        return this.fechaInicio;
    }

    setFechaInicio(fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    getFechaFin() {
        return this.fechaFin;
    }

    setFechaFin(fechaFin) {
        this.fechaFin = fechaFin;
    }

    isPagado() {
        return this.pagado;
    }

    setPagado(pagado) {
        this.pagado = pagado;
    }

    getEstado() {
        return this.estado;
    }

    setEstado(estado) {
        this.estado = estado;
    }

    getHuesped() {
        return this.huesped;
    }

    setHuesped(huesped) {
        this.huesped = huesped;
    }

    getHabitacion() {
        return this.habitacion;
    }

    setHabitacion(habitacion) {
        this.habitacion = habitacion;
    }

    getServiciosAdicionales() {
        return this.serviciosAdicionales;
    }

    setServiciosAdicionales(serviciosAdicionales) {
        this.serviciosAdicionales = serviciosAdicionales;
    }
}
