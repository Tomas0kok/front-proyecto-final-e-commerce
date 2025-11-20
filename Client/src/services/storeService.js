// src/services/storeService.js
import apiClient from "./apiClient";

// Normaliza el producto que viene del backend
// para que el front de cliente lo use cómodo.
function mapProduct(apiProduct) {
  if (!apiProduct) return null;

  // price viene como string "1500.00" o número → lo normalizamos
  let numericPrice = null;
  if (
    apiProduct.price !== null &&
    apiProduct.price !== undefined &&
    apiProduct.price !== ""
  ) {
    const n = Number(apiProduct.price);
    numericPrice = Number.isNaN(n) ? null : n;
  }

  // Formato tipo "$1.500" (similar a como formateas en Services)
  const priceDisplay =
    numericPrice != null
      ? `$${numericPrice.toLocaleString("es-UY", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}`
      : null;

  const description =
    apiProduct.short_description &&
    apiProduct.short_description.trim().length > 0
      ? apiProduct.short_description
      : apiProduct.description && apiProduct.description.length > 0
      ? apiProduct.description.length > 100
        ? apiProduct.description.slice(0, 100) + "..."
        : apiProduct.description
      : "";

  const detailedDescription = apiProduct.description || description || "";

  const features = Array.isArray(apiProduct.features)
    ? apiProduct.features
    : [];

  return {
    id: apiProduct.id,
    image: apiProduct.image_url || "", // el back ya devuelve URL completa
    alt: apiProduct.name || "Producto",
    badge: apiProduct.category?.name || "Producto",
    title: apiProduct.name || "",
    description,
    detailedDescription,
    price: priceDisplay || "", // string tipo "$1.500"
    priceNumber: numericPrice, // por si más adelante lo necesitas
    features,
    stock: apiProduct.stock ?? 0,
    raw: apiProduct, // por si más adelante querés más datos
  };
}

/**
 * GET /api/store/products
 * Params opcionales: { category, status, search }
 */
export async function getPublicProducts(params = {}) {
  const res = await apiClient.get("/store/products", { params });
  return res.data.map(mapProduct).filter(Boolean);
}

/**
 * GET /api/store/products/:id
 * Por si más adelante querés una página de detalle.
 */
export async function getPublicProductById(id) {
  const res = await apiClient.get(`/store/products/${id}`);
  return mapProduct(res.data);
}
