import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden ❌");
      return;
    }

    console.log("Datos del registro:", formData);
    alert("Registro simulado ✅");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Creá tu cuenta 🌱</h2>
        <p className="login-subtitle">
          Unite a EcoMarket y empezá a transformar el mundo con tus acciones.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              required
            />
          </div>

          <div className="form-group">
            <label>Confirmar contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              required
            />
          </div>

          <button type="submit" className="btn-green register">
            Crear cuenta
          </button>
        </form>

        <p className="register-text">
          ¿Ya tenés cuenta?{" "}
          <Link to="/login" className="register-link">
            Iniciá sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
