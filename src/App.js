import { type } from "@testing-library/user-event/dist/type";
import "./App.css";
import TextForm from "./TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      showAlert(null);
    }, 2000);
  };
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About Us"/> */}
      {/* <Navbar/> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <About /> */}
      <TextForm
        showAlert={showAlert}
        heading="Enter the Text to Analyze"
        mode={mode}
      />
    </>
  );
}

export default App;
