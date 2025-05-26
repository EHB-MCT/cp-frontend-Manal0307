import { useEffect, useState } from "react";
import SprookjeCard from "../components/SprookjesCard";
import SearchFilter from "../components/SearchFilter";
import GenreFilter from "../components/GenreFilter";

function Sprookjes() {
  const [sprookjes, setSprookjes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGenre, setFilterGenre] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}sprookjes.json?cb=${Date.now()}`) //cache buster --> build deploy 
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

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9); // Ajoute 9 de plus
  };

  return (
    <div className="sprookjes-page">
      <div className="filters">
        <SearchFilter onSearch={setSearchTerm} />
        <GenreFilter value={filterGenre} onChange={setFilterGenre} />
      </div>

      <h1 className="sprookjes-title">
        ALL <span>STUNNING</span> <br /> PROJECTS
      </h1>

      <div className="card-list">
        {filteredSprookjes.slice(0, visibleCount).map((sprookje, i) => (
          <div key={sprookje.id} className={`sprookje-wrapper card-${i + 1}`}>
            <SprookjeCard {...sprookje} /> 
          </div>
        ))}
      </div>

      {visibleCount < filteredSprookjes.length && (
        <div className="load-more-wrapper">
          <button onClick={handleLoadMore} className="load-more-button">
            Discover more projects
          </button>
        </div>
      )}
    </div>
  );
}

export default Sprookjes;
