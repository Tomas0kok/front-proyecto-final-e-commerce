import React from "react";
import "./Impact.css";

const Impact = () => {
  return (
    <div className="impact-container">
      <h2 className="impact-title">🍃 IMPACTO Y SOBRE NOSOTROS 🍃</h2>

      {/* SOBRE NOSOTROS */}
      <section className="impact-section">
        <h3 className="impact-subtitle">Sobre Nosotros</h3>
        <p className="impact-text">
          Somos un equipo comprometido con la educación ambiental, la tecnología
          y la transformación social. Nuestro propósito es acercar el reciclaje
          a la vida cotidiana, haciéndolo accesible, entendible y parte de una
          vida digna para todas las personas.
        </p>

        <p className="impact-text">
          Creemos que cuidar el ambiente también es cuidar la dignidad humana:
          proteger los recursos que compartimos, garantizar un futuro sostenible
          y reducir las desigualdades que genera la mala gestión de residuos.
        </p>
      </section>
      <div className="impact-divider"></div>

      {/* IMPACTO */}
      <section className="impact-section">
        <h3 className="impact-subtitle">Nuestro Impacto</h3>
        <p className="impact-text">
          La vida digna implica vivir en un entorno sano. Cada residuo que se
          recupera evita contaminación, reduce desigualdades ambientales y
          devuelve valor a lo que fue descartado. Para nosotros, reciclar es un
          acto de justicia ambiental y una forma de construir un presente más
          justo.
        </p>

        <div className="impact-cards">
          <div className="impact-card">
            <h4 className="impact-card-number">1200+ kg</h4>
            <p className="impact-card-text">Residuos recuperados</p>
          </div>

          <div className="impact-card">
            <h4 className="impact-card-number">30+ talleres</h4>
            <p className="impact-card-text">
              Educación ambiental comunitaria
            </p>
          </div>

          <div className="impact-card">
            <h4 className="impact-card-number">Tecnología verde</h4>
            <p className="impact-card-text">
              Herramientas digitales para reciclar mejor
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;