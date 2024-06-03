import java.util.Date;

public class CheckInCheckOut {
    private int id;
    private Date fechaHoraCheckIn;
    private Date fechaHoraCheckOut;
    private static int contador = 0;

    public CheckInCheckOut(Date fechaHoraCheckIn, Date fechaHoraCheckOut) {
        this.id = ++contador;
        this.fechaHoraCheckIn = fechaHoraCheckIn;
        this.fechaHoraCheckOut = fechaHoraCheckOut;
    }

    public boolean registrarCheckIn() {
        this.fechaHoraCheckIn = new Date();
        return true;
    }

    public boolean registrarCheckOut() {
        this.fechaHoraCheckOut = new Date();
        return true;
    }

    // Getters y setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getFechaHoraCheckIn() {
        return fechaHoraCheckIn;
    }

    public void setFechaHoraCheckIn(Date fechaHoraCheckIn) {
        this.fechaHoraCheckIn = fechaHoraCheckIn;
    }

    public Date getFechaHoraCheckOut() {
        return fechaHoraCheckOut;
    }

    public void setFechaHoraCheckOut(Date fechaHoraCheckOut) {
        this.fechaHoraCheckOut = fechaHoraCheckOut;
    }
}
