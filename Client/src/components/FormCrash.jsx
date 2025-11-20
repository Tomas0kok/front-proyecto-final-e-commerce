import { useState } from "react";
import "./FormCrash.css";

const FormCrash = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: "",
    residuos: [],
    suscripcion: "",
    horario: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = (e) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      residuos: prev.residuos.includes(value)
        ? prev.residuos.filter((item) => item !== value)
        : [...prev.residuos, value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ALERTA LINDA PERSONALIZADA
    const alerta = document.createElement("div");
    alerta.className = "eco-alert";
    alerta.textContent = "¡Gracias! Nos contactaremos contigo pronto.";
    document.body.appendChild(alerta);

    setTimeout(() => {
      alerta.classList.add("show");
    }, 100);

    setTimeout(() => {
      alerta.classList.remove("show");
      setTimeout(() => alerta.remove(), 300);
    }, 2500);
  };

  return (
    <div className="form-container">
      <h1 className="form-eco-title">Solicitud de Retiro Ecolife</h1>

      <form className="eco-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" name="nombre" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Apellido</label>
          <input type="text" name="apellido" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Dirección</label>
          <input
            type="text"
            name="direccion"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Teléfono</label>
          <input
            type="tel"
            name="telefono"
            onChange={handleChange}
            required
            placeholder="099 123 456"
          />
        </div>

        <div className="form-group">
          <label>Tipo de residuo</label>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                value="orgánico"
                onChange={handleCheckbox}
              />{" "}
              Orgánico
            </label>

            <label>
              <input type="checkbox" value="papel" onChange={handleCheckbox} />{" "}
              Papel
            </label>

            <label>
              <input type="checkbox" value="cartón" onChange={handleCheckbox} />{" "}
              Cartón
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Horario disponible</label>
          <select name="horario" onChange={handleChange} required>
            <option value="">Selecciona un horario</option>
            <option value="08 a 14">08:00 a 14:00</option>
            <option value="15 a 19">15:00 a 19:00</option>
          </select>
        </div>

        <div className="form-group">
          <label>Tipo de suscripción</label>
          <select name="suscripcion" onChange={handleChange} required>
            <option value="">Elegir opción</option>
            <option value="Básica">Básica</option>
            <option value="Estandar">Estándar</option>
            <option value="Premium">Premium</option>
          </select>
        </div>

        <button className="eco-btn" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormCrash;
