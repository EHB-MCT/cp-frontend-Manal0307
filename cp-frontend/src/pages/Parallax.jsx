import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../Parallax.css";

function Parallax() {
  const { scrollY } = useScroll();

  // Parallax effect for text
  const yText = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <div className="parallax-container">
      <section className="scene intro">
        <div className="background-layer"></div>

        <img src="/images/man.png" alt="Vieil homme" className="man-walking" />

        <motion.div className="parallax-text" style={{ y: yText }}>
          Een oude bamboesnijder vindt een klein meisje in een stralende
          bamboestok. Hij neemt haar mee naar huis en adopteert haar samen met
          zijn vrouw.
        </motion.div>
      </section>
    </div>
  );
}

export default Parallax;
