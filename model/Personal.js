class Personal {
    constructor(nombre, apellido, puesto) {
        this.id = ++Personal.contador;
        this.nombre = nombre;
        this.apellido = apellido;
        this.puesto = puesto;
        this.turnos = [];
    }

    agregarTurno(turno) {
        this.turnos.push(turno);
    }

    // Getters y setters
    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getApellido() {
        return this.apellido;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }

    getPuesto() {
        return this.puesto;
    }

    setPuesto(puesto) {
        this.puesto = puesto;
    }

    getTurnos() {
        return this.turnos;
    }

    setTurnos(turnos) {
        this.turnos = turnos;
    }
}

// Propiedad estática para el contador de instancias
Personal.contador = 0;
