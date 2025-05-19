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
          src="https://via.placeholder.com/500x300"
          alt="Project Visual"
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
          <div className="video-placeholder">▶</div>
        </div>
        <div className="makingof-description">
          <h3>Beschrijving</h3>
          <p>Beschrijving van het project komt hier...</p>
          <a href={sprookje.link} target="_blank" rel="noopener noreferrer">
            → Bekijk het sprookje
          </a>
        </div>
      </div>
    </div>
  );
}

export default Makingof;
