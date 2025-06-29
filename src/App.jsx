import React from "react";
import "./globals.css";
import ControlledInputs from "./inputs/ControlledInputs";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <ControlledInputs />
      <Toaster />
    </>
  );
};

export default App;
