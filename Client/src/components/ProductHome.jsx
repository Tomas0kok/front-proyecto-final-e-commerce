import { useEffect, useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { getPublicProducts } from "../services/storeService";
import EcoDropdown from "../components/EcoDropdown";
import ProductDetailModal from "../components/ProductDetailModal";
import "./ProductSection.css";

const ProductHome = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [errorProducts, setErrorProducts] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [inStockOnly, setInStockOnly] = useState(false);

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
        console.error("[ProductHome] Error cargando productos:", err);
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

  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "unset";
  };

  const categories = useMemo(() => {
    if (!products || products.length === 0) return [];
    const set = new Set(products.map((p) => p.badge).filter(Boolean));
    return Array.from(set);
  }, [products]);

  const categoryOptions = useMemo(() => {
    const base = [
      {
        value: "all",
        label: "Todas",
        isActive: selectedCategory === "all",
      },
    ];

    const rest =
      categories?.map((cat) => ({
        value: cat,
        label: cat,
        isActive: selectedCategory === cat,
      })) || [];

    return [...base, ...rest];
  }, [categories, selectedCategory]);

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return products
      .filter((p) => {
        if (!term) return true;
        const title = (p.title || "").toLowerCase();
        const badge = (p.badge || "").toLowerCase();
        return title.includes(term) || badge.includes(term);
      })
      .filter((p) => {
        if (selectedCategory === "all") return true;
        return p.badge === selectedCategory;
      })
      .filter((p) => {
        if (!inStockOnly) return true;
        const stock = typeof p.stock === "number" ? p.stock : null;
        if (stock == null) return true;
        return stock > 0;
      });
  }, [products, searchTerm, selectedCategory, inStockOnly]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setInStockOnly(false);
  };

  return (
    <>
      <section className="products-section-home">
        <div className="container-cards">
          <h2 className="section-title-cards">Nuestros Productos</h2>

          <div className="products-filters-card mb-4">
            <div className="row g-3 align-items-center">
              <div className="col-12 col-md-8 position-relative">
                <Search
                  size={18}
                  className="position-absolute top-50 translate-middle-y ms-3 text-muted"
                />
                <input
                  type="text"
                  placeholder="Buscar por nombre o categoría..."
                  className="form-control ps-5 products-search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="col-12 col-md-4 d-flex justify-content-md-end">
                <button
                  type="button"
                  className={`btn-filters-toggle ${
                    showFilters ? "btn-filters-toggle-active" : ""
                  }`}
                  onClick={() => setShowFilters((prev) => !prev)}
                >
                  <SlidersHorizontal size={16} />
                  <span>Filtros</span>
                </button>
              </div>
            </div>

            {showFilters && (
              <div className="filters-panel">
                <div className="filters-panel-row">
                  <div className="filters-panel-group">
                    <EcoDropdown
                      label="Categoría"
                      valueLabel={
                        selectedCategory === "all" ? "Todas" : selectedCategory
                      }
                      options={categoryOptions}
                      onSelect={setSelectedCategory}
                    />
                  </div>

                  <div className="form-check filters-panel-check">
                    <input
                      id="inStockOnly"
                      type="checkbox"
                      className="form-check-input"
                      checked={inStockOnly}
                      onChange={(e) => setInStockOnly(e.target.checked)}
                    />
                    <label htmlFor="inStockOnly" className="form-check-label">
                      Solo productos con stock
                    </label>
                  </div>

                  <button
                    type="button"
                    className="
                     filters-panel-clear ms-auto"
                    onClick={handleClearFilters}
                  >
                    Limpiar filtros
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {errorProducts && (
          <p
            className="product-description-home"
            style={{ textAlign: "center" }}
          >
            {errorProducts}
          </p>
        )}

        {loadingProducts && products.length === 0 ? (
          <p
            className="product-description-home"
            style={{ textAlign: "center" }}
          >
            Cargando productos...
          </p>
        ) : products.length === 0 ? (
          <p
            className="product-description-home"
            style={{ textAlign: "center" }}
          >
            No hay productos disponibles por el momento.
          </p>
        ) : (
          <div className="cards-home-grid-home">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card-home"
                onClick={() => openModal(product)}
              >
                <div className="card-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="product-image-home"
                  />
                </div>
                <div className="card-content-home">
                  <span className="badge-eco-home">{product.badge}</span>
                  <h3 className="product-title-home">{product.title}</h3>
                  <p className="product-description-home">
                    {product.description}
                  </p>
                  <div className="card-footer-home">
                    <div className="price-stock-wrapper">
                      <p className="product-price-home">{product.price}</p>
                      <span className="product-stock-home">
                        {product.stock} u.
                      </span>
                    </div>
                    <button className="btn-view-more-home">Ver más</button>
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

export default ProductHome;
