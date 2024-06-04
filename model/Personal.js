// personal.js
const Personal = {
    nombre: '',
    apellido: '',
    documentoIdentidad: '',
    turno: '',

    // Método para establecer los datos del personal
    setPersonal: function(nombre, apellido, documentoIdentidad, turno) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documentoIdentidad = documentoIdentidad;
        this.turno = turno;
    },

    // Método para obtener los datos del personal
    getPersonal: function() {
        return {
            nombre: this.nombre,
            apellido: this.apellido,
            documentoIdentidad: this.documentoIdentidad,
            turno: this.turno,
        };
    },
};

export default Personal;
