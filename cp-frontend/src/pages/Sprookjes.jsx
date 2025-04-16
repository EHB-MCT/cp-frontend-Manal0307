import { useEffect, useState } from "react";
import SprookjeCard from "../components/SprookjesCard";

function Sprookjes() {
  const [sprookjes, setSprookjes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/sprookjes.json")
      .then((response) => response.json())
      .then((data) => setSprookjes(data))
      .catch((error) =>
        console.error("Fout bij het laden van de sprookjes:", error)
      );
  }, []);

  return (
    <div>
      <h1>Sprookjes van de klas</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Zoek op titel..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="card-list">
        {sprookjes
          .filter((sprookje) =>
            sprookje.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((sprookje) => (
            <SprookjeCard
              key={sprookje.id}
              title={sprookje.title}
              genre={sprookje.genre}
              firstName={sprookje.firstName}
              lastName={sprookje.lastName}
              link={sprookje.link}
            />
          ))}
      </div>
    </div>
  );
}

export default Sprookjes;
