import React, { useState } from "react";
import Button from "../src/components/UI/Button/Button";

import "./App.css";

function App() {
  const [showPar, setShowPar] = useState(false);
  console.log("App Running");

  const toggleParHandler = () => {
    setShowPar((prevShowPar) => !prevShowPar);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showPar && <p>This is New!</p>}
      <Button onClick={toggleParHandler}> Press here!</Button>
    </div>
  );
}

export default App;
