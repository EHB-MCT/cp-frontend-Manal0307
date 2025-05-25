import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Scene5() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const kaguyaY = useTransform(scrollYProgress, [0, 1], ["-30%", "110%"]);
  const kaguyaX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["0%", "2%", "0%", "-2%", "0%"]
  );
  const kaguyaRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-5deg", "5deg", "-5deg"]
  );

  // Apparition main
  const handOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);
  const handY = useTransform(scrollYProgress, [0.6, 1], ["20%", "0%"]);

  return (
    <section className="scene scene5" ref={ref}>
      <img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748016234/ocean_nm9zu3.png"
        alt="Ocean background"
        className="scene5-bg"
      />

      {/* Kaguya qui coule */}
      <motion.img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748020488/kaguyawaterfall_bhihov.png"
        alt="Kaguya in water"
        className="scene5-kaguya"
        style={{ y: kaguyaY, x: kaguyaX, rotate: kaguyaRotate }}
      />

      {/* Main en bas */}
      <motion.img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748023856/manhand_fct917.png"
        alt="Main"
        className="scene5-hand"
      />
      <motion.div
        className="scene5-text"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 1 }}
      >
        <p>
          De keizer reikt naar haar,
          <br />
          maar Kaguya zinkt dieper in haar verdriet, ver weg van zijn liefde.
        </p>
      </motion.div>
    </section>
  );
}
