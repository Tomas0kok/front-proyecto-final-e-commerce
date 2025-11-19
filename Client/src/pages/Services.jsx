import { useEffect, useRef, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Check, Crown, Clock, GraduationCap, Calendar } from "lucide-react";
import { getPublicServices } from "../services/servicesService";
import { getActivePlans } from "../services/subscriptionsService";
import "./Services.css";

const formatPrice = (price) => {
  if (price == null) return null;
  if (typeof price === "number") {
    return price.toLocaleString("es-UY", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }
  return String(price);
};

const Services = () => {
  const [activeSection, setActiveSection] = useState("");

  // ======== ESTADO SUBSCRIPCIONES =========
  const [plans, setPlans] = useState([]);
  const [loadingPlans, setLoadingPlans] = useState(true);
  const [errorPlans, setErrorPlans] = useState(null);

  // ======== ESTADO SERVICIOS (CURSOS / TALLERES) =========
  const [courses, setCourses] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [loadingServices, setLoadingServices] = useState(true);
  const [errorServices, setErrorServices] = useState(null);

  const sectionRefs = {
    suscripciones: useRef(null),
    cursos: useRef(null),
    talleres: useRef(null),
  };

  const location = useLocation();

  /* =========================
   *  Scroll al hash inicial
   * =======================*/
  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (hash && sectionRefs[hash]?.current) {
      sectionRefs[hash].current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  /* =========================
   *  Resaltar sección activa
   * =======================*/
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
            window.history.replaceState(null, "", `#${sectionId}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  /* =========================
   *  Cargar Servicios (Cursos + Talleres) desde API
   * =======================*/
  useEffect(() => {
    let isMounted = true;

    async function fetchServices() {
      try {
        setLoadingServices(true);
        setErrorServices(null);

        const data = await getPublicServices(); // GET /api/services (status=active)

        if (!isMounted) return;

        const cursos = data.filter((s) => s.type === "Curso");
        const talleres = data.filter((s) => s.type === "Taller");

        setCourses(cursos);
        setWorkshops(talleres);
      } catch (err) {
        console.error("[Services] Error cargando servicios:", err);
        if (isMounted) {
          setErrorServices("No se pudieron cargar los cursos y talleres.");
        }
      } finally {
        if (isMounted) {
          setLoadingServices(false);
        }
      }
    }

    fetchServices();
    return () => {
      isMounted = false;
    };
  }, []);

  /* =========================
   *  Cargar Planes de Suscripción desde API
   * =======================*/
  useEffect(() => {
    let isMounted = true;

    async function fetchPlans() {
      try {
        setLoadingPlans(true);
        setErrorPlans(null);

        const data = await getActivePlans(); // GET /api/subscriptions/plans

        if (!isMounted) return;

        setPlans(data);
      } catch (err) {
        console.error("[Services] Error cargando planes:", err);
        if (isMounted) {
          setErrorPlans("No se pudieron cargar los planes de suscripción.");
        }
      } finally {
        if (isMounted) {
          setLoadingPlans(false);
        }
      }
    }

    fetchPlans();
    return () => {
      isMounted = false;
    };
  }, []);

  /* =========================
   *  Lógica de "Plan recomendado"
   * =======================*/
  const plansWithRecommended = useMemo(() => {
    if (!plans || plans.length === 0) return [];

    const anyFeatured = plans.some(
      (p) => p.raw && (p.raw.is_featured || p.raw.featured)
    );

    if (anyFeatured) {
      return plans.map((p) => ({
        ...p,
        recommended: !!(p.raw && (p.raw.is_featured || p.raw.featured)),
      }));
    }

    // fallback: segundo plan como recomendado
    return plans.map((p, idx) => ({
      ...p,
      recommended: idx === 1,
    }));
  }, [plans]);

  return (
    <main className="services-page flex-grow">
      {/* Hero sencillo y eco */}
      <section className="services-hero">
        <div className="container text-center">
          <p className="services-hero-eyebrow">Servicios eco</p>
          <h1 className="services-hero-title">Nuestros Servicios</h1>
          <p className="services-hero-subtitle">
            Soluciones personalizadas para tu viaje hacia la sostenibilidad.
          </p>
        </div>
      </section>

      {/* =========================
          PLANES DE SUSCRIPCIÓN
          ========================= */}
      <section
        id="suscripciones"
        ref={sectionRefs.suscripciones}
        className="services-section"
      >
        <div className="container">
          <div className="services-section-header text-center mb-5">
            <p className="services-section-eyebrow">Acompañamiento continuo</p>
            <h2 className="services-section-title">Planes de Suscripción</h2>
            <p className="services-section-subtitle">
              Elige el plan perfecto para tus necesidades.
            </p>
          </div>

          {errorPlans && (
            <div className="alert alert-danger" role="alert">
              {errorPlans}
            </div>
          )}

          <div className="row g-4">
            {loadingPlans && plansWithRecommended.length === 0 ? (
              <div className="col-12">
                <p className="text-muted text-center mb-0">
                  Cargando planes de suscripción...
                </p>
              </div>
            ) : plansWithRecommended.length === 0 ? (
              <div className="col-12">
                <p className="text-muted text-center mb-0">
                  No hay planes activos por el momento.
                </p>
              </div>
            ) : (
              plansWithRecommended.map((plan) => (
                <div key={plan.id} className="col-md-4">
                  <article
                    className={`card services-plan-card h-100 ${
                      plan.recommended ? "services-plan-card--featured" : ""
                    }`}
                  >
                    <div className="card-body text-center position-relative">
                      {plan.recommended && (
                        <span className="services-plan-pill">
                          <Crown size={16} />
                          Recomendado
                        </span>
                      )}

                      <h3 className="services-plan-name">{plan.name}</h3>

                      <div className="services-plan-price-block my-3">
                        {plan.price != null && plan.price !== "" ? (
                          <>
                            <span className="services-plan-price">
                              ${formatPrice(plan.price)}
                            </span>
                            <span className="services-plan-period">
                              /{plan.period || "mes"}
                            </span>
                          </>
                        ) : (
                          <span className="services-plan-price-custom">
                            Precio personalizado
                          </span>
                        )}
                      </div>

                      <ul className="services-plan-features list-unstyled text-start mb-4">
                        {plan.features && plan.features.length > 0 ? (
                          plan.features.map((feature, index) => (
                            <li
                              key={index}
                              className="services-plan-feature-item"
                            >
                              <Check
                                className="services-plan-feature-icon"
                                size={18}
                              />
                              {feature}
                            </li>
                          ))
                        ) : (
                          <li className="text-muted small">
                            Próximamente detallaremos las características de
                            este plan.
                          </li>
                        )}
                      </ul>

                      <button className="btn services-plan-button services-plan-button--primary w-100 fw-semibold">
                        {plan.price != null && plan.price !== ""
                          ? "Suscribirse"
                          : "Contactar"}
                      </button>
                    </div>
                  </article>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* =========================
          CURSOS ONLINE
          ========================= */}
      <section
        id="cursos"
        ref={sectionRefs.cursos}
        className="services-section services-section--alt"
      >
        <div className="container">
          <div className="services-section-header text-center mb-5">
            <p className="services-section-eyebrow">Formación a tu ritmo</p>
            <h2 className="services-section-title">Cursos Online</h2>
            <p className="services-section-subtitle">
              Aprende con contenidos pensados para equipos que quieren actuar.
            </p>
          </div>

          {errorServices && (
            <div className="alert alert-danger" role="alert">
              {errorServices}
            </div>
          )}

          {loadingServices && courses.length === 0 ? (
            <p className="text-muted text-center mb-0">Cargando cursos...</p>
          ) : courses.length === 0 ? (
            <p className="text-muted text-center mb-0">
              No hay cursos activos por el momento.
            </p>
          ) : (
            <div className="row g-4">
              {courses.map((course) => (
                <div key={course.id} className="col-md-4">
                  <article className="card services-service-card h-100">
                    <div className="card-body">
                      <div className="services-service-icon-pill">
                        <GraduationCap size={20} />
                      </div>
                      <h5 className="services-service-title fw-semibold">
                        {course.title}
                      </h5>
                      {course.raw?.description && (
                        <p className="services-service-description">
                          {course.raw.description}
                        </p>
                      )}
                      <div className="services-service-meta mt-3">
                        <div className="services-service-meta-item">
                          <Clock size={16} />
                          <span>
                            {course.duration || "Duración a confirmar"}
                          </span>
                        </div>
                        <div className="services-service-meta-item services-service-meta-item--price">
                          <span>
                            {course.price != null
                              ? `$${formatPrice(course.price)}`
                              : "Consultar"}
                          </span>
                        </div>
                      </div>
                      <button className="btn services-service-button services-service-button--primary w-100 mt-3">
                        Inscribirse
                      </button>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================
          TALLERES PRESENCIALES
          ========================= */}
      <section
        id="talleres"
        ref={sectionRefs.talleres}
        className="services-section"
      >
        <div className="container">
          <div className="services-section-header text-center mb-5">
            <p className="services-section-eyebrow">Aprender haciendo</p>
            <h2 className="services-section-title">Talleres Presenciales</h2>
            <p className="services-section-subtitle">
              Experiencias prácticas y manos a la obra.
            </p>
          </div>

          {errorServices && (
            <div className="alert alert-danger" role="alert">
              {errorServices}
            </div>
          )}

          {loadingServices && workshops.length === 0 ? (
            <p className="text-muted text-center mb-0">Cargando talleres...</p>
          ) : workshops.length === 0 ? (
            <p className="text-muted text-center mb-0">
              No hay talleres activos por el momento.
            </p>
          ) : (
            <div className="row g-4">
              {workshops.map((workshop) => (
                <div key={workshop.id} className="col-md-4">
                  <article className="card services-service-card h-100">
                    <div className="card-body">
                      <div className="services-service-icon-pill services-service-icon-pill--workshop">
                        <Calendar size={20} />
                      </div>
                      <h5 className="services-service-title fw-semibold">
                        {workshop.title}
                      </h5>

                      <p className="services-service-description">
                        {workshop.raw?.description ||
                          "Actividad práctica para equipos que quieren implementar cambios reales."}
                      </p>

                      <div className="services-service-meta mb-3">
                        <div className="services-service-meta-item">
                          <Calendar size={16} />
                          <span>
                            {workshop.raw?.date_label ||
                              workshop.raw?.start_date ||
                              "Fecha a confirmar"}
                          </span>
                        </div>
                        <div className="services-service-meta-item">
                          <Clock size={16} />
                          <span>
                            {workshop.duration || "Duración a confirmar"}
                          </span>
                        </div>
                        <div className="services-service-meta-item services-service-meta-item--price">
                          <span>
                            {workshop.price != null
                              ? `$${formatPrice(workshop.price)}`
                              : "Consultar"}
                          </span>
                        </div>
                      </div>

                      <button className="btn services-service-button services-service-button--primary w-100 mt-3">
                        Reservar
                      </button>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Services;
