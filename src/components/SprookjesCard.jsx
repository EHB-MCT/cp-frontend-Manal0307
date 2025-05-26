import { Link } from "react-router-dom";

function SprookjeCard({ id, title, genre, firstName, lastName, link, image }) {
  return (
    <div className="sprookje-card">
      <img src={image} alt={title} className="sprookje-img" />
      <p>
        <strong>{title}</strong>
      </p>
      <p>
        {firstName} {lastName}
      </p>

      {/* link sprookje */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        → View story
      </a>

      <br />

      {/* link makingof */}
      <Link to={`/makingof/${id}`}>→ Behind the scenes</Link>
    </div>
  );
}

export default SprookjeCard;
