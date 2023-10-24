import "./App.css";
import TextForm from "./TextForm";
// import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About Us"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" />
      {/* <About /> */}
      <TextForm heading = "Enter the Text to Analyze" />
    </>
  );
}

export default App;
