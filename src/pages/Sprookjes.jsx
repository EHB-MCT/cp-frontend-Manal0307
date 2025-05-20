import { useEffect, useState } from "react";
import SprookjeCard from "../components/SprookjesCard";
import SearchFilter from "../components/SearchFilter";
import GenreFilter from "../components/GenreFilter";

function Sprookjes() {
  const [sprookjes, setSprookjes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGenre, setFilterGenre] = useState("All");

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}sprookjes.json?cb=${Date.now()}`)
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
  console.log("Sprookjes chargés ✅", filteredSprookjes);
  return (
    <div className="sprookjes-page">
      <div className="filters">
        <SearchFilter onSearch={setSearchTerm} />
        <GenreFilter value={filterGenre} onChange={setFilterGenre} />
      </div>

      {/* ✅ TITRE AU-DESSUS */}
      <h1 className="sprookjes-title">
        ALL <span>STUNNING</span> <br /> PROJECTS
      </h1>

      {/* ✅ GRILLE DES CARTES */}
      <div className="card-list">
        {filteredSprookjes.slice(0, 8).map((sprookje, i) => (
          <div key={sprookje.id} className={`sprookje-wrapper card-${i + 1}`}>
            <SprookjeCard {...sprookje} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sprookjes;
