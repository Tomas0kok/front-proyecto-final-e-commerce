import "./ProductCarousel.css";

const ProductCarousel = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">♻️ Productos reciclados</h2>

      <div className="scroll-container" id="scrollContainer">
        <div className="card product-card">
          <img
            src="https://via.placeholder.com/250x180"
            className="card-img-top"
            alt="Producto 1"
          />
          <div className="card-body">
            <h5 className="card-title">Producto 1</h5>
            <p className="card-text">$19.99</p>
            <button className="btn btn-primary">Comprar</button>
          </div>
        </div>

        <div className="card product-card">
          <img
            src="https://via.placeholder.com/250x180"
            className="card-img-top"
            alt="Producto 2"
          />
          <div className="card-body">
            <h5 className="card-title">Producto 2</h5>
            <p className="card-text">$29.99</p>
            <button className="btn btn-primary">Comprar</button>
          </div>
        </div>
        {/* Agrega más cards según tus productos */}
      </div>

      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn btn-outline-primary me-2"
          onClick={() =>
            document.getElementById("scrollContainer").scrollBy({
              left: -300,
              behavior: "smooth",
            })
          }
        >
          ⬅️
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() =>
            document.getElementById("scrollContainer").scrollBy({
              left: 300,
              behavior: "smooth",
            })
          }
        >
          ➡️
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
