import { useState } from "react";

function CalendarWidget() {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(today.getDate());

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const monthName = new Date(
    currentYear,
    currentMonth
  ).toLocaleString("default", {
    month: "long",
  });

  const cells = [];

  for (let i = 0; i < firstDay; i++) {
    cells.push(<div key={"empty" + i}></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(
      <button
        key={day}
        className={
          selectedDate === day ? "day selected" : "day"
        }
        onClick={() => setSelectedDate(day)}
      >
        {day}
      </button>
    );
  }

  return (
    <div className="calendar-container">

      <div className="calendar-header">

        <button onClick={prevMonth}>
          ◀
        </button>

        <h2>
          {monthName} {currentYear}
        </h2>

        <button onClick={nextMonth}>
          ▶
        </button>

      </div>

      <div className="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      <div className="calendar-grid">
        {cells}
      </div>

      <div className="selected-info">
        Selected Date:
        <strong>
          {" "}
          {selectedDate} {monthName} {currentYear}
        </strong>
      </div>

    </div>
  );
}

export default CalendarWidget;