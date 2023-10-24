import "./App.css";
import TextForm from "./TextForm";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About Us"/> */}
      {/* <Navbar/> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <About /> */}
      <TextForm heading="Enter the Text to Analyze" mode={mode}   />
    </>
  );
}

export default App;
