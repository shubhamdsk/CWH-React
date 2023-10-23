import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [isUpperCaseButton, setIsUpperCaseButton] = useState(true);

  const handleUpClick = (event) => {
    // const upperCaseText = text.toLocaleUpperCase();
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    // console.log("Clicked" + text);
  };

  const handleLcClick = (event) => {
    const LowerCaseText = text.toLocaleLowerCase();
    // let LowerCaseText = text.toLowerCase();
    setText(LowerCaseText);
    // console.log("Clicked" + text);
  };
  const getTextLength = () => {
    let textValue = text.trim().replace(/\s+/g, " ");

    return textValue.length && textValue.split(" ").length;
  };
  // const handleOnChange = (event) => {
  //     setText(event.target.value);
  //     // console.log("On Changed");
  // };

  // Inn another way
  const handleOnChange = (event) => setText(event.target.value);

  const handleMainButton = () => {
    let textValue = text;

    isUpperCaseButton
      ? (textValue = text.toUpperCase())
      : (textValue = text.toLowerCase());

    setText(textValue);
    setIsUpperCaseButton(!isUpperCaseButton);
    // setIsUpperCaseButton(isUpperCaseButton ? false : true);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            // OnChange - To type text in textarea
            onChange={handleOnChange}
            className="form-control"
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
        {/* Both Functionality at one place  */}
        <button
          className={isUpperCaseButton ? "btn btn-primary" : "btn btn-danger"}
          onClick={handleMainButton}
        >
          {isUpperCaseButton ? "Convert to Uppercase" : "Convert to Lowercase"}
        </button>
      </div>
      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>
          {getTextLength()} words and {text.length} characters
        </p>
        <p>{0.008 * getTextLength()} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
