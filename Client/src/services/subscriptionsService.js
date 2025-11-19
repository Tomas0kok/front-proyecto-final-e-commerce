// src/services/subscriptionsService.js
import apiClient from "./apiClient";

function mapPlan(apiPlan) {
  if (!apiPlan) return null;

  return {
    id: apiPlan.id,
    name: apiPlan.name,
    price: apiPlan.price, // número o string
    period: apiPlan.period || apiPlan.period_label || "mes",
    subscribers: apiPlan.subscribers_count ?? 0,
    features: (apiPlan.features || []).map((f) => {
      return f.label || f.title || f.description || f.name || "";
    }),
    status: apiPlan.status,
    raw: apiPlan,
  };
}

/**
 * GET /api/subscriptions/plans
 * Devuelve solo planes activos (según tu back).
 */
export async function getActivePlans(params = {}) {
  const res = await apiClient.get("/subscriptions/plans", { params });
  return res.data.map(mapPlan).filter(Boolean);
}

/**
 * GET /api/subscriptions/plans/:id
 * (por si después querés ver un detalle de plan en el cliente)
 */
export async function getPlanById(id) {
  const res = await apiClient.get(`/subscriptions/plans/${id}`);
  return mapPlan(res.data);
}
