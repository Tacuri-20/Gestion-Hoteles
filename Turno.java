import java.util.Date;

public class Turno {
    private int id;
    private Date fechaHoraInicio;
    private Date fechaHoraFin;
    private static int contador = 0;

    public Turno(Date fechaHoraInicio, Date fechaHoraFin) {
        this.id = ++contador;
        this.fechaHoraInicio = fechaHoraInicio;
        this.fechaHoraFin = fechaHoraFin;
    }

    public void asignarTurnoPersonal(Personal personal) {
        personal.agregarTurno(this);
    }

    // Getters y setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getFechaHoraInicio() {
        return fechaHoraInicio;
    }

    public void setFechaHoraInicio(Date fechaHoraInicio) {
        this.fechaHoraInicio = fechaHoraInicio;
    }

    public Date getFechaHoraFin() {
        return fechaHoraFin;
    }

    public void setFechaHoraFin(Date fechaHoraFin) {
        this.fechaHoraFin = fechaHoraFin;
    }
}
