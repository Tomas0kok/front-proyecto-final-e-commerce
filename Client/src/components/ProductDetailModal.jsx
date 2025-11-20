// src/components/ProductDetailModal.jsx
const ProductDetailModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // evita cerrar al clickear adentro
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-body">
          <div className="modal-image-section">
            <img
              src={product.image}
              alt={product.alt}
              className="modal-image"
            />
          </div>

          <div className="modal-info-section">
            <span className="badge-eco-home">{product.badge}</span>
            <h2 className="modal-title">{product.title}</h2>
            <p className="modal-price">{product.price}</p>

            <div className="modal-description">
              <h3>Descripción</h3>
              <p>{product.detailedDescription}</p>
            </div>

            <div className="modal-features">
              <h3>Características</h3>
              <ul>
                {product.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <button className="btn-add-cart-modal">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
