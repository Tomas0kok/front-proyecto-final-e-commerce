import bannerTexture from "../assets/terceraimagen.avif";
import { Link } from "react-router-dom";
import "./JoinEcoLife.css";

export default function JoinEcolife() {
  return (
    <section
      className="join-eco-box"
      style={{ backgroundImage: `url(${bannerTexture})` }}
    >
      <h1 className="join-eco-title">SUMATE A ECOLIFE</h1>
      <Link to={"/servicios#suscripciones"} className="join-eco-button">
        Suscribite
      </Link>
    </section>
  );
}
