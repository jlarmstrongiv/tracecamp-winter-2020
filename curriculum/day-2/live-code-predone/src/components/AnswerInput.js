import React, { useState } from "react";

const AnswerInput = ({ onGuess }) => {
  const [response, setResponse] = useState("");

  // guesses the response currently entered into the field
  const guess = () => {
    // if the response is empty dont guess
    if (response.trim() === "") return;

    // otherwise guess
    onGuess(response);

    // then clear the input
    // to allow for the response to the next question
    setResponse("");
  };

  // handle changing the value entered
  const handle_response = (event) => {
    // get the new value from the event
    const value = event.target.value;

    // only allow numbers and the negative sign
    // (remove everything that is not `0-9` and `-`)
    //const filtered_value = value.replace(/[^0-9-]/g, "");

    // set the new response value
    setResponse(value);
  };

  // allow the use of the enter key to submit a response
  const handle_keypress = (event) => {
    // make sure the key pressed was the enter key
    if (event.key !== "Enter") return;

    // guesses the response
    guess();
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Answer"
        value={response}
        onChange={handle_response}
        onKeyDown={handle_keypress}
        className="w-52 text-xl p-4 border-2 border-gray-300 rounded-lg mr-2"
      />
      <button
        onClick={guess}
        className="bg-blue-500 text-xl text-white rounded-lg p-4 hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
};

export default AnswerInput;
