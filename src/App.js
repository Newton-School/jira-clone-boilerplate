import "./App.css";
import React from "react";
import Navbar from "./navbar/navbar";
import BaseComponent from "./BaseComponent/baseComponent";

function App() {
  return (
      <div className="App">
        <Navbar />

        {/* Complete the base component */}
        <BaseComponent />
      </div>
  );
}

export default App;
