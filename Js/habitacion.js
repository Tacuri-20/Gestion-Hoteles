// habitacion.js

class Habitacion {
    constructor(id, numero, precio) {
        this.id = id;
        this.numero = numero;
        this.precio = precio;
    }

    verificarDisponibilidad() {
        console.log(`Habitación ${this.numero} está disponible.`);
        return true;
    }
}

export default Habitacion;
