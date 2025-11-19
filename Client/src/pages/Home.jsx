import Calendar from "../components/layout/Calendar";
import videoFondo from "../assets/reciclaje.webm";
import ComoFunciona from "../components/layout/HowDoesThisWork";
import JoinEcolife from "../components/JoinEcoLife";
import Impacto from "./Impacto";
import "./Home.css";
import "../components/layout/HowDoesThisWork.css";

const Home = () => {
  return (
    <>
      {/* 🔹 HERO SECTION */}
      <section className="hero-section">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={videoFondo} type="video/mp4" />
        </video>

        <div className="hero-overlay">
          <h1 className="hero-text">Transformamos tus residuos en vida</h1>
        </div>
      </section>

      {/* 🔹 BLOQUE DE CARDS */}
      <ComoFunciona />

      {/* 🔹 SECCIÓN CALENDARIO — TODO CENTRADO */}
      <section className="calendar-section">
        <h1 className="home-title">AGENDÁ TU RECOLECCIÓN</h1>

        <p className="home-subtitle">
          Seleccioná una fecha para reservar la recolección de residuos.
        </p>

        {/* EL CALENDARIO AHORA REALMENTE QUEDA CENTRADO */}
        <div className="calendar-wrapper">
          <div className="calendar-container">
            <Calendar />
          </div>
        </div>
        <JoinEcolife />
        <Impacto />
      </section>
    </>
  );
};

export default Home;
