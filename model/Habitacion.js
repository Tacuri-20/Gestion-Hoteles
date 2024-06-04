// habitacion.js
const Habitacion = {
    numeroPiso: 1,
    numeroHabitacion: 1,

    // Método para establecer los datos de la habitación
    setHabitacion: function(numeroPiso, numeroHabitacion) {
        this.numeroPiso = numeroPiso;
        this.numeroHabitacion = numeroHabitacion;
    },

    // Método para obtener los datos de la habitación
    getHabitacion: function() {
        return {
            numeroPiso: this.numeroPiso,
            numeroHabitacion: this.numeroHabitacion,
        };
    },
};

export default Habitacion;
