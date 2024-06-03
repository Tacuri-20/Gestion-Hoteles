class Turno {
    constructor(fechaHoraInicio, fechaHoraFin) {
        this.id = ++Turno.contador;
        this.fechaHoraInicio = fechaHoraInicio;
        this.fechaHoraFin = fechaHoraFin;
    }

    asignarTurnoPersonal(personal) {
        personal.agregarTurno(this);
    }

    // Getters y setters
    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getFechaHoraInicio() {
        return this.fechaHoraInicio;
    }

    setFechaHoraInicio(fechaHoraInicio) {
        this.fechaHoraInicio = fechaHoraInicio;
    }

    getFechaHoraFin() {
        return this.fechaHoraFin;
    }

    setFechaHoraFin(fechaHoraFin) {
        this.fechaHoraFin = fechaHoraFin;
    }
}

// Propiedad estática para el contador de instancias
Turno.contador = 0;
