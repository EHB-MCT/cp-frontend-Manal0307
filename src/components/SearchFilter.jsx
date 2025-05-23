import { MouseParallax } from "react-just-parallax";

export default function Scene4() {
  return (
    <section className="scene scene4">
      {/* Background fixe */}
      <img
        src="https://res.cloudinary.com/deq5iutqv/image/upload/v1747996326/Untitled-3_egdfic.png"
        alt="Fond beige"
        className="scene4-background"
      />

      {/* Objet 1 qui suit la souris */}
      <MouseParallax enableOnTouchDevice isAbsolutelyPositioned strength={0.1}>
        <img
          src="https://res.cloudinary.com/deq5iutqv/image/upload/v1747996357/ChatGPT_Image_7_mai_2025_16_13_40_cdk9t0.png"
          className="trophy trophy-left"
          alt="Trophée gauche"
        />
      </MouseParallax>

      {/* Objet 2 qui suit la souris avec un effet différent */}
      <MouseParallax enableOnTouchDevice isAbsolutelyPositioned strength={0.2}>
        <img
          src="https://res.cloudinary.com/deq5iutqv/image/upload/v1747996357/ChatGPT_Image_7_mai_2025_16_13_40_cdk9t0.png"
          className="trophy trophy-right"
          alt="Trophée droite"
        />
      </MouseParallax>
    </section>
  );
}
