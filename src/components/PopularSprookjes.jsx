import { useEffect, useState } from "react";
import SprookjesCard2 from "./SprookjesCard2";

function PopularSprookjes() {
  const [randomSprookjes, setRandomSprookjes] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}sprookjes.json?cb=${Date.now()}`)
      .then((res) => res.json())
      .then((data) => {
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setRandomSprookjes(shuffled.slice(0, 3));
      });
  }, []);

  return (
    <section className="popular-section">
      <h2 className="section-title">POPULAR</h2>
      <div className="popular-list">
        {randomSprookjes.map((s) => (
          <SprookjesCard2
            key={s.id}
            id={s.id}
            title={s.title}
            genre={s.genre}
            firstName={s.firstName}
            lastName={s.lastName}
            link={s.link}
            image={s.image}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularSprookjes;
