import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Scene6() {
  const section = useRef(null);
  const isInView = useInView(section, { amount: 0.5, once: true });
  const [showMoon, setShowMoon] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowMoon(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section className="scene scene6" ref={section}>
      <img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748212736/scen6_hperio.png"
        className="scene6-background"
      />

      {showMoon && (
        <motion.img
          src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748125842/moon_gfhn6h.png"
          className="moon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      )}

      {isInView && (
        <motion.p
          className="scene6-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          Kaguya kijkt vaak naar de maan en wordt steeds verdrietiger. Ze
          onthult uiteindelijk dat ze niet van deze wereld is en dat de maan
          haar zal komen halen.
        </motion.p>
      )}

      {isInView &&
        Array.from({ length: 8 }).map((_, i) => (
          <motion.img
            key={i}
            src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748125911/feuille_vuq1dh.png"
            className="leaf"
            initial={{
              y: -100,
              x: Math.random() * window.innerWidth,
              rotate: 0,
              opacity: 0.8,
            }}
            animate={{
              y: "100vh",
              rotate: 360,
              opacity: 0,
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              delay: Math.random() * 1.5,
              repeat: Infinity,
            }}
          />
        ))}
    </section>
  );
}
