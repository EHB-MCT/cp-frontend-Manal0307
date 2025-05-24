import React from "react";
import { MouseParallax } from "react-just-parallax";

export default function Scene4() {
  return (
    <section className="scene scene4">
      {/* Background beige */}
      <img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1747996326/Untitled-3_egdfic.png"
        alt="Fond intérieur grotte"
        className="scene4-bg-inner"
      />

      {/* Trophée (à gauche) */}
      <MouseParallax strength={0.6} isAbsolutelyPositioned>
        <img
          src="https://res.cloudinary.com/deq5iutqv/image/upload/v1747996357/ChatGPT_Image_7_mai_2025_16_13_40_cdk9t0.png"
          alt="Trophée"
          className="scene4-trophy"
        />
      </MouseParallax>

      {/* Branche (à droite) */}
      <MouseParallax strength={0.6} isAbsolutelyPositioned>
        <img
          src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748004524/branch_mcpifu.png"
          alt="Branche"
          className="scene4-branch"
        />
      </MouseParallax>

      {/* Couches sombres au-dessus */}
      <img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748083019/grow_kdo9dn.png"
        alt="Couches sombres"
        className="scene4-bg-outer"
      />
    </section>
  );
}
