import "./ProductHome.css";
import bolsasReutilizables from "../../public/assets/images/products/bolsasReutilizables.jpg";
import CestoCocina from "../../public/assets/images/products/CestoCocina.jpg";
import CestoEconomico from "../../public/assets/images/products/CestoEconomico.jpg";
import ComboComposteroCompleto from "../../public/assets/images/products/ComboComposteroCompleto.jpg";
import KitProductosReciclables from "../../public/assets/images/products/KitProductosReciclables.jpg";
import MiniCompostera from "../../public/assets/images/products/MiniCompostera.jpg";

const ProductHome = () => {
  return (
    <section className="hero-section-home">
      <div className="title-section-home">
        <div className="hero-content-home">
          <h1>TIENDA HOGAR</h1>
          <p className="description">
            Como empezar la vida consciente desde casa
          </p>
        </div>

        <div className="cards-container-home">
          <div className="product-card-home bolsasReutilizables">
            src={bolsasReutilizables}
            <div className="card-content-home">
              <span className="card-tag">bolsaReutilizable</span>
            </div>
          </div>

          <div className="product-card-home CestoCocina">
            src={CestoCocina}
            <div className="card-content">
              <span className="card-tag">Cesto Cocina</span>
            </div>
          </div>

          <div className="product-card-home CestoEconomico">
            src={CestoEconomico}
            <div className="card-content">
              <span className="card-tag">Cesto Económico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHome;
