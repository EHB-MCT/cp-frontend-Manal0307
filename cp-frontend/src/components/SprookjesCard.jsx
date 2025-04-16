function SprookjeCard({ title, genre, firstName, lastName, link }) {
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
      <a href={link} target="_blank" rel="noopener noreferrer">
        → View story
      </a>
    </div>
  );
}

export default SprookjeCard;
