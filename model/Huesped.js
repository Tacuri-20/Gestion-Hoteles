class Huesped {
    constructor(id, nombre, direccion, telefono, email, documentoIdentidad) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.documentoIdentidad = documentoIdentidad;
        this.reservas = [];
    }

    registrarReserva(reserva) {
        this.reservas.push(reserva);
        reserva.setHuesped(this);
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

    getDireccion() {
        return this.direccion;
    }

    setDireccion(direccion) {
        this.direccion = direccion;
    }

    getTelefono() {
        return this.telefono;
    }

    setTelefono(telefono) {
        this.telefono = telefono;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getDocumentoIdentidad() {
        return this.documentoIdentidad;
    }

    setDocumentoIdentidad(documentoIdentidad) {
        this.documentoIdentidad = documentoIdentidad;
    }

    getReservas() {
        return this.reservas;
    }

    setReservas(reservas) {
        this.reservas = reservas;
    }
}
