import "./ProductHome.css";
import bolsasReutilizables from "../../public/assets/images/products/bolsasReutilizables.jpg";
import CestoCocina from "../../public/assets/images/products/CestoCocina.jpg";
import CestoEconomico from "../../public/assets/images/products/CestoEconomico.jpg";
import ComboComposteroCompleto from "../../public/assets/images/products/ComboComposteroCompleto.jpg";
import KitProductosReciclables from "../../public/assets/images/products/KitProductosReciclables.jpg";
import MiniCompostera from "../../public/assets/images/products/MiniCompostera.jpg";

const ProductHome = () => {
  return (
    <body>
      <div class="hero-section">
        <div class="hero-content">
          <h1>TIENDA HOGAR</h1>
          <p class="description">Como empezar la vida consciente desde casa</p>
        </div>

        <div class="cards-container">
          <div class="product-card bolsasReutilizables">
            src={bolsasReutilizables}
            <div class="card-content">
              <span class="card-tag">bolsaReutilizable</span>
            </div>
          </div>

          <div class="product-card CestoCocina">
            src={CestoCocina}
            <div class="card-content">
              <span class="card-tag">Cesto Cocina</span>
            </div>
          </div>

          <div class="product-card card-3">
            src={CestoEconomico}
            <div class="card-content">
              <span class="card-tag">Cesto Económico</span>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default ProductHome;
