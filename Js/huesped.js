// huesped.js

class Huesped {
    constructor(id, nombre, apellido, direccion, telefono, email, docIdentificacion) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.docIdentificacion = docIdentificacion;
    }

    registrar() {
        console.log(`Huésped ${this.nombre} ${this.apellido} registrado.`);
    }
}

export default Huesped;
