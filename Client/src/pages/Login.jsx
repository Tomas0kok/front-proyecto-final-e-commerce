import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Si venía redirigido desde una ruta protegida, vuelve ahí. Si no, va a HomeStore.
  const from = location.state?.from?.pathname || "/HomeStore";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      await login(email, password); // login viene del AuthContext
      navigate(from, { replace: true });
    } catch (err) {
      console.error("Error login:", err);
      const apiMessage =
        err?.response?.data?.message || "Error al iniciar sesión";
      setErrorMsg(apiMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Bienvenido a EcoMarket ♻️</h2>
        <p className="login-subtitle">
          Iniciá sesión para acceder a cursos, talleres y la tienda.
        </p>

        {errorMsg && (
          <p className="error-text" style={{ color: "red", marginBottom: 8 }}>
            {errorMsg}
          </p>
        )}

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

          <button type="submit" className="btn-green" disabled={loading}>
            {loading ? "Iniciando..." : "Iniciar sesión"}
          </button>
        </form>

        <button
          className="btn-google"
          type="button"
          // Podés implementar OAuth más adelante
          onClick={() => alert("Login con Google aún no implementado")}
        >
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
