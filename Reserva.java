import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Reserva {
    private int id;
    private Date fechaInicio;
    private Date fechaFin;
    private boolean pagado;
    private String estado;
    private Huesped huesped;
    private Habitacion habitacion;
    private List<ServicioAdicional> serviciosAdicionales;

    public Reserva(int id, Date fechaInicio, Date fechaFin, boolean pagado, String estado, Huesped huesped, Habitacion habitacion) {
        this.id = id;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.pagado = pagado;
        this.estado = estado;
        this.huesped = huesped;
        this.habitacion = habitacion;
        this.serviciosAdicionales = new ArrayList<>();
    }

    public void checkIn() {
        this.estado = "Checked In";
    }

    public void checkOut() {
        this.estado = "Checked Out";
        // Generar factura al hacer check-out
        Factura factura = new Factura(this);
        factura.generarFactura();
    }

    public void agregarServicio(ServicioAdicional servicio) {
        serviciosAdicionales.add(servicio);
    }

    // Getters y setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public Date getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(Date fechaFin) {
        this.fechaFin = fechaFin;
    }

    public boolean isPagado() {
        return pagado;
    }

    public void setPagado(boolean pagado) {
        this.pagado = pagado;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Huesped getHuesped() {
        return huesped;
    }

    public void setHuesped(Huesped huesped) {
        this.huesped = huesped;
    }

    public Habitacion getHabitacion() {
        return habitacion;
    }

    public void setHabitacion(Habitacion habitacion) {
        this.habitacion = habitacion;
    }

    public List<ServicioAdicional> getServiciosAdicionales() {
        return serviciosAdicionales;
    }

    public void setServiciosAdicionales(List<ServicioAdicional> serviciosAdicionales) {
        this.serviciosAdicionales = serviciosAdicionales;
    }
}
