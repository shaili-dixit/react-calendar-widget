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