import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import "./Calendar.css"; // 👈 importamos los estilos personalizados

const Calendar = () => {
  const handleDateClick = (info) => {
    alert(`Reservaste un turno para: ${info.dateStr}`);
  };

  return (
    <div style={{ width: "100%", maxWidth: "900px", margin: "0" }}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        height="auto"
        locale={esLocale}
      />
    </div>
  );
};

export default Calendar;
