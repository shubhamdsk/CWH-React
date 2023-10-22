import "./App.css";
import TextForm from "./TextForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About Us"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading = "Enter the Text to Analyze" />
      </div>

    </>
  );
}

export default App;
