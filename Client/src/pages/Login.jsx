import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del login:", { email, password });
    alert("Inicio de sesión simulado ✅");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Bienvenido a EcoMarket ♻️</h2>
        <p className="login-subtitle">
          Iniciá sesión para acceder a cursos, talleres y la tienda.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
            />
          </div>

          <button type="submit" className="btn-green">
            Iniciar sesión
          </button>
        </form>

        <button className="btn-google">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google"
          />
          Continuar con Google
        </button>

        <p className="register-text">
          ¿No tenés cuenta?{" "}
          <Link to="/register" className="register-link">
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
