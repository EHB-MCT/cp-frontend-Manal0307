import React from "react";
import { motion } from "framer-motion";

export default function Scene3() {
  return (
    <section className="scene scene3">
      <img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748042075/S41_anllbg.png"
        alt="Scène 3 fond"
        className="scene3-background"
      />

      {/* Main du prince à gauche */}
      <motion.img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748042553/S41hand_yxlcbt.png"
        alt="Main du prince"
        className="scene3-hand"
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748042553/S4H_pimpvu.png"
        alt="Tête de l’homme"
        className="scene3-head"
        animate={{ x: [0, -15, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748042553/S4F_buox1m.png"
        alt="Feuille droite"
        className="scene3-leaf leaf-right"
        style={{ rotate: 15 }}
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      />
      <motion.div
        className="scene3-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <p>
          De prinsen trekken de wereld in op zoek naar mythische schatten om het
          hart van Kaguya te winnen,maar falen stuk voor stuk. Hun beloften
          waren bedrog.
        </p>
      </motion.div>
    </section>
  );
}
