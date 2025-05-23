import { motion } from "framer-motion";
import React from "react";

export default function Scene3() {
  return (
    <section className="scene scene3">
      <img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1747862719/starback_ibk6pw.png"
        alt="Starry background"
        className="scene3-background"
      />

      {/* Bamboo droite */}
      <motion.img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1747990245/palmtree3_nlynv1.png"
        className="bamboo bamboo-right"
        initial={{ x: "100vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />
      <motion.img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1747989705/palmtree_pbi9oa.png"
        className="bamboo bamboo-left"
        initial={{ x: "100vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      <motion.img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1747989705/palmtree_pbi9oa.png"
        className="bamboo bamboo-far-right"
        initial={{ x: "15vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
      />

      {/* Princes */}
      <motion.img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1747988000/prins5_rpsf1u.png"
        className="princes"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
      />
    </section>
  );
}
