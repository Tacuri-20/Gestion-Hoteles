class CheckInCheckOut {
    constructor(fechaHoraCheckIn, fechaHoraCheckOut) {
        this.id = ++CheckInCheckOut.contador;
        this.fechaHoraCheckIn = fechaHoraCheckIn;
        this.fechaHoraCheckOut = fechaHoraCheckOut;
    }

    registrarCheckIn() {
        this.fechaHoraCheckIn = new Date();
        return true;
    }

    registrarCheckOut() {
        this.fechaHoraCheckOut = new Date();
        return true;
    }

    // Getters y setters
    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getFechaHoraCheckIn() {
        return this.fechaHoraCheckIn;
    }

    setFechaHoraCheckIn(fechaHoraCheckIn) {
        this.fechaHoraCheckIn = fechaHoraCheckIn;
    }

    getFechaHoraCheckOut() {
        return this.fechaHoraCheckOut;
    }

    setFechaHoraCheckOut(fechaHoraCheckOut) {
        this.fechaHoraCheckOut = fechaHoraCheckOut;
    }
}

// Propiedad estática para el contador de instancias
CheckInCheckOut.contador = 0;
