import React from "react";
import Calendar from "../components/layout/Calendar";
import imagenReciclaje from "../assets/todosetransforma.jpg";
import videoFondo from "../assets/reciclaje.webm";
import "./Home.css";
import imagenReciclaje2 from "../assets/RESIDUO2.jpg"; 


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

      {/* 🔹 CONTENIDO PRINCIPAL */}
      <main className="home-main">
        {/* Columna izquierda */}
        <section className="home-left">
          <h1 className="home-title">AGENDÁ TU RECOLECCIÓN</h1>

          <p className="home-subtitle">
            Seleccioná una fecha para reservar la recolección de residuos.
          </p>

          <Calendar />
        </section>

        {/* Columna derecha */}
        <section className="home-right">
  <img
    src={imagenReciclaje}
    alt="Reciclaje"
    className="home-image"
  />

  <img
    src={imagenReciclaje2}
    alt="Reciclaje 2"
    className="home-image second-image"
  />
</section>

  );
};

export default Home;
