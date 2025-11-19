// src/services/servicesService.js
import apiClient from "./apiClient";

/**
 * Normaliza el objeto Service que viene del backend
 * para que el front cliente lo use cómodo.
 *
 * Basado en el mismo modelo que usás en el admin:
 *  - id
 *  - title
 *  - type: "Curso" | "Taller"
 *  - duration / duration_label
 *  - price
 *  - status: "active" | "draft" | "inactive"
 */
function mapService(apiService) {
  if (!apiService) return null;

  return {
    id: apiService.id,
    title: apiService.title,
    type: apiService.type, // "Curso" | "Taller"
    duration: apiService.duration || apiService.duration_label || "",
    price: apiService.price,
    status: apiService.status,
    // Si tu modelo tiene fechas o info extra, las dejamos colgadas en raw
    raw: apiService,
  };
}

/**
 * GET /api/services
 * - Por defecto el backend devuelve sólo status = "active"
 *   (según cómo lo usás en el admin).
 * - Podés pasar params opcionales: { type, status }.
 */
export async function getPublicServices(params = {}) {
  const res = await apiClient.get("/services", { params });
  return res.data.map(mapService).filter(Boolean);
}

/**
 * GET /api/services/:id
 * (por si más adelante quieres una página de detalle)
 */
export async function getPublicServiceById(id) {
  const res = await apiClient.get(`/services/${id}`);
  return mapService(res.data);
}
