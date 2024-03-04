import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Tech from "./Components/Tech";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <div>
        <Home />
      </div>

      <div>
        <Tech />
      </div>

      <div>
        <Projects />
      </div>
    </div>
  );
}

export default App;
