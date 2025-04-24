import React from "react";
import PopularSprookjes from "../components/PopularSprookjes";
import AboutSection from "../components/AboutSection";

function Home() {
  return (
    <div className="home-container">
      <PopularSprookjes />
      <AboutSection />
      {/* <StudentList /> */}
    </div>
  );
}

export default Home;
