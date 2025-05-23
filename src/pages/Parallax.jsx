import React from "react";
import Scene1 from "../components/Scene1";
import Scene2 from "../components/Scene2";
import Scene3 from "../components/Scene3";
import Scene4 from "../components/Scene4";
import "../Parallax.css";

function Parallax() {
  return (
    <div className="parallax-container">
      <div className="scene">
        <Scene1 />
      </div>
      <div className="scene2">
        <Scene2 />
      </div>
      <div className="scene">
        <Scene3 />
      </div>
      <div className="scene">
        <Scene4 />
      </div>
    </div>
  );
}

export default Parallax;
