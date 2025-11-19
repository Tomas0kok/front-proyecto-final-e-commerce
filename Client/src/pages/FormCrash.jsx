import React from "react";
import "./FormCrash.css";

export default function FormResiduo() {
  return (
    <div className="form-container fade-in">
      <h1 className="form-title">Solicitud de Recolección</h1>

      <form className="form-box">
        {/* Nombre */}
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" required />
        </div>

        {/* Apellido */}
        <div className="form-group">
          <label>Apellido</label>
          <input type="text" placeholder="Tu apellido" required />
        </div>

        {/* Dirección */}
        <div className="form-group">
          <label>Dirección</label>
          <input type="text" placeholder="Tu dirección" required />
        </div>

        {/* Tipo de residuo (checkboxes) */}
        <div className="form-group">
          <label>Tipo de residuo</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" value="organico" /> Residuos orgánicos
            </label>
            <label>
              <input type="checkbox" value="papel" /> Papel
            </label>
            <label>
              <input type="checkbox" value="carton" /> Cartón
            </label>
          </div>
        </div>

        {/* Suscripción (solo editás estos textos) */}
        <div className="form-group">
          <label>Tipo de suscripción</label>
          <select required>
            <option value="">Selecciona una opción</option>
            <option value="basic">Suscripción Básica</option>
            <option value="standard">Suscripción Standard</option>
            <option value="premium">Suscripción Premium</option>
          </select>
        </div>

        <button type="submit" className="form-button">
          Enviar
        </button>
      </form>
    </div>
  );
}
