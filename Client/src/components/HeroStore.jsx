const HeroStore = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title mb-3">SOMOS NATURALEZA</h1>
            </div>
            <div className="col-lg-6">
              <p className="hero-description">
                Somos la primera empresa social que desde 2019 transforma los
                residuos orgánicos de la ciudad de Montevideo, en compost.
                Nuestro propósito es crear la cultura del reciclaje y promover
                la educación ambiental a través de acciones medibles y con
                impacto.
              </p>
              <button className="btn-custom">Aprendé más</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroStore;
