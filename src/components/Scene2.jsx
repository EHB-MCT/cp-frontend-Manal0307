import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Scene2() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // active pendant scroll sur 100vh
  });

  const babyOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const girlOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const bg1Opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bg2Opacity = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  return (
    <div className="scene2-wrapper" ref={ref}>
      <div className="scene2-sticky">
        {/* BACKGROUNDS */}
        <motion.img
          src="https://res.cloudinary.com/deq5iutqv/image/upload/v1747840091/back1_swn0vo.png"
          alt="Back1"
          className="scene2-background"
          style={{ opacity: bg1Opacity }}
        />
        <motion.img
          src="https://res.cloudinary.com/deq5iutqv/image/upload/v1747840502/back2_gg9kpy.png"
          alt="Back2"
          className="scene2-background"
          style={{ opacity: bg2Opacity }}
        />

        {/* CHARACTERS */}
        <motion.img
          src="https://res.cloudinary.com/deq5iutqv/image/upload/v1747841283/baby_p8z35j.png"
          alt="Baby"
          className="scene2-character"
          style={{ opacity: babyOpacity }}
        />
        <motion.img
          src="https://res.cloudinary.com/deq5iutqv/image/upload/v1747841298/girl_z0lvhf.png"
          alt="Girl"
          className="scene2-character"
          style={{ opacity: girlOpacity }}
        />
      </div>
      <motion.div
        className="scene2-text"
        style={{
          opacity: girlOpacity, // le texte apparaît avec la fille
          y: useTransform(scrollYProgress, [0.5, 1], [20, 0]),
        }}
      >
        Het meisje groeit in een ongewoon snel tempo uit tot een beeldschone
        jonge vrouw. Haar ouders geloven dat ze een hemelse gave is.
      </motion.div>
    </div>
  );
}

export default Scene2;
