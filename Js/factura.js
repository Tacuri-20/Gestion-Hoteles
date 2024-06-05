// factura.js

class Factura {
    constructor(id, fechaEmision, montoTotal, huesped, servicios = []) {
        this.id = id;
        this.fechaEmision = fechaEmision;
        this.montoTotal = montoTotal;
        this.huesped = huesped;
        this.servicios = servicios;
    }

    generarFactura() {
        console.log(`Factura generada para ${this.huesped.nombre} ${this.huesped.apellido}. Total: ${this.montoTotal}`);
    }
}

export default Factura;
