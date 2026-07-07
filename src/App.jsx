import { useState } from "react";
import CalendarWidget from "./components/CalendarWidget";
import AppointmentForm from "./components/AppointmentForm";
import "./styles.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

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
      />

    </div>
  );
}

export default App;