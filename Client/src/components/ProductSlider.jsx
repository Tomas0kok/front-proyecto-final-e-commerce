import { useEffect, useState, useMemo } from "react";
import { getPublicProducts } from "../services/storeService";
import ProductDetailModal from "../components/ProductDetailModal";
import "./ProductSection.css";

const ProductSlider = () => {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [errorProducts, setErrorProducts] = useState(null);

  const [selectedProduct, setSelectedProduct] = useState(null);

  // Cargar productos desde la API
  useEffect(() => {
    let isMounted = true;

    async function fetchProducts() {
      try {
        setLoadingProducts(true);
        setErrorProducts(null);

        const data = await getPublicProducts();

        if (!isMounted) return;
        setProducts(data);
      } catch (err) {
        console.error("[ProductSlider] Error cargando productos:", err);
        if (isMounted) {
          setErrorProducts("No se pudieron cargar los productos.");
        }
      } finally {
        if (isMounted) {
          setLoadingProducts(false);
        }
      }
    }

    fetchProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  // Duplicamos la lista para mantener el efecto de track infinito
  const sliderProducts = useMemo(() => {
    if (!products || products.length === 0) return [];
    // Si quieres más “densidad”, podrías hacer [...products, ...products, ...products]
    return [...products, ...products];
  }, [products]);

  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {/* Hero del store se mantiene afuera, acá solo el slider */}
      <section className="slider-container">
        {errorProducts && (
          <p
            className="product-description-home"
            style={{ textAlign: "center" }}
          >
            {errorProducts}
          </p>
        )}

        {loadingProducts && sliderProducts.length === 0 ? (
          <p
            className="product-description-home"
            style={{ textAlign: "center" }}
          >
            Cargando productos...
          </p>
        ) : sliderProducts.length === 0 ? (
          <p
            className="product-description-home"
            style={{ textAlign: "center" }}
          >
            No hay productos disponibles por el momento.
          </p>
        ) : (
          <div className="slider-track">
            {sliderProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="product-card"
                onClick={() => openModal(product)}
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  className="product-image"
                />
                <div className="product-info">
                  <span className="badge-eco">{product.badge}</span>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-stock-wrapper">
                    <p className="product-price">{product.price}</p>
                    <span className="product-stock-home">
                      {product.stock} u.
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={closeModal} />
      )}
    </>
  );
};

export default ProductSlider;
