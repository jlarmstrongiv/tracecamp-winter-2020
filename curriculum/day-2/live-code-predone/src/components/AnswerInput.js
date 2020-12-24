import { useState } from "react";

// submission component for use in a game
const AnswerInput = ({ onGuess }) => {
  // state storing the current text in the input
  const [response, setResponse] = useState("");

  // gets called when the response is to be submitted
  const guess = () => {
    // dont guess the response when its empty
    if (response.trim() === "") return;

    // make the guess
    // calling out of the component
    onGuess(response);

    // clear the text field
    setResponse("");
  };

  // handle the changing text in the field
  const handle_response = (event) => {
    // the onChange event has an attribute called target
    // which holds which element is being changed
    // it is this element that we want to save the new value from
    const value = event.target.value;
    setResponse(value);
  };

  // handle when a key is pressed when within the text box
  const handle_keypress = (event) => {
    // if the key is the enter key
    if (event.key === "Enter") {
      // make the guess
      guess();
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Answer"
        value={response}
        onChange={handle_response}
        onKeyDown={handle_keypress}
        className="w-52 p-2 border-2 border-gray-300 rounded mr-2"
      />
      <button
        onClick={guess}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default AnswerInput;
