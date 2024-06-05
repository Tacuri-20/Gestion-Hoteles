// checkincheckout.js
const CheckInOut = {
    fechaIngreso: null,
    fechaSalida: null,

    // Método para establecer la fecha de ingreso
    setFechaIngreso: function(fecha) {
        this.fechaIngreso = fecha;
    },

    // Método para establecer la fecha de salida
    setFechaSalida: function(fecha) {
        this.fechaSalida = fecha;
    },

    // Método para obtener la fecha de ingreso
    getFechaIngreso: function() {
        return this.fechaIngreso;
    },

    // Método para obtener la fecha de salida
    getFechaSalida: function() {
        return this.fechaSalida;
    },
};

export default CheckInOut;
