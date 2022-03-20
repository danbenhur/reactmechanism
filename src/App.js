import React, { useState, useCallback } from "react";
import Button from "../src/components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showPar, setShowPar] = useState(false);
  console.log("App Running");

  const toggleParHandler = useCallback(() => {
    setShowPar((prevShowPar) => !prevShowPar);
  }, []);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParHandler}> Press here!</Button>
    </div>
  );
}

export default App;
