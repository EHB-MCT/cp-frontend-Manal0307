import { Link } from "react-router-dom";

function SprookjeCard2({ id, title, genre, firstName, lastName, link, image }) {
  return (
    <div className="sprookje-card2">
      <img src={image} alt={title} className="sprookje-img2" />
      <p>
        <strong>{title}</strong>
      </p>
      <p>
        {firstName} {lastName}
      </p>

      <br />

      {/* 👉 lien vers l’histoire en externe */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        → View story
      </a>

      <br />

      {/* 👉 lien interne vers la page makingof */}
      <Link to={`/makingof/${id}`}>→ Behind the scenes</Link>
    </div>
  );
}

export default SprookjeCard2;
