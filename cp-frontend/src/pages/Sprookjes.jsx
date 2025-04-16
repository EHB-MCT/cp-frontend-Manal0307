import { useEffect, useState } from "react";
import SprookjeCard from "../components/SprookjesCard";
import SearchFilter from "../components/SearchFilter";
import GenreFilter from "../components/GenreFilter";

function Sprookjes() {
  const [sprookjes, setSprookjes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGenre, setFilterGenre] = useState("All");

  useEffect(() => {
    fetch("/sprookjes.json")
      .then((res) => res.json())
      .then((data) => setSprookjes(data))
      .catch((err) => console.error("Fout bij laden:", err));
  }, []);

  const filteredSprookjes = sprookjes.filter((sprookje) => {
    const matchTitle = sprookje.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchGenre = filterGenre === "All" || sprookje.genre === filterGenre;
    return matchTitle && matchGenre;
  });

  return (
    <div>
      <h1>Sprookjes van de klas</h1>

      <div className="filters">
        <SearchFilter onSearch={setSearchTerm} />
        <GenreFilter value={filterGenre} onChange={setFilterGenre} />
      </div>

      <div className="card-list">
        {filteredSprookjes.map((sprookje) => (
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
