import { useState } from "react";
import "./App.css";
import { Attributes } from "./components/Attributes.jsx";
import { Expressions } from "./components/Expressions.jsx";
import { Conditions } from "./components/Conditions.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <Expressions />
        <Attributes />
        <Conditions />
      </div>
    </div>
  );
}

export default App;
