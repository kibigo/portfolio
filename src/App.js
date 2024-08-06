import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Tech from "./Components/Tech";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <div id="home">
        <Home />
      </div>

      <div id="tech">
        <Tech />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
