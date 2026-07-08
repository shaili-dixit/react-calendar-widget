import { useState, useEffect } from "react";
import CalendarWidget from "./components/CalendarWidget";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";
import Loader from "./components/Loader";
import "./styles.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const savedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    setTimeout(() => {
      setAppointments(savedAppointments);
      setLoading(false);
      setInitialized(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!initialized) return;

    localStorage.setItem(
      "appointments",
      JSON.stringify(appointments)
    );
  }, [appointments, initialized]);

  const addAppointment = (appointment) => {
    console.log(
      "[Analytics] User interacted with React Calendar Widget"
    );

    setAppointments((prev) => [...prev, appointment]);
  };

  const deleteAppointment = (id) => {
    setAppointments((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app">

      <header className="hero-header">

        <div>

          <h1>🦷 Dental Appointment Scheduler</h1>

          <p>
            Manage patient appointments with a modern scheduling dashboard.
          </p>

        </div>

        <div className="today-box">

          <span>📅 Today</span>

          <h3>{new Date().toDateString()}</h3>

        </div>

      </header>

      <div className="dashboard">

        <CalendarWidget
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          appointments={appointments}
        />
        <AppointmentForm
          selectedDate={selectedDate}
          addAppointment={addAppointment}
        />

      </div>

      <AppointmentList
        appointments={appointments}
        selectedDate={selectedDate}
        deleteAppointment={deleteAppointment}
      />

      <footer className="footer">

        <strong>🦷 Dental Appointment Scheduler</strong>

        <p>
          Designed with React • Vite • CSS
        </p>

        <span>
          © 2026 All Rights Reserved
        </span>

      </footer>

    </div>
  );
}

export default App;