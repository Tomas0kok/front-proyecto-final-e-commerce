import { Link } from "react-router-dom";
import { useState } from "react";
import { Leaf } from "lucide-react";
import CustomHashLink from "../CustomHashLink";
import "./Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

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
        { label: "Eco Hogar", path: "/tienda#hogar" },
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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container">
        {/* Logo */}
        <CustomHashLink
          to="/"
          className="navbar-brand d-flex align-items-center gap-2"
        >
          <div className="bg-success p-2 rounded">
            <Leaf className="text-white" size={20} />
          </div>
          <span className="fw-bold fs-4">EcoVida</span>
        </CustomHashLink>

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

        {/* Enlaces */}
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

            {/* Botón Login */}
            <li className="nav-item ms-lg-3">
              <Link
                to="/login"
                className="btn btn-success fw-medium text-white px-4"
              >
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
