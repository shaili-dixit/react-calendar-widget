import { useState } from "react";
import CalendarWidget from "./components/CalendarWidget";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";
import "./styles.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const deleteAppointment = (id) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Dentist Schedule Calendar</h1>
        <p>Manage appointments efficiently</p>
      </header>

      <CalendarWidget
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <AppointmentForm
        selectedDate={selectedDate}
        addAppointment={addAppointment}
      />

      <AppointmentList
        appointments={appointments}
        selectedDate={selectedDate}
        deleteAppointment={deleteAppointment}
      />
    </div>
  );
}

export default App;