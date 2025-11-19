import "./JoinEcoLife.css";
import bannerTexture from "../assets/terceraimagen.avif";

export default function JoinEcolife() {
  return (
    <section
      className="join-eco-box"
      style={{ backgroundImage: `url(${bannerTexture})` }}
    >
      <h1 className="join-eco-title">SUMATE A ECOLIFE</h1>
      <button className="join-eco-button">Suscribite</button>
    </section>
  );
}
