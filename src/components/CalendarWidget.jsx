import { useState } from "react";

function CalendarWidget({ selectedDate, setSelectedDate }) {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

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

  const monthName = new Date(currentYear, currentMonth).toLocaleString(
    "default",
    {
      month: "long",
    }
  );

  const cells = [];

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    cells.push(<div key={`empty-${i}`}></div>);
  }

  // Calendar days
  for (let day = 1; day <= daysInMonth; day++) {
    const currentDate = new Date(currentYear, currentMonth, day);

    const isSelected =
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getFullYear() === currentYear;

    cells.push(
      <button
        key={day}
        className={isSelected ? "day selected" : "day"}
        onClick={() => setSelectedDate(currentDate)}
        aria-label={`Select ${day} ${monthName}`}
      >
        {day}
      </button>
    );
  }

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={prevMonth} aria-label="Previous Month">
          ◀
        </button>

        <h2>
          {monthName} {currentYear}
        </h2>

        <button onClick={nextMonth} aria-label="Next Month">
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

      <div className="calendar-grid">{cells}</div>

      <div className="selected-info">
        Selected Date:
        <strong> {selectedDate.toDateString()}</strong>
      </div>
    </div>
  );
}

export default CalendarWidget;