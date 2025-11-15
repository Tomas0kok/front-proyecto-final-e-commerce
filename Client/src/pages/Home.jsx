import React from "react";
import Calendar from "../components/layout/Calendar";
import imagenReciclaje from "../assets/todosetransforma.jpg";
import videoFondo from "../assets/reciclaje.webm";
import "./Home.css";
import imagenReciclaje2 from "../assets/RESIDUO2.jpg";
import ComoFunciona from "../components/layout/HowDoesThisWork";
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

      {/* 🔹 BLOQUE "CÓMO FUNCIONA" (CARDS) */}
      <ComoFunciona />

      {/* 🔹 SECCIÓN CALENDARIO CENTRADO */}
      <main className="home-main">
        <div className="calendar-section">
          <h1 className="home-title">AGENDÁ TU RECOLECCIÓN</h1>

          <p className="home-subtitle">
            Seleccioná una fecha para reservar la recolección de residuos.
          </p>

          <div className="calendar-container">
            <Calendar />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
