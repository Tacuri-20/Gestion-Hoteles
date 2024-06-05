// checkincheckout.js

class CheckInOut {
    constructor() {
        this.fechaIngreso = null;
        this.fechaSalida = null;
    }

    // Método para establecer la fecha de ingreso
    setFechaIngreso(fecha) {
        if (this._esFechaValida(fecha)) {
            this.fechaIngreso = fecha;
        } else {
            throw new Error('Fecha de ingreso no válida');
        }
    }

    // Método para establecer la fecha de salida
    setFechaSalida(fecha) {
        if (this._esFechaValida(fecha)) {
            this.fechaSalida = fecha;
        } else {
            throw new Error('Fecha de salida no válida');
        }
    }

    // Método para obtener la fecha de ingreso
    getFechaIngreso() {
        return this.fechaIngreso;
    }

    // Método para obtener la fecha de salida
    getFechaSalida() {
        return this.fechaSalida;
    }

    
}

export default CheckInOut;

