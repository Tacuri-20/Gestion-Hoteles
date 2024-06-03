import java.util.Date;

public class Factura {
    private int id;
    private Date fechaEmision;
    private float montoTotal;
    private Reserva reserva;
    private static int contador = 0;

    public Factura(Reserva reserva) {
        this.id = ++contador;
        this.fechaEmision = new Date();
        this.reserva = reserva;
        this.montoTotal = calcularMontoTotal();
    }

    public void generarFactura() {
        System.out.println("Factura generada: ");
        System.out.println("ID: " + id);
        System.out.println("Fecha de emisión: " + fechaEmision);
        System.out.println("Monto total: " + montoTotal);
    }

    private float calcularMontoTotal() {
        float total = reserva.getHabitacion().getPrecio();
        for (ServicioAdicional servicio : reserva.getServiciosAdicionales()) {
            total += servicio.getPrecio();
        }
        return total;
    }

    // Getters y setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getFechaEmision() {
        return fechaEmision;
    }

    public void setFechaEmision(Date fechaEmision) {
        this.fechaEmision = fechaEmision;
    }

    public float getMontoTotal() {
        return montoTotal;
    }

    public void setMontoTotal(float montoTotal) {
        this.montoTotal = montoTotal;
    }

    public Reserva getReserva() {
        return reserva;
    }

    public void setReserva(Reserva reserva) {
        this.reserva = reserva;
    }
}
