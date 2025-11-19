import apiClient from "./apiClient";

/* ========== MAPEOS BÁSICOS PARA CLIENTE ========== */

function mapBlogPost(apiPost) {
  if (!apiPost) return null;

  return {
    id: apiPost.id,
    title: apiPost.title,
    date: apiPost.published_at || apiPost.created_at || null,
    views: apiPost.views ?? 0,
    slug: apiPost.slug,
    raw: apiPost, // por si más adelante querés usar excerpt, body, etc.
  };
}

function mapGuide(apiGuide) {
  if (!apiGuide) return null;

  return {
    id: apiGuide.id,
    title: apiGuide.title,
    downloads: apiGuide.downloads ?? 0,
    format: apiGuide.format || "PDF",
    slug: apiGuide.slug,
    raw: apiGuide,
  };
}

function mapVideo(apiVideo) {
  if (!apiVideo) return null;

  return {
    id: apiVideo.id,
    title: apiVideo.title,
    duration: apiVideo.duration || apiVideo.duration_label || "",
    views: apiVideo.views ?? 0,
    slug: apiVideo.slug,
    raw: apiVideo,
  };
}

/* ========== LISTAS PÚBLICAS ========== */

// GET /api/content/blog
export async function getBlogPosts(params = {}) {
  const res = await apiClient.get("/content/blog", { params });
  return res.data.map(mapBlogPost).filter(Boolean);
}

// GET /api/content/guides
export async function getGuides(params = {}) {
  const res = await apiClient.get("/content/guides", { params });
  return res.data.map(mapGuide).filter(Boolean);
}

// GET /api/content/videos
export async function getVideos(params = {}) {
  const res = await apiClient.get("/content/videos", { params });
  return res.data.map(mapVideo).filter(Boolean);
}
