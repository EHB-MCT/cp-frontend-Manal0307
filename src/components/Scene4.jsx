import React, { useState, useEffect, useRef } from "react";
import { MouseParallax } from "react-just-parallax";
import { useInView } from "framer-motion";

export default function Scene4() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  const [hasMovedMouse, setHasMovedMouse] = useState(false);
  const [shouldDisplayObjects, setShouldDisplayObjects] = useState(false);

  // Écoute du mouvement de souris seulement après visibilité
  useEffect(() => {
    if (!isInView) return;

    const handleMouseMove = () => {
      setHasMovedMouse(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isInView]);

  useEffect(() => {
    if (isInView && hasMovedMouse) {
      setShouldDisplayObjects(true);
    }
  }, [isInView, hasMovedMouse]);

  return (
    <section ref={ref} className="scene scene4">
      {/* Background beige */}
      <img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1747996326/Untitled-3_egdfic.png"
        alt="Fond intérieur grotte"
        className="scene4-bg-inner"
      />

      {/* Objets uniquement affichés quand ready */}
      {shouldDisplayObjects && (
        <>
          {/* Trophée (à gauche) */}
          <MouseParallax strength={0.6} isAbsolutelyPositioned>
            <img
              src="https://res.cloudinary.com/deq5iutqv/image/upload/v1747996357/ChatGPT_Image_7_mai_2025_16_13_40_cdk9t0.png"
              alt="Trophée"
              className="scene4-trophy glow"
            />
          </MouseParallax>

          {/* Branche (à droite) */}
          <MouseParallax strength={0.6} isAbsolutelyPositioned>
            <img
              src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748004524/branch_mcpifu.png"
              alt="Branche"
              className="scene4-branch glow"
            />
          </MouseParallax>
        </>
      )}

      {/* Couches sombres au-dessus */}
      <img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1748083019/grow_kdo9dn.png"
        alt="Couches sombres"
        className="scene4-bg-outer"
      />
      <div className="scene4-text">Zoek de legendarische objecten</div>
    </section>
  );
}
