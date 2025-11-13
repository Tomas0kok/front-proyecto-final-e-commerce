import React from "react";
import Calendar from "../components/layout/Calendar";
import imagenReciclaje from "../assets/todosetransforma.jpg";
import videoFondo from "../assets/reciclaje.webm";
import "./Home.css";
const Home = () => {
  return (
    <>
      {/* 🔹 HERO SECTION CON VIDEO Y FRASE ANIMADA */}
      <section className="hero-section">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={videoFondo} type="video/mp4" />
        </video>

        <div className="hero-overlay">
          <h1 className="hero-text"></h1>
        </div>
      </section>

      {/* 🔹 CONTENIDO PRINCIPAL (tu código original) */}
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          padding: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "2rem",
        }}
      >
        {/* Columna izquierda: calendario */}
        <section
          style={{
            flex: 1,
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            padding: "2rem",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#2e7d32",
              marginBottom: "1rem",
            }}
          >
            Querés empezar a reciclar? Agendá tu recolección ♻️
          </h1>
          <p
            style={{ fontSize: "1.1rem", color: "#555", marginBottom: "2rem" }}
          >
            Seleccioná una fecha para reservar la recolección de residuos.
          </p>
          <Calendar />
        </section>

        {/* Columna derecha: imagen */}
        <section
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={imagenReciclaje}
            alt="Reciclaje"
            style={{
              width: "100%",
              maxWidth: "450px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }}
          />
        </section>
      </main>
    </>
  );
};

export default Home;
