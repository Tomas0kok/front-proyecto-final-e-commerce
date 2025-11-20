import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import { useNavigate } from "react-router-dom";
import "./Calendar.css";

const Calendar = () => {
  const navigate = useNavigate();

  const handleDateClick = (info) => {
    navigate("/FormCrash", { state: { fecha: info.dateStr } });
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
