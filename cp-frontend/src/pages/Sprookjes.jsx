import { useEffect, useState } from "react";
import SprookjeCard from "../components/SprookjesCard";
import SearchFilter from "../components/SearchFilter";
import GenreFilter from "../components/GenreFilter";

function Sprookjes() {
  const [sprookjes, setSprookjes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGenre, setFilterGenre] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);

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
      <div className="filters">
        <SearchFilter onSearch={setSearchTerm} />
        <GenreFilter value={filterGenre} onChange={setFilterGenre} />
      </div>
    </div>
  );
}

export default Sprookjes;
