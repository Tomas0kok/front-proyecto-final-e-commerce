// src/components/layout/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-auto">
      <div className="container">
        <h6 className="mb-2">E-Commerce</h6>
        <p className="mb-1">Tu tienda de productos sustentables</p>

        <div className="d-flex justify-content-center gap-3 mb-2">
          <a href="#" className="text-light">
            Inicio
          </a>
          <a href="#" className="text-light">
            Contacto
          </a>
          <a href="#" className="text-light">
            Nosotros
          </a>
        </div>

        <p className="m-0">
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
