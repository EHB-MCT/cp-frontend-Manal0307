function Makingof() {
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
            Sneeuwwitje
          </p>
          <p>
            <strong>By</strong>
            <br />
            Manal Boulahya
          </p>
        </div>
      </div>

      <div className="makingof-body">
        <div className="makingof-video">
          <div className="video-placeholder">▶</div>
        </div>
        <div className="makingof-description">
          <h3>Beschrijving</h3>
          <p>
            Dit is mijn project over het sprookje van Sneeuwwitje. Ik heb het
            verhaal herschreven en gevisualiseerd in een parallaxpagina. Hier
            leg ik uit hoe ik mijn creatie heb opgebouwd en welke keuzes ik
            gemaakt heb.
          </p>
          <a href="/parallax/manal" target="_blank" rel="noopener noreferrer">
            → Bekijk het sprookje
          </a>
        </div>
      </div>
    </div>
  );
}

export default Makingof;
