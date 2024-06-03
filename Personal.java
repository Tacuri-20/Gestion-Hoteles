import java.util.ArrayList;
import java.util.List;

public class Personal {
    private int id;
    private String nombre;
    private String apellido;
    private String puesto;
    private List<Turno> turnos;
    private static int contador = 0;

    public Personal(String nombre, String apellido, String puesto) {
        this.id = ++contador;
        this.nombre = nombre;
        this.apellido = apellido;
        this.puesto = puesto;
        this.turnos = new ArrayList<>();
    }

    public void agregarTurno(Turno turno) {
        turnos.add(turno);
    }

    // Getters y setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getPuesto() {
        return puesto;
    }

    public void setPuesto(String puesto) {
        this.puesto = puesto;
    }

    public List<Turno> getTurnos() {
        return turnos;
    }

    public void setTurnos(List<Turno> turnos) {
        this.turnos = turnos;
    }
}
