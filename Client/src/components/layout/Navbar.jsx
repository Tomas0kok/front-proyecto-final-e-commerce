import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Leaf } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import CustomHashLink from "../CustomHashLink";
import "./Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { label: "Inicio", path: "/" },
    {
      label: "Impacto",
      path: "/impacto",
    },
    {
      label: "Tienda",
      path: "/tienda",
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

  // Toggle del menú en mobile (React controla el collapse)
  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  // Cerrar menú al hacer click en cualquier link del navbar
  const handleNavClick = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  // Cerrar menú cuando cambia la ruta (pathname o hash)
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname, location.hash]);

  const isLoggedIn =
    typeof isAuthenticated === "boolean" ? isAuthenticated : !!user;

  return (
    <nav className="navbar navbar-expand-lg navbar-client">
      <div className="container navbar-client-container">
        {/* Brand */}
        <div className="navbar-brand-wrapper d-flex align-items-center">
          <CustomHashLink
            to="/"
            className="navbar-brand d-flex align-items-center gap-2 m-0"
            onClick={handleNavClick}
          >
            <div className="logo-badge d-flex align-items-center justify-content-center">
              <Leaf size={35} />
            </div>
            <span className="logo-eco-font">Eco</span>
            <span className="logo-life-font">life</span>
          </CustomHashLink>
        </div>

        {/* Hamburguesa controlada por React (sin data-bs-*) */}
        <button
          className={`navbar-toggler ${menuOpen ? "" : "collapsed"}`}
          type="button"
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación controlado por menuOpen */}
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNav"
        >
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
                  onClick={handleNavClick}
                >
                  {item.label}
                </CustomHashLink>

                {/* Dropdown solo en desktop: en mobile lo ocultamos por CSS */}
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
                          onClick={handleNavClick}
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
              {isLoggedIn ? (
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
                    onClick={() => {
                      logout();
                      handleNavClick();
                    }}
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
                    onClick={handleNavClick}
                  >
                    Log In
                  </Link>
                  <Link
                    to="/register"
                    state={{ from: location }}
                    className="btn btn-success btn-sm auth-btn"
                    onClick={handleNavClick}
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
