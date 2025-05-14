import { Link } from "react-router-dom";

function SprookjeCard2({ id, title, genre, firstName, lastName, link, image }) {
  return (
    <div className="sprookje-card2">
      <img src={image} alt={title} className="sprookje-img2" />

      <div className="card-row">
        <strong>{title}</strong>
        <a href={link} target="_blank" rel="noopener noreferrer">
          → View story
        </a>
      </div>

      <div className="card-row">
        <p>
          {firstName} {lastName}
        </p>
        <Link to={`/makingof/${id}`}>→ Behind the scenes</Link>
      </div>
    </div>
  );
}

export default SprookjeCard2;
