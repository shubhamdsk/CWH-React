import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [isUpperCaseButton, setIsUpperCaseButton] = useState(true);

  const handleUpClick = (event) => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLcClick = (event) => {
    const lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearClick = (event) => {
    const clearedText = "";
    setText(clearedText);
    props.showAlert("Text has been cleared", "success");
  };

  const getTextLength = () => {
    let textValue = text.trim().replace(/\s+/g, " ");
    return textValue.length && textValue.split(" ").length;
  };

  const handleCopy = () => {
    let textArea = document.getElementById("myBox");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleOnChange = (event) => setText(event.target.value);

  const handleMainButton = () => {
    let textValue = text;

    isUpperCaseButton
      ? (textValue = text.toUpperCase())
      : (textValue = text.toLowerCase());

    setText(textValue);
    setIsUpperCaseButton(!isUpperCaseButton);

    const alertMessage = isUpperCaseButton
      ? "Converted to Uppercase"
      : "Converted to Lowercase";
    const alertType = "success";
    props.showAlert(alertMessage, alertType);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            onChange={handleOnChange}
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            value={text}
            placeholder="Leave a message here"
            id="myBox"
            rows={8}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleLcClick}>
          Convert to Lowercase
        </button>

        <button
          className={isUpperCaseButton ? "btn btn-danger" : "btn btn-info"}
          onClick={handleMainButton}
        >
          {isUpperCaseButton ? "Convert to Uppercase" : "Convert to Lowercase"}
        </button>

        <button className="btn btn-success mx-2" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-dark mx-2" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {getTextLength()} words and {text.length} characters
        </p>
        <p>{0.008 * getTextLength()} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here."}</p>
      </div>
    </>
  );
};

export default TextForm;
