import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Makingof() {
  const { id } = useParams();
  const [sprookje, setSprookje] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}sprookjes.json`)
      .then((res) => res.json())
      .then((data) => {
        const match = data.find((item) => item.id === parseInt(id));
        setSprookje(match);
      })
      .catch((err) => console.error("Fout bij laden:", err));
  }, [id]);

  if (!sprookje) {
    return <p>Project niet gevonden...</p>;
  }

  return (
    <div className="makingof-container">
      <div className="makingof-header">
        <img
          src={sprookje.image}
          alt={sprookje.title}
          className="makingof-image"
        />
        <div className="makingof-meta">
          <p>
            <strong>Project</strong>
            <br />
            {sprookje.title}
          </p>
          <p>
            <strong>By</strong>
            <br />
            {sprookje.firstName} {sprookje.lastName}
          </p>
        </div>
      </div>

      <div className="makingof-body">
        <div className="makingof-video">
          {sprookje.video ? (
            <iframe
              src={`https://www.youtube.com/embed/${sprookje.video}`}
              title={`Video van ${sprookje.firstName}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="makingof-iframe"
            ></iframe>
          ) : (
            <p>Geen video beschikbaar</p>
          )}
        </div>
        <div className="makingof-description">
          <h3>Beschrijving</h3>
          <p>{sprookje.description}</p>
          <a
            href={sprookje.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Discover the project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Makingof;
