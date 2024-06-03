
import java.util.Date;

public class Main {
    public static void main(String[] args) {
        // Crear instancias de las clases y probar su funcionalidad
        Huesped huesped = new Huesped(1, "Juan", "Calle Falsa 123", "123456789", "juan@example.com", "ABC123");
        Habitacion habitacion = new Habitacion(1, 101, 150.0f, "Single");
        Reserva reserva = new Reserva(1, new Date(), new Date(), false, "Pending", huesped, habitacion);
        huesped.registrarReserva(reserva);
        ServicioAdicional servicioAdicional = new ServicioAdicional(1, "Desayuno", 10.0f);
        reserva.agregarServicio(servicioAdicional);

        reserva.checkIn();
        reserva.checkOut();

        Personal personal = new Personal("Pedro", "Perez", "Recepcionista");
        Turno turno = new Turno(new Date(), new Date());
        turno.asignarTurnoPersonal(personal);
    }
}
