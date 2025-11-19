import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Leaf } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import CustomHashLink from "../CustomHashLink";
import "./Navbar.css";
import "../../ecoTheme.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { label: "Inicio", path: "/" },
    {
      label: "Impacto",
      path: "/impacto",
      dropdown: [
        { label: "Nuestro Impacto", path: "/impacto#impacto" },
        { label: "Sobre Nosotros", path: "/impacto#nosotros" },
      ],
    },
    {
      label: "Tienda",
      path: "/tienda",
      dropdown: [
        { label: "Todos los Productos", path: "/tienda" },
        { label: "Eco Hogar", path: "/HomeStore" },
        { label: "Eco Oficina", path: "/tienda#oficina" },
      ],
    },
    {
      label: "Servicios",
      path: "/servicios",
      dropdown: [
        { label: "Suscripciones", path: "/servicios#suscripciones" },
        { label: "Cursos", path: "/servicios#cursos" },
        { label: "Talleres", path: "/servicios#talleres" },
      ],
    },
    {
      label: "Contenido Gratuito",
      path: "/Gratis",
      dropdown: [
        { label: "Blog", path: "/gratis#blog" },
        { label: "Guías", path: "/gratis#guias" },
        { label: "Videos", path: "/gratis#videos" },
      ],
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm navbar-client">
      <div className="container navbar-client-container">
        {/* Bloque brand con fondo oscuro diagonal */}
        <div className="navbar-brand-wrapper d-flex align-items-center">
          <CustomHashLink
            to="/"
            className="navbar-brand d-flex align-items-center gap-2 m-0"
          >
            <div className="logo-badge d-flex align-items-center justify-content-center">
              <Leaf size={20} />
            </div>
            <span className="brand-text">EcoVida</span>
          </CustomHashLink>
        </div>

        {/* Hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navItems.map((item) => (
              <li
                key={item.path}
                className={`nav-item ${item.dropdown ? "dropdown" : ""}`}
                onMouseEnter={() =>
                  setActiveDropdown(item.dropdown ? item.label : null)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <CustomHashLink
                  to={item.path}
                  className={`nav-link ${
                    item.dropdown ? "dropdown-toggle" : ""
                  }`}
                >
                  {item.label}
                </CustomHashLink>

                {item.dropdown && (
                  <ul
                    className={`dropdown-menu ${
                      activeDropdown === item.label ? "show" : ""
                    }`}
                    aria-labelledby={`${item.label}-dropdown`}
                  >
                    {item.dropdown.map((dropItem) => (
                      <li key={dropItem.path}>
                        <CustomHashLink
                          to={dropItem.path}
                          className="dropdown-item"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropItem.label}
                        </CustomHashLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Zona derecha: auth */}
            <li className="nav-item ms-lg-3 d-flex align-items-center gap-2 auth-zone">
              {isAuthenticated ? (
                <>
                  <span className="auth-greeting d-none d-lg-inline">
                    Hola,{" "}
                    <strong>
                      {user?.firstname || user?.email || "usuario"}
                    </strong>
                  </span>
                  <button
                    type="button"
                    className="btn btn-outline-success btn-sm auth-btn"
                    onClick={logout}
                  >
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    state={{ from: location }}
                    className="btn btn-outline-success btn-sm auth-btn"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/register"
                    state={{ from: location }}
                    className="btn btn-success btn-sm auth-btn"
                  >
                    Registrarse
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
