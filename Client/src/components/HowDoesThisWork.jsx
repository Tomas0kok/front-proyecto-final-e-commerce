import { Truck, Calendar, Recycle } from "lucide-react";
import "./HowDoesThisWork.css";

const ComoFunciona = () => {
  return (
    <section className="como-section">
      <h2 className="como-title">¿Cómo funciona?</h2>

      <div className="como-grid">
        {/* Paso 1 */}
        <div className="como-card">
          <div className="icon-home">
            <Calendar size={65} strokeWidth={1.5} color="var(--eco-accent)" />
          </div>
          <h3>Agendá</h3>
          <p>
            Elegí el día y la hora que más te sirva para el retiro de tus
            residuos.
          </p>
        </div>

        {/* Paso 2 */}
        <div className="como-card">
          <div className="icon-home">
            {" "}
            <Truck size={65} strokeWidth={1.5} color="var(--eco-accent)" />
          </div>
          <h3>Retiramos</h3>
          <p>Pasamos por tu domicilio y recogemos tu bolsa de reciclables.</p>
        </div>

        {/* Paso 3 */}
        <div className="como-card">
          <div className="icon-home">
            <Recycle size={65} strokeWidth={1.5} color="var(--eco-accent)" />
          </div>
          <h3>Reciclamos</h3>
          <p>
            Clasificamos y reciclamos tus residuos con responsabilidad
            ambiental.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
