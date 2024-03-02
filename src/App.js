import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
