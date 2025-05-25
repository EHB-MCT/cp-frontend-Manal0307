import { useEffect, useRef } from "react";
import { animate, inView } from "motion";

export default function Scene7() {
  const section = useRef(null);
  const kaguya = useRef(null);
  const dad = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    inView(section.current, () => {
      // Animation père
      animate(dad.current, { x: [-200, 0], opacity: [0, 1] }, { duration: 5 });

      // Kaguya
      animate(
        kaguya.current,
        { y: [-10, 10, -10] },
        {
          duration: 4,
          easing: "ease-in-out",
          repeat: Infinity,
        }
      );

      // Texte
      animate(
        textRef.current,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 2, delay: 1 }
      );
    });
  }, []);

  return (
    <section className="scene scene7" ref={section}>
      <img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748211227/scen7_ijynsu.png"
        className="scene7-background"
        alt="background"
      />
      <img
        ref={kaguya}
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748181737/kaguyaend_e3aict.png"
        className="kaguya-fly"
        alt="Kaguya"
      />
      <img
        ref={dad}
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748181736/dad_ok9a6r.png"
        className="dad-scene7"
        alt="Père"
      />

      <p className="scene7-text" ref={textRef}>
        Kaguya kijkt haar vader liefdevol aan terwijl het maanlicht haar omhult.
        Ze weet dat het moment gekomen is. Zijn handen reiken naar haar, maar
        haar lot roept haar terug naar de hemel. Zonder woorden neemt het
        maanlicht haar zachtjes mee, hoger en hoger…
      </p>
    </section>
  );
}
