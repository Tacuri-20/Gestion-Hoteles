// huesped.js
const Huesped = {
    nombre: '',
    apellido: '',
    documentoIdentidad: '',
    cantidadPersonas: 1,

    // Método para establecer los datos del huésped
    setHuesped: function(nombre, apellido, documentoIdentidad, cantidadPersonas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documentoIdentidad = documentoIdentidad;
        this.cantidadPersonas = cantidadPersonas;
    },

    // Método para obtener los datos del huésped
    getHuesped: function() {
        return {
            nombre: this.nombre,
            apellido: this.apellido,
            documentoIdentidad: this.documentoIdentidad,
            cantidadPersonas: this.cantidadPersonas,
        };
    },
};

export default Huesped;
    