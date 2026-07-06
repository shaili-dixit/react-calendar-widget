import CalendarWidget from "./components/CalendarWidget";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Dentist Schedule Calendar</h1>
        <p>Manage appointments efficiently</p>
      </header>

      <CalendarWidget />
    </div>
  );
}

export default App;