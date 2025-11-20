import React, { useState } from "react";
import "../components/ProductSection.css";

import bolsasReutilizables from "../../public/assets/images/products/bolsasReutilizables.jpg";
import CestoCocina from "../../public/assets/images/products/CestoCocina.jpg";
import CestoEconomico from "../../public/assets/images/products/CestoEconomico.jpg";
import ComboComposteroCompleto from "../../public/assets/images/products/ComboComposteroCompleto.jpg";
import KitProductosReciclables from "../../public/assets/images/products/KitProductosReciclables.jpg";
import MiniCompostera from "../../public/assets/images/products/MiniCompostera.jpg";

const ProductHome = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      image: bolsasReutilizables,
      alt: "bolsa",
      badge: "Eco-friendly",
      title: "Bolsas Reutilizables",
      description: "Bolsas de alta calidad reutilizables.",
      detailedDescription:
        "Nuestras bolsas reutilizables están fabricadas con materiales 100% reciclados y son perfectas para tus compras diarias. Resistentes, lavables y con capacidad para hasta 15kg. Contribuye al cuidado del medio ambiente mientras haces tus compras.",
      price: "$1,500",
      features: [
        "Material reciclado",
        "Capacidad 15kg",
        "Lavables",
        "Duraderas",
      ],
    },
    {
      id: 2,
      image: CestoCocina,
      alt: "CestoCocina",
      badge: "Cesto Cocina",
      title: "Cesto Cocina",
      description: "Tres Cestos de cocina",
      detailedDescription:
        "Set de tres cestos especialmente diseñados para organizar tu cocina. Incluye cestos de diferentes tamaños para separar residuos orgánicos, reciclables y basura general. Material resistente y fácil de limpiar.",
      price: "$3500",
      features: [
        "Set de 3 cestos",
        "Diferentes tamaños",
        "Fácil limpieza",
        "Material resistente",
      ],
    },
    {
      id: 3,
      image: CestoEconomico,
      alt: "cesto",
      badge: "Cesto Económico",
      title: "Cesto Económico",
      description: "Cesto Económico para interior.",
      detailedDescription:
        "Cesto económico ideal para interiores, perfecto para comenzar con el reciclaje en tu hogar. Diseño compacto que se adapta a cualquier espacio. Excelente relación calidad-precio.",
      price: "$2800",
      features: [
        "Precio accesible",
        "Diseño compacto",
        "Para interiores",
        "Fácil uso",
      ],
    },
    {
      id: 4,
      image: ComboComposteroCompleto,
      alt: "ComboComposteroCompleto",
      badge: "Combo para compostar",
      title: "Combo Premium",
      description: "Compostera de alta calidad.",
      detailedDescription:
        "Combo completo para compostar que incluye compostera de alta calidad, filtros de carbón activado, herramientas y manual instructivo. Todo lo que necesitas para crear tu propio compost casero y reducir residuos orgánicos.",
      price: "$4,500",
      features: [
        "Kit completo",
        "Filtros incluidos",
        "Manual instructivo",
        "Alta capacidad",
      ],
    },
    {
      id: 5,
      image: KitProductosReciclables,
      alt: "Kit",
      badge: "Biodegradable",
      title: "Productos reciclables",
      description: "Tipos de productos",
      detailedDescription:
        "Kit de productos reciclables que incluye contenedores separadores con etiquetas para papel, plástico, vidrio y metal. Sistema de clasificación intuitivo que facilita el reciclaje en el hogar.",
      price: "$3500",
      features: [
        "Sistema de clasificación",
        "Etiquetas incluidas",
        "4 categorías",
        "Apilables",
      ],
    },
    {
      id: 6,
      image: MiniCompostera,
      alt: "MiniCompostera",
      badge: "Mini compostera",
      title: "Compostera",
      description: "Compostera de tamaño compacto",
      detailedDescription:
        "Mini compostera perfecta para apartamentos o espacios pequeños. Con filtro de carbón activado que elimina olores. Capacidad de 5 litros, ideal para residuos orgánicos diarios de 1-2 personas.",
      price: "$2800",
      features: [
        "Tamaño compacto",
        "Filtro anti-olores",
        "5 litros",
        "Ideal apartamentos",
      ],
    },
  ];

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
      <section className="products-section-home">
        <div className="container-cards">
          <h2 className="section-title-cards">Nuestros Productos</h2>
          <div className="cards-home-grid-home">
            {products.map((product) => (
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
                    <p className="product-price-home">{product.price}</p>
                    <button className="btn-view-more-home">Ver más</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Detalle del Producto */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            <div className="modal-body">
              <div className="modal-image-section">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.alt}
                  className="modal-image"
                />
              </div>

              <div className="modal-info-section">
                <span className="badge-eco-home">{selectedProduct.badge}</span>
                <h2 className="modal-title">{selectedProduct.title}</h2>
                <p className="modal-price">{selectedProduct.price}</p>

                <div className="modal-description">
                  <h3>Descripción</h3>
                  <p>{selectedProduct.detailedDescription}</p>
                </div>

                <div className="modal-features">
                  <h3>Características</h3>
                  <ul>
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <button className="btn-add-cart-modal">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductHome;
