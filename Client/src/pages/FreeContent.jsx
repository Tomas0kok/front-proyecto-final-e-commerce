import { BookOpen, FileText, Video } from "lucide-react";

const FreeContent = () => {
  const blogPosts = [
    {
      title: "10 Formas Simples de Reducir Residuos en Casa",
      excerpt: "Pequeños cambios que generan un gran impacto ambiental",
      date: "12 Mayo 2025",
      readTime: "5 min",
    },
    {
      title: "La Importancia del Reciclaje de Plásticos",
      excerpt:
        "Conoce el ciclo de vida del plástico y cómo reciclarlo correctamente",
      date: "8 Mayo 2025",
      readTime: "7 min",
    },
    {
      title: "Compostaje: De la Cocina al Jardín",
      excerpt: "Guía completa para comenzar tu propio compost casero",
      date: "3 Mayo 2025",
      readTime: "10 min",
    },
  ];

  const guides = [
    {
      title: "Guía Completa de Separación de Residuos",
      description: "Todo lo que necesitas saber para separar correctamente",
      pages: "24 páginas",
    },
    {
      title: "Manual de Reciclaje Urbano",
      description:
        "Soluciones prácticas para vivir de forma sostenible en la ciudad",
      pages: "32 páginas",
    },
    {
      title: "E-book: Vida Zero Waste",
      description: "Transforma tu estilo de vida hacia el cero desperdicio",
      pages: "48 páginas",
    },
  ];

  const videos = [
    {
      title: "¿Cómo Separar los Residuos Correctamente?",
      duration: "8:32",
      views: "15.2K",
    },
    {
      title: "Tour por Nuestra Planta de Reciclaje",
      duration: "12:15",
      views: "23.8K",
    },
    {
      title: "DIY: Productos de Limpieza Ecológicos",
      duration: "10:45",
      views: "31.5K",
    },
    {
      title: "El Impacto del Plástico en los Océanos",
      duration: "15:20",
      views: "45.2K",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="py-5 text-center bg-success text-white">
        <div className="container">
          <h1 className="display-5 fw-bold mb-3">Contenido Gratuito</h1>
          <p className="lead">
            Recursos educativos para tu viaje hacia la sostenibilidad
          </p>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-5 bg-light">
        <div className="container">
          <div className="d-flex align-items-center mb-4">
            <div className="bg-success bg-opacity-25 p-3 rounded me-3">
              <BookOpen className="text-success" />
            </div>
            <h2 className="fw-bold mb-0">Blog</h2>
          </div>

          <div className="row g-4">
            {blogPosts.map((post, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <small className="text-muted">
                      {post.date} • {post.readTime} lectura
                    </small>
                    <h5 className="card-title mt-3">{post.title}</h5>
                    <p className="card-text text-secondary">{post.excerpt}</p>
                    <a
                      href="#"
                      className="text-success fw-semibold text-decoration-none"
                    >
                      Leer más →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guías */}
      <section id="guias" className="py-5">
        <div className="container">
          <div className="d-flex align-items-center mb-4">
            <div className="bg-warning bg-opacity-25 p-3 rounded me-3">
              <FileText className="text-warning" />
            </div>
            <h2 className="fw-bold mb-0">Guías Descargables</h2>
          </div>

          <div className="row g-4">
            {guides.map((guide, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 border-0 shadow-sm p-4">
                  <div className="mb-3 fs-3">📚</div>
                  <h5 className="card-title">{guide.title}</h5>
                  <p className="text-secondary">{guide.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{guide.pages}</small>
                    <button className="btn btn-warning text-white">
                      Descargar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="py-5 bg-light">
        <div className="container">
          <div className="d-flex align-items-center mb-4">
            <div className="bg-success bg-opacity-25 p-3 rounded me-3">
              <Video className="text-success" />
            </div>
            <h2 className="fw-bold mb-0">Videos Educativos</h2>
          </div>

          <div className="row g-4">
            {videos.map((video, index) => (
              <div className="col-md-6" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div
                    className="position-relative bg-dark text-white d-flex align-items-center justify-content-center"
                    style={{ height: "200px" }}
                  >
                    <div
                      className="bg-success bg-opacity-50 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: "14px solid white",
                          borderTop: "8px solid transparent",
                          borderBottom: "8px solid transparent",
                          marginLeft: "4px",
                        }}
                      ></div>
                    </div>
                    <span className="position-absolute bottom-0 end-0 m-2 bg-dark bg-opacity-75 px-2 py-1 rounded small">
                      {video.duration}
                    </span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{video.title}</h5>
                    <p className="text-muted mb-0">
                      {video.views} visualizaciones
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-5 bg-success text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">¿Quieres Más Contenido Exclusivo?</h2>
          <p className="mb-4">
            Suscríbete a nuestro newsletter y recibe guías, tips y recursos
            directamente en tu email.
          </p>
          <form className="d-flex justify-content-center gap-2 flex-wrap">
            <input
              type="email"
              className="form-control w-auto"
              placeholder="tu@email.com"
              style={{ minWidth: "250px" }}
            />
            <button type="submit" className="btn btn-light fw-semibold">
              Suscribirse
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default FreeContent;
