function AppointmentCard({
  appointment,
  deleteAppointment,
}) {
  return (
    <div className="appointment-card">

      <div className="appointment-info">

        <h3>👤 {appointment.patient}</h3>

        <p>
          <strong>🦷 Doctor:</strong> {appointment.doctor}
        </p>

        <p>
          <strong>🕒 Time:</strong> {appointment.time}
        </p>

        <p>
          <strong>📝 Treatment:</strong> {appointment.purpose}
        </p>

      </div>

      <button
        className="delete-btn"
        onClick={() => deleteAppointment(appointment.id)}
        aria-label="Delete Appointment"
      >
        🗑 Delete
      </button>

    </div>
  );
}

export default AppointmentCard;