import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LOGO + DESCRIPCIÓN */}
        <div className="footer-col">
          <div className="footer-logo">
            <span className="logo-eco-font">Eco</span>
            <span className="logo-life-font">life</span>
          </div>
          <p className="footer-text">
            Transformamos residuos en vida. Educación, reciclaje y tecnología
            para un futuro sostenible.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h4 className="footer-title">Enlaces</h4>
          <ul className="footer-links">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/impacto">Impacto</a>
            </li>
            <li>
              <a href="/tienda">Tienda</a>
            </li>
            <li>
              <a href="/servicios">Servicios</a>
            </li>
            <li>
              <a href="/Gratis">Gratis</a>
            </li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div className="footer-col">
          <p className="footer-text">Montevideo, Uruguay</p>
          <p className="footer-text">ecolife@gmail.com</p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} EcoVida. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
