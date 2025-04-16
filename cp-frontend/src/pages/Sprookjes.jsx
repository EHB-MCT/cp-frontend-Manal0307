import { useEffect, useState } from "react";
import SprookjeCard from "../components/SprookjesCard";

function Sprookjes() {
  const [sprookjes, setSprookjes] = useState([]);

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

      <div className="card-list">
        {sprookjes.map((sprookje) => {
          console.log(sprookje);
          return (
            <SprookjeCard
              key={sprookje.id}
              title={sprookje.title}
              genre={sprookje.genre}
              firstName={sprookje.firstName}
              lastName={sprookje.lastName}
              link={sprookje.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sprookjes;
