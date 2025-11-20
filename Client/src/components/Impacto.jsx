import { Accordion } from "react-bootstrap";
import "./Impacto.css"; 

const Impacto = () => {
  return (
    <section className="impacto-section">
      <div className="impacto-container">
        <h2 className="impacto-title">NUESTRO IMPACTO</h2>

        <div className="impacto-grid">
          <div className="impacto-card">
            <h3 className="impacto-number">150 kg</h3>
            <p className="impacto-text">Residuos reciclados por mes</p>
          </div>

          <div className="impacto-card">
            <h3 className="impacto-number">200+</h3>
            <p className="impacto-text">Familias participantes</p>
          </div>

          <div className="impacto-card">
            <h3 className="impacto-number">15</h3>
            <p className="impacto-text">Talleres dictados</p>
          </div>

          <div className="impacto-card">
            <h3 className="impacto-number">80%</h3>
            <p className="impacto-text">Reducción de residuos orgánicos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impacto;
