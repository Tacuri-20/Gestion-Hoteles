// servicioAdicional.js

class ServicioAdicional {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    agregarServicio() {
        console.log(`Servicio adicional ${this.nombre} agregado.`);
    }
}

export default ServicioAdicional;
