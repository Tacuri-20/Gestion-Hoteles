import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Habitacion {
    private int id;
    private int numero;
    private float precio;
    private String tipo;
    private List<Reserva> reservas;

    public Habitacion(int id, int numero, float precio, String tipo) {
        this.id = id;
        this.numero = numero;
        this.precio = precio;
        this.tipo = tipo;
        this.reservas = new ArrayList<>();
    }

    public void generarFactura(Reserva reserva) {
        Factura factura = new Factura(reserva);
        factura.generarFactura();
    }

    public boolean estaDisponible(Date fechaInicio, Date fechaFin) {
        for (Reserva reserva : reservas) {
            if (reserva.getFechaInicio().before(fechaFin) && reserva.getFechaFin().after(fechaInicio)) {
                return false;
            }
        }
        return true;
    }

    public void agregarReserva(Reserva reserva) {
        reservas.add(reserva);
    }

    // Getters y setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public List<Reserva> getReservas() {
        return reservas;
    }

    public void setReservas(List<Reserva> reservas) {
        this.reservas = reservas;
    }
}
