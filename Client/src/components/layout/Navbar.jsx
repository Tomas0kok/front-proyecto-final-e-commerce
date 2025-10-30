import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <Link to="/" className="navbarLogo">
        Suma Verde
      </Link>

      <div className="navbar-right">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbarList ${isOpen ? "open" : ""}`}>
          <li className="navbarItem">
            <Link to="/" className="navbarLink">
              Home
            </Link>
          </li>
          <li className="navbarItem">
            <Link to="/impacto" className="navbarLink">
              Impact ▾
            </Link>
            <ul className="navbarDropdown">
              <li>
                <Link to="/impacto/medioambiental" className="navbarLink">
                  Medioambiental
                </Link>
              </li>
              <li>
                <Link to="/impacto/social" className="navbarLink">
                  Social
                </Link>
              </li>
              <li>
                <Link to="/impacto/economico" className="navbarLink">
                  Económico
                </Link>
              </li>
            </ul>
          </li>
          <li className="navbarItem">
            <Link to="/tienda" className="navbarLink">
              Store ▾
            </Link>
            <ul className="navbarDropdown">
              <li>
                <Link to="/tienda/ropa" className="navbarLink">
                  Ropa
                </Link>
              </li>
              <li>
                <Link to="/tienda/accesorios" className="navbarLink">
                  Accesorios
                </Link>
              </li>
              <li>
                <Link to="/tienda/calzado" className="navbarLink">
                  Calzado
                </Link>
              </li>
            </ul>
          </li>
          <li className="navbarItem">
            <Link to="/servicios" className="navbarLink">
              Services ▾
            </Link>
            <ul className="navbarDropdown">
              <li>
                <Link to="/servicios/consultoria" className="navbarLink">
                  Consultoría
                </Link>
              </li>
              <li>
                <Link to="/servicios/desarrollo" className="navbarLink">
                  Desarrollo
                </Link>
              </li>
              <li>
                <Link to="/servicios/diseno" className="navbarLink">
                  Diseño
                </Link>
              </li>
            </ul>
          </li>
          <li className="navbarItem">
            <Link to="/servicios/gratuito" className="navbarLink">
              Free
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
