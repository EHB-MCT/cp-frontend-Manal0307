import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Scene6() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const [showFullMoon, setShowFullMoon] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => setShowFullMoon(true), 1500);
      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  const leaves = Array.from({ length: 8 });

  return (
    <section className="scene scene6" ref={ref}>
      {/* Background */}
      <img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748158481/KAG_noaxam.png"
        className="scene6-background"
        alt="background"
      />

      {/* Lune complète */}
      {showFullMoon && (
        <motion.img
          src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748125842/moon_gfhn6h.png"
          alt="lune pleine"
          className="moon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      )}

      {/* Texte narratif */}
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

      {/* Feuilles tombantes */}
      {isInView &&
        leaves.map((_, i) => (
          <motion.img
            key={i}
            src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748125911/feuille_vuq1dh.png"
            className="leaf"
            alt="leaf"
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
