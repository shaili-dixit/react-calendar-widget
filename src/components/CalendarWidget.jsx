import { useState } from "react";

function CalendarWidget({
  selectedDate,
  setSelectedDate,
  appointments,
}) {

  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());

  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const firstDay = new Date(
    currentYear,
    currentMonth,
    1
  ).getDay();

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const monthName = new Date(
    currentYear,
    currentMonth
  ).toLocaleString("default", {
    month: "long"
  });

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

  const cells = [];

  for (let i = 0; i < firstDay; i++) {

    cells.push(<div key={"e" + i}></div>);

  }

  for (let day = 1; day <= daysInMonth; day++) {

    const currentDate = new Date(
      currentYear,
      currentMonth,
      day
    );

    const formatted = currentDate.toDateString();

    const hasAppointment = appointments.some(
      item => item.date === formatted
    );

    const isToday =
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear();

    const isSelected =
      day === selectedDate.getDate() &&
      currentMonth === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear();

    cells.push(

      <button
        key={day}
        className={`day ${isSelected ? "selected" : ""} ${isToday ? "today" : ""}`}
        onClick={() => setSelectedDate(currentDate)}
      >

        {day}

        {hasAppointment &&
          <span className="appointment-dot"></span>
        }

      </button>

    );

  }

  return (

    <div className="calendar-container">

      <div className="calendar-header">

        <button onClick={prevMonth}>◀</button>

        <h2>

          {monthName} {currentYear}

        </h2>

        <button onClick={nextMonth}>▶</button>

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

        Selected Date

        <br />

        <strong>

          {selectedDate.toDateString()}

        </strong>

      </div>

    </div>

  );

}

export default CalendarWidget;