import { Link } from "react-router-dom";

function SprookjeCard({ id, title, genre, firstName, lastName, link }) {
  return (
    <div className="sprookje-card">
      <div className="card-image-placeholder" />
      <p>
        <strong>{title}</strong>
      </p>
      <p>
        {firstName} {lastName}
      </p>
      <small>{genre}</small>
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

export default SprookjeCard;
