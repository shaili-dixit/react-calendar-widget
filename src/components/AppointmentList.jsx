import AppointmentCard from "./AppointmentCard";
import EmptyState from "./EmptyState";

function AppointmentList({
  appointments,
  selectedDate,
  deleteAppointment,
}) {
  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.date === selectedDate.toDateString()
  );

  return (
    <div className="appointment-list">
      <h2> Appointments ({filteredAppointments.length})</h2>

      {filteredAppointments.length === 0 ? (
        <EmptyState />
      ) : (
        filteredAppointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
            deleteAppointment={deleteAppointment}
          />
        ))
      )}
    </div>
  );
}

export default AppointmentList;