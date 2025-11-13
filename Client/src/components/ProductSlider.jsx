import "./ProductSlider.css";

import bolsasReutilizables from "../../public/assets/images/products/bolsasReutilizables.jpg";
import CestoCocina from "../../public/assets/images/products/CestoCocina.jpg";
import CestoEconomico from "../../public/assets/images/products/CestoEconomico.jpg";
import ComboComposteroCompleto from "../../public/assets/images/products/ComboComposteroCompleto.jpg";
import KitProductosReciclables from "../../public/assets/images/products/KitProductosReciclables.jpg";
import MiniCompostera from "../../public/assets/images/products/MiniCompostera.jpg";

const ProductSlider = () => {
  return (
    <>
      {/* ... hero section ... */}

      <section className="slider-container">
        <div className="slider-track">
          <div className="product-card">
            <img
              src={bolsasReutilizables}
              alt="bolsa"
              className="product-image"
            />
            <div className="product-info">
              <span className="badge-eco">Eco-friendly</span>
              <h3 className="product-title">Bolsas Reutilizables</h3>
              <p className="product-description">
                Bolsas de alta calidad reutilizables.
              </p>
              <p className="product-price">$1,500</p>
            </div>
          </div>
          <div className="product-card">
            <img
              src={CestoCocina}
              alt="CestoCocina"
              className="product-image"
            />
            <div className="product-info">
              <span className="badge-eco">CestoCocina</span>
              <h3 className="product-title">Cesto Cocina</h3>
              <p className="product-description">Tres Cestos de cocina</p>
              <p className="product-price">$350</p>
            </div>
          </div>
          <div className="product-card">
            <img src={CestoEconomico} alt="cesto" className="product-image" />
            <div className="product-info">
              <span className="badge-eco">estoEconomico</span>
              <h3 className="product-title">Cesto Económico</h3>
              <p className="product-description">
                Cesto Economico para interior.
              </p>
              <p className="product-price">$280</p>
            </div>
          </div>

          {/* Duplicados para efecto infinito */}
          <div className="product-card">
            <img
              src={ComboComposteroCompleto}
              alt="ComboComposteroCompleto"
              className="product-image"
            />
            <div className="product-info">
              <span className="badge-eco">Combo para compostar</span>
              <h3 className="product-title">Combo Premium</h3>
              <p className="product-description">Compostera de alta calidad.</p>
              <p className="product-price">$1,500</p>
            </div>
          </div>

          <div className="product-card">
            <img
              src={KitProductosReciclables}
              alt="Kit"
              className="product-image"
            />
            <div className="product-info">
              <span className="badge-eco">Biodegradable</span>
              <h3 className="product-title">Productos reciclables</h3>
              <p className="product-description">Tipos de productos</p>
              <p className="product-price">$350</p>
            </div>
          </div>

          <div className="product-card">
            <img
              src={MiniCompostera}
              alt="MiniCompostera"
              className="product-image"
            />
            <div className="product-info">
              <span className="badge-eco">Mini compostera</span>
              <h3 className="product-title">Compostera</h3>
              <p className="product-description">composteratera</p>
              <p className="product-price">$280</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSlider;
