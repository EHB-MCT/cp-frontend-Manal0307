import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Scene1() {
  const { scrollYProgress } = useScroll();
  const yText = useTransform(scrollYProgress, [0, 0.1], [0, -100]);

  return (
    <section className="scene intro">
      <img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/c_crop,w_1778,h_1000,ar_16:9/v1747839275/Untitled-1_ygi6ai.png"
        alt="background"
        className="intro-background"
      />
      <div className="background-layer"></div>

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
