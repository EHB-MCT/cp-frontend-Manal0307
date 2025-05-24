import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Scene1() {
  const { scrollYProgress } = useScroll();
  const yText = useTransform(scrollYProgress, [0, 0.1], [0, -100]);

  return (
    <section className="scene intro">
      <img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748032981/scene1_jwljgh.png"
        alt="background"
        className="intro-background"
      />
      <motion.h1
        className="kaguya-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 1.2 }}
      >
        The Tale of Princess Kaguya
      </motion.h1>

      <img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1747128858/man_re6erv.png"
        alt="Vieil man"
        className="man-walking"
      />

      <motion.div className="parallax-text" style={{ y: yText }}>
        Een oude bamboesnijder vindt een klein meisje in een stralende
        bamboestok. Hij neemt haar mee naar huis en adopteert haar samen met
        zijn vrouw.
      </motion.div>
    </section>
  );
}

export default Scene1;
