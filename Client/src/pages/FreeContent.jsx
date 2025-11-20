import { useEffect, useState } from "react";
import { BookOpen, FileText, Video, Download } from "lucide-react";
import { getBlogPosts, getGuides, getVideos } from "../services/contentService";
import "./FreeContent.css";

const FreeContent = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [guides, setGuides] = useState([]);
  const [videos, setVideos] = useState([]);

  const [loadingBlog, setLoadingBlog] = useState(true);
  const [loadingGuides, setLoadingGuides] = useState(true);
  const [loadingVideos, setLoadingVideos] = useState(true);

  const [errorBlog, setErrorBlog] = useState(null);
  const [errorGuides, setErrorGuides] = useState(null);
  const [errorVideos, setErrorVideos] = useState(null);

  /* ========== BLOG ========== */
  useEffect(() => {
    let isMounted = true;

    async function fetchBlog() {
      try {
        setLoadingBlog(true);
        setErrorBlog(null);
        const data = await getBlogPosts();
        if (isMounted) setBlogPosts(data);
      } catch (err) {
        console.error("[FreeContent] Error cargando blog:", err);
        if (isMounted)
          setErrorBlog("No se pudieron cargar las publicaciones del blog.");
      } finally {
        if (isMounted) setLoadingBlog(false);
      }
    }

    fetchBlog();
    return () => {
      isMounted = false;
    };
  }, []);

  /* ========== GUIDES ========== */
  useEffect(() => {
    let isMounted = true;

    async function fetchGuides() {
      try {
        setLoadingGuides(true);
        setErrorGuides(null);
        const data = await getGuides();
        if (isMounted) setGuides(data);
      } catch (err) {
        console.error("[FreeContent] Error cargando guías:", err);
        if (isMounted) setErrorGuides("No se pudieron cargar las guías.");
      } finally {
        if (isMounted) setLoadingGuides(false);
      }
    }

    fetchGuides();
    return () => {
      isMounted = false;
    };
  }, []);

  /* ========== VIDEOS ========== */
  useEffect(() => {
    let isMounted = true;

    async function fetchVideos() {
      try {
        setLoadingVideos(true);
        setErrorVideos(null);
        const data = await getVideos();
        if (isMounted) setVideos(data);
      } catch (err) {
        console.error("[FreeContent] Error cargando videos:", err);
        if (isMounted) setErrorVideos("No se pudieron cargar los videos.");
      } finally {
        if (isMounted) setLoadingVideos(false);
      }
    }

    fetchVideos();
    return () => {
      isMounted = false;
    };
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <main className="free-content-page">
      {/* HERO */}
      <section className="free-content-hero">
        <div className="container text-center">
          <div>
            <p className="free-content-hero-eyebrow">Contenido extra</p>
            <h1 className="free-content-hero-title">Contenido gratuito</h1>
            <p className="free-content-hero-subtitle">
              Blog, guías descargables y videos para acompañar tu proyecto de
              sostenibilidad.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section
        id="blog"
        className="free-content-section free-content-section--alt"
      >
        <div className="container">
          <div className="free-content-section-header">
            <div className="free-content-icon-pill">
              <BookOpen size={20} className="free-content-icon" />
            </div>
            <div>
              <h2 className="free-content-section-title">Blog</h2>
              <p className="free-content-section-subtitle">
                Artículos cortos con ideas prácticas y ejemplos reales.
              </p>
            </div>
          </div>

          {errorBlog && (
            <div className="alert alert-danger" role="alert">
              {errorBlog}
            </div>
          )}

          {loadingBlog && blogPosts.length === 0 ? (
            <p className="free-content-meta">Cargando publicaciones...</p>
          ) : blogPosts.length === 0 ? (
            <p className="free-content-meta">
              Aún no hay publicaciones de blog disponibles.
            </p>
          ) : (
            <div className="row g-4">
              {blogPosts.map((post) => {
                const formattedDate = formatDate(post.date);
                const excerpt =
                  post.raw?.excerpt ||
                  post.raw?.summary ||
                  "Próximamente más detalles de esta publicación.";

                return (
                  <div className="col-md-4" key={post.id}>
                    <div className="card free-content-card h-100">
                      <div className="card-body d-flex flex-column free-content-card-body">
                        <small className="free-content-meta mb-1">
                          {formattedDate
                            ? `${formattedDate} • ${post.views} vistas`
                            : `${post.views} vistas`}
                        </small>
                        <h5 className="free-content-card-title mt-1">
                          {post.title}
                        </h5>
                        <p className="free-content-card-text flex-grow-1 mb-2">
                          {excerpt}
                        </p>
                        <button className="free-content-link-button align-self-start">
                          Leer más →
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* GUÍAS */}
      <section id="guias" className="free-content-section">
        <div className="container">
          <div className="free-content-section-header">
            <div className="free-content-icon-pill">
              <FileText size={20} className="free-content-icon" />
            </div>
            <div>
              <h2 className="free-content-section-title">Guías descargables</h2>
              <p className="free-content-section-subtitle">
                Material concreto para imprimir o trabajar con tu equipo.
              </p>
            </div>
          </div>

          {errorGuides && (
            <div className="alert alert-danger" role="alert">
              {errorGuides}
            </div>
          )}

          <div className="row g-3">
            {loadingGuides && guides.length === 0 ? (
              <div className="col-12">
                <p className="text-muted mb-0">Cargando guías...</p>
              </div>
            ) : guides.length === 0 ? (
              <div className="col-12">
                <p className="text-muted mb-0">No hay guías disponibles.</p>
              </div>
            ) : (
              guides.map((guide) => (
                <div className="col-md-4" key={guide.id}>
                  {/* Card igual que Admin */}
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <div className="guia-detail-icon">
                        <Download size={28} className="text-primary" />
                      </div>
                      <h6 className="fw-semibold">{guide.title}</h6>
                      <div className="d-flex align-items-center gap-2 mb-3">
                        <span className="badge bg-outline-secondary border text-secondary">
                          {guide.format}
                        </span>
                        <span className="text-muted small">
                          {guide.downloads} descargas
                        </span>
                      </div>
                      <button className="btn btn-primary btn-sm w-100">
                        Descargar
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section
        id="videos"
        className="free-content-section free-content-section--alt"
      >
        <div className="container">
          <div className="free-content-section-header">
            <div className="free-content-icon-pill">
              <Video size={20} className="free-content-icon" />
            </div>
            <div>
              <h2 className="free-content-section-title">Videos educativos</h2>
              <p className="free-content-section-subtitle">
                Piezas cortas para explicar conceptos clave de forma visual.
              </p>
            </div>
          </div>

          {errorVideos && (
            <div className="alert alert-danger" role="alert">
              {errorVideos}
            </div>
          )}

          <div className="row g-4">
            {loadingVideos && videos.length === 0 ? (
              <div className="col-12">
                <p className="free-content-meta mb-0">Cargando videos...</p>
              </div>
            ) : videos.length === 0 ? (
              <div className="col-12">
                <p className="free-content-meta mb-0">
                  Aún no hay videos disponibles.
                </p>
              </div>
            ) : (
              videos.map((video) => (
                <div className="col-md-6" key={video.id}>
                  <div className="card free-content-card h-200">
                    <div className=" video-card-body">
                      <div className="free-content-video-thumb">
                        <div className="free-content-video-play">
                          <div className="free-content-video-play-inner" />
                        </div>
                        {video.duration && (
                          <span className="free-content-video-duration">
                            {video.duration}
                          </span>
                        )}
                      </div>
                      <div className="card-body">
                        <h5 className="free-content-card-title">
                          {video.title}
                        </h5>
                        <p className="free-content-meta mb-0">
                          {video.views} visualizaciones
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="free-content-newsletter">
        <div className="container">
          <div className="free-content-newsletter-inner">
            <div className="free-content-newsletter-copy">
              <h2 className="free-content-section-title">
                ¿Quieres más contenido exclusivo?
              </h2>
              <p className="free-content-card-text mb-0">
                Suscríbete al newsletter para recibir novedades y recursos
                directamente en tu correo.
              </p>
            </div>

            <form className="free-content-newsletter-form">
              <input
                type="email"
                className="form-control free-content-input"
                placeholder="tu@email.com"
              />
              <button type="submit" className="btn btn-primary fw-semibold">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FreeContent;
