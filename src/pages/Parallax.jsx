import React from "react";
import Scene1 from "../components/Scene1";
import Scene2 from "../components/Scene2";
import "../Parallax.css";

function Parallax() {
  return (
    <div className="parallax-container">
      <div className="scene">
        <Scene1 />
      </div>
      <div className="scene">
        <Scene2 />
      </div>
    </div>
  );
}

export default Parallax;
