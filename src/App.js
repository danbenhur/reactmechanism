import React, { useState, useCallback } from "react";
import Button from "../src/components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showPar, setShowPar] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("App Running");

  const toggleParHandler = useCallback(() => {
    if (allowToggle) {
      setShowPar((prevShowPar) => !prevShowPar);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPar} />
      <Button onClick={allowToggleHandler}> Allow Toggling</Button>
      <Button onClick={toggleParHandler}> Press here!</Button>
    </div>
  );
}

export default App;
