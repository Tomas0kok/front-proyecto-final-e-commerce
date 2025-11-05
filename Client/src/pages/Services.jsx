import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Check, Crown, GraduationCap, Calendar } from "lucide-react";

const Services = () => {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = {
    suscripciones: useRef(null),
    cursos: useRef(null),
    talleres: useRef(null),
  };

  const location = useLocation();

  // 🔹 Al montar, si hay un hash (ej: #cursos), hace scroll suave a esa sección
  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (hash && sectionRefs[hash]?.current) {
      sectionRefs[hash].current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // 🔹 Detecta qué sección está visible y actualiza el hash en la URL
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

  // 🔹 Datos
  const subscriptions = [
    {
      name: "Plan Básico",
      price: 2990,
      period: "mes",
      features: [
        "Retiro mensual de reciclables",
        "Reporte de impacto ambiental",
        "Acceso a contenido educativo",
        "Soporte por email",
      ],
    },
    {
      name: "Plan Premium",
      price: 4990,
      period: "mes",
      features: [
        "Todo lo del Plan Básico",
        "Retiro semanal de reciclables",
        "Consultoría personalizada",
        "Acceso a talleres exclusivos",
        "Kit de reciclaje profesional",
        "Soporte prioritario 24/7",
      ],
      recommended: true,
    },
    {
      name: "Plan Empresarial",
      price: null,
      period: "contactar",
      features: [
        "Todo lo del Plan Premium",
        "Soluciones a medida",
        "Auditoría ambiental completa",
        "Capacitación para equipos",
        "Certificación de sostenibilidad",
      ],
    },
  ];

  const courses = [
    {
      title: "Reciclaje para Principiantes",
      duration: "4 semanas",
      price: 8900,
      description: "Aprende los fundamentos del reciclaje efectivo",
    },
    {
      title: "Compostaje Urbano",
      duration: "3 semanas",
      price: 7500,
      description: "Crea tu propio sistema de compost en casa",
    },
    {
      title: "Economía Circular",
      duration: "6 semanas",
      price: 12900,
      description: "Entiende los principios de la economía circular",
    },
  ];

  const workshops = [
    {
      title: "Upcycling Creativo",
      date: "15 de Mayo",
      duration: "3 horas",
      price: 3500,
    },
    {
      title: "Huerta Orgánica en Casa",
      date: "22 de Mayo",
      duration: "4 horas",
      price: 4200,
    },
    {
      title: "Productos de Limpieza Eco",
      date: "29 de Mayo",
      duration: "2 horas",
      price: 2800,
    },
  ];

  return (
    <main className="flex-grow">
      {/* Hero */}
      <section className="py-5 text-center bg-success text-light">
        <div className="container">
          <h1 className="display-5 fw-bold">Nuestros Servicios</h1>
          <p className="lead">
            Soluciones personalizadas para tu viaje hacia la sostenibilidad
          </p>
        </div>
      </section>

      {/* Suscripciones */}
      <section
        id="suscripciones"
        ref={sectionRefs.suscripciones}
        className="py-5"
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Planes de Suscripción</h2>
            <p className="text-muted">
              Elige el plan perfecto para tus necesidades
            </p>
          </div>

          <div className="row g-4">
            {subscriptions.map((plan) => (
              <div key={plan.name} className="col-md-4">
                <div
                  className={`card h-100 border-2 shadow-sm ${
                    plan.recommended ? "border-success scale-105" : ""
                  }`}
                >
                  <div className="card-body text-center position-relative">
                    {plan.recommended && (
                      <span className="badge bg-success position-absolute top-0 start-50 translate-middle-x mt-2 d-flex align-items-center gap-1">
                        <Crown size={16} />
                        Recomendado
                      </span>
                    )}

                    <h3 className="fw-bold mt-4">{plan.name}</h3>

                    <div className="my-3">
                      {plan.price ? (
                        <>
                          <span className="display-6 text-success fw-bold">
                            ${plan.price.toLocaleString()}
                          </span>
                          <span className="text-muted">/{plan.period}</span>
                        </>
                      ) : (
                        <span className="fs-5 text-success fw-semibold">
                          Precio personalizado
                        </span>
                      )}
                    </div>

                    <ul className="list-unstyled text-start mb-4">
                      {plan.features.map((feature, index) => (
                        <li
                          key={index}
                          className="d-flex align-items-center mb-2"
                        >
                          <Check className="text-success me-2" size={18} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`btn w-100 fw-semibold ${
                        plan.recommended
                          ? "btn-success text-white"
                          : "btn-outline-success"
                      }`}
                    >
                      {plan.price ? "Suscribirse" : "Contactar"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section id="cursos" ref={sectionRefs.cursos} className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Cursos Online</h2>
            <p className="text-muted">
              Aprende a tu ritmo con nuestros cursos especializados
            </p>
          </div>

          <div className="row g-4">
            {courses.map((course) => (
              <div key={course.title} className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <div className="bg-success bg-opacity-10 p-2 rounded mb-3 d-inline-block">
                      <GraduationCap className="text-success" size={20} />
                    </div>
                    <h5 className="fw-semibold">{course.title}</h5>
                    <p className="text-muted">{course.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <small className="text-muted">⏱️ {course.duration}</small>
                      <span className="fw-bold text-success">
                        ${course.price.toLocaleString()}
                      </span>
                    </div>
                    <button className="btn btn-success w-100 mt-3">
                      Inscribirse
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talleres */}
      <section id="talleres" ref={sectionRefs.talleres} className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Talleres Presenciales</h2>
            <p className="text-muted">
              Experiencias prácticas y manos a la obra
            </p>
          </div>

          <div className="row g-4">
            {workshops.map((workshop) => (
              <div key={workshop.title} className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <div className="bg-info bg-opacity-10 p-2 rounded mb-3 d-inline-block">
                      <Calendar className="text-info" size={20} />
                    </div>
                    <h5 className="fw-semibold">{workshop.title}</h5>
                    <p className="text-muted mb-2">📅 {workshop.date}</p>
                    <p className="text-muted mb-3">⏱️ {workshop.duration}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold text-success">
                        ${workshop.price.toLocaleString()}
                      </span>
                      <button className="btn btn-info text-white">
                        Reservar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
